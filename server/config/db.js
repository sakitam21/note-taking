var mysql = require('mysql');
var dbConfig = require('./db.config');

module.exports = {
	query:function(sql){
		return new Promise(function(resolve,reject){
			let pool = mysql.createPool(dbConfig)
			pool.getConnection((err,connection) => {
				if(err) {
					reject(err)
				} else {
					connection.query(sql,[],function(err, results, fields) {
						if(err){
							reject(err)
						}else{
							resolve(results)
						}
						connection.release()
					})
				}
			})
		})	
	}
}