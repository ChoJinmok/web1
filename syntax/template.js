var title = 'variable'
var description = "var declarations, wherever they occur, are processed before any code is executed. This is called hoisting, and is discussed further below.\n\
\n\
The scope of a "+title+" declared with var is its current execution context and closures thereof, which is either the enclosing function and functions declared within it, or, for "+title+"s declared outside any function, global. Duplicate "+title+" declarations using var will not trigger an error, even in strict mode, and the "+title+" will not lose its value, unless another assignment is performed.";
// 문자열 안에서 \n: 개행, 코드 안에서 개행 하고 싶으면 \ 한번(실제로는 적용안됨)

// literal : 데이터를 표현하는 기호
// template literal
var description = `var declarations, wherever they occur, are processed before any code is executed. This is called hoisting, and is discussed further below.

The scope of a ${title} declared with var is its current execution context and closures thereof, which is either the enclosing function and functions declared within it, or, for ${title}s declared outside any function, global. Duplicate ${title} declarations using var will not trigger an error, even in strict mode, and the ${title} will not lose its value, unless another assignment is performed.`;
// literal template 사용하면 그냥 있는 그대로 표시해줌
// ${1+1} 이런식으로도 사용가능


console.log(description);