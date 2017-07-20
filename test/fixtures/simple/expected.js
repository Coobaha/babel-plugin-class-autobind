class Component {
  constructor() {
    this.handleMe = this.handleMe.bind(this);
    this.onMe = this.onMe.bind(this);
  }
  //comment
  handleMe() {}
  /*comment*/
  onMe() {}
  noBind() {}
}
class Nobind {
  handleMe() {}
}
class Bindable extends Component {
  constructor() {
    super(...arguments);
    this.handleMe = this.handleMe.bind(this);
  }

  handleMe() {}
  onIgnored() {}
  onIgnoredToo() {}
}

