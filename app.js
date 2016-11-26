const fs = require('fs');

var readGraph = require('./functions/readGraph.js');
var buildObjectArray = require('./functions/buildObjectArray.js');
var writeSomething = require('./functions/writeSomething.js');
var countNodes = require('./functions/countNodes.js')
var countEdges = require('./functions/countEdges.js');

//MAIN FUNCTION
readGraph().then(function(plainGraph){
		buildObjectArray(plainGraph).then(function(graphObject){
			// console.log(graphObject);
			
			countNodes(graphObject).then(function(numberOfNodes){
				var n = numberOfNodes.length;
				var out = "# n = " + n + "\r\n";
				writeSomething(out, "graph.txt");

				countEdges(graphObject).then(function(res){
					var m = res;
					var out = "# m = " + m + "\r\n";
					var out2 = "# d_medio = " + (2*m)/n + "\r\n";
					writeSomething(out, "graph.txt");
					writeSomething(out2, "graph.txt");
				});
			});
			
			

		},function(err){
			console.log(err);
		});

},function(err){
	console.log(err);
});


