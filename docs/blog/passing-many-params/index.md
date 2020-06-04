---
created_at: "2020-06-04T20:25:45.175Z"
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

The main disadvantage of this style is that order matters. When the arguments are few this is not a problem. However, when there is a greater number of arugments it is very easy to misorder the values.

In the newer version the values can be passed as a hash or via keyword arguments:
`TopModule::NestedClass.new(param_a: value_1, param_b: value_2 ...)`.

The double splat `**` operator is used to destructure a hash. Using [Hash#slice](https://ruby-doc.org/core-2.5.0/Hash.html#method-i-slice) method I ensure that only the correct keys are used.

## Metaprogramming

The last bit is to actually set the passed in values as instance variables. This is achieved using [instance_variable_set](https://ruby-doc.org/core-2.7.1/Object.html#method-i-instance_variable_set) method. This allows us to use variable as the instance varaible name. For example if I want to set `@param_a` I could:

`@param_a = value_1`

or I can:

`instance_variable_set(@:param_a, value_1)`

The benefit of the later is that a variable can be used for example:

```ruby
instance_variable_name = 'testing'

instance_variable_set("@#{instance_variable_name.to_sym}", value_1)
```

Hope you found this useful. Thanks.
