# babel-plugin-class-autobind

**Please note that this will add implicit magic to your code**

This plugin will autobind all handlers for components listed in directive '@autobind'
prefixes = `on, _on, handle, _handle`;
## Example

**In**

```js
'@autobind Component';

class Component {
  constructor() {
  }
  handleMe(){}
  onMe(){}
  noBind(){}
  // @autobind-ignore
  onIgnored(){}
}
```

**Out**

```js
class Component {
  constructor() {
    this.handleMe = this.handleMe.bind(this);
    this.onMe = this.onMe.bind(this);
  }
  handleMe() {}
  onMe() {}
  noBind() {}
  onIgnored() {}
}
```

## Installation

```sh
$ npm install babel-plugin-class-autobind
```
## Options

if no components are listed in directive - all handlers in file classes will be bound to class instance. (equal to `@autobind *`)


## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["class-autobind"]
}
```

### Via CLI

```sh
$ babel --plugins class-autobind script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["class-autobind"]
});
```
