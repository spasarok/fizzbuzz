
# FizzBuzz [![Build Status](https://travis-ci.org/spasarok/fizzbuzz.svg?branch=master)](https://travis-ci.org/spasarok/fizzbuzz) [![Coverage Status](https://coveralls.io/repos/github/spasarok/fizzbuzz/badge.svg?branch=master)](https://coveralls.io/github/spasarok/fizzbuzz?branch=master)
The FizzBuzz game is written using node.js with the Babel ES6 transpiler. This package includes source code and unit tests.

### Building the App
You need to build the app before you can play it. In your Bash terminal run `npm install` to install the app dependencies. Then run `npm run build` to build the app.

### Playing the Game
You can play the FizzBuzz game by running `npm run play` from your Linux console. Exit the game with `ctrl + c`.

### Directories

#### Lib
`./lib` contains the transpiled, distribution-ready code for the FizzBuzz game. (This directory is empty until you build the app.)

#### Src
`./src` contains the ES6 source code for the FizzBuzz game.

#### Test
`./test` provides unit tests for the FizzBuzz game. Tests are run using the Mocha test driver and Chai assertion library. Run tests with `npm run test`. (Don't forget to run `npm install` first.)

### To Do
This app could be improved with a few additional features:

* Type checking to ensure the inputs are numbers (not implemented)
* Support for decimal input (not implemented)
* Support for substitutions in any order (currently substitutions must be submitted entered ascending order)
* Additional test coverage
