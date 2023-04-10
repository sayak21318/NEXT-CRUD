const multer = require("multer"); //import multer package

// Multer config
module.exports = multer({
  storage: multer.diskStorage({
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
    destination: "public/files/",
  }),
});
