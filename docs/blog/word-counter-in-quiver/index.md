---
created_at: "2020-04-06T12:05:00.000Z"
description: "Beacuse word count is important"
state: "done"
tags:
  - Quiver
---

# Word Count in Quiver

From my [previous post](../note-taking-in-quiver) you might have noticed that I am a fan of [Quiver](https://happenapps.com). That being said there are some weird edge cases with the tool. One big one is that there is currently no way to get the word count. There is an open [feature request](https://github.com/HappenApps/Quiver/issues/396) to that effect.

Word count is an important vanity stat and so I found a quick workaround. I mostly write in markdown so this method works well for me.

Copy the note as plain text:

![copy as plain note](./resources/C3A353DE066E9F6B8864C8B63A7BE736.png).

That will copy the note into your clipboard. Then from the terminal run this command:

`pbpaste | wc -w`

This will take the contents of the clipboard and pipe that to the [wc](https://github.com/tldr-pages/tldr/blob/master/pages/common/wc.md) and count the words.

Again this is not a perfect solution but it gets the job done in a pinch.
