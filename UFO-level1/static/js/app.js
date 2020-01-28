// Part 1
// Using UFO Dataset provided in the form of an array of Javascript objects, write code that appends a table to your web page and then adds new rows 
//of data to the table

// from data.js
var tableData = data;

//This function will append a table to the webpage from the UFO Dataset
function dataLoad(){

    // Use d3 to get a reference to the table body
    var tbody = d3.select("tbody");

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

//Part 2
// Use date form in your HTML document to write JavaScript code that will lisen fo events search through the date/time column to find row that match user input

// Select the "Filter Table" button
var button = d3.select("#filter-btn");

//Select  Reload Table button under the "refresh-btn"  id
var refresh = d3.select("#refresh-btn");

// Set up event listener that by clicking input search through the date/time column to find row
//that match date
button.on("click", function() {

    // Use d3 to get a reference to the table body
    var tbody = d3.select("tbody");

    //Disable page from refreshing
    d3.event.preventDefault();

    //Select the input element 
    var inputElement= d3.select("#datetime");
    
    //Get the value property of the date element
    var inputValue = inputElement.property("value");


    // Filter UFO Info 
    var filteredData = tableData.filter (tableData => tableData.datetime === inputValue);

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

// Set up Event Lister to refresh and upload 
refresh.on("click", function() {
    // Use d3 to get a reference to the table body
    var tbody = d3.select("tbody");

    tbody.html(" ");
    dataLoad();
});