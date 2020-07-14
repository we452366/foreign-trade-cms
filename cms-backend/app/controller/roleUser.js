const BaseController = require('./base');

class RoleUserController extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = 'roleUser';
  }
  
}

module.exports = RoleUserController;