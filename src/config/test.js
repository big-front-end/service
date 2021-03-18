import { get } from 'mongoose';
import { setValue, getValue, getAsync, getHvalue, del } from './RedisConfig';

setValue('imooc', 'imooc message from redis client');

getAsync('imooc').then(res=> {
    console.log('getValue:', res);
})

setValue('imoocobj', {name: 'lin', age: 30, email: 'changlin@zj.com', title: '钟爱于她！'});

(async ()=>{
    const res = await getHvalue('imoocobj');
    console.log('async await:', JSON.stringify(res))
})()

getHvalue('imoocobj').then(res => {
    console.log('res:', JSON.stringify(res, null, 2))
})

del('imooc')
