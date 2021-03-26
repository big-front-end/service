// const DB_URL = `mongodb://Forest:123456@119.3.48.150:27000/testdb`;
// mongodb://119.3.48.150:27000/?readPreference=primary&appname=MongoDB%20Compass&ssl=false
const mongoConfig = {
    host: '116.62.66.228' || 'cluster0.5elej.mongodb.net',
    port: '27001',
    username: 'root' || 'lin',
    password: 'example' || 'fR0KrqfaDXgo4fBi',
    db: 'front' || 'BigFrontEnd',
};
const { host, port, username, password, db } = mongoConfig;
const DB_URL = `mongodb://${username}:${password}@${host}:${port}/${db}?authSource=admin`;
// const DB_URL = `mongodb+srv://${username}:${password}@${host}/${db}?authSource=admin&replicaSet=atlas-o7v5pw-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`;
console.log('DB_URL:', DB_URL);
const redisConfig = {
    host: '116.62.66.228',
    port: 15000,
    password: '123456',
    detect_buffers: true,
};
const JWT_SECRET = 'ac2969df7a021be7dcf598e7014a9a8f9594d4e1';

export { redisConfig, DB_URL, JWT_SECRET };
