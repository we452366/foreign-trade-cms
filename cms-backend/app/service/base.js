const { Service } = require('egg');

class BaseService extends Service {

    async select() {
        return await this.app.mysql.select(this.entity);
    }

    async create(entity) {
        return await this.app.mysql.insert(this.entity, entity);
    }

    async update(entity) {
        return await this.app.mysql.update(this.entity, entity);
    }

    async destroy(id) {
        return await this.app.mysql.delete(this.entity, {id})
    }
}

module.exports = BaseService;