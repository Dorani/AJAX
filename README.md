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
