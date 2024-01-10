---
title: '`CLERK_JS_URL` constant removed'
matcher: "CLERK_JS_URL[\\s\\S]*?from\\s+['\"]@clerk\\/nextjs[\\s\\S]*?['\"]"
matcherFlags: 'm'
---

This deprecated constant has been removed as an export from `@clerk/nextjs`. We recommend setting the `NEXT_PUBLIC_CLERK_JS` environment variable and using this instead.