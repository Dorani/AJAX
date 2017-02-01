var ajax = new XMLHttpRequest();// request obj, the new var holds the obj that has its on set of prop and methods
ajax.onreadystatechange = function(){//ready state change event add our callback function to it
  if(ajax.readyState === 4){// make sure we receive all the json data
    var employees = JSON.parse(ajax.responseText);//method built into all web browser, string conversion.
    var statusHTML = '<ul class="bulleted">';
    for (var i = 0; i < employees.length; i++){// this loop will run once for each item in the array
      statusHTML += '<li class="in">';// check status if they are in office, if it is, we add more html to the status html var
    } else {
      statusHTML += '<li class="out">';// else add to out
    }
   statusHTML += employees[i].name;//as the loop runs the statusHTML var will continue to grow with one new html list item added each time
   statusHTML += '<li>';
    }
    statusHTML +='</ul>';
  }
};
ajax.open('GET', 'data/employees.json');//open a request, using the get method to load a file filled with json data located in a folder, normally we point to a server side script
ajax.send();// send the request, the callback function does nothing till we send the request

//json . parse is complete it returns a js object
//json.parse converted the text into a js array of items that we can manipualte with js
//employees is an array with a list of obj, obj have key val pair
