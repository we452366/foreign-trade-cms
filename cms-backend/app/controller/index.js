const Controller = require('egg').Controller;
const svgCaptcha = require('svg-captcha');


class IndexController extends Controller {
    async captcha() {
        const { ctx } = this;
        const captcha = svgCaptcha.create({});
        // egg.js内置了session插件
        ctx.session.captcha = captcha.text;
        ctx.set('Content-Type', 'image/svg+xml');
        ctx.body = captcha.data;
    }
    async checkCaptcha() {
        const { ctx } = this;
        const { captcha } = ctx.request.body;
        if(ctx.session.captcha == captcha) {
            ctx.body = {
                code: 0,
                data: '验证码识别成功'
            }
        } else {
            ctx.body = {
                code: 1,
                data: '验证码识别失败'
            }
        }
    }
}

module.exports = IndexController;