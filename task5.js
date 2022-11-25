//a.print odd numbers in an array
(function(z){
    console.log(z.filter(n => n%2));
})([1,2,3,4,5,6,7,8,9,10,11,12]);


//b.	Convert all the strings to title caps in a string array
function title(str) {
  return str.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
}
console.log(title('hello world'));


//c.sum of allnumbers in an array
(function(y){
    console.log(y.reduce(function(a, b){
        return a + b;
    }, 0));
})([1, 2, 3, 4, 5]);


//d.	Return all the prime numbers in an array
const array = [-5, -3, -2, -1, ...Array(20).keys()]; 
function isPrime(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime));


// e.	Return all the palindromes in an array
function isPalindrome(s)
{
    // Copy string s char into string a
    let a = s;
    s = s.split('').reverse().join('');
 
    // Check if two string are equal or not
    return s == a;
}
console.log(isPalindrome('abcdcba'))


// g.	Remove duplicates from an array
function removeDuplicates(arr) {
  return arr.filter((item, 
      index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(["apple", "mango", "apple", 
"orange", "mango", "mango"]));


// h.	Rotate an array by k times
function RotateLeft(arr, n) {
  return arr.map(() => {
    if (n === arr.length) {
      n = 0;
    }
        
    return arr[n++];
  });
}

console.log(RotateLeft([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],4));

//a.print odd numbers in an array n arrow functions
const isOdd = (n) => (n & 1) === 1;

const num = [1,2,3,4,5,6,7,8,9];

console.log( `Odd numbers are ${ num.filter( n => isOdd(n))}` );
//b.	Convert all the strings to title caps in a string array
function titleCase(str) {
  return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}
console.log(titleCase("I'm a little tea pot")); // I'm A Little tea Pot


// c.sum of allnumbers in an array using arrow function
const sum1 = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum1);

//d.	Return all the prime numbers in an array using arrow function 
const newArray = [1, 3, 2, 5, 10];
const isPrime1 = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = newArray.filter(isPrime1);
console.log(myPrimeArray);

//e.	Return all the palindromes in an array
const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

console.log(getAllPalindromes(["hello", "noon"]));
 