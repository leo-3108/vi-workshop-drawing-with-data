var temperature = [];
var month = [];

async function generateVizualisation(){

await d3.csv('./temperature.csv', function(data) {
    temperature.push(parseInt(data.temperature));
    month.push(data.month);
});

    // Code hier einfügen

}

generateVizualisation()