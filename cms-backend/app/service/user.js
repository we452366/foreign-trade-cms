const { Service } = require('egg');

class UserService extends Service {
    async select() {
        return await this.app.mysql.select('user');
    }
    async create(entity) {
        return await this.app.mysql.insert('user', entity);
    }
}

module.exports = UserService;