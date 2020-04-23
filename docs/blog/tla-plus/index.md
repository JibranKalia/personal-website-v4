---
TLA Plus
date: "2018-12-25T06:00:00.000Z"
description: Brief exploration into TLA Plus
state: published
tags:
  - Formal Specification Language
---
# TLA Plus

I just read an incredible paper written by engineers at AWS: [Use of Formal Methods at Amazon Web Services](https://lamport.azurewebsites.net/tla/formal-methods-amazon.pdf)

I find complex distributed systems fascinating. Reading about the use of mathematics to verify the correctness of distributed systems was very eye-opening.

Some highlights from the paper:

> So far we have used TLA+ on 10 large complex real-world systems. In every case, TLA+ has added significant value, either finding subtle bugs that we are sure we would not have found by other means, or giving us enough understanding and confidence to make aggressive performance optimizations without sacrificing correctness.
> This was a very subtle bug; the shortest error trace exhibiting the bug contained 35 high-level steps.
> That spec did not uncover any bugs but did uncover several important ambiguities in the documentation for the algorithm, which the spec helped to resolve

I would also recommend checking out [The TLA Home Page](http://lamport.azurewebsites.net/tla/tla.html)
