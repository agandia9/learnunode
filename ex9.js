var http = require('http');
var bl = require('bl');

var listUrls = process.argv.slice(2);
var resultData = [];

function displayResult() {
    listUrls.forEach((url) => {
        console.log(resultData[url]);
    });
}

function doRequest(url) {
    http.get(url, (result) => {
        result.pipe(bl((err, data) =>{
            if (err) return err;
            resultData[url] = data.toString();
            if (Object.keys(resultData).length === listUrls.length) {
                displayResult();
            }
        }))
    });
}

for (var i = 0; i < listUrls.length; i++) {
    doRequest(listUrls[i]);
}