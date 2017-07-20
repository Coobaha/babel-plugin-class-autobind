'@autobind Component,Bindable';

class Component {
  constructor() {
  }
  //comment
  handleMe(){}
  /*comment*/
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
