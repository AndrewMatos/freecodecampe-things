function fearNotLetter(str) {
   let ans=""
    let arr=[];
    for(let i=str.charCodeAt(0);i<=str.charCodeAt(str.length-1);i++){
    arr.push(String.fromCharCode(i));
    }
  arr=arr.filter((a)=>{
    if(str.indexOf(a)==-1){return true}
  })
 if (arr[0]!=undefined){
   ans=arr.join("");
 }
 else{ans=arr[0]}
 return ans
}

fearNotLetter("abce");