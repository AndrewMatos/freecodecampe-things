function rot13(str) { // LBH QVQ VG!
 let arr=str.split("")
  arr=arr.map((element)=>{
      if (element.match(/[A-Z]/)){
        element= element.charCodeAt("element");
      }
      return element;
  })
 let newarr=arr.map((element)=>{
     if (element>=65 && element<=90 ){
         element-= 13;
         if (element<65){
             element=91-(65-element);
         }
         element=String.fromCharCode(element);
     }
    
     return element;
 })

  let ans= newarr.join("") 
  return ans;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");