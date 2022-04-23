
///========================================================================JSON Q1
const books=[
    {
        Book_ID :001,
        Book:"My Sister's Keeper",
        Book_Author:"Jodi Picoult",
        Book_Price:"20$" 
        

    },
    {
        Book_ID :002,
        Book:"Before I Go to Sleep",
        Book_Author:"S.J. Watson",
        Book_Price:"35$" 

    },
    
    {
        Book_ID :003,
        Book:"The Leader Who Had No Title",
        Book_Author:"Robin Sharma",
        Book_Price:"25$" 

    }
]
// stringifing 
const JSON_TXT=JSON.stringify(books);

alert(JSON_TXT);

// returning the string  to represent its' objects 

const items=JSON.parse(JSON_TXT);
for (let i of books) {
    console.log(i);
  }

for (let i of items) {
    console.log(i);
  }
  for (let i of items) {
    document.write(
'<br>'+
      "Book ID: " +
        i.Book_ID + '<br>'+
        "Book Name: " +
        i.Book +'<br>'+
        "Book Price: " +
        i.Book_Price +'<br>'+
        "Book Author: " +
        i.Book_Author +'<br>'

        +     '<br>'+   "---------------------"

    );
  }




///========================================================================JSON Q1
const myCat={
    Name: "______",
    Age: "______",
    Color: " ______",
    Is_Sterile: "_______"
};

const myjson1=JSON.stringify(myCat);
alert(myjson1);

localStorage.setItem("testJSON", myjson1);
let txt=localStorage.getItem("testJSON")

let yourCat=JSON.parse(txt);


document.write( "<br><b>myCat</b>" +'<br>'+ '<br>' + "Name:" + yourCat.Name +'<br>'+ "Age:"+ yourCat.Age + '<br>'+ "Color:"+ yourCat.Color+ '<br>'+  "Is_Sterile :"+ yourCat.Is_Sterile

);

