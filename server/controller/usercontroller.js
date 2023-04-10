// importing userModel
const Usermodel = require("../model/usermodel");

//create a new User controller
exports.createuser = async (req, res, next) => {
  try {
    let url = process.env.SERVER_URL;

    let filelocation = process.env.FILE_FOLDER_LOCATION;

    let uploadedfile = url + filelocation + req.file.filename; // concate file path with url

    const newUser = new Usermodel({
      name: req.body.name,
      surname: req.body.surname,
      position: req.body.position,
      adrress: req.body.adrress,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      image: uploadedfile,
      phone: req.body.phone,
      about: req.body.about,
    });

    //save user data in databse
    const userresult = await newUser.save();

    //sending response
    res.status(200).json({
      status: true,
      data: userresult,
      message: "User saved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  next();
};

// Fetch all users
exports.getuser = async (req, res, next) => {
  try {
    const fetchedusers = await Usermodel.find();
    //sending response
    res.status(200).json({
      status: true,
      data: fetchedusers,
      message: "User fetched successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  next();
};

// update user
exports.updateuser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const updatedData = req.body;
    const options = { new: true };

    if (req.file) {
      let url = process.env.SERVER_URL;

      let filelocation = process.env.FILE_FOLDER_LOCATION;

      let editedfile = url + filelocation + req.file.filename; // concate file path with url

      const updatedUser = await Usermodel.findByIdAndUpdate(
        id,
        {
          ...updatedData,
          image: editedfile,
        },
        options
      );

      res.status(200).json({
        status: true,
        data: updatedUser,
        message: "User updated successfully",
      });
    } else {
      const updatedUser = await Usermodel.findByIdAndUpdate(
        id,
        updatedData,
        options
      );

      res.status(200).json({
        status: true,
        data: updatedUser,
        message: "User updated successfully",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  next();
};

// delete user
exports.deleteuser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Usermodel.findByIdAndDelete(id);
    res.status(200).json({
      status: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  next();
};
