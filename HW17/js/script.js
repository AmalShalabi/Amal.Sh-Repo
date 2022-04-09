function validation(email){
  var shtroudel=[], domain=[],marks=false;
  var Valid=true;
  var Forbbiden=false;


  for (let i = 0; i < email.length; i++) {
      if (email[i] == "@") {
        shtroudel.push(i);
      }
  
      if (email[i] == '"') {
          domain.push(i);
      }
    }

    for (let i = 0; i < shtroudel[shtroudel.length - 1]; i++) {
      if (
        email[i] == [" ", "!", "#", "$", "%", "&", "'", "*", "+", "-", "/", "=", "?", "^", "_", "`", "{", "|", "}", "~"]
    
      ) {
          marks = true;
      }
    }

for (let i = shtroudel[shtroudel.length - 1]; i < email.length; i++) {
  if (email[i] == "_") Valid = false;
}


if (marks || Forbbiden) Valid = false;
if (shtroudel[shtroudel.length - 1] >= 63) Valid = false;

return console.log(Valid);



}
