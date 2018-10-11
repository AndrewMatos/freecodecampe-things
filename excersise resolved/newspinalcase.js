
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  let newstr= str.replace(/([A-Z])/g, " $1");
  newstr=newstr.toLowerCase();
  let arr=newstr.split(/\W|_/g);
  arr=arr.filter((element)=>{return element!=""});
  let ans=arr.join("-");
  // --David St. Hubbins
  return ans;
}

spinalCase("thisIsSpinalTap");