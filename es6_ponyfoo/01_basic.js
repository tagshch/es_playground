
// ------------ LET and CONST ------------
// let - declares a local variable in the block scope
// now if statement with let - have scope!
for(let i = 0; i < 5; i++){
    console.log(i); // 0, 1, 2 ...
}
if(typeof i != 'undefined'){
    console.log(i); // i is not defined
} else {
    console.log('i is undefined');
}
//const or a constant declaration is where once, the variable you can't change. It's read-only
const admin = "Andrew";
//admin = 'Kenneth'; // will give error while transpiling
console.log(admin);
//but if it object - you can change it
const admin_obj = { name: "Admin" };
admin_obj.name = 'Kenneth';
console.log(admin_obj.name, ', but not Admin!');

console.log('--------------------------------');

// ------------ SPREAD OPERATORS AND REST ------------

function something(a,b,c){
    console.log(a,b,c);
}
something(...[1,2,3]);

function something2(...everything){
    console.log(everything);
}
something2(1,2,3);
something2([1,2,3,4], 5, 6);

let arr = [1,2,3];
let arr_concat = [6,5,...arr,0];
console.log("concatination:", arr_concat);


