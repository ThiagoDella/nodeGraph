module.exports = function(graph){
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