var babel = require('babel-core');

// babel.transform('var a = 2; console.log(a, b);',{
// 	plugins: ["undeclared-variables-check"]
// });


var result = babel.transform('!x && y',{
	plugins: ["minify-guarded-expressions"]
});

console.log(result.code); // x || y;

var result2 = babel.transform('alert(false && a)',{
	plugins: ["minify-guarded-expressions"]
});

console.log(result2.code); // alert(false);

var result3 = babel.transform('alert(false || a)',{
	plugins: ["minify-guarded-expressions"]
});

console.log(result3.code); // alert(a);