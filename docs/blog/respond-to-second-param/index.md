---
created_at: "2020-04-29T17:45:24.000Z"
description: Fun tidbit about respond_to?
state: published
tags:
  - Ruby
---

# Ruby respond_to? function

`respond_to?` takes a second pramater. If the second parameter is `true` then public and private methods are also searched. Otherwise only the public methods are searched.

Discovered this while reading the Dev.to's [codebase](https://github.com/thepracticaldev/dev.to/pull/5521/files#r367254219).

[Documentation](https://apidock.com/ruby/Object/respond_to%3F)
