const BaseController = require('./base');

class RoleResourceController extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = 'roleResource';
  }
  
}

module.exports = RoleResourceController;