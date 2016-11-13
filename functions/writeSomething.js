const fs = require('fs');
module.exports = function(something,path){
	fs.open(path,'a', function(err,fd){
			if(err){
				if(err.code === "EEXIST"){
					console.log(path + "already exists");
				}else{
					throw err;
				}
			}

				fs.write(fd, something, 0, 'utf-8',function(err, written){
					if(err){
						console.log(err);
					}else{
						console.log(written + " bytes escritos");
					}
				});
			
		});
}