function sumPrimes(num) {
 let arr=[];
 for(let i=2;i<=num;i++){
  if (isPrime(i)==true){
   arr.push(i) ;
  }
 }
 let ans=arr.reduce((total,element)=>{return element+total;},0)
 return ans
}

function isPrime(n){
  let prime=true
  for(let i=2;i<=Math.round(Math.sqrt(n));i++){
  if(n%i==0){prime=false}
  }
  return prime
}

sumPrimes(10);

function des(num){
	let  n=num;
	let  arr=[];
	let obj={};
	if(isPrime(n)==false){
	    for(var i=Math.round(Math.sqrt(n));i>=2;i--){
	    	if(i==4){continue;}
	  		if(n%i==0){
	  			n/=i;
	  			arr.push(i);
	  			i=Math.round(Math.sqrt(n))+1;
	  		    continue;
	  		}
	   	 } 		
	}
    if(isPrime(n)==true){ arr.push(n)};
    arr.forEach((element)=>{
    	if (element in obj) {obj[element]=obj[element]+1;}
    	else {obj[element]=1;}
    })
	return obj
}

function mcm(arr){
  let newarr= arr.sort((a,b)=>{return a-b});
  let newarr2=[]
  for(let i=newarr[0];i<=newarr[1];i++){
  	newarr2.push(i);
  }
  let obj={}
  let mexp={}
  newarr2.forEach((element)=>{
  	   obj=des(element);
	   for (var key in obj){
	   	 if (!obj.hasOwnProperty(key)) continue;
         if (key in mexp){
         	if(mexp[key]>=obj[key]){mexp[key]=mexp[key]}
         	else {mexp[key]=obj[key];}
         }
         else{
         mexp[key]=obj[key]	;
         }
	   }
  })
  var ans=1;
  for (var key in mexp){
   ans*=(key**mexp[key])
  }
  
 return ans
}



