const fs = require("fs");

function parseStringToJSON(input){
  let jsonObject = {};

  let [key, value] = input.split(":\n").map(item => item.trim());

  jsonObject[key] = value;

  return JSON.stringify(jsonObject, null, 2)
}
const data = JSON.parse(fs.readFileSync("./data-set/train-data-email-summary.json"))
const oldDataArray = data.data_set;
for(let i = 0; i < oldDataArray.length; i++){
    oldDataArray[i].output = parseStringToJSON(oldDataArray[i].output);
}
data.data_set = oldDataArray
fs.writeFileSync("./data-set/train-data-email-summary-json-type.json", JSON.stringify(data, null, 2))