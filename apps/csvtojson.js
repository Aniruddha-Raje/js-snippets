const csv=require('csvtojson');
var fs = require('fs');
const util = require('util');

let csvFileToJson = async () => {

    const csvFilePath='/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/input.csv';

    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log("CSV to Object => \n",jsonObj);
    
        console.log("\n1st Object => \n",jsonObj[0]);
    
        let temp = {};
        temp.data = jsonObj;
        console.log('\nJson data => \n', temp);
    
        let fileData = JSON.stringify(temp);
    
        fs.writeFile('/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/countryList.json', fileData, function (err) {
            if (err) throw err;
                console.log('Saved!');
    
            console.log('Write complete!');
        });
    });
};

let csvStringToJson = async () => {
    const csvStr = "a,b,c\n1,2,3\n4,5,6";

    csv({
        noheader:true,
        output: "csv"
    })
    .fromString(csvStr)
    .then((csvRow)=>{ 
        console.log("csvrow\n");
        console.log(csvRow) // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
    })
};

csvStringToJson();
//csvFileToJson();