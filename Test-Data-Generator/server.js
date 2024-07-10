//Create the express server
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

//Import the file system
const fs = require("fs");

//The input message
const INSTRUCTION = "You are a clerk working at Hong Kong Hospital Authority classifying received emails into one of the three levels of importance and one of the five categories.\nThe three levels of importance are:\n\t1. High\n\t2. Medium\n\t3. Low\n\nThe five categories are:\n\t1. Patient Care and Services\n\t2. Technical and IT Support\n\t3. Human Resources and Staffing\n\t4. Administrative and Policy Inquiries\n\t5. Public Relations and Community Outreach\n\t6. Unknown";
app.post("/add-new-data", (req, res) => {

    console.log("Entered");

    //Get the form field from the post request
    const {from_email, to_email, subject, email_content, importance, category} = req.body;

    //Create a training data in JS object type
    const new_train_data = {
        instruction :  INSTRUCTION,
        input : "From: " + from_email + "\n" +
                "To: " + to_email + "\n" +
                "Suject" + subject + "\n\n" +
                email_content,
        output : "Important: " + importance + "\n" +
                 "Category: " + category + "\n"
    };
    console.log(new_train_data.input);
    console.log(new_train_data.output);

    //Add the new train data to the json file
    const train_data = JSON.parse(fs.readFileSync("./data-set/train-data-email.json"));
    console.log(train_data);
    train_data.data_set.push(new_train_data);
    fs.writeFileSync("./data-set/train-data-email.json", JSON.stringify(train_data, null, 2));

    res.status(201)
});
app.listen(3000, function(err){
    if(err) console.log("Error is server setup");
    console.log("Listening to port 3000");
});
