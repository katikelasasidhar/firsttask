
var xhr = new XMLHttpRequest();


xhr.onload = function () {
  
  if (xhr.status >= 200 && xhr.status < 300) {
    
    var t = JSON.parse(this.response);
  
    for (var iterator of t) {
        console.log("name"+"-"+iterator.name);
        console.log("region"+"-"+iterator.region);
        console.log("subregion"+"-"+iterator.subregion);
        console.log("population"+"-"+iterator.population);

    } 
    
  } else {
 
    console.log(xhr.responseText); 
  }
};


xhr.open("GET", "https://restcountries.eu/rest/v2/all");


xhr.send();
