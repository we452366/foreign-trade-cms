const BaseService = require('./base');

class RoleResourceService extends BaseService {
    constructor(...args) {
        super(...args);
        this.entity = 'role_resource';
    }
}

module.exports = RoleResourceService;