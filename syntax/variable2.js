var title = 'variable' // 중복을 제거 해줌(프로그래밍에서 중요) -> 유지보수 용의해지고 업무량 감소
// 가독성도 높아진다. title에 들어가는 값을 확신할 수 있다.
var description = "The scope of a "+title+" declared with var is its current execution context and closures thereof, which is either the enclosing function and functions declared within it, or, for "+title+"s declared outside any function, global. Duplicate "+title+" declarations using var will not trigger an error, even in strict mode, and the "+title+" will not lose its value, unless another assignment is performed.";
// 변수는 데이터에 이름을 부여해서 가독성도 높여준다.

console.log(description);