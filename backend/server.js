const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// CORS Middleware (if needed)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send({ message: "hello" });
});

// POST endpoint for form submission
app.post("/submitForm", async (req, res) => {
  try {
    const formData = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jakelyklest@gmail.com",
        pass: "rjel gyzj embe vajp",
      },
    });

    // Email options
    const mailOptions = {
      from: "jakelyklest@gmail.com",
      to: "manupranav95@gmail.com",
      subject: "New Form Submission",
      text: `
        Name: ${formData.name}
        Father's Name: ${formData.fatherName}
        Mother's Name: ${formData.motherName}
        Gender: ${formData.gender}
        Phone Number: ${formData.phoneNumber}
        Email: ${formData.email}
        Date of Birth: ${formData.dateOfBirth}
        Address: ${formData.address}
        Pin Code: ${formData.pincode}
        10th School Name: ${formData.tenthSchoolName}
        10th Percentage: ${formData.tenthPercentage}
        12th School Name: ${formData.twelfthSchoolName}
        12th Percentage: ${formData.twelfthPercentage}
        12th Result: ${formData.twelfthResult}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond to the client
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
