// function add(a, b) {
//     return a + b;
// }

// const { application } = require("express")

// var add = (a, b) => a + b;
// var addition = add(3, 64);
// console.log(addition);


// call back function  --> function which called automatically after one function is completed.

// function callback() {
//     console.log("function is successfully called.")
// }


/*
const add = function (a, b, callback) {
    var result = a + b;
    console.log('result : ', result);
    callback()
}
// add(7, 9, callback);
add(6, 4, () => console.log("Function is completed")) // here we have created a inline function
*/


// Learn about 'fs' and 'os' module:
// - fs creates a file and writes message inside.
// - os log user's details
/*
var fs = require('fs');
var os = require('os');
 
var user = os.userInfo();
console.log(user);
console.log(user.username);
 
fs.appendFile('greet.txt', 'Hi' + user.username + '!\n', () => {
    console.log("File is created.");
});
 
*/


// Import and export in node

// const notes = require('./notes');
// console.log(notes.age); // to export multiple things we use module.exports ={ parameter1,parameter2 }
// console.log(notes.addNumber(4, 2))



// lodash package in nodejs-> provides a range of utility functions to work with arrays, numbers, objects, strings, and more.
// var _ = require('lodash');

// var data = ["aniket", "yadav", 2, 3, 1, 2, 2, "aniket"];
// var filter = _.uniq(data);
// console.log(filter);
// console.log(_.isString('hehehe'))


// < ----------- Express js -----------> // Day 2


/*
Server -> it is a computer program which responsible for preparing and delievering data to other computers
Analogy:
Server => waiter
Database => chef
User => customer
 
JSON -> organised data format method to exchange btwn computers.
    Lightweight
         In most cases, JSON represented as String
 
 
API -> imagine as a menu in restaurant, lots of options each option give u a different order.
        collection of that list = menu card = API
        Options in that list = Endpoint
*/


/*
    // Creating a server
* creating a server in nodejs via expressJs.
 * expressJs is a popular framework for building web app and APIs using nodeJs.
 * When you create an expressJs application, you're setting up the foundation of handling incoming requests and defining how your application responds to them.

//methods to share data
How data is sent and recieved btwn a client(web browser) and a server(built with Nodejs).

    * GET
    * POST
    * PATCH
    * DELETE


const express = require('express')
const app = express();

app.get('/', function (req, res) {
    res.send("Welcome to our resturant")
})

app.get('/bhatoore', function (req, res) {
    res.send("Here we serve best chhole bhature in south india")
})

app.get('/idli', (req, res) => {
    var customised_idli = {
        type: "Rava idli",
        size: '10 cm dia',
        is_sambar: true,
        is_chutney: false
    }
    res.send(customised_idli)
})

app.listen(8000, () => {
    console.log("Listening on Port 8000")
})

*/


// < ----------- DataBase -----------> // Day 3
Web development = client + server + database
Let's suppose we want to open a restuarant and there is lots of data around it.

    Each person's details:
    * Name
    * Age
    * Work
    * MObile_no
    * Salary
    * Email
    * Address
     
    Menu's details:
    * Name of dish
        * Price
        * Taste(like sour, sweet)
        * is_drink(boolean true, false)
        * iNgredients(array of data - [Wheat, rice, sugar])
        * Number of sales

    *** We use MongoDB as database ***
