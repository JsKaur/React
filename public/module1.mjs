import dza , {b,c,d} from "./module2.mjs";

console.log(dza);
// we can write dza as anything else as it is going to be default one.

// but b,c, and d are not exported by default so should be imported as b,c, and d.
console.log(b);
console.log(c);
console.log(d);