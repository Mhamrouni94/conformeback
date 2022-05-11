const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({

    UserName: String,
    Email : String,
    Phone : String,
    Password : String

})
module.exports = mongoose.model('user', UserSchema)