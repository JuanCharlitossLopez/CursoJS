// ya no utilizar
var miNumero1 = 15;
console.log(miNumero1);

// variable mejor, en cualquier momento puede cambiar al cualquier tipo de dato
let miNumero2 = 20;
console.log(miNumero2);
//preferente usar camelCase 
let $miNombre = "Juan Carlos";
console.log($miNombre);

//////////////////////////////// Tipos de datos
// numero (int, double)
// cadena (string)
// boolean (true, false)
// undefine (null)
let miUndefined = undefined;

// type of
console.log(typeof miNumero1); // number
console.log(typeof $miNombre); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof miUndefined);

//////////////////////////////// usar una variable y despues declararla solo con (var)  "HOSTING"   -> no aplica con let
x = 20;
console.log(x); // 20
var x;

//////////////////////////////// const -> es una constante con un valor y ya no poder modificar
const PI = 3.1416;
console.log(PI);
console.log(Math.PI);

const SEGUNDOS_POR_MINUTO = 60;
console.log(SEGUNDOS_POR_MINUTO);
