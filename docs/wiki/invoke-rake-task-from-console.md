# Invoke Rake Task from Console

```ruby
  Rails.application.load_tasks
  Rake::Task["namespaced:task_name"].invoke(arg_1, arg_2)
```
