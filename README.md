# typescript-library-starter

![CI](https://github.com/krisselden/typescript-library-starter/workflows/CI/badge.svg)

An example of a typescript node library leveraging native es modules with CJS backward compatibility.

## Features

### Documentation

Uses TSDoc comments and @microsoft/api-extractor

[Example API Docs](docs/index.md)

#### Caveats

Type only imports/exports not supported

### CJS backwards compatibility

Rollup provides CJS bundle for conditional exports.

Older Node versions will use "main" entry.

Newer Node versions will use "exports" which specifies import should use es modules and require should use the cjs rollup bundle.

### Mocha Tests use Native Module Support

Tests are written in JS and run against dist output but still typechecked.

Workflow start build task `tsc - watch - tsconfig.json` and run tests/

Generally tests can be strictly typechecked without any annotation and if needed types can be annotated with jsdoc.

The benefits are tests do not need compilation, consume declaration types, and build output.

Go to Definition still works via declaration map to go to the original source.

Debugging uses TS sourcemaps, tests can be updated and rerun without building src.

#### Tests Run in Node

VS Code debugging works out of the box with Node 13 while in Node 12, requires env `NODE_OPTIONS=--experimental-modules` to be set.

Test Explorer UI addon works but mocha-sidebar has issues (using synchronous test file loading).

#### Tests Run in Browser

Mocha tests can run in browser with chrome canary with ImportMaps feature enabled.

VS Code debugging via Debugger for Chrome extension.

Does not have cjs interop, so if dependency does not have an es module export the import map should map to a shim that exports the UMD global and the UMD script included before tests are loaded (this is how chai works).
