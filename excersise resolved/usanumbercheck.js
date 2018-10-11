function telephoneCheck(str) {
 let  n=false
 let newstr=str
  let arr=str.split(/[^0-9]/)
  arr=arr.join("").split("")
  if(arr[0]=="1"){
    if (arr.length==11){n=true}
  }
  else {
    if (arr.length==10){n=true}
  }
 if ( newstr.match(/\(/) || newstr.match(/\)/) ) {
  if (newstr.lastIndexOf(")")==newstr.length-1)
   { n= false}
  if(newstr.match(/\(|\)/g).length!=2){n=false} 
}

 if (newstr[0]!="(" && isNaN(newstr[0])){n=false}
 return n
}

telephoneCheck("555-555-5555");