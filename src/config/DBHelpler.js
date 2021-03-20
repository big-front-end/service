import mongoose from 'mongoose';
import { DB_URL } from './index';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// 连接成功回调
mongoose.connection.on('connected', () => {
    // console.log('mongoose connection open to' + DB_URL);
    console.log('连接成功');
});

// 连接异常的回调
mongoose.connection.on('error', (err) => {
    // console.log(`mongoose connection error ${err}`);
    console.log(`连接异常`);
});

// 断开连接
mongoose.connection.on('disconnected', () => {
    // console.log('mongoose connection disconnected')
    console.log('断开连接');
});

export default mongoose;
