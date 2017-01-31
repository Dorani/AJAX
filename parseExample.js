var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){
  if(ajax.readyState === 4){
    var employees = JSON.parse(ajax.responseText);
  }
};
ajax.open('GET', 'data/employees.json');
ajax.send();

//json . parse is complete it returns a js object
//json.parse converted the text into a js array of items that we can manipualte with js
//employees is an array with a list of obj, obj have key val pair
