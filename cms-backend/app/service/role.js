const BaseService = require('./base');

class RoleService extends BaseService {
    constructor(...args) {
        super(...args);
        this.entity = 'role';
    }
}

module.exports = RoleService;