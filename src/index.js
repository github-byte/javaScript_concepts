import { add } from "lodash"
import {compose,pipe} from "lodash/fp"




// function sayHello(){
//     return "Hello World";
// }

// let fn=sayHello;
// //same as sayHello()

// const input="JAVA"
// const tab=type=>input=>`<${type}>${input}</${type}>`
// const trim=input=>input.trim()

// const toLowerCase=input=>input.toLowerCase()
// compose(tab,toLowerCase,trim)
// const transform =pipe(trim,toLowerCase,tab("div"))
// console.log(transform(input))
function sum(a){
return function(b){
return a+b
}
}

console.log(sum(1)(2));

const person={name:"Ziza"};
const copy=Object.assign(...person,name="Janice")
console.log(copy)

