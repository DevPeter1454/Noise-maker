/*jshint esversion : 8 */
const multer = require('multer');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require('cloudinary').v2;




cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
            folder: "noise_maker",
            allowedFormats: ["jpg", "png"],
            transformation: [{ width: 150, height: 100, crop: "limit" }]
        }
    });
const upload = multer({ storage: storage });

module.exports = upload;