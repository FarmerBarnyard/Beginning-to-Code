
const abTroubleshoot = require("./troubleshooting");

const result = abTroubleshoot();

if(result === 2) {
	console.log("Congrats! You got the correct answer");
} else if(typeof result === 'number') {
	console.log(`You returned the number ${result}, the result should be the number 2`);
} else {
	console.log(`You returned string "${result}", the result should be the number 2`);
}

function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
	result = (a+b);

	// =================================

	return result;
}

// Do not change this 
module.exports = troubleshooting