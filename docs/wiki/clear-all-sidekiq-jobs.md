---
tags:
  - Sidekiq
---

# Clear all Sidekiq Jobs

```shell
Sidekiq::Queue.all.each(&:clear)
```

[Source](https://stackoverflow.com/questions/24886371/how-to-clear-all-the-jobs-from-sidekiq/56488682#56488682)
