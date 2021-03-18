import { getValue } from '../config/RedisConfig';
const checkCode = async (key, value) => {
    const redisData = await getValue(key);
    return redisData != null ? redisData.toLowerCase() === value.toLowerCase() : false;
};

export { checkCode };
