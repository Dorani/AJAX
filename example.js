
//1. Create an XMLHTTP request obj:
var ajax = new XMLHttpRequest();
//create var ajax which contains a new obj
//tells the web browser get ready to work with ajax

//----------

//2. Create a callback function:
ajax.onreadystatechange = function(){
  if (ajax.readyState === 4){
    //First thing you need to do is select that Div with id.
    //The next thing we do is set its innerHTML property
    //innerHTML is a property that contains all the HTML inside an element

    document.getElementByID('ajax').innerHTML = ajax.responseText;
  }
};
//event is triggered whenever there is a change with an ajax request,
//we create the callback to respond to that request
//the above programing sets up a function that runs everytime there is a change
//in the state in the ajax request

//now we create a condit statement to test the state, if its = 4
//we got the response back, We'll take the full AJAX response and place it into the web page.
//The data we get back is going to be a chunk of HTML.
//And we'll place it inside a div tag that has the ID of AJAX.

//Here we're taking the response text, and we're storing it inside of the div

//3. Open a request:
ajax.open('GET', 'sidebar.html');
//function that takes the http method (get and post) get to send a request
//the url is where the req is going, file for examples
//open function gets browser ready to make that request

//4. Sending the request
ajax.send();
