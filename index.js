//divisible by 3 = fizz
//divisible by 5 = Buzz
//divisible by 3 and 5 = fizzBuzz
//not divisible by both
//not a number

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";

  return input;
}
const output = fizzBuzz(false);

console.log(output);
