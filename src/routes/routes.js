import combineRouters from 'koa-combine-routers';

import demoRouter from './demoRouter';
import publicRouter from './publicRouter';

export default combineRouters(demoRouter, publicRouter);