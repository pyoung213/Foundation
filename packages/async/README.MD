# Foundation Async [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)

Foundation Async is modern async utility library written in Typescript delivering modularity, performance, and extras.

## Installation

Using yarn:
```shell
$ yarn add foundation-async
```

Using npm:
```shell
$ npm i foundation-async
```

Example
```js
import { asyncMap } from "foundation-async";

const array = [1, 2];
const asyncFunc = (n) => {
    return new Promise((resolve) => {
        resolve(String(n));
    });
}
const result = await asyncMap(array, asyncFunc);
// result = ["1", "2"];
```