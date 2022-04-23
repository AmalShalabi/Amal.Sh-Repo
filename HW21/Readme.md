# HW NO. 21


Validating email is a very important point while validating an HTML form.  An email is a string or a subset of ASCII characters that are separated into two parts by “@” symbol.

# Assingment about #
 ### CallBack ,  Eventlister and JSON:

 ### The repo contains

* ### html
  This file contains the base HTML code that has all the elements defined for the webpage.
* ### CSS
This file contains the CSS styles that are needed for styling the HTML elements in the webpage. The styles are self-explanatory and you are free to use or change these styles according to your preference.
##### I set CSS style only to localsorage part. 

* ### Javascript
There are 2 files contains the JavaScript code  . Just The Localstorage file is linked with html file.


The data being stored can be accessed using JavaScript, which gives us the ability to leverage client-side scripting to do many things that have traditionally involved server-side programming and relational databases. In this Assingment, I used Web Storage objects:

### *JavaScript Cookies

Cookies are data, stored in small text files, on our computer.

When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.
Cookies were invented to solve the problem "how to remember information about the user":

* When a user visits a web page, his/her name can be stored in a cookie.
* Next time the user visits the page, the cookie "remembers" his/her name.

Cookies are saved in name-value pairs like:
```
username = Amal Shalabi
```

### *localStorage
localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.

#### The keys and the values are always strings (note that, as with objects, integer keys will be automatically converted to strings).

### Setting item to the localStorage

When we set data to be stored in a localStorage, it will be stored as a string. If we are storing an array or an object, we should stringify it first to keep the format unless otherwise we lose the array structure or the object structure of the original data.

We store data in the localStorage using the localStorage.setItem method :

```js
//syntax
localStorage.setItem('key', 'value')
```
### Getting item from localStorage

We get data from the local storage using _localStorage.getItem()_ method.

```js
//syntax
localStorage.getItem('key')