module.exports = function(plainGraph){
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
}