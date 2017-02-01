function sendAjax(){
  $('#ajax').load(sidebar.html);
  $('#load').hide();
}
//these are the 4 steps for ajax processes
//jquery does it in 3 lines of code

//select the element with id of ajax
//.load is method, aka shorthand command / jquery function for requesting a chunk of html and inserting in a page
//easily hide the button as well with jquery method

//makes programing faster and easier.

//find shorthand jquery methods on api
var data = {
  firstName: "Dave",
  lastName: "Thompson"
};
var callback = function(response){
  //do something with response
}
$.get(url, data, callback);

// passing values into the get method
//script might be located at the root of the web server
//data added to url as a query string, appears at the end of url, data sent to web server so the server can respond appro
//finally the callback function processes the returned data, works like the js callback
//but with jquery you dont need to check the xhr ready status, and http status errors
//calback functions ONLY runs with all things are good!


//Want to see a faster way:

function sendAjax(){
  $.get('sidebar.html', function(response){
    $('#ajax').html(response);
  });
  $('#load').hide();
}
//we simply pass a url and callback function
//load method is faster





$(document).ready(function(){
  var url = "../data/employees.json";
  $.getJSON(url, function(response){
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(index, employee){
      if (employee.inoffice === true){
        statusHTML += '<li class="in">';// check status if they are in office, if it is, we add more html to the status html var
      } else {
        statusHTML += '<li class="out">';// else add to out
      }
     statusHTML += employees[i].name;//as the loop runs the statusHTML var will continue to grow with one new html list item added each time
     statusHTML += '<li>';
      }

      }
    });
    statusHTML +='</ul>';
    $('#employeeList').html(statusHTML);
  });
});
