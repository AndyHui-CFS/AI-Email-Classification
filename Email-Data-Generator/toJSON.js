const fs = require("fs");

function parseStringToJSON(input) {
    // Split the input string by newline character
    let lines = input.trim().split('\n');
    
    // Create an empty object to hold the key-value pairs
    let jsonObject = {};
    
    // Iterate over each line
    lines.forEach(line => {
      // Split each line by the colon character to separate key and value
      let [key, value] = line.split(':').map(item => item.trim());
      
      // Assign the key-value pair to the object
      jsonObject[key] = value;
    });
    
    // Convert the JavaScript object to a JSON string
    return JSON.stringify(jsonObject, null, 2);
}
const data = JSON.parse(fs.readFileSync("./data-set/train-data-email.json"))
const oldDataArray = data.data_set;

for(let i = 0; i < oldDataArray.length; i++){
    oldDataArray[i].output = parseStringToJSON(oldDataArray[i].output);
}
data.data_set = oldDataArray
fs.writeFileSync("./data-set/train-data-email-json-type.json", JSON.stringify(data, null, 2))