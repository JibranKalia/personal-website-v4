---
created_at: "2020-04-26T18:10:14.000Z"
description: Official name for localhost
state: published
tags:
  - IP address
---

# Loopback Address

A loopback address is a reserved IP address that sends outgoing signals back to the same computer for testing.

## IPv4

127.0.0.1 though it is often represented as `localhost`.

## IPv6

0000:0000:0000:0000:0000:0000:0000:0001 and its permutations.

### Regex

A good regex to filter those loopback addresses out:

```regex
  ^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$
```

[Source](https://stackoverflow.com/questions/8426171/what-regex-will-match-all-loopback-addresses)
