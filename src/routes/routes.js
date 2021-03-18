import combineRouters from 'koa-combine-routers';

import demoRouter from './demoRouter';
import publicRouter from './publicRouter';
import loginRouter from './LoginRouter';

export default combineRouters(demoRouter, publicRouter, loginRouter);
