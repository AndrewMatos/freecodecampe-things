function palindrome(str) {
  let n = false
  let newstr= str.toLowerCase()
  let arr= newstr.split(/\W+|_/)
  let str1=arr.join("")
  let newarr=str1.split("")
  let str2=newarr.reverse().join("")
  if (str1== str2) {n= true }
  console.log(str1)
  console.log(str2)
  return n;
}