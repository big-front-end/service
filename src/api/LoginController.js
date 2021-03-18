import send from '../config/MailConfig';
import moment from 'moment';


class LoginController {
    constructor(){};
    async forget(ctx){
        const { body } = ctx.request;
        try {

            // 拿着用户的邮箱去数据查找当前用户是否存在
            const result = await send({
                code: '1234',
                expire: moment.add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
                email: body.username,
                user: 'changlin',
            })

            ctx.body = {
                code: 200,
                data: result,
                msg: '邮件发送成功！'
            }
        } catch (error) {
            console.error('忘记密码：',error)
        }
    }
}