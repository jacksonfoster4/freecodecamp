/*Fill in the object constructor with the following methods below:

`getFirstName() getLastName() getFullName() setFirstName(first)
setLastName(last) setFullName(firstAndLast)`

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to
be a string.

These methods must be the only available means of interacting with the object. */
var Person = function(firstAndLast) {
  if(typeof firstAndLast != "string") return "Name must be a string";
  let firstName = firstAndLast.split(" ")[0]
  let lastName = firstAndLast.split(" ")[1]
  let fullName = (first, last) => `${first} ${last}`;

  this.getFullName = function() {
    return fullName(firstName, lastName);
  };
  this.setFullName = function(fullName){
    firstName = fullName.split(" ")[0]
    lastName = fullName.split(" ")[1]
  }
  this.getFirstName = function(){
    return firstName
  }
  this.getLastName = function(){
    return lastName
  }
  this.setFirstName = function(first){
    firstName = first
  }
  this.setLastName = function(last){
    lastName = last
  }
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
