tinythrough
================

A small wrapper around Node stream.Transform implementing v0.10 API

```js
somethingReaddeble
    .pipe(tinythrough(function (chunk, enc, callback) {
        // Do something with the chunk
        callback(chunk)
    })).pipe(somethingWritable);
```

Inspired by [Rod Vagg](https://github.com/rvagg)'s [through2](https://github.com/rvagg/through2)