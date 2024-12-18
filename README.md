# Stack Overflow Error in Recursive Function

This repository demonstrates a common error in recursive functions:  the base cases are not properly handled, resulting in a stack overflow error.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug Description:

The recursive function `foo` is designed to calculate something (details not crucial to the error). However, the base cases are insufficient.  When both `a` and `b` are greater than 0, the recursion continues indefinitely, exceeding the call stack limit and causing a stack overflow.

## Solution:

The corrected version (`bugSolution.js`) addresses this by adding a check to ensure that at least one of the input values is 0 before proceeding with the calculation.