---
tags:
  - Vim
---

# Vim Commands

List of Vim commands that I don't use very frequently. Hence they need to be in a wiki for quick lookup:

## Movement

### One Word

`w` 'word' to move the cursor to the right.

`b` 'back' to move the cursor to the left.

`e` 'end' to move the cursor to the last character of the current word.

### Start or End of Line

`$` to move the cursor to the end of the current line.

`^` to move the cursor to the start of the current line.

`0` always moves the cursor to the "first column". Its is more useful to use `^`

## View and Yank from register

List all registers: `:reg`
Yank from 2nd register: `"2p` to paste it after the cursor, or `"2P` to paste it before the cursor
