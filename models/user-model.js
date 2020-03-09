var db = require('./db');

module.exports ={
	ainsert: function(admin,callback){ 
		var sql= "insert into admin values (?,?,?)";
		db.execute(sql, [null,admin.aname,admin.password],function(status){
			if(status){
				// console.log("Usermodel ok");
				callback(true);
			}
			else{
				// console.log("usermodel is not")
				callback(false);
			}
		})

	},


	avalidate: function(admin,callback){

        var sql = "select * from admin where aname=? and password=?";
            db.getResults(sql, [admin.aname, admin.password], function(results){
                if(results.length > 0){
					console.log("admin validate Working");
                    callback(true);
                }
                else{
					console.log("admin validate not working!!");
					callback(false);
                }
            });

	},
	
	customerInsert: function(customer,callback){

		var sql = "insert into customer values (?,?,?,?)";
		db.execute(sql,[null, customer.cname, customer.password, customer.contact],function(status){
			if(status){
				// console.log("Usermodel ok");
				callback(true);	
			}else{
				// console.log("usermodel is not");
				callback(false);
			}
		})
	},


	cvalidate: function(customer,callback){

        var sql = "select * from customer where cname=? and password=?";
            db.getResults(sql, [customer.cname, customer.password], function(results){
                if(results.length > 0){
					console.log("customer validate Working");
                    callback(true);
                }
                else{
					console.log("customer validate not working!!");
					callback(false);
                }
            });

	},

	allcustomers: function(callback){
		var sql = "select * from customer";
		db.getResults(sql,null,function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		})
	}


}