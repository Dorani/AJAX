
//Create an XMLHTTP request obj:
var ajax = new XMLHttpRequest();
//create var ajax which contains a new obj
//tells the web browser get ready to work with ajax

//----------

//Create a callback function:
ajax.onreadystatechange = function(){
  if (ajax.readyState === 4){
    document.getElementByID('ajax').innerHTML = ajax.responseText;
  }
};
//event is triggered whenever there is a change with an ajax request,
//we create the callback to respond to that request
//the above programing sets up a function that runs everytime there is a change
//in the state in the ajax request
