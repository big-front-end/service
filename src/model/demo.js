import User from './test';

// 增
const user = {
    name: 'lin',
    age: 20,
    email: '1234@qq.com'
}

const run = async () => {
    const data = new User(user);
    const result = await data.save();
    console.log(result)
}

run()
// 删


// 改


// 查