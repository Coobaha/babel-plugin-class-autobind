'@autobind Component,Bindable';

class Component {
  constructor() {
  }
  handleMe(){}
  onMe(){}
  noBind(){}
}
class Nobind {
  handleMe() {}
}
class Bindable extends Component {
  handleMe() {}
  // @autobind-ignore
  onIgnored(){}
  /* @autobind-ignore */
  onIgnoredToo(){}
}
