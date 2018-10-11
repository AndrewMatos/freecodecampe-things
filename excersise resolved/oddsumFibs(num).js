function sumFibs(num) {
  let arr=[1,1];
  let n
  for(let i=1;i<num-1;i++){
    n=arr[i-1];
    arr.push(n+arr[i]);
  }
  arr=arr.filter((element)=>{
   if(element%2!=0&&element<=num){return true}
  });

  arr=arr.reduce((total,element)=>{return total + element},0)
  
return arr
}

sumFibs(4);
