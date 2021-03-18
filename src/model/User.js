import mongoose from '../config/DBHelpler';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
});

const UserModel = mongoose.model('user', UserSchema);
export default UserModel;
