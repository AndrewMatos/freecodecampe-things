function convert(str,first,four,five,nine){
  var newstr=""
  switch(true){
      case str==0:
      newstr=""
      break;
      case str<4:
      newstr=first.repeat(Number(str))
      break;
      case str==4:
      newstr=four
      break;
      case str>=5 && str<9:
      newstr=five+first.repeat(Number(str)-5)
      break;
      case str==9:
      newstr=nine
      break;
    }
  
 return newstr
}

function convertToRoman(num) {
 let n =num.toString()
 let arr=n.split("")
  arr=arr.reverse()
  arr=arr.map((element,index)=>{
  if (index==0){
  element=convert(element,"I","IV","V","IX")  
  }
  else if (index==1){
  element=convert(element,"X","XL","L","XC") 
  }
  else if (index==2){
  element=convert(element,"C","CD","D","CM")    
  }
  else if (index==3){
  element=convert(element,"M","ĪV̄","V̄","IX")    
  }
  return element
 })
let ans=arr.reverse().join("")
return ans
}

convertToRoman(36);