const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  type: {type: String, required: true},
  create_time: {type: Date, default: Date.now},
  update_time: {type: Date, default: Date.now},
});

const userInfo = new mongoose.Schema({
  username: {type: String, required: true},
  userid: {type: String, required: true},
  type: {type: String, required: true},
  position: {type: String, required: true},
  avatar: {type: String},
  company: {type: String},
  salary: {type: String},
  decs: {type: String, required: true},
  create_time: {type: Date, default: Date.now},
  update_time: {type: Date, default: Date.now}
});
const userModel = mongoose.model("user", user);
const userInfoModel = mongoose.model("userInfo", userInfo);
module.exports = {
  userModel,
  userInfoModel,
};