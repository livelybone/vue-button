# @livelybone/vue-button
[![NPM Version](http://img.shields.io/npm/v/@livelybone/vue-button.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/vue-button)
[![Download Month](http://img.shields.io/npm/dm/@livelybone/vue-button.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/vue-button)
![gzip with dependencies: 0.7kb](https://img.shields.io/badge/gzip--with--dependencies-0.7kb-brightgreen.svg "gzip with dependencies: 0.7kb")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

A vue button component with anti-shake feature implemented by Promise, custom lock styles or text
You maybe need a promise polyfill if you want to use it in `IE` browser

## repository
https://github.com/livelybone/vue-button.git

## Demo
http://livelybone.github.io/vue/vue-button/

## Installation
```bash
npm i -S @livelybone/vue-button
```

## Global name
`VueBtn`

## Usage
```js
// import all
import VueBtn from '@livelybone/vue-button';

// Global register
Vue.component('VueBtn', VueBtn);

// Local register
new Vue({
  components:{VueBtn}
})
```

when you want to set this module as external while you are developing another module, you should import it like this:
```js
import VueBtn  from '@livelybone/vue-button'
```

## Props
| Name                      | Type                                      | DefaultValue                                  | Description  |
| ------------------------- | ----------------------------------------- | --------------------------------------------- | ------------ |
| `clickFn`                 | `Function`(required)                      | none                                          | The handler of click returns a Promise |
| `errorFn`                 | `Function`                                | none                                          | The handler of Promise reject |
| `canUseAgain`             | `Boolean`                                 | `true`                                        | Set whether the button can be used again or not |

## Slots

### `default`

### `lock`
For custom lock content