

let a= 24;


function demonstrateBlockScope (){
    var b= 67;
    const c= 89;
    console. log("this is Global Scope",a);
    console. log("these are Block Scope variables",b,c);

    function innerFunction(){
        let a= 45;
        var b= 90;
        console. log("this is Inner Function Scope",a);
        console. log("these are Inner Function Block Scope variables",b,c);
    }

}

demonstrateBlockScope();

console.log(" 'a': ", a);
console.log ("'b' and 'c' are not accessible here and will throw ReferenceError if accessed.");