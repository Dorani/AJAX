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
