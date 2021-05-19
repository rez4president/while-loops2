let firstNum = +prompt("Enter a number", "");
let sum = 0;
let i = 1; // We create the i variable because its value will change
// from 1 upto the entered number

while(i <= firstNum){
	sum += i;
	i++;
}
console.log(sum);