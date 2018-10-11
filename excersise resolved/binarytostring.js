function binaryAgent(str) {
  let arr=str.split(" ");
  let newarr=[]
  arr.forEach((element)=>{
  newarr.push(element.split("").reverse())
  });
  newarr= newarr.map((element)=>{
   element= element.map((e2,i)=>{
      e2=Number(e2)*(2**i);
      return e2;
    });
    element.reverse();
   element= element.reduce((total,element)=>
    {return total+element},0)
    element=String.fromCharCode(element);
    return element;
  })
  let ans=newarr.join("")
  return ans
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");