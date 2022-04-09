function validation(email){
    let shtroudel=[];
    let domain=[];
    let punctuation_marks=false;
    let Valid=true;
    let Forbbiden=false;


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
          email[i] == "[" ||
          email[i] == "]" ||
          email[i] == '"' ||
          email[i] == "," ||
          email[i] == ":" ||
          email[i] == ";" ||
          email[i] == "<" ||
          email[i] == ">" ||
          email[i] == "(" ||
          email[i] == ")" ||
          email[i] == "\\" ||
          email[i] == " "
        ) {
            punctuation_marks = true;
        }
      }

for (let i = shtroudel[shtroudel.length - 1]; i < email.length; i++) {
    if (email[i] == "_") Valid = false;
  }

  if (
    domain[0] == 0 &&
    shtroudel[shtroudel.length - 1] - 1 == domain[domain.length - 1]
  ) {
    Forbbiden = true;
  }

  if (shtroudel.length != 1 || Forbbiden) {
    Valid = false;
  }
  if (punctuation_marks || Forbbiden) Valid = false;
  if (shtroudel[shtroudel.length - 1] >= 63) Valid = false;

return console.log(Valid);



}

