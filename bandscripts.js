// Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)




var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
  var loopCount = 5;


// Original Variables listed in the instructions
// Keep track of which band we're on in the loop
  //var currentBand = bands[i];

// Keep track of which veggie we're on in the loop
  //var currentVeggie = vegetables[i];

// Get a reference to the appropriate DOM element for bands
  //var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
  //var veggieElement = document.getElementById("vegetables");

  

  
  var currentBand = "";
  var currentVeggie = "";
  var bandsElement = document.getElementById("boy-bands");
  var veggieElement = document.getElementById("vegetables");



// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
  currentBand = bands[loopTracker];
  currentVeggie = vegetables[loopTracker];
  
  console.log(currentBand, currentVeggie)
  
  
  bandsElement.innerHTML += (currentBand + "<br>");
  
  veggieElement.innerHTML += (currentVeggie + "<br>");

}