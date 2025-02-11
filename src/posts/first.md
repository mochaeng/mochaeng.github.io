---
title: First Post
description: First post.
date: '2025-02-08'
categories: [svelte, svelteki]
published: true
---

## First Post

For the initial release of the website, we created a component to be used throughout the codebase. This worked as expected, giving us control of the styling based on the props passed in or omitted.

```ts
function greet() {
	console.log('wtf');
}
```

Of course, this meant the external link icon couldn’t be disabled in blog posts but that was a trade-off we were okay with.

## Second one

Of course, this meant the external link icon couldn’t be disabled in blog posts but that was a trade-off we were okay with.

1. Rise in technical complexity.
2. Icon ambiguity.

Of course, this meant the external link icon couldn’t be disabled in blog posts but that was a trade-off we were okay with.

The new approach is much better right…? Well, actually, we didn’t think so. The implementation is a lot more complicated and convoluted than we ever imagined a “simple” component to be.

External links were now identified based on the value of href, resulting in an extra externalIcon prop to override this behaviour. For example, the “Powered By Vercel” badge in the footer is an external link but should not display the icon.

At this point, we were suitably fed up of the extra complexity we were bringing into this codebase, but the real breaking point was yet to come…

## Test

another one
