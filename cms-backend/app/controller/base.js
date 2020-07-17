const Controller = require('egg').Controller;

class BaseController extends Controller {
  success(data) {
    this.ctx.body = {code: 0, data}
  }

  error(error) {
    this.ctx.body = {code:1, error}
  }

  async index() {
    const { ctx, service } = this;
    // 支持分页查询
    const { pageNum, pageSize, ...where } = ctx.query;
    const currentPageNum = isNaN(pageNum) ? 1 : parseInt(pageNum);
    const currentPageSize = isNaN(pageSize) ? 1 : parseInt(pageSize);
    const result = await service[this.entity].select(currentPageNum, currentPageSize, where);
    this.success(result);
  };

  async create() {
    const { ctx, service } = this;
    const users = ctx.request.body;
    const result = await service[this.entity].create(users);
    result.affectedRows > 0 ? this.success('创建成功') : this.error('创建失败');
  }

  async update() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const users = ctx.request.body;
    users.id = id;
    const result = await service[this.entity].update(users);
    result.affectedRows > 0 ? this.success('更新成功') : this.error('更新失败');
  }

  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const result = await service[this.entity].destroy(id);
    result.affectedRows > 0 ? this.success('删除成功') : this.error('删除失败');
  }
  
}

module.exports = BaseController;