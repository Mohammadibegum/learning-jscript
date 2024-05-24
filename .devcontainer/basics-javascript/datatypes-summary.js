// how the data stored in memory and accessed based on that datatypes are dicided into 2 categories
// 1. premitive datatypes  2. Non premitive or reference type

// 1. premitives  call by value when ever we callthat data it will return a value 
// 7 type: string , number , boolean, null, undefined, symbol, BigInt

// const num= 12;
// const value=12.3;

// let temp=null;
// let useremail;
//  const id= Symbol('123');
//  const id2= Symbol('123');

//  BigInt = 867374578367656567n;


// Reference type or non premitives :  allocating the reference in memory
// Array, objects, Functions

// array

// const fruites = ['mango', 'apple','pineapple']; 

//object

// let persondetails= {
//     name : "mohammadi",
//     age : 28,

// }

// // function 

// const myfunction = function(){
//     console.log("hello world");

// }


// console.log(typeof useremail); // undefined
// console.log(typeof temp); // object
// console.log(typeof myfunction); // function
// console.log(typeof persondetails); // object
// console.log(typeof fruites); // object
// console.log(typeof id); // symbol 
// console.log(typeof BigInt); //bigint


// ******************************************************************
// stack and heap memory stack(primitives) , heap (nonpremitive)

let myname = "mohammadi"
let lastname = myname;
lastname = "begum"

console.log(myname);
console.log(lastname);

let user1 = {
    name : "mohammadi begum",
    email: "mohamm@gmail.com"
}
console.log(user1);
let user2 = user1;
user2.email = "mohammadi@google.com";

// console.log("user1 details------>"+user1);  nonpredectable output it just shows the datatype not the actual values
// console.log(user1 + "---->user1 details"); nonpredectable output it just shows the datatype not the actual values
// console.log(user1+user2);  nonpredectable output it just shows the datatype not the actual values
console.log(user2);



