// const DB_URL = `mongodb://Forest:123456@119.3.48.150:27000/testdb`;
// mongodb://119.3.48.150:27000/?readPreference=primary&appname=MongoDB%20Compass&ssl=false
const mongoConfig = {
    host: '116.62.66.228',
    port: '27001',
    username: 'Forest',
    password: 'bigfrontend',
    db: 'front',
};
const { host, port, username, password, db } = mongoConfig;
const DB_URL = `mongodb://${username}:${password}@${host}:${port}/${db}?authSource=front`;
console.log('DB_URL:', DB_URL);
const redisConfig = {
    host: '116.62.66.228',
    port: 15000,
    password: '123456',
    detect_buffers: true,
};
const JWT_SECRET = 'ac2969df7a021be7dcf598e7014a9a8f9594d4e1';

export { redisConfig, DB_URL, JWT_SECRET };
