var modular = require('./06-make-it-modular.js');

modular(process.argv[2], process.argv[3], function(error, result) {
	if (error)
		return console.error(error);

	result.forEach(function(indexFile) {
		console.log(indexFile);
	});
});
