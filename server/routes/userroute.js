/* Importing router:
  A router is used to connect different parts of the application together. A userrouter is a specific type of router that is used to handle requests related to users.

  Think of it like a signpost that tells us which way to go. The userrouter is like a signpost that tells our web application which requests are related to users. For example, it might handle requests to create a new user account, update an existing user's information, or delete a user account.

  Using a userrouter in our web application makes it easier to organize our code and makes it easier for users to interact with our application's user-related features.
*/
const userrouter = require("express").Router();

/* Importing multer:
 Multer is a package that is used in web development to handle file uploads.

  Think of it like a mailman who helps us send letters. Multer is like a mailman who helps our web application handle files that users want to upload. For example, if a user wants to upload a picture or a video, Multer helps our web application receive that file and save it to our server.

  Using Multer makes it easier for users to upload files to our web application, and it also helps our web application handle those files more easily. */
const upload = require("../utils/multer");

//import user controller
const {
  createuser,
  getuser,
  updateuser,
  deleteuser,
} = require("../controller/usercontroller");

//create user router
userrouter.post("/createuser", upload.single("image"), createuser);

// Fetch all users
userrouter.get("/getuser", getuser);

// Update user
userrouter.put("/updateuser/:id", upload.single("image"), updateuser);

// Delete user
userrouter.delete("/deleteuser/:id", deleteuser);

// exporting userrouter
module.exports = userrouter;
