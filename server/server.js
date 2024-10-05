const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const fs = require("fs");

const filePath = "./data/records.json";
const readFile = (file) => {
  try {
    const fileData = fs.readFileSync(file, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    return [];
  }
};
app.get("/allProfiles", (req, res) => {
  // Read the records.json file and send the data as response.
  const fileData = readFile(filePath);
  res.send(fileData);
});
app.get("/hello/amjad", (req, res) => {
  res.send("Hello, Amjad");
});

app.post("/submit/profile", (req, res) => {
  // Please make sure that the object received has Name, Title, Targeted Keywords,
  // Education, Certification and Contact should be there. If anything is missing give error
  // with appropriate header status.
  const profile = req.body;
  if (
    !profile.Name ||
    !profile.Title ||
    !profile.TargetedKeywords ||
    !profile.Education ||
    !profile.Certification ||
    !profile.Contact
  ) {
    return res.status(400).send("Bad Request. All fields are required");
  }

  const data = readFile(filePath);
  data.push(profile);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.send("Profile submitted successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
