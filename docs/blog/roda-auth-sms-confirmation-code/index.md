---
created_at: "2020-06-11T19:59:55.066Z"
description: Inspirations from Rodauth
state: draft
tags:
  - Sequel
  - PG Json
---

# Reading Rodaauth's Sms Confirmation Code

I recently had to implement sending SMS confirmation codes at work. Essentially, sending a text similar to: `Your authentication code is 117940`. While figuring out how to implement the verification code I came across [Rodaauth](http://rodauth.jeremyevans.net/). I couldn't of course integrate with Rodauth but I learned a lot by reading the code. Here are some highlights:

## Secure Compare

This is something I would have never realized I needed to do until I read thorough Rodaauth's codebase. Here is the actual code:

```ruby
def timing_safe_eql?(provided, actual)
  provided = provided.to_s
  Rack::Utils.secure_compare(provided.ljust(actual.length), actual) && provided.length == actual.length
end
```

[Source](https://github.com/jeremyevans/rodauth/blob/3474508a8fe070bc2534a47df8b70bba9e325c6f/lib/rodauth/features/base.rb#L490-L493)

Here are two options one using Rack and the other with Rails.

```ruby
# Rack
Rack::Utils.secure_compare(a, b)

# Rails
ActiveSupport::SecurityUtils.secure_compare(a, b)
```

Quite simply a simple string compare is not safe from timing attacks. More details [here](https://codahale.com/a-lesson-in-timing-attacks/).

## Confirm code

The other thing I liked about Rodauth was how the actual code was generated:

```ruby
def sms_new_confirm_code
  SecureRandom.random_number(10**sms_confirm_code_length).to_s.rjust(sms_confirm_code_length, "0")
end
```

[Source](https://github.com/jeremyevans/rodauth/blob/3474508a8fe070bc2534a47df8b70bba9e325c6f/lib/rodauth/features/sms_codes.rb#L476-L478)

There are several pieces to this:

1) Using `SecureRandom` instead of `rand()`
2) Converting the number to a string right away
3) Adding `0` to the right if the generated is less than the required length. The implementation using rjust is very clean in my opinion.

## Sequel::CURRENT_TIMESTAMP

This was the first time I came across `Sequel::CURRENT_TIMESTAMP`. I

```ruby
def sms_set_code(code)
 update_sms(sms_code_column=>code, sms_issued_at_column=>Sequel::CURRENT_TIMESTAMP)
end
```

[Source](https://github.com/jeremyevans/rodauth/blob/3474508a8fe070bc2534a47df8b70bba9e325c6f/lib/rodauth/features/sms_codes.rb#L387-L389)

I am still new to Sequel so this is a nifty trick I didn't know about. Sequel also exposes `:NOW.sql_function` which uses the underlying `NOW()` method that the database provides.

Beyond that, I just learned a lot from Jermy Evan's style of writing Ruby. In conclusion, reading open-source is extremely beneficial.
