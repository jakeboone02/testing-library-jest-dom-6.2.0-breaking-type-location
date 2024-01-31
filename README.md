# @testing-library/jest-dom breaking type location to extend expect in 6.2.0

Folder broken contains `@testing-library/jest-dom` version 6.2.0 or higher while working runs on <6.2.0.

```
corepack enable
```

```
yarn install
```

Look at the `index.ts` file, the matcher doesn't exist and I can't find it accessible anywhere. Switch to version `~6.1.0`. Importing `TestingLibraryMatchers` works correctly and extending expect correctly.

I think the solution is to just export:

export { TestingLibraryMatchers };

in `matchers-standalone-d.ts`.
