var babel = require('babel-core');

// var result = babel.transform("const a = 123", {
// 	"presets": ["es2015"]
// });

// console.log(result);
// console.log(result.code);
// console.log(result.map);
// console.log(result.ast);


babel.transformFile('script.js', {
	presets: ['es2015']
}, function(err, result) {
	console.log(result.code);
});

// since transformFile is asynchronous, so the following line would be logged before result code above
console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');


var result3 = babel.transformFileSync('script.js', {
	presets: ['es2015']
});
