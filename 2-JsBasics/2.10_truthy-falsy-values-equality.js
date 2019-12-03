// falsy values : undefined,null,0,'',NaN
// truthy values : NOT falsy values

var height;
height = 23;
if (height || height === 0)
    console.log('Variable is defined');
else
    console.log('Variable has NOT been defined.');

//Equality operators:
if (height == '23') // type coercion. string to number
    console.log('The == operator does type coercion.');