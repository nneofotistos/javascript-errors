
// eval error
try {
    throw new EvalError('Hello', 'someFile.js', 10);
  } catch (e) {
    console.log(e instanceof EvalError); // true
    console.log(e.message);              // "Hello"
    console.log(e.name);                 // "EvalError"
    console.log(e.fileName);             // "someFile.js"
    console.log(e.lineNumber);           // 10
    console.log(e.columnNumber);         // 0
    console.log(e.stack);                // "@Scratchpad/2:2:9\n"
  }



/* // range error
function check(n)
{
    if( !(n >= -500 && n <= 500) )
    {
        throw new RangeError("The argument must be between -500 and 500.")
    }
}

try
{
    check(2000)
}
catch(error)
{
    if (error instanceof RangeError)
    {
        // Handle the error
    }
}

// reference error
try {
    throw new ReferenceError('Hello', 'someFile.js', 10)
  } catch (e) {
    console.log(e instanceof ReferenceError)  // true
    console.log(e.message)                    // "Hello"
    console.log(e.name)                       // "ReferenceError"
    console.log(e.fileName)                   // "someFile.js"
    console.log(e.lineNumber)                 // 10
    console.log(e.columnNumber)               // 0
    console.log(e.stack)                      // "@Scratchpad/2:2:9\n"
  }

// syntax error
try {
    throw new SyntaxError('Hello', 'someFile.js', 10);
  } catch (e) {
    console.error(e instanceof SyntaxError); // true
    console.error(e.message);                // Hello
    console.error(e.name);                   // SyntaxError
    console.error(e.fileName);               // someFile.js
    console.error(e.lineNumber);             // 10
    console.error(e.columnNumber);           // 0
    console.error(e.stack);                  // @debugger eval code:3:9
  }

  
  // type error
  try {
    throw new TypeError('Hello', "someFile.js", 10)
  } catch (e) {
    console.log(e instanceof TypeError)  // true
    console.log(e.message)               // "Hello"
    console.log(e.name)                  // "TypeError"
    console.log(e.fileName)              // "someFile.js"
    console.log(e.lineNumber)            // 10
    console.log(e.columnNumber)          // 0
    console.log(e.stack)                 // "@Scratchpad/2:2:9\n"
  }

  // uri error
  try {
    throw new URIError('Hello', 'someFile.js', 10)
  } catch (e) {
    console.log(e instanceof URIError)  // true
    console.log(e.message)              // "Hello"
    console.log(e.name)                 // "URIError"
    console.log(e.fileName)             // "someFile.js"
    console.log(e.lineNumber)           // 10
    console.log(e.columnNumber)         // 0
    console.log(e.stack)                // "@Scratchpad/2:2:9\n"
  }

  // aggregate error
  try {
    throw new AggregateError([
      new Error("some error"),
    ], 'Hello');
  } catch (e) {
    console.log(e instanceof AggregateError); // true
    console.log(e.message);                   // "Hello"
    console.log(e.name);                      // "AggregateError"
    console.log(e.errors);                    // [ Error: "some error" ]
  }
  
  // internal error
  function loop(x) {
    if (x >= 10) // "x >= 10" is the exit condition
      return;
    // do stuff
    loop(x + 1); // the recursive call
  }
  loop(0);
   */