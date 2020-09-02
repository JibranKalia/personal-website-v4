---
tags:
  - Ruby
---

# Show Source


I had a gem that was defining a `:failure?` method. I wanted to read the source code of that method without having to search through the entire codebase. Here is what I did:

```ruby
show-source res.failure?
```

The result showed me the exact line of code, the class name of the owner as well as the full method:

```ruby
From: /.../result.rb @ line 20:
Owner: Action::Result
Visibility: public
Number of lines: 3

def failure?
  !@success
end
```

Very useful!
