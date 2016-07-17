// Write a program that uses a single synchronous 
// filesystem operation to read a file and print the 
// number of newlines (\n) it contains to the console (stdout), 
// similar to running cat file | wc -l.

// The full path to the file to read will be provided 
// as the first command-line argument (i.e., process.argv[2]).
// You do not need to make your own test file.

var fs = require('fs');

function readLines(fileToRead) {
	var stdout = fs.readFileSync(fileToRead);
	stdout = stdout.toString();
	stdout = stdout.split('\n');
	var count = 0;
	for (i=0; i<stdout.length; i++) {
		count = count + 1;
	}
	return count - 1;
};

console.log(readLines(process.argv[2]));
