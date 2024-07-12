//Create the express server
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

//Import the file system
const fs = require("fs");

var i = 0;
var data = JSON.parse(fs.readFileSync("C:/Users/User/Downloads/AI-Email-Classification/Email-Data-Generator/data-set/train-data-email.json"));
var data_array = data.data_set;


//The input message
const INSTRUCTION = "You are a clerk working at Hong Kong Hospital Authority summarizing emails received. The summary should be concise and easy to understand. The maximum length of the summary is 100 words";
app.post("/add-new-data", (req, res) => {


    console.log("Entered");

    //Get the form field from the post request
    const {gpt_output} = req.body;

    //Create a training data in JS object type
    const new_train_data = {
        instruction :  INSTRUCTION,
        input : data_array[i].input,
        output : gpt_output
    };
    i = i + 1;
    console.log(new_train_data.input);
    console.log(new_train_data.output);

    //Add the new train data to the json file
    const train_data = JSON.parse(fs.readFileSync("./data-set/train-data-email-summary.json"));
    console.log(train_data);
    train_data.data_set.push(new_train_data);
    fs.writeFileSync("./data-set/train-data-email-summary.json", JSON.stringify(train_data, null, 2));

    res.status(201)
});
app.listen(3000, function(err){
    if(err) console.log("Error is server setup");
    console.log("Listening to port 3000");
});
