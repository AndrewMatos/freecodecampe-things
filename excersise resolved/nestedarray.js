function steamrollArray(arr) {
 let  newarr=[...arr];
 arr.forEach(()=>{
 newarr=[].concat.apply([],newarr);
 })
  return newarr;
}

steamrollArray([1, [2], [3, [[4]]]]);