# JavaScript Arrays 
An array is a special variable, which can hold more than one value:

const fruits = ["Mango", "Apple", "Orange"];

## Why Use Arrays?
However,  if we want to loop through the Grades and find a specific one,
for example : if we have 300 grades

The solution is an array!

An array can hold many values under a single name, and we can access the values by referring to an index number.

# I Solve This Exercise By :
## Accessing Array Elements
You access an array element by referring to the  **index number:**

```
let grade=grades[0];
let grade=grades[105];
```

## The length Property

The **length property** of an array returns the length of an array (the number of array elements).
 ### Example :
 ```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
```

## Looping Array Elements
For example , to loop through an array, is using a for loop:

```
const Names = ["Amal", "Maya", "Jumana"];
let fLen = fruits.length;

let text = " ";
for (let i = 0; i < fLen; i++) {
  text += fruits[i] + "<br>";
}
document.write(" The Names that the most I  like Are: " +  text);
```


### Link

[For more visit w3schools](https://www.w3schools.com/js/js_arrays.asp)









