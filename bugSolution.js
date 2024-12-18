function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else if (a > 0 && b > 0) { // Added check for both a and b being greater than 0
    return foo(a - 1, b - 1);
  } else {
    return 0; //Handle other cases that could cause issues.
  }
}
console.log(foo(5, 5)); //This will now return the correct result without error.