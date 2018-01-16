const _filter = require('../config/filter')

class JdbcTemplate {

  promise(callback) {
    return new Promise((resolve, reject) => callback(resolve, reject))
  }

  insert(model, ...parameter) {
    return this.promise((resolve, reject) => {
      model.create(...parameter, (error, doc) => {
        if (error) {
          reject(error);
        } else {
          resolve(doc);
        }
      })
    })
  }

  delete(model, ...parameter) {
    return this.promise((resolve, reject) => {
      model.remove(...parameter, (error, doc) => {
        if (error) {
          reject(error);
        } else {
          resolve(doc);
        }
      })
    })
  }

  update(model, parameterV1, ...parameterV2) {
    return this.promise((resolve, reject) => {
      model.update(parameterV1, {$set: parameterV2[0]}, (error, doc) => {
        if (error) {
          reject(error);
        } else {
          resolve(doc);
        }
      })
    })
  }

  select(model, ...parameter) {
    return this.promise((resolve, reject) => {
      model.findOne(...parameter, _filter, (error, doc) => {
        if (error) {
          reject(error);
        } else {
          resolve(doc);
        }
      })
    })
  }
}

module.exports = new JdbcTemplate();