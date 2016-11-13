const fs = require('fs');

var readGraph = require('./functions/readGraph.js');
var buildObjectArray = require('./functions/buildObjectArray.js');
var writeSomething = require('./functions/writeSomething.js');
var countNodes = require('./functions/countNodes.js')

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


