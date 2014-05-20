[Initial can.compute.watch demo](http://jandjorgensen.github.io/dirtychecking/)

Seems like most implementations are not built with supporting legacy browsers in mind.

# Object.observe implementations

## Object.observe "polyfill"

Demoed for recent browsers. IE8 support had its issues. Not specified, but I suspect it also requires ES5. Failures come from things like `Object.isFrozen`.

## watchtower.js

Implementation for ES6, no real support for previous browsers.

## Polymer Observe-JS

Requires ES5 (see notes about shims below).

# Shims

## ES5 Shim

Doesn't do much for IE8 support--many features are "shams" so they fail gracefully but don't help much.
