---
title: First Post
description: First post.
date: '2025-02-08'
categories: [golang, cuda]
published: true
---

## Torchbidings

We need to load a PyTorch model and make predictions, but since we are using Go, there's no native library to direclty run PyTorch models like in Python. To solve this, we can load the model in c++ using LibTorch (PyTorch's C++ API) and call the necessary functions from Go using _cmd/cgo_.

```go
// #cgo LDFLAGS: -L./build -lclassifier -ltorch -ltorch_cpu -ltorch_cuda -lcudart -lc10
// #cgo CXXFLAGS: -std=c++17
// #cgo CFLAGS: -D_GLIBCXX_USE_CXX11_ABI=1
// #include <stdio.h>
// #include <stdlib.h>
// #include "classifier.h"
import 'C'
```
