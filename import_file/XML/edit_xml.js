const file_name_prefix = "RP_ACERt1v2_automation";
const originalFileName = "RP_ACERt1v2_test.xml";

let fs = require('fs'),
    parseString = require('xml2js').parseString,
    xml2js = require('xml2js'),
    dateTime = require('node-datetime');

fs.readFile(`./source_file/${originalFileName}`, 'utf-8', function (err, data){
    if(err) 
        console.log(err);

    parseString(data, function(err,  json){
        if(err) 
            console.log(err);

        let dt = dateTime.create();
        let formatted = dt.format('Ymd_HMS');

        json.REMITTable1.TradeList[0].TradeReport[0].uniqueTransactionIdentifier[0].uniqueTransactionIdentifier[0] = `automation_${formatted}`;

        // create a new builder object and then convert
        // our json back to xml.
        let builder = new xml2js.Builder();
        let xml = builder.buildObject(json);

        formatted = dt.format('YmdHMS');

        let file_name = `${file_name_prefix + formatted}.xml`;
        
        fs.writeFile(`./edited_files/${file_name}`, xml, function(err, data){
            if (err) console.log(err);
            
        console.log("successfully written our update xml to file");
        });
                  
    });

});   




