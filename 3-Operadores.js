// operadores aritmeticos
let a, b, c, d, e, f;

//suma
a = 3 + 4;
console.log(a);

//resta
b = 6-2;
console.log(b);

//mult
c = a * 2;
console.log(c);

//div

d = b/2.5;
console.log(typeof d);

//modulo (residuo de div)
f= 9%2;
console.log(f);

//potencia
e = 2 ** 3;
console.log(e);

e = Math.pow(5,3);

console.log(e);

// operadores de incremento / decremento

a = 0;
++a;
console.log(a);//1
a++;
console.log(a);//2
a--;
console.log(a);//1
--a;
console.log(a);//0

// operadores de asignacion
a=20;
a += 5; // a = a + 5
console.log(a); //25
a -= 5; // a = a - 5
console.log(a); //20
a *= 2; // a = a * 2
console.log(a); //40
a /= 2; // a = a / 2
console.log(a); //20
a %= 3; // a = a % 3
console.log(a); //0

// operadores de comparacion
// == igual
// === igual estricto (valida el tipo de variable) 
// != diferente
// !== diferente estricto (valida el tipo de variable)
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que
console.log(5 == 5); //true
console.log(5 === "5"); //false
console.log(5 != 5); //false
console.log(5 !== "5"); //true
console.log(5 < 6); // TRUE
console.log(5 > 5); //false
console.log(5 >= 5); //true
console.log(5 <= 5); //true

// interpolation
let nombre = "Juan";
let edad = 22;
console.log(`Hola, soy ${nombre} y tengo ${edad} años.`); // Hola, soy Juan y tengo 22 años

//operador distintos
// compara valor y convierte el tipo de datos si es necesario
console.log(`${a} !== ${b} -> ${a !== b}`);
console.log(`${a} >= ${b} -> ${a >= b}`);

// operadores logicos
// && AND
// || OR
// ! NOT
let x = 5;
let y = 10;
console.log(x > 5 && y > 5); //false
console.log(x > 5 || y > 5); //true
console.log(!(x > 5)); //true


// ejemplo de valor dentro del rango
let valor = 10;
let min = 5;
let max = 15;
console.log(valor >= min && valor <= max); //true

// precedencia de operadores
// 1. parentesis
// 2. exponentes
// 3. multiplicacion y division
// 4. suma y resta
// 5. asignaciones
// se revisa de izq a der
console.log(5 + 5 * 2 - 3 / 2); //13.5

