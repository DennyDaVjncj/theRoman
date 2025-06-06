var corpus = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

// const btn = Document.getElementById("rot12");
// if (btn) {
// btn.addEventListener("click",()=> {
//   const p = Document.getElementById("rot13");
//   if (p) {
//     p.innerText = injctn13(p.innerText)//I want this to result in the text being updated to a shifted value, according to the amount selected by the user.
//   }
// });
// }

const injctn13=str=> {
  let codeDataStructure = str.split(" ");
  let optimusPrime=[];
  
  optimusPrime=codeDataStructure.map(actor=>{
    if(corpus.hasOwnProperty(actor)){
      actor=corpus[actor];
    }  
    console.log(actor);
    return actor
  })
  console.log(str)
  return str;
}
injctn13("le da Vjncj code");

/**
 * write logic for updating the inner text upon clicking the button
 * gettt logic functtioning again
 */
