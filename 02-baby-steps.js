// Write a program that accepts one or more numbers 
// as command-line arguments and prints the sum of 
// those numbers to the console (stdout).

var processArray = process.argv;

function babySteps(array) {
	var result = 0;
	for(i=2; i<processArray.length; i++) {
		result = result + Number(processArray[i]);
	}
	return result;
}
console.log(babySteps(processArray.slice(2)));
