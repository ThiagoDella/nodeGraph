const fs = require('fs');

//MAIN FUNCTION
readGraph().then(function(plainGraph){
		buildObjectArray(plainGraph).then(function(graphObject){
			// console.log(graphObject);
			countNodes(graphObject).then(function(numberOfNodes){
				var n = numberOfNodes.length;
				var out = "# n = " + n + "\r\n";
				writeSomething(out, "graph.txt");
			});
		},function(err){
			console.log(err);
		});

},function(err){
	console.log(err);
});

function readGraph(){
	return new Promise(function(resolve, reject){

		var lines;
		fs.readFile('grafo_1.txt','utf-8', function(err,data){
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
	
};


function buildObjectArray(plainGraph){
	return new Promise(function(resolve,reject){
		objArray = [];
		function obj(parent,child){
			this.parentNode = parent;
			this.childNodes = child;		
		};
		for(var i = 0; i < plainGraph.length; i++){
			var aux = {
				parentNode: null,
				childNodes: []
			};
			for(var j = 0; j < plainGraph[i].length; j++){
				if(j === 0){
					aux.parentNode = plainGraph[i][j]
				}else{
					aux.childNodes.push(plainGraph[i][j]);
				}
			}
			var structure = new obj(aux.parentNode,aux.childNodes);
			objArray.push(structure);
		}
		resolve(objArray);
	});	
};

function writeSomething(something,path){
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
};

function countNodes(graph){
	return new Promise(function(resolve, reject){
		var nodes = [];
		for(var i = 0; i < graph.length; i++){
			// console.log(graph[i].parentNode);
			if(nodes[(graph[i].parentNode)-1] === undefined || nodes[(graph[i].parentNode)-1] === null || nodes[(graph[i].parentNode)-1] === ""){
				nodes[(graph[i].parentNode)-1] = graph[i].parentNode;
			}
			for(var j = 0; j < graph[i].length; j++){
				if(nodes[(graph[i].childNodes[j])-1] === undefined || nodes[(graph[i].childNodes[j])-1] === null || nodes[(graph[i].childNodes[j])-1] === "")
				nodes[(graph[i].childNodes[j])-1] = graph[i].childNodes[j];
			}
		}

		resolve(nodes);
	});
}