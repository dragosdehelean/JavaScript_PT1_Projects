function factoryFunction(item){

  return 
}


function setupHelp() {
  var helpText = [
      {'id': 'email', 'message': 'Your e-mail address'},
      {'id': 'name', 'message': 'Your full name'},
      {'id': 'age', 'message': 'Your age (you must be over 16)'}
    ];

  for (let i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      document.getElementById('help').innerHTML = item.message;
    };
  }
}

setupHelp();
