---
title: PyTorch Inference in Go with CUDA Support
description: PyTorch Model inference with Golang
date: '2025-02-08'
editDate: ''
categories: [golang, cuda, pytorch]
published: true
background: 'blog3.avif'
---

<script>
  import LazyImg from '$lib/components/ui/LazyImg.svelte';
</script>

<!-- <LazyImg class="rounded-lg" path={background} alt="" /> -->

A couple of months ago, I was working on my graduation project, [PhoenixFL](https://github.com/mochaeng/PhoenixFL). I was building an asynchronous solution with RabbitMQ to process and classify a bunch of network packets using neural networks. Initially, the consumers were written in Python, but I soon hit a performance ceiling. I decided to move the code to Golang, only to discover that there were no official PyTorch bindings for Go.

After some research, I found an [excellent article](https://omkar.xyz/golibtorch/) by Omkar Prabhu that showed how to create C++ bindings for inference using LibTorch and access them from Golang via cgo. Although the solution was great, I couldn't get CUDA to work with it. However, a [post on StackOverflow](https://stackoverflow.com/questions/32589153/how-to-compile-cuda-source-with-go-languages-cgo#answer-33985201) talked about how to compile CUDA source code with Go. The solution involved building a share object, configuring the CUDA compiler, and liking the `-lcudart` flags in cgo.

## Requirements

- **Linux**
- **Cmake** (3.22.1)
- **Libtorch** (version 2.5.1 with minimum CUDA 12.4 support and cxx11 ABI enabled). Dowloand from:
    ```sh
    wget https://download.pytorch.org/libtorch/cu124/libtorch-cxx11-abi-shared-with-deps-2.5.1%2Bcu124.zip
    ```
- **Cuda Toolkit** (12.6) and **CUDA drivers**. Installation guide: [link](https://developer.nvidia.com/cuda-toolkit)

## CMake and C++ Files

First, we need to create a CMake file. I'll use the one provided on PyTorch's website. In the root directory, create a `CMakeLists.txt` file:

```sh
# CMakeLists.txt

cmake_minimum_required(VERSION 3.18 FATAL_ERROR)
project(federated-classifier)

find_package(Torch REQUIRED)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${TORCH_CXX_FLAGS}")
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

add_executable(federated-classifier main.cpp classifier.cpp)
target_link_libraries(federated-classifier "${TORCH_LIBRARIES}")
set_property(TARGET federated-classifier PROPERTY CXX_STANDARD 17)
```

Next, we need C++ code to use LibTorch for inference. In my case, it's a simple binary classification. First, create a `classifier.hpp` file:

```cpp
// classifier.hpp

#ifndef __CLASSIFIER_H__
#define __CLASSIFIER_H__

#ifdef __cplusplus

extern "C" {
#endif

typedef void *mModel;

mModel NewModel(const char *modelFile);
int PredictIsPositiveBinary(mModel model, float *inputData, int numFeatures);
void DeleteModel(mModel model);

#ifdef __cplusplus
}
#endif

#endif
```

Next, create a `classifier.cpp` file containing a Model class that loads the PyTorch model and includes a function for binary classification:

```cpp
// classifier.cpp

#include "classifier.h"
#include <torch/script.h>
#include <torch/torch.h>

class Model {
  torch::jit::script::Module model;
  torch::Device device = torch::kCUDA;

public:
  Model(const std::string &modelFile);
  bool PredicIsPositiveBinary(float *inputData, int numFeatures);
};

Model::Model(const std::string &modelFile) {
  try {
    model = torch::jit::load(modelFile, this->device);
  } catch (const c10::Error &e) {
    std::cerr << "error loading the model. Erorr: " << e.what() << std::endl;
    throw std::invalid_argument("Invalid model file.");
  }
}

bool Model::PredicIsPositiveBinary(float *inputData, int numFeatures) {
  torch::Tensor input =
      torch::from_blob(inputData, {1, numFeatures}, torch::kFloat32)
          .to(this->device);

  this->model.eval();
  torch::Tensor output = this->model.forward({input}).toTensor();
  output = torch::sigmoid(output);

  return output.item<float>() >= 0.5;
}

mModel NewModel(const char *modelFile) {
  try {
    const auto model = new Model(modelFile);
    return (void *)model;
  } catch (const std::invalid_argument &ex) {
    return nullptr;
  }
}

int PredictIsPositiveBinary(mModel model, float *inputData, int numFeatures) {
  auto initializedModel = (Model *)model;
  if (initializedModel == nullptr) {
    return -1;
  }
  return initializedModel->PredicIsPositiveBinary(inputData, numFeatures) ? 1
                                                                          : 0;
}

void DeleteModel(mModel model) {
  auto initializedModel = (Model *)model;
  if (initializedModel == nullptr) {
    return;
  }
  delete initializedModel;
}
```

## Golang file

The Go code interacts with the shared object (`libclassifier.so`) using `cgo`, allowing Go to call C/C++ functions directly. In `classifier.go`, the `-L./build` flag specifies the directory of `libclassifier.so`, and `-lclassifier` links it.

```go
// classifier.go

package torchbidings

// #cgo LDFLAGS: -L./build -lclassifier -ltorch -ltorch_cpu -ltorch_cuda -lcudart -lc10
// #cgo CXXFLAGS: -std=c++17
// #cgo CFLAGS: -D_GLIBCXX_USE_CXX11_ABI=1
// #include <stdio.h>
// #include <stdlib.h>
// #include "classifier.h"
import "C"
import (
	"errors"
	"unsafe"
)

type Classifier struct {
	model C.mModel
}

func NewModel(modelFile string) (*Classifier, error) {
	cModelFile := C.CString(modelFile)
	defer C.free(unsafe.Pointer(cModelFile))

	model := C.NewModel(cModelFile)
	if model == nil {
		return nil, errors.New("failed to load pytorch model")
	}
	return &Classifier{model: model}, nil
}

func (m *Classifier) PredictIsPositiveBinary(inputData []float32) (bool, error) {
	if m.model == nil {
		return false, errors.New("model not initialized")
	}
	numFeatures := C.int(len(inputData))
	result := C.PredictIsPositiveBinary(m.model, (*C.float)(unsafe.Pointer(&inputData[0])), numFeatures)
	if result == -1 {
		return false, errors.New("prediction failed")
	}
	return result == 1, nil
}

func (m *Classifier) Delete() {
	if m.model != nil {
		C.DeleteModel(m.model)
		m.model = nil
	}
}
```

## Build instructions

1. On the root directory **create a `build` folder** and navigate to it:

    ```sh
    mkdir build && cd build/
    ```

2. **Generate the build system files using CMake**:

    You need to specify the paths to CUDA and LibTorch. Ensure CUDACXX points to the correct CUDA compiler (nvcc) - In my case both located inside `/usr/local`.

    ```sh
    CUDACXX=/usr/local/cuda-12.4/bin/nvcc cmake -DCMAKE_PREFIX_PATH=/usr/lib/libtorch ..
    ```

3. **Build the shared object** (`libclassifier.so`):

    ```sh
    cmake --build . --config Release
    ```

    This command will generate libclassifier.so in the build directory. This shared object contains the necessary C++ logic for loading the PyTorch model, applying MinMax scaling, and performing predictions.

## Running the code

To use the code, create the classifier structure and provide the desired _TorchScript_ model. However, to run the go code, the following environment variables must be set:

```sh
export LIBRARY_PATH="/usr/local/libtorch/lib:/usr/local/cuda-12.4/lib64:${LIBRARY_PATH}" && \
export LD_LIBRARY_PATH="./build:/usr/local/libtorch/lib:/usr/local/cuda-12.4/lib64:${LD_LIBRARY_PATH}" && \
export C_INCLUDE_PATH="/usr/local/libtorch/include:/usr/local/libtorch/include/torch/csrc/api/include:${C_INCLUDE_PATH}" && \
export CPLUS_INCLUDE_PATH="/usr/local/libtorch/include:/usr/local/libtorch/include/torch/csrc/api/include:${CPLUS_INCLUDE_PATH}" && \
export CUDACXX=/usr/local/cuda-12.4/bin/nvcc && \
export LD_PRELOAD="/usr/local/cuda-12.4/lib64/libcudart.so /usr/local/libtorch/lib/libtorch_cuda.so" && \
go run cmd/*.go; \  # some go code you have
```

## Use case

If you want to see my full code in action, you can find it [here](https://github.com/mochaeng/PhoenixFL/tree/main/prototype_2/simulation/internal/torchbidings).
