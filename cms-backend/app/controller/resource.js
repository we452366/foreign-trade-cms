const BaseController = require('./base');

class ResourceController extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = 'resource';
  }
  
}

module.exports = ResourceController;