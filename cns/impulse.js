let DOM=document.getElementById("");

var corpus = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

function rot13(str) {
  let codeDataStructure = str.split("");
  let optimusPrime=[];

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

rot13("SERR PBQR PNZC");

/**
 * write out logic for returning the string: "free code camp"
 * incorporate DOM manipulation, for ui/ux 
 */
