let soap = require("soap");
let url = "http://35.196.243.64:8000/wsdl?wsdl";
let express = require("express");
let router = express.Router();

const request_2D_subjects = async (req, res) => {
  try {
    console.log("Requesting 2D subjects...");
    let client = await soap.createClientAsync(url);
    console.log("Client created...");
    let result = await client.AllSubjectsAsync({});
    console.log("Result: ", result);
    return result;
  } catch (error) {
    console.log("Error: ", error);
    return error;
  }
};
router.get("/", async (req, res) => {
  let result = await request_2D_subjects(req, res);
  res.send(result);
});

module.exports = router;
