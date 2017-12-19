// Syntactic Ambiguity
let ambiguousFunction = () => {}
// In Javascript, {} can signify either an empty object or an empty block.
// 
// Is ambiguousFunction supposed to return an empty object? If so, it's broken because there's no way to distinguish between either. JS will default to an empty block.

typeof ambiguousFunction() === "undefined"; // true
// To make a single-expression fat arrow return an empty object, wrap it in parentheses:

clearFunction = () => ({});
typeof clearFunction() === "object"; // true
