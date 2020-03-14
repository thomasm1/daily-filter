var url = "../data/world110.json";
d3.json(url, function(err, data){
  console.log(url, "error", err);
  console.log(url, "data", data)
})

/*
var url = "californiaCounties.json";
d3.json(url, function(err, data){
  console.log(url, "error", err);
  console.log(url, "data", data)
})


var url = "airports.json";
d3.json(url, function(err, data){
  console.log(url, "error", err);
  console.log(url, "data", data)
})


var url = "debris.json";
d3.json(url, function(err, data){
  console.log(url, "error", err);
  console.log(url, "data", data)
})

*/