
const mongoose = require('mongoose');
const CONST = require('./const')
mongoose.connect(`mongodb://${CONST.DB_URL}`);

const jdbc = mongoose.connection;
jdbc.on('error', console.error.bind(console, 'connection error数据库连接失败'));
jdbc.once('open', function (callback) {
  console.log('connection success数据库连接成功');
});

module.exports = jdbc;