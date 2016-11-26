const fs = require('fs');
module.exports = function(){
	return new Promise(function(resolve, reject){

		var lines;
		fs.readFile('grafo_4.txt','utf-8', function(err,data){
			if(err){
				reject("Error while opening the file. ",err);
			}else{
				lines = data.split('\n');
				for(var i = 0; i < lines.length; i++){
					var nodes = lines[i].split(" ");
					for(var j = 0; j < nodes.length; j++){
						nodes[j] = parseInt(nodes[j]);
					}
					lines[i] = nodes;
					// console.log("linha "+i+": ", lines[i]);
				}
			resolve(lines);
			}
		});

	});
}