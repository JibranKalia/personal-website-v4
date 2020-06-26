---
tags:
  - Sidekiq
---

# Clear all Sidekiq Jobs

```shell
Sidekiq::Queue.all.each(&:clear)
```

To confirm that the jobs were successfully cleared:

```shell
Sidekiq::Stats.new
```

[Source](https://stackoverflow.com/questions/24886371/how-to-clear-all-the-jobs-from-sidekiq/56488682#56488682)
