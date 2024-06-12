//if
let a = 10;
let b = 11;
if (a == b) {
  console.log("a is equal to b");
} else {
  console.log("a is not equal to b");
}
//if else if else
let c = 10;
let d = 11;
if (c > d) {
  console.log("c is greater than d");
} else if (c < d) {
  console.log("c is less than d");
} else {
  console.log("c is equal to d");
}
//switch
let e = 10;
switch (e) {
  case 10:
    console.log("e is 10");
    break;
  case 20:
    console.log("e is 20");
    break;
  default:
    console.log("e is neither 10 nor 20");
}
//ternary operator
let f = 10;
let result = f > 10 ? "f is greater than 10" : "f is less than or equal to 10";
console.log(result);

let nombre = "juan";
let esJuan = nombre == 'jose'?'Si, su nombre es juan':`No, se llama ${nombre}`;
console.log(esJuan)

// ejemplo mayor de edad 
let edad = 17;
let esMayor = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(esMayor);
