# AJAX

AJAX updates webpages by asking the server for info which returns data to the
web browser then JS processes that data to selectively change part of the webpage.

The amount of data the server returns is usually much less than that sent when you
ask for full webpages

request to server
server responds

#What does it stand for?

- J: javascript used to send out a request, and process the incoming response as well
update the webpages

- A: asynchronous refers to how the request is sent
meaning when a web browser makes an ajax request, it does not stop
what its doing while waiting for a response, asynchronous request are set without
waiting, user can keep navigating throughout the webpage. You can also send out
multiple request and even though you send them 1 after the other you don't know
when the server will return info, its all based on speed of server, complexity of request and internet trafic.

- X: XML seen as the format servers receive data in.

##How does it work:

- Create an XMLHTTP request obj: this step tells the web browser get ready, you want
to send an ajax request and the web browser has to create an obj with all the methods necessary to send and receive data

- Create a callback function: programing you want to run when server returns the response. The callback is when you process the returned data and update the html.

- Open a request: browser receives 2 pieces of info, the method (get or post) and the url when the request is sent

- Send request to the web server.

## Get and Post:

- Get to receive data like a webpage image or other file from a server, all thats required is url
- Post when your sending data that will be saved, sensitive stuff, in the body of the request, the form data is sent separate from url, you can send more info and is very secure
Header for request needs to be set up

## XML AND JSON

- xml allows you to create data that is well organized
- json is best to exchange data using ajax, works well with js as opposed to XML

## Callbacks
- programing you want to run when server sends back its response : new tweets to a page, updating location on map etc..

- you create a callback that responds to a change in the ready state, from 0 to 4.
- ready state change event fires up multiple times until its 4, received data from server
- sometimes you get a file not found error, so cant update page
- we can also check the status property though, 200 means ok, 404 is not found.

## json
- a way to use js to pass info around
- formatted as an array or obj
- its best to combine both

## PARSING
- In order to use json data we need to take the string we receive and convert into js
- This is called parsing, it can be done using a single command.

### Presenting

- Create a new HTML list items
- Check the appropriate property, in this case "in office", if false add out, if true in
- Get the value of name prop, then insert it in li taking
- close li tag

#### Replacing js with jquery
- add the jquery script tag 1st in the index
- check js file

#### $.ajax method

- settings argument is a js object containing one or more key value pairs setting a few options
- see post examples

##### What is an api

- application programing interface
 - a method for accessing content via a 3rd party
 - what you can get and how you can get it
 - not all sites offer apis
 - sometimes, some apis are js apis so you can access any apis using ajax and NOT server side programing
 - We will be using flikrs api to create an app!

###### Flikr api Project

- 1st we need to get an api key: acts like a password, lets the server know who is making the request, lets the server limit access to the service
- Flikr, we don't need an api key we can use a url : https://api.flickr.com/services/feeds/photos_public.gne that let you access photos and diff info.
