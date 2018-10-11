function check(array, result){
	let arr=[...array]
  let newarr=[];
  let i=0
	switch(arr[0]){
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
		case"ONE":
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
		var n=0.01;
		break;
	}
	
	if (arr[1]>0 && result>n){
		while (arr[1]>0){
	      result-=n;
	      arr[1]-=n;
	      i++;
	      if (result<n){break;}
		}
	}
  if (n==0.01){i+=1};
  newarr.push(arr[0],(n*i));
   return newarr
}


function checkCashRegister(price, cash, cid) {
  let change={status:"",change:[]};
  let res = cash-price;
  let arr=[...cid];
  arr.reverse();
  let newarr=[]
  for (let i=0; i<arr.length;i++){
    newarr= check(arr[i],res);
    if (newarr[1]!=undefined){
    res-=newarr[1];
    res=Number(parseFloat(res).toFixed(2))
    change["change"].push(newarr);}
    if (res==0){break}
   }

   if(res!=0){
     change["status"]="INSUFFICIENT_FUNDS";
     change["change"]=[]}
   else{   
     let n=true;
      change["change"].forEach((element,index)=>{
        if (element[1]!=arr[index][1])
        {n=false}
      })
    if (n){
     change["status"]="CLOSED";
      change["change"].reverse();
    }
    else{
     change["status"]="OPEN"; 
     change["change"]=change["change"].filter((element)=>{
      if (element[1]!=0){return element}
     })
    }
   }

   return change
}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);