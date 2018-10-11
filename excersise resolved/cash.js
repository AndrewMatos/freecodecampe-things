if(res>=obj["ONE HUNDRED"]){
     let n
     while(obj["ONE HUNDRED"]>0){
      res-=100;
      n+=100;
      obj["ONE HUNDRED"]-=100;
      if
     }
     change[change].push["ONE HUNDRED",n]
   }


function cash(array, result){
	newarr=[]
	switch(array[0]){
		case "ONE HUNDRED":
		var n=100
		break;
		case "TWENTY":
		var n=20
		break;
		case "TEN":
		var n=10
		break;
		case"FIVE":
		var n=5
		break;
		case"DOLAR":
		var n=1
		break;
		case"QUARTER":
		var n=0.25
		break;
		case"DIME":
		var n=0.1
		break;
		case"NICKEL":
		var n=0.05
		break;
		case "PENNY":
		var n=0.01
		break;
	}
	let i=0
	while (array[1]>0){
	  if (result<n){break;}
      result-=n;
      array[1]-=n;
      i++;
	}
    newarr.push(array[0],(n*i));
   return newarr
}