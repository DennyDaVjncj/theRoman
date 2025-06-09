var corpus = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

// const btn = document.getElementById("rot12").addEventListener("click",()=>{
//   const drpDwn=document.getElementById("picker");
//   const rShift=parseInt(drpDwn.value,10);
//   const uiCntnt=document.getElementById("rot13");

//   if(uiCntnt)uiCntnt.innerText=injctn13(rShift);
// });

const injctn13=str=> {
  let codeDataStructure = str.split(",");
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
injctn13("da Vjncj Code");//my hunch is that this value should be linked to the values selected by user, from dropdown, and then the text on screen, should be shifted according to that value.

/**
 * collect values from dropdown, and then shift the text on screen, according to that value. According to priciples from the cesar cipher, the text should be shifted by the value selected by user.
 */