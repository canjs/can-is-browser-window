# can-is-browser-window

[![Build Status](https://travis-ci.org/canjs/can-is-browser-window.png?branch=master)](https://travis-ci.org/canjs/can-is-browser-window)

Returns `true` if the code is running within a Browser window. Use this function if you need special code paths for when running in a Browser window, a Web Worker, or another environment (such as Node.js).

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'can-is-browser-window';
```

### CommonJS use

Use `require` to load `can-is-browser-window` and everything else
needed to create a template that uses `can-is-browser-window`:

```js
import plugin from "can-is-browser-window";
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/can-is-browser-window/dist/global/can-is-browser-window.js'></script>
```
