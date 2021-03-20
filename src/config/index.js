// const DB_URL = `mongodb://Forest:123456@119.3.48.150:27000/testdb`;
// mongodb://119.3.48.150:27000/?readPreference=primary&appname=MongoDB%20Compass&ssl=false
const mongoConfig = {
    host: '119.3.48.150',
    port: '27000',
    username: 'Forest',
    password: 123456,
    db: 'bigfrontend'
}
const {host, port, username, password, db} = mongoConfig;
const DB_URL = `mongodb://${username}:${password}@${host}:${port}/${db}`
const redisConfig = {
    host: '116.62.66.228',
    port: 15001,
    password: '123456',
    detect_buffers: true,
};
const JWT_SECRET = 'qewrgasdfegeafesdfasdfefawef';

export { redisConfig, DB_URL, JWT_SECRET };
