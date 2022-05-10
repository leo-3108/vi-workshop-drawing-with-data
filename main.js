d3.csv('./temperature.csv', function(error, data) {
    if(error){
        console.log(error)
    }
    else{
    generateVisualization(data)
    }
});

var generateVisualization = function(data){
    console.log(data)
    //...
}