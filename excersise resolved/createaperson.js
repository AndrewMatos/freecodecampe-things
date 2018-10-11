var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var arr=firstAndLast.split(" ");
    var firstname=arr[0];
    var lastname=arr[1];

  this.getFullName =()=> {return firstname+" "+lastname;};
  this.getFirstName=()=>{return firstname};
  this.getLastName=()=>{return lastname};
  this.setFirstName=(first)=>{firstname=first}
  this.setLastName=(last)=>{lastname=last}
  this.setFullName=(firstAndLast)=>{
      arr=firstAndLast.split(" ");
      firstname=arr[0];
      lastname=arr[1];
  }
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();