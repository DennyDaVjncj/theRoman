var corpus = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

const injctn13=str=> {
  let codeDataStructure = str.split("");
  let optimusPrime=[];
  
  document.getElementById("rot13").addEventListener("click",()=>{
    innerText = injctn13(p.innerText)
    injctn13();
  });
  
  optimusPrime=codeDataStructure.map((actor)=>{
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

const btn = document.getElementById("rot12");
if (btn) {
  btn.addEventListener("click",()=> {
    // Find the first <p> in the content section
    const p = document.getElementById("dvc");
    if (p) {
      innerText = injctn13(p.innerText)//code relocated to hoisted fjunction;
    }
  });
}





/**
 * write logic for updating the inner text upon clicking the button
 * gettt logic functtioning again
 */
