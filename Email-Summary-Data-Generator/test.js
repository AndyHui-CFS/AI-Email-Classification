const { json } = require("body-parser");
const fs = require("fs");
const input = "You are a clerk working at Hong Kong Hospital Authority summarizing emails received. The summary should be concise and easy to understand. The maximum length of the summary is 100 words";

const jsonObject = JSON.parse(fs.readFileSync("./data-set/test-data-email-summary.json"));

const dataArray = jsonObject.data_set;

function printAllData(){
    for(var i = 0; i < dataArray.length; i++){
        console.log(dataArray[i].instruction);
        console.log(dataArray[i].input)
    }
}

function printSpecificData(i){
    console.log(dataArray[i].instruction);
    console.log(dataArray[i].input);
}

printAllData();
//printSpecificData();
