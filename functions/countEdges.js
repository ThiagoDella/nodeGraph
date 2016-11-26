module.exports = function(graph){
	return new Promise(function(resolve,reject){
		var visits = [];

		var numEdges = 0;

		for(var i = 0; i < graph.length; i++){
				if(visits[graph[i].parentNode] === false || visits[graph[i].parentNode] === undefined ){
					visits[graph[i].parentNode] = true;
				}
				for(var j = 0; j < graph[i].childNodes.length; j++){
				if(visits[graph[i].childNodes] === false || visits[graph[i].childNodes] === undefined ){
						visits[graph[j].childtNodes] = true;
						numEdges ++;
					}

				}
		}

		// console.log(visits);
		// console.log(numEdges);
		resolve(numEdges);

	});
};