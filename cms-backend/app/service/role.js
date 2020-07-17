const BaseService = require('./base');

class RoleService extends BaseService {
    constructor(...args) {
        super(...args);
        this.entity = 'role';
    }
    async getUser() {
        const { app, service, ctx } = this;
        const result = await app.mysql.select('user');
        return result;
    }
    async setUser(body) {
        const { app, service, ctx } = this;
        const { roleId, userIds } = body;
        const conn = await app.mysql.beginTransaction();
        let result = true;
        try {
            await conn.query(`DELETE FROM role_user WHERE role_id = ?`, [ roleId ]);
            for(let i = 0; i < userIds.length; i++) {
                await conn.insert('role_user', {
                    'role_id': roleId,
                    'user_id': userIds[i]
                });
            }
            await conn.commit();
        } catch (error) {
            await conn.rollback();
            result = false;
        }
        return result;
    }
    async getResource() {
        const { app, service, ctx } = this;
        const list= await app.mysql.select('resource');
        let rootMenus = [],
            resourceMap = {};
        list.forEach(item => {
            item.children = [];
            resourceMap[item.id] = item;
            if(item.parent_id == 0) {
                rootMenus.push(item);
            } else {
                resourceMap[item.parent_id] && resourceMap[item.parent_id].children.push(item);
            }
        })
        return rootMenus;
    }
    async setResource(body) {
        const { app, service, ctx } = this;
        const { roleId, resourceIds } = body;
        const conn = await app.mysql.beginTransaction();
        let result = true;
        try {
            await conn.query(`DELETE FROM role_resource WHERE role_id = ?`, [ roleId ]);
            for(let i = 0; i < resourceIds.length; i++) {
                await conn.insert('role_resource', {
                    'role_id': roleId,
                    'resource_id': resourceIds[i]
                });
            }
            await conn.commit();
        } catch (error) {
            await conn.rollback();
            result = false;
        }
        return result;
    }
}

module.exports = RoleService;