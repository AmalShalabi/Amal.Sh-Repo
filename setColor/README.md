# Text-Color-Change In React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## This Project Conatins:

- ### Sass file :
  Install Sass by running this command in terminal:

```
npm i sass
```

### Adding Events

React events are written in camelCase syntax:

`onChange` instead of `onchange`.
React event handlers are written inside curly braces:

`onChange`={color} instead of `onchange`="color()".

### React Hooks

    Hooks allow us to "hook" into React features such as state and lifecycle methods.

````js
    import React, { useState } from "react";
    import ReactDOM from "react-dom/client";

    function FavoriteColor() {
    const [color, setColor] = useState("red");
          return (
            <>
            <h1>My favorite color is {color}!</h1>
            <button
            type="button"
            onClick={() => setColor("blue")} >Blue</button>

              </>
            );
             }
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<FavoriteColor />);




###  React Props

React Props are like function arguments in JavaScript and attributes in HTML.
To send props into a component, use the same syntax as HTML attributes:

````js
      import React from "react";
      import ReactDOM from "react-dom/client";

      function Car(props) {
      return <h2>I am a {props.brand}!</h2>;
}

    const myElement = <Car brand="BMW" />;
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(myElement)
```


