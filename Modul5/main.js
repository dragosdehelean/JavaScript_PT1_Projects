
var person = {  
  name: {
    first : 'Bob', 
    last : 'Smith'
  },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name.first + ' ' + this.name.last+ ' is ' + this.age + ' years old.' 
          + 'He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.'
          );
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  }
};

document.getElementById("submit").addEventListener("click", (event) => {
  
  event.preventDefault();

  var myDataName = document.getElementById('nameInput').value; // ex. "companie"
  var myDataValue = document.getElementById('nameValue').value; // ex. "Step IT Academy"

  person['myDataName'] =  myDataValue;

  console.log(myDataName);
 

})
