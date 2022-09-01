const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const extention = file.mimetype.split("/")[1];
      cb(null, file.fieldname + '-' + uniqueSuffix + "." + extention)
      
    }
  })
  
  exports.upload = multer({ storage: storage })