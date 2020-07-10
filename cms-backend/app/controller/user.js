'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    const users = await service.user.select();
    ctx.body = users;
  };

  async create() {
    const { ctx, service } = this;
    const users = ctx.request.body;
    const result = await service.user.create(users);
    ctx.body = {
        code:0, 
        data: 'success'
    };
  }
  
}

module.exports = UserController;