let a =24;
var b= 67; 

{
    let a= 45; // Legal shadowing of 'a'
    let b= 90; // Legal shadowing of 'b'
    //var a =200; // Illigal shadowing of 'a' - would throw SyntaxError if uncommented
    console.log("legal shadowing - 'a': ", a, ", 'b': ", b);
}


console.log(" 'a': ", a); // Outputs: 24
console.log(" 'b': ", b); // Outputs: 67
console.log(" Legal shadowing worked correctly without errors.");
console.log(" Illigal shadowing of 'b' and would throw SyntaxError if attempted.");