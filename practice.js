let a;
const b =34;
 
function shadowing (){
    let a =45;
    return console.log("Value of 'a' is shadowing the outer 'a': ", a);
}
shadowing();

console.log("Value of outer 'a': ", a);
console.log("Value of constant 'b': ", b);