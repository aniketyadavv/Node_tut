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

// Creating server only using Nodejs --- SO SO way 

const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page")
    }
    else if (req.url === "/about") {
        res.end("About Page")
    }
    else if (req.url === "/contact") {
        res.end("Contact Page")
    }
    else {
        res.end("404 Page not found")
    }
});

server.listen(8000)



// Create server by using express

import express from "express";

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
app.post('/items', (req, res) => {
    res.send({
        "employee": {
            "name": "sonoo",
            "salary": 56000,
            "married": true
        }
    })
})
app.listen(8000, () => {
    console.log("App is working");
})


*/


// < ----------- DataBase -----------> // Day 3
/*
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

    **** We use MongoDB as database ****
   
   ****Postman is use as a frontend to process database.****

   Connect MongoDB with NodeJS:
        Now, To connect MongoDB with NodeJS we need a MongoDB driver (a set
        of programs)
        A MongoDB driver is essential when connecting Node.js with MongoDB
        because it acts as a bridge between your Node.js application and the
        MongoDB database.
        MongoDB speaks its own language (protocol) to interact with the database
        server.
        Node.js communicates in JavaScript.
        The driver translates the JavaScript code from Node.js into a format that
        MongoDB can understand and vice versă.
        The driver provides a set of functions and methods that make it easier to
        perform common database operations from your Node.js code.
        The driver helps you handle errors that might occur during database
        interactions. It provides error codes, descriptions, and other details to help
        you troubleshoot issues.
        The most popular driver is the official MongoDB Node.js driver, also known
        as the mongodb package.
         `npm install mongodb`

    **** Now but we are going to use Mongoose, rather than mongodb****
        Mongoose is an Object Data Modeling (ODM) library for MongoDB and
        Node.js
        There are lots of reasons we prefer Mongoose rather than a native official
        driver
        Things are a lot easier here:
        Relate Real life Examples with mobiles with earphones)
        Mongoose is like a translator between your Node.js code and MongoDB. It
        makes working with the database smoother and easier.
        With Mongoose, you can define how your data should look, like making a
        blueprint for your documents. It's like saying, "In our database, each
        person's information will have a name, age, and email." This makes sure
        your data stays organized.
        Mongoose helps you make sure the data you put into the database is
        correct. It's like having someone check if you've written your email address
        correctly before sending a message.
        Very easy to query from the database

        But if you are using mongodb Native Driver
        You need to write a lot of detailed instructions to make sure everything
        works correctly.
        In a nutshell, using mongoose makes working with mongoDB in NodeJs much easier
        and smoother.
        


// EJS tutorial --> we may need to pass the value through HTML variably, so we must use EJS

import express from "express";
import path from "path";

const app = express();
const users = []; // made temporary array to store the static user-info

//middleware use to access data from HTML form
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

//setting up view engine
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("index", { name: "AniketKumar" });
})

app.get('/users', (req, res) => {
    res.json(users);
})

app.post('/', (req, res) => {
    console.log(req.body.user_name);
    users.push({
        username: req.body.user_name,
        usermail: req.body.user_mail,
        password: req.body.user_password
    })

})

app.listen(8000, () => {
    console.log('Listing on 8000')
})

*/

// < ----------- Mongoose Schema in NodeJS -----------> // Day 4
// What are models OR schemas in DB --> Models are like blueprint of our DB. we can use CRUD operations, on a schema of DB.

// import express from "express";
const express = require('express') // make sure type:commonjs in package.json
const app = express();
const db = require('./db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

//bodyparser
const bodyParser = require('body-parser'); // convert json into object and store into req.body
app.use(bodyParser.json());

const Person = require('./models/person');

app.get('/', function (req, res) {
    res.send("Welcome to our resturant")
})

// POST route to add a person into your mongodb
app.post('/person', async (req, res) => { //async fun is used to used with asynchronous operations.
    try {
        // assuming the request body contai the person' data
        const data = req.body;

        //create a newPerson document using mongoose model
        const newPerson = new Person(data);

        //save the newPerson to the DB
        const resposne = await newPerson.save(); //await till the fun executed
        console.log("data saved");
        res.status(200).json(resposne);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


// GET route to get data from mongodb
app.get('/person', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Data fetched");
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.get('/person/:workType', async (req, res) => {
    try {
        const workType = req.params.workType; // extract the worktype from the URL parameters
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log("response fetched");
            res.status(200).json(response);
        }
        else {
            res.status(400).json({ error: "Invalid work type" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.listen(PORT, () => {
    console.log("Listening on 8000");
})

// //CRUD Operation
//             Create-----> POST
//             Read-----> GET
//             Update-----> PUT / PATCH
//             Delete-----> DELETE


/*
// < ----------- NodeJS Routing in Express  -----------> // Day 5

Parameterised API calls. 
now to add multiple endpoint we have to create all endpoints like this:
        /person/chef
         / person / manager
         / person / waiter

this is not a correct method, to create many functions we use Parameterised endpoint.

    localhost: 8000 / person /: workType
    workType: -[chef, manager, waiter]

    To host DB server use --> MONGOdb Atlas
    host Nodejs server --> Render

*/