const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shyamjith2302@gmail.com",
    pass: "yevasujuxgcgkfuq",
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.error("Error verifying connection:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
