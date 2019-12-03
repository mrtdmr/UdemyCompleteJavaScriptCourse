var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        //console.log(a + b + c);
        third(); //second method can access to global context. So it can call third method.
    }
}
function third() {
    var d = 'John';
    console.log(a + b + c + d); //third method can not access to scope of first and second method. Scope chain is from child to parent. Not parent to child.
}
