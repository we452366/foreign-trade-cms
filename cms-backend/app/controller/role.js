const BaseController = require('./base');

class RoleController extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = 'role';
  }
  async getUser() {
    const { app, service, ctx } = this;
    const result = await service.role.getUser();
    this.success(result);
  }
  // 设置用户和角色的关系
  async setUser() {
    const { app, service, ctx } = this;
    const body = ctx.request.body;
    const result = await service.role.setUser(body);
    result ? this.success('为角色分配用户成功') : this.error('为角色分配用户失败');
  }
  async getResource() {
    const { app, service, ctx } = this;
    const result = await service.role.getResource();
    this.success(result);
  }
  // 设置用户和角色的关系
  async setResource() {
    const { app, service, ctx } = this;
    const body = ctx.request.body;
    const result = await service.role.setResource(body);
    result ? this.success('为角色分配资源成功') : this.error('为角色分配资源失败');
  }
}

module.exports = RoleController;