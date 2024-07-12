const { json } = require("body-parser");
const fs = require("fs");
const input = "You are a clerk working at Hong Kong Hospital Authority classifying received emails into one of the three levels of importance and one of the five categories.\nThe three levels of importance are:\n\t1. High\n\t2. Medium\n\t3. Low\n\nThe five categories are:\n\t1. Patient Care and Services\n\t2. Technical and IT Support\n\t3. Human Resources and Staffing\n\t4. Administrative and Policy Inquiries\n\t5. Public Relations and Community Outreach\n\t6. Unknown";

const jsonObject = JSON.parse(fs.readFileSync("./Test-Data-Generator/data-set/test-data-email.json"));

const dataArray = jsonObject.data_set;

function printAllData(){
    for(var i = 0; i < dataArray.length; i++){
        console.log(dataArray[i].instruction);
        console.log(dataArray[i].input);
        console.log(dataArray[i].output);
    }
}

function printSpecificData(i){
    console.log(dataArray[i].instruction);
    console.log(dataArray[i].input);
    console.log(dataArray[i].output);
}

//printAllData();
printSpecificData(4);
