function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var eR = 6367.4447;
 let newarr=arr.map((element)=>{
   element["orbitalPeriod"]=
   2*Math.PI*(Math.sqrt(((eR+element["avgAlt"])**3)/GM));
   element["orbitalPeriod"]=Math.round(element["orbitalPeriod"]);
   delete element["avgAlt"];
   return element
  });
  return newarr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);