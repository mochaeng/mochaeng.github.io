---
title: First Post
description: First post.
date: '2025-02-08'
categories: [svelte, svelteki]
published: true
---

<script>
  import LazyImg from '../lib/components/ui/LazyImg.svelte'
</script>

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

<LazyImg src="/favicon.png" alt="Svelte" />

<!-- Of course, this meant the external link icon couldn’t be disabled in blog posts but that was a trade-off we were okay with.

## Second one

Of course, this meant the external link icon couldn’t be disabled in blog posts but that was a trade-off we were okay with.

1. Rise in technical complexity.
2. Icon ambiguity.

Of course, this meant the external link icon couldn’t be disabled in blog posts but that was a trade-off we were okay with.

The new approach is much better right…? Well, actually, we didn’t think so. The implementation is a lot more complicated and convoluted than we ever imagined a “simple” component to be.

External links were now identified based on the value of href, resulting in an extra externalIcon prop to override this behaviour. For example, the “Powered By Vercel” badge in the footer is an external link but should not display the icon.

At this point, we were suitably fed up of the extra complexity we were bringing into this codebase, but the real breaking point was yet to come…

## Test

another one -->
