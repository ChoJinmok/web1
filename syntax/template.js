var title = 'variable'
var description = "var declarations, wherever they occur, are processed before any code is executed. This is called hoisting, and is discussed further below.\n\
\n\
The scope of a "+title+" declared with var is its current execution context and closures thereof, which is either the enclosing function and functions declared within it, or, for "+title+"s declared outside any function, global. Duplicate "+title+" declarations using var will not trigger an error, even in strict mode, and the "+title+" will not lose its value, unless another assignment is performed.";

console.log(description);