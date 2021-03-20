import koa from 'koa';
import cors from '@koa/cors';
import koaBody from 'koa-body';
import jsonUtil from 'koa-json';
import helmet from 'koa-helmet';
import statics from 'koa-static';
import compose from 'koa-compose'; // 将所有的中间件整合到一起
import compress from 'koa-compress'; // 压缩中间件
import router from './routes/routes';
import JWT from 'koa-jwt';
import ErrorHandle from './common/ErrorHandle';
import { JWT_SECRET } from './config/index';
const app = new koa();

// 是否生产环境
const isDevMode = process.env.NODE_env === 'production' ? false : true;

// 定于i公共的路径，不需要JWT鉴权
const jwt = JWT({ secret: JWT_SECRET }).unless({ path: [/^\/public/, /\/login/] });
/**
 * 整合所有的中间件
 */
const middleware = compose([
    koaBody(),
    statics(`${process.cwd()}/assets`),
    cors(),
    jsonUtil({ pretty: false, param: 'pretty' }),
    helmet(),
    ErrorHandle,
    jwt,
]);

// 压缩中间件
if (!isDevMode) app.use(compress());

// 中间件、路由注册
app.use(middleware).use(router());

// 端口
app.listen(5000, () => console.log('服务启动成功！'));
