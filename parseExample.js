var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){
  if(ajax.readyState === 4){
    var employees = JSON.parse(ajax.responseText);
  }
};
ajax.open('GET', 'data/employees.json');
ajax.send();
