function addTogether(...args) {
  if (args.length>1){
    if(typeof args[0]=="number" && typeof args[1]=="number") {return args[0]+args[1]}
    }
  else if(typeof args[0]=="number")
   {
   let p= args[0];
   return function sumTwoAnd(arg2){
    if (typeof arg2=="number"){return p+arg2}
   }
  }
  
}


addTogether(2,3);