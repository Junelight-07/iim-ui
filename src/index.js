const Person = require('./modules/person');

class FakerLikeLibrary {
  constructor() {
    this.person = new Person();
  }
}

module.exports = new FakerLikeLibrary();
