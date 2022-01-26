A simple way to format strings using ANSI.
# TYPESCRIPT AND ESM SUPPORT ARE HERE!
It is required to install 1.4.1 for the maximum bug-free experience, especially if you're using ESM.
# Examples
## Init
### CJS
```js
const Format = require("simple-ansi-string-format");
let s = new Format("Let's format this thing!");
console.log(`Woah, a format thing: "${s}"!`); // this object without any methods is a plain string-able object
```
### ESM
```js
import Format from "simple-ansi-string-format";
...
```
## Note
From now on, we assume the following code was used:
```js
const Format = require("simple-ansi-string-format");
let s = new Format("Let's format this thing!");
```
## Colors
```js
console.log(`let's a-format this! ${s.Red}`); // red text
```
## Background Colors
```js
console.log(`let's a-format this! ${s.bgRed}`); // text with red background
```
## Formats
```js
console.log(`let's a-format this! ${s.Bold}`); // bold text
```
## Multiple
```js
console.log(`let's a-format this! ${s.Red.Bold}`); // red and bold text
```
## Nesting
```js
let outer = new Format(`red inside: ${s.Red}`);
console.log(`bold inside: ${outer.Bold}`); // red and bold text inside bold text inside normal text
```
## Static Values
```js
console.log(`${Format.red}red text${Format.reset}plain text`);// self-explanatory
```
# Features
## `new Format`
This is the base class.
### Properties
* Colors
  * `prototype.Red`
  * `prototype.Yellow`
  * `prototype.Green`
  * `prototype.Cyan`
  * `prototype.Blue`
  * `prototype.Magenta`
  * `prototype.White`
  * `prototype.Black`
* Background Colors
  * `prototype.bgRed`
  * `prototype.bgYellow`
  * `prototype.bgGreen`
  * `prototype.bgCyan`
  * `prototype.bgBlue`
  * `prototype.bgMagenta`
  * `prototype.bgWhite`
  * `prototype.bgBlack`
* Style
  * `prototype.Bold`
  * `prototype.Italic`
  * `prototype.Underline`
  * `prototype.Strikethrough`
* Other
  * `prototype.Blink`
  * `prototype.Inverse`
  * `prototype.Hidden`
  * `prototype.Reset`

Static ANSI variables are also available, which are identical to the prototype properties, except that it's all lowercase.
# Updates
## 1.4.1
Made `prototype.value` public, since private class variables are buggy.
## 1.4.0
Updated typedefs.