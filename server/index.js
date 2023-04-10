// Import Express
const express = require('express');

// Transfer the contents of Express into a new constant called app.
const app = express();

/* Importing CORS:
    CORS (Cross-Origin Resource Sharing) is a way to allow websites that are hosted on different servers to communicate with each other.

    Think of it like playing with your friends who live in a different house. CORS is like asking your friend's parents if you can come over to play, and then they say it's okay even though you don't live in the same house. Without CORS, websites hosted on different servers (i.e. different houses) can't talk to each other because their parents (i.e. the web browsers) won't let them.

    Using CORS in Node.js allows websites to talk to each other, share resources (like pictures or videos), and work together more easily, even if they're hosted on different servers.
*/
const cors=require('cors')

// Importing the contents of our .env file
require('dotenv').config();

//port no 
const PORT = process.env.PORT;

//importing databse connection
const { dbconnect } = require('./utils/dbconnect')

// calling the dbconnect function
dbconnect();

// Imorting routes.js
const userrouter = require('./routes/userroute');


// This allows us to accept the data in JSON format.
app.use(express.json());

//This allows to use cors 
app.use(cors())

/* 
This code lets people who visit your website see the files that are in the "public" folder. These files are things like pictures, colors, and things that make your website look pretty.

When someone goes to your website, the code checks if they want to see a file from the "public" folder. If they do, the code lets them see it so they can enjoy your website even more.
*/
app.use(express.static("public"));

//using router
app.use("/api", userrouter);

// Ussing this routes file
app.get('/', (req, res) => {
    res.send("<h1>Hello from server!</h1>");
})


// Listen port no.
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})