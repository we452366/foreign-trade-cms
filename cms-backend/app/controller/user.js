const BaseController = require('./base');

class UserController extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = 'user';
  }
  
}

module.exports = UserController;