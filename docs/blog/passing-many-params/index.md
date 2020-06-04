---
created_at: "2018-09-09T05:00:00.000Z"
description: Improving old code
state: draft
tags:
  - ruby
---

# Passing many params

I recently came across some old code that I had written that honestly made me shudder.

This is the actual code down to the formatting with only the variable names changed.

```ruby
module TopModule
  class NestedClass
    attr_reader :param_a, :param_b, :param_c, :param_d, \
    :param_e, :param_f, :param_g, :param_h, :param_i

    def initialize(param_a, param_b, param_c,
      param_d, param_e, param_f,
      param_g, param_h, param_i)
      @param_a = param_a
      @param_b = param_b
      @param_c = param_c
      @param_d = param_d
      @param_e = param_e
      @param_f = param_f
      @param_g = param_g
      @param_h = param_h
      @param_i = param_i
    end
  end
end
```

Here is how I would write this code now:

```ruby
module TopModule
  class NestedClass
    ALLOWED_KEYS = %i[
      param_a
      param_b
      param_c
      param_d
      param_f
      param_g
      param_h
      param_i
    ]

    attr_reader(*ALLOWED_KEYS)

    def initialize(**params)
      params.slice(*ALLOWED_KEYS).each do |k, v|
        instance_variable_set("@#{k}", v)
      end
    end
  end
end
```

With just a little bit of metaprogramming the code is clearer with significanlty less duplication. I agree that Ruby metaprogramming can be a double edged sword but in this I believe it is justifed.

## attr_reader

`attr_reader` can take mulitiple arugments. Using the splat_operator `*` I easily deconstructed the `ALLOWED_KEYS` array and passed each param as a separate arugment to the attr_reader function.

## intialize

This initalize is slightly different then the original. The original expected seperated arugments:
`TopModule::NestedClass.new(value_1, value_2 ...)`

The main disadvantage of this style is that order matters. When the arguments are few this is not a problem however,


The first loop