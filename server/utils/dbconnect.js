/* Importing mongoose:
 Mongoose is a tool that helps software developers work with a type of database called MongoDB. MongoDB is like a big box of toys where we can store information about things like people, animals, or whatever we want. Mongoose is like a helper that helps us put the right toys in the right places, and make sure that everything stays organized. It also helps us do things like change the toys or throw some away if we don't need them anymore. Mongoose makes working with MongoDB much easier and more fun! */
const mongoose = require("mongoose");

/* Importing dotenv:
dotenv is a module for Node.js that lets you store configuration information, like API keys or database credentials, in a file outside of your codebase. You can create a file named .env and put your configuration values in it. Then, you can use dotenv to load the values from the file into your Node.js application's environment variables. By doing this, you can keep sensitive information separate from your code and easily change it without modifying your code. */
const dotenv = require("dotenv");

// env file configure
dotenv.config();

// Connecting to mongoDB dataBase
exports.dbconnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      /*  When we use Mongoose to connect to a MongoDB database, we need to tell Mongoose how to connect to the database. The `useNewUrlParser` option is a way to tell Mongoose to use a new and improved method for connecting to the database. This new method is better than the old method because it's more secure and reliable.

      Think of it like building a tower of blocks. The useNewUrlParser option is like using a special kind of glue that makes sure the blocks stick together better and won't fall apart. It's important to use this option because it helps keep our tower (or database connection) strong and stable.
      
      what is a connection string?
      This is a connection string `mongodb://username:password@hostname:port/databasename`
      */
      useNewUrlParser: true,
      /* In Mongoose, useUnifiedTopology is another option we can use when we connect to a MongoDB database. This option tells Mongoose to use a newer and more efficient way of communicating with the database, which makes our program run faster and smoother.

      Think of it like using a secret code to talk to our friends. useUnifiedTopology is like a better secret code that our friends can understand more easily and quickly. This makes it easier for us to talk to our friends and get things done faster.

      So, in summary, useUnifiedTopology is a way to tell Mongoose to use a better and faster way of talking to the MongoDB database. */
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};
