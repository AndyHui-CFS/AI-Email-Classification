const fs = require("fs");

let classification_data = JSON.parse(fs.readFileSync("./Email-Data-Generator/data-set/train-data-email.json"));
let summary_data = JSON.parse(fs.readFileSync("./Email-Summary-Data-Generator/data-set/train-data-email-summary.json"));

let classification_data_array = classification_data.data_set;
let summary_data_array = summary_data.data_set;

let object1 = {
    data_set : []
}
let object2 = {
    data_set : []
}

for(let i = 0; i < classification_data_array.length; i++){
    switch(i % 6){
        case 0:
            object1.data_set.push(classification_data_array[i]);
            object1.data_set.push(summary_data_array[i]);
            break;
        case 1:
            object1.data_set.push(classification_data_array[i]);
            object1.data_set.push(summary_data_array[i]);
            break;
        case 2:
            object1.data_set.push(classification_data_array[i]);
            object1.data_set.push(summary_data_array[i]);
            break;
        case 3:
            object1.data_set.push(classification_data_array[i]);
            object1.data_set.push(summary_data_array[i]);
            break;
        case 4:
            object1.data_set.push(classification_data_array[i]);
            object1.data_set.push(summary_data_array[i]);
            break;
        case 5:
            object2.data_set.push(classification_data_array[i]);
            object2.data_set.push(summary_data_array[i]);
            break;
    }
}

fs.writeFileSync("./Data-Set/mixed-4.json", JSON.stringify(object1, null, 2));
fs.writeFileSync("./Data-Set/mixed-5.json", JSON.stringify(object2, null, 2));
