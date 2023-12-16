To trigger the issue, just execute `test.mjs`:

```shell
npm start
```

Then change the content of `src/index` to something that is not a valid TypeScript syntax and look at the console output being filled with two more warnings each time.