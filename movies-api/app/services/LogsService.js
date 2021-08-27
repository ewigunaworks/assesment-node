const config = require('../config/database.js');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

class LogsService {
  static async createLog(data) {
    pool.getConnection(function(err, connection) {
      if (err) throw err;

      connection.query(
        `
          INSERT INTO history_logs SET ?
        `
      , [data],
      function (error, results) {
          if(error) throw error
          try {
            return true
          } catch (e) {
            return false
          }
      })
      connection.release()
    })
  }
}

module.exports = LogsService
