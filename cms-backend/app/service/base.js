const { Service } = require('egg');

class BaseService extends Service {

    async select(pageNum, pageSize, where) {
        // SELECT * FROM user WHERE username = '' ORDER BY id DESC, age ASC LIMIT '','';
        const list = await this.app.mysql.select(this.entity, {
            where,
            orders: [['id','DESC'], ['email','ASC']],
            offset: (pageNum - 1) * pageSize,
            limit: pageSize
        });
        const total = await this.app.mysql.count(this.entity, where );
        return { list, total };
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