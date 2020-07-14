const BaseService = require('./base');

class ResourceService extends BaseService {
    constructor(...args) {
        super(...args);
        this.entity = 'resource';
    }
}

module.exports = ResourceService;