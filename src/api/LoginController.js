import moment from 'moment';
import jsonwebtoken from 'jsonwebtoken';
import send from '../config/MailConfig';
import { JWT_SECRET } from '../config/index';
import { checkCode } from '../common/Utils';
import User from '../model/User';

class LoginController {
    constructor() {}
    async forget(ctx) {
        const { body } = ctx.request;
        try {
            // 拿着用户的邮箱去数据查找当前用户是否存在
            const result = await send({
                code: '1234',
                expire: moment.add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
                email: body.username,
                user: 'changlin',
            });

            ctx.body = {
                code: 200,
                data: result,
                msg: '邮件发送成功！',
            };
        } catch (error) {
            console.error('忘记密码：', error);
        }
    }

    async login(ctx) {
        // 接受用户的数据
        const { sid, code, username, password } = ctx.request.body;
        // 验证图片验证码的时效性、正确性
        const isValid = checkCode(sid, code);
        if (!isValid) {
            // 无效验证码反馈
            ctx.body = {
                code: 401,
                msg: '图片验证码不正确，请检查！',
            };
        }
        // 数据库查询当前用户
        const user = await User.findOne({ username });
        const checkUserPassword = user.password === password;
        if (!checkUserPassword) {
            // 用户名、密码验证失败 提示
            ctx.body = {
                code: 404,
                msg: '用户名或者密码错误！',
            };
            return;
        }
        // 验证用户账号密码是否正确
        const token = jsonwebtoken.sign(
            { _id: 'forest', exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24) },
            JWT_SECRET
        );
    }
}

export default new LoginController();
