import nodemailer from 'nodemailer';
// const nodemailer = require('nodemailer')

// async..await is not allowed in global scope, must use a wrapper
async function send(send) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: '767425412@qq.com', // generated ethereal user
            pass: 'gkhxejfdghjfbehd', // generated ethereal password
        },
    });

    // let send = {
    //     code: '1234',
    //     expire: '2020-10-1',
    //     email: '767425412@qq.com',
    //     user: 'changlin',
    // };

    let url = 'http://changlin93.com';

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"å¯ç ä¿®æ¹ ð»" <767425412@qq.com>', // sender address
        to: send.email, // list of receivers
        subject: send.user ? `ä½ å¥½å¼åèï¼${send.user}` : '', // Subject line
        text: `æ¨çéè¯·ç æ¯${send.code}ï¼éè¯·ç çè¿ææ¶é´ï¼${send.expire}`, // plain text body
        html: `
        <div style="border: 1px solid #dcdcdc;color: #676767;width: 600px; margin: 0 auto; padding-bottom: 50px;position: relative;">
            <div style="height: 60px; background: #393d49; line-height: 60px; color: #58a36f; font-size: 18px;padding-left: 10px;">Imoocç¤¾åºââæ¬¢è¿æ¥å°å®æ¹ç¤¾åº</div>
                <div style="padding: 25px">
                    <div>æ¨å¥½ï¼${send.user}ç«¥éï¼éç½®é¾æ¥æææ¶é´30åéï¼è¯·å¨${send.expire}ä¹åéç½®æ¨çå¯ç ï¼</div>
                    <a href="${url}" style="padding: 10px 20px; color: #fff; background: #009e94; display: inline-block;margin: 15px 0;">ç«å³éç½®å¯ç </a>
                <div style="padding: 5px; background: #f2f2f2;">å¦æè¯¥é®ä»¶ä¸æ¯ç±ä½ æ¬äººæä½ï¼è¯·å¿è¿è¡æ¿æ´»ï¼å¦åä½ çé®ç®±å°ä¼è¢«ä»äººç»å®ã</div>
            </div>
            <div style="background: #fafafa; color: #b4b4b4;text-align: center; line-height: 45px; height: 45px; position: absolute; left: 0; bottom: 0;width: 100%;">ç³»ç»é®ä»¶ï¼è¯·å¿ç´æ¥åå¤</div>
        </div>`, // html body
    });

    return 'Message sent: %s', info.messageId;
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// send().catch(console.error);
export default send;
