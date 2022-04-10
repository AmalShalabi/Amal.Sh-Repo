# Home Work No. 6

## Functions
We can either write our own functions, or use a pre-written set of functions in our programming language code library, to perform specialized tasks. Creating these functions is one thing, but we will need to master the idea that we can stack multiple programming steps in a single action when we program our functions correctly. In this task, we learned how to use functions to solve complex problems. 

# I Used Function As:

*  Functions As Values:
JavaScript functions can be used as values:

### Example :
```
function myFunction(x, y) {
  return x * y;
}

let a = myFunction(4, 3);
```
* Functions AS Objects
The typeof operator in JavaScript returns "function" for functions. But, JavaScript functions can best be described as objects.JavaScript functions have both properties and methods.The arguments.length property returns the number of arguments received when the function was invoked:

### Example :
```
function myFunction(x, y) {
  return arguments.length;
}
```