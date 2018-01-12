const db = require('../model/model');
const Jdbc = require('../jdbcTemplate')

module.exports = {
  login(req, res) {
    Jdbc.select(db.userModel,{})
      .then((result)=>{
        res.json(result);
      })
  }
}