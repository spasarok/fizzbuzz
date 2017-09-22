/*
 * About
 *   A node package for playing the FizzBuzz game
 *
 * Author
 *   Kim Spasaro
 *
 * Date
 *   9/17/17
 */

const FizzBuzz = {};

// Default multiple-output pairs
FizzBuzz.defaults = [
	[3, 'Fizz'], 
	[5, 'Buzz'], 
	[7, 'Pop']
];

/*
 * Purpose
 *   Play the FizzBuzz game from command line
 */
FizzBuzz.play = function(){
	FizzBuzz.prompt();
}


/*
 * Purpose
 *   Prompt user for input to FizzBuzz game
 */
FizzBuzz.prompt = function(){
	const stdIn = process.openStdin();
	FizzBuzz.promptSubs(stdIn);
}

/*
 * Purpose
 *   Prompt user to pick optional substitutions for FizzBuzz game
 * Parameters
 *   stdIn: open standard input object
 */
FizzBuzz.promptSubs = function(stdIn){
	// Substitutions seemed more like replacements and the directions were a bit confusing,
	// so I've listed my assumptions in the prompt
	console.log('Enter any custom substitutions!');
	console.log('* Substitutions must be entered on a single line');
	console.log('* Substitutions must be entered in ascending order');
	console.log('* Substitutions must be entered in the format #-substitution');
	console.log('* Substitutions replace all defaults');
	console.log('* ex: 3-hello 4-world');

	// Listen for substitutions then prompt for number
	const listener = function(d){
		stdIn.removeListener('data',listener); // Only allow subsitutions at beginning
		FizzBuzz.promptNumber(stdIn, FizzBuzz.parseSubs(d.toString().trim()));
	}
	stdIn.addListener('data', listener);
}

/*
 * Purpose
 *   Prompt user to pick a number, then print response
 * Parameters
 *   stdIn: open standard input object
 */
FizzBuzz.promptNumber = function(stdIn, subs){
	console.log('Pick a number!');

	// Listen for number then provide reponse and promt for new number
	//const numIn = process.openStdin();
	const listener = function(d) {
		console.log(FizzBuzz.calculate(d.toString().trim(), subs));
		console.log('Pick a number!');
	}
	stdIn.addListener('data', listener);
}

/*
 * Purpose
 *   Calculate the reply value for the FizzBuzz game when given a number
 * Parameters
 *   num: a string number
 *   subs: a list of pairs to use for number and word substitutions
 * Produces
 *   reply: a string
 */
FizzBuzz.calculate = function(num, subs){

	// Use defaults if substitutions not supplied
	const multiples = subs ? subs : FizzBuzz.defaults;

	let reply = ""; // For building return value
	num = parseFloat(num); // Parse input as number
	
	// Special case to prevent 0 from acting as multiple
	if(num === 0){
		return "0";
	}

	// Build reply for given list of multiples
	reply = multiples.reduce(function(replySoFar, multiple){
		const factor = multiple[0];
		const word = multiple[1];

		if(num % factor === 0){
			replySoFar += word + " ";
		}

		return replySoFar;
	}, "");

	// Trim trailing whitespace
	reply = reply.trim();

	// If no multiples were found, reply equals input
	if(!reply){
		reply = num;
	}

	// Return response
	return reply += '';
}

/* 
 * Purpose
 *   Parse a string into a list of pairs to provide as substitutions for FizzBuzz.calculate()
 * Parameters
 *   subs: a string of substitutions in the format of "#-word #-word #-word"
 *     ex. "3-hello 4-world" represents the substitution "hello" for multiples of 3, "world" for multiples of 4, 
 *     and "hello world" for multiples of 3 and 4
 * Produces
 *   parsedSubs: a list of pairs to use a substitutions for FizzBuzz.calculate()
 * Preconditions
 *   Substitutions are provided in ascending order
 */
FizzBuzz.parseSubs = function(subs){
	if(!subs){
		return FizzBuzz.defaults;
	}

	subs = subs.trim().split(' ').reduce(function(pairs, sub){
		const pair = sub.split('-');

		return pairs.concat([pair]);
	}, []);

	return subs;
}

export default FizzBuzz;