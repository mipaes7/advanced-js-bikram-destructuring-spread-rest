//RESUELVE LOS EJERCICIOS AQUÍ

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana, ] = empleados;
const datosAna = ana;
const [luis,,] = empleados;
const emailLuis = luis.email;

// Inicialmente
let a = 5;
let b = 3;

[a, b] = [b , a];


const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
  const {today, tomorrow} = HIGH_TEMPERATURES;
  const maximaHoy = today;
  const maximaManana = tomorrow;
  console.log(maximaHoy);
  console.log(maximaManana);
    
  function sumEveryOther(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
  }

function addOnlyNums(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof(args[i]) === 'number') {
            total += args[i];
        }
    }
    return total;
}

console.log(addOnlyNums(1, "perro", 2, 4));

function countTheArgs(...args) {
    return args.length;
}


function combineTwoArrays(a1, a2) {
    return [...a1, ...a2];
}

function onlyUniques(...args) {
    // let uniques = [];
    // let box = {};
    // for (let arg of args) {
    //     if (!box[arg]) box[arg] = 1;
    //     else box[arg] += 1;
    // }

    // console.log(box);

    // for (let key in box) {
    //     if (typeof(box[key]) === 'number') {
    //         uniques.push(Number(key));
    //     }
    //     if (typeof(box[key]) !== 'number') {
    //         uniques.push(key);
    //     }

    // }
    // return uniques;

    return [...new Set(args)]
}

console.log(onlyUniques(1,1,2,2,3));

function combineAllArrays(...args) {
    return args.flat();
}

// console.log(combineAllArrays(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])));

function sumAndSquare(...args) {
    let totalSquared = 0;
    for (let i = 0; i < args.length; i++) {
        totalSquared += args[i]*args[i];
    }

    return totalSquared;
}

// console.log(sumAndSquare(2,2,3));
