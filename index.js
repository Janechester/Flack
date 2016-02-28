var express = require("express");
var app = express();




app.listen(3000);

var login = require("facebook-chat-api");

// Create simple echo bot 
login({
    email: "jane_chester@hotmail.com",
    password: "courtney!"
}, function callback(err, api) {
    if (err) return console.error(err);

    api.listen(function callback(err, message) {

        if (message.body.toLowerCase() === "hi") {
            api.sendMessage("Hey there! How can I help you?", message.threadID);

       
        		} else if(message.body.toLowerCase() === "hey") {
            api.sendMessage("gooooodbye", message.threadID);
                } else if(message.body.toLowerCase() === "yo") {
            api.sendMessage("gooooodbye", message.threadID);
                } else if(message.body.toLowerCase() === "hello") {
            api.sendMessage("gooooodbye", message.threadID);
                } else if(message.body.toLowerCase() === "howdy") {
            api.sendMessage("gooooodbye", message.threadID);


  				} else if (message.body.toLowerCase().includes("date")) {
            api.sendMessage("To see what dates we have available please jump onto out website at https://pt.hostelsnap.com/publicreservations?_ga=1.248113991.1907977898.1454043607", message.threadID);
              } else if (message.body.toLowerCase().includes("parking")) {
            api.sendMessage("Unfortunately we do not have parking space in the hostel, however there is close by parking for", message.threadID);
              } else if (message.body.toLowerCase().includes("ok")) {
            api.sendMessage("Hey there! How can I help you?", message.threadID);
              } else if (message.body.toLowerCase().includes("wassup")) {
            api.sendMessage("Hey there! How can I help you?", message.threadID);
              } else if (message.body.toLowerCase().includes("2222")) {
            api.sendMessage("Hey there! How can I help you?", message.threadID);

        } else {
        	api.sendMessage("sorry we didn't understand your question - could you please clarify this?")
        }

    });
});

// if(){

// } else if(){

// } else if(){

// } else {

// }



//look into promisises
//node js bluebird




// api.sendMessage(message.if (true) {}, messsage.threadID);