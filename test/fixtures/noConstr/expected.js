class Component {
  constructor() {
    this.handleMe = this.handleMe.bind(this);
    this.onMe = this.onMe.bind(this);
  }

  handleMe() {}
  onMe() {}
  noBind() {}
}
