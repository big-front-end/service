import svgCaptcha from 'svg-captcha';

class PublicController {
    constructor(){}

    async getCaptcha(ctx){
        const { data, text } = svgCaptcha.create({
            size: 4, //随机字符串的位数
            noise: Math.floor(Math.random() * 5), //噪声(干扰)线数
            color: true, // 字符将具有不同的颜色而不是灰色，如果设置了背景选项，则为true
            height: 38,
            ignoreChars:'0o1il', // 过滤掉一些字符，例如0o1il
        }) 
        
        ctx.body = {
            code: 200,
            data, // 生成验证码的svg
        }
    }
}

export default new PublicController()