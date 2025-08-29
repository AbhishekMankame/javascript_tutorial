const marvel_heros = ["Thor", "Iron man", "Spider man"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros); // yaha par arrays merge nahi hue hai, array ke anday array aagaya
//console.log(marvel_heros);
// console.log(marvel_heros.length);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);
// console.log(marvel_heros[2][1]);

// concat
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);