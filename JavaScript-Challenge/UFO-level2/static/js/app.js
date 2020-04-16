// from data.js
var tableData = data;


// Use D3 to select Table body 
tbody = d3.select("tbody");

//This function will append a table to the webpage from the UFO Dataset
function dataLoad(){

    // Loop Through `data` and console.log each UFO Info report object
    tableData.forEach(UFOInfo => {
        console.log(UFOInfo);

        // Use d3 to append one table row `tr` for each UFO Info report object
        var row = tbody.append("tr");

        // Use `Object entries to log each UFO  Info  value 
        Object.entries(UFOInfo).forEach(([key,value]) =>{
            console.log(key,value);

        //Use d3 to append 1 cell per UFO Info(date, city, state, country, shape, duration, comment )
        var cell = row.append("td");

        // Use d3 to update each cell's text with (date, city, state, country, shape, duration, comment )
        cell.text(value);
        });
    });
};

//Call function to load the UFO datset
dataLoad();

//Filter UFO Dataset by date/time, city, State, Country, and Shape
var filterDate = data.map(row => row.datetime);
var filterCity = data.map(row => row.city);
var filterState = data.map(row => row.state)
var filterCountry = data.map(row => row.country);
var filterShape = data.map(row => row.shape);

// Select Element Inputs
var date = d3.select("#datetime").property("value");
var city = d3.select("#city").property("value");
var state = d3.select("#state").property("value");
var country= d3.select("#country").property("value");
var shape = d3.select("#shape").property("value");

// Use d3 to select all button
var reloadbutton = d3.select("reload-btn");
var datebutton  = d3.select("filter-btn-date");
var citybutton  = d3.select("filter-btn-city");
var statebutton  = d3.select("filter-btn-state");
var countrybutton  = d3.select("filter-btn-country");
var shapebutton  = d3.select("filter-btn-shape");

//Set up event listener that by clicking input search through the date/time column to find row
datebutton.on("click", function() {

    // Use d3 to get a reference to the table body
    var tbody = d3.select("tbody");

    //Disable page from refreshing
    d3.event.preventDefault();


    // Filter UFO Info 
    var filteredData = tableData.filterDate;

    // Display table by datetime by using the dateTimeTable function
    displayTable(filteredData);
});
    
//Perform function to filter table by datime
function displayTable(filteredData){
    // Use d3 to get a reference to the table body
    var tbody = d3.select("tbody");

    //remove any data from the table
    tbody.html(" ");

    // Iterate throug the UFO Info to search through the date time
    filteredData.forEach((date) => {
        
        //Use d3 to append row
        var row = tbody.append("tr");
    
        //Use `Object entries to log the dates
        Object.entries(date).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value)
        
        //Print filteredData
        console.log(filteredData);

    
        });
    });
};

//Set up event listener that by clicking input search through the city column to find row
citybutton.on("click", function() {

    // Use d3 to get a reference to the table body
    var tbody = d3.select("tbody");

    //Disable page from refreshing
    d3.event.preventDefault();


    // Filter UFO Info 
    var filteredData = tableData.filterCity;

    // Display table by city
    displayTable(filteredData);
});
    
//Perform function to filter table by city
function displayTable(filteredData){
    // Use d3 to get a reference to the table body
    var tbody = d3.select("tbody");

    //remove any data from the table
    tbody.html(" ");

    // Iterate throug the UFO Info to search by city
    filteredData.forEach((city) => {
        
        //Use d3 to append row
        var row = tbody.append("tr");
    
        //Use `Object entries to log the cities
        Object.entries(city).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value)
        
        //Print filteredData
        console.log(filteredData);

    
        });
    });
};

//Set up event listener that by clicking input search through the country column to find row
countrybutton.on("click", function() {

    // Use d3 to get a reference to the table body
    var tbody = d3.select("tbody");

    //Disable page from refreshing
    d3.event.preventDefault();


    // Filter UFO Info 
    var filteredData = tableData.filterCity;

    // Display table by country
    displayTable(filteredData);
});
    
//Perform function to filter table by country
function displayTable(filteredData){
    // Use d3 to get a reference to the table body
    var tbody = d3.select("tbody");

    //remove any data from the table
    tbody.html(" ");

    // Iterate throug the UFO Info to search through country
    filteredData.forEach((country) => {
        
        //Use d3 to append row
        var row = tbody.append("tr");
    
        //Use `Object entries to log the dates
        Object.entries(country).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value)
        
        //Print filteredData
        console.log(filteredData);

    
        });
    });
};

//Set up event listener that by clicking input search through the shape column to find row
shapebutton.on("click", function() {

    // Use d3 to get a reference to the table body
    var tbody = d3.select("tbody");

    //Disable page from refreshing
    d3.event.preventDefault();


    // Filter UFO Info 
    var filteredData = tableData.filterCity;

    // Display table by shape
    displayTable(filteredData);
});
    
///Perform function to filter table by shape
function displayTable(filteredData){
    // Use d3 to get a reference to the table body
    var tbody = d3.select("tbody");

    //remove any data from the table
    tbody.html(" ");

    // Iterate throug the UFO Info to search by shape
    filteredData.forEach((shape) => {
        
        //Use d3 to append row
        var row = tbody.append("tr");
    
        //Use `Object entries to log the dates
        Object.entries(shape).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value)
        
        //Print filteredData
        console.log(filteredData);

    
        });
    });
};


    
// Set up Event Lister to refresh and upload
reloadbutton.on("click", function() {
    // Use d3 to get a reference to the table body
    var tbody = d3.select("tbody");
 
    tbody.html(" ");
    dataLoad();
})
