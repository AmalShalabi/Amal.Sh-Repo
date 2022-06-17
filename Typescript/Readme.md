# TypeScript
Understanding TypeScript -

This repository contains my code solutions from the [TypeScript exercises](https://typescript-exercises.github.io/#exercise=1&file=%2Findex.ts). 

# Instructions
copy http repository: 
open Visual Studio Code
open a new terminal
type git clone and paste the link
type a command code .


## Usage with TypeScript
* Includes the TypeScript definitions for node. You can use npm to install this by typing the following into a terminal window:


```sh
 npm install --save-dev
```

## Table of All Contents:
- Type Aliases
-  Interfaces
- Union Types
    - Union | (OR)
    `Union` types are used when a value can be more than a single type.Such as when a property would be `string` or `number`.

- Functions
    - Return Type
    - Void Return Type
    - Optional Parameters

- Utility Types
    - `Partial`:changes all the properties in an object to be optional.
    - `Required`:changes all the properties in an object to be required.
    - `Omit`: removes keys from an object type.
Eample:

```ts
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob'
  // `Omit` has removed age and location from the type and they can't be defined here
};
```
- Keyof
 `Keyof` is a keyword in TypeScript which is used to extract the key type from an object type.

## Contributing
External contributions are very welcome! 


