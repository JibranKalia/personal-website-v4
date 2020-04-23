# Invoke Rake Task from Console

```ruby
  Rails.application.load_tasks
  Rake::Task["NAMESPACED:TASK_NAME"].invoke(arg_1, arg_2)
```
