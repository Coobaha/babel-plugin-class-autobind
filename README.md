# babel-plugin-class-autobind

This plugin will autobind handlers all components listed in directive 'cb-class-autobind'
## Example

**In**

```js
'cb-class-autobind Component';

class Component {
  constructor() {
  }
  handleMe(){}
  onMe(){}
  noBind(){}
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
}
```

## Installation

```sh
$ npm install babel-plugin-class-autobind
```
## Options

if no components are listed in directive - all handlers in file classes will be bound to class instance. (equal to `cb-class-autobind *`)


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
