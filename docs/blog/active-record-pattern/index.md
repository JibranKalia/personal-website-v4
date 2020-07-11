---
created_at: "2020-07-11T11:03:00.000Z"
description: "Mapping relational databases to objects"
state: "done"
tags:
  - Active Record
  - Martin Fowler
---

# Active Record Pattern

I have been using [Active Record](https://guides.rubyonrails.org/active_record_basics.html) in the context of Rails applications for a while now. However, I just recently learned that there there is something called `Active Record Pattern` that inspired this library.

It was first described by [Martin Fowler](https://www.martinfowler.com/eaaCatalog/activeRecord.html) as the following:

> An object that wraps a row in a database table or view, encapsulates the database access, and adds domain logic on that data.

There are two parts to this object: the actual data represented as a distinct field in the object for every column in the SQL table. And the logic to access or update that data from the underlying (relational) database.

Active Record objects are tightly coupled with database tables and often have business logic that allows for interacting with said tables. However, this also means that any modifications to the objects might also require changes to the database design.

An alternative is the [Data Mapper Pattern](`https://martinfowler.com/eaaCatalog/dataMapper.html`) also described by Martin Fowler.
