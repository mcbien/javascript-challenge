// from data.js
var tableData = data;

// YOUR CODE HERE!


// PSEUDO CODE
// 1. user enters date in input date field
// 2. listen for for button press of "Filter Table"; on button press 
//    a. grab date entered from field
//    b. filter data.js data to date entered
//    c. blank existing table
//    d. add rows to table element in html via loop for all results via loop
console.log("inglobalscope", this)

// Event listener - listen for button click
// Create target
// var button = d3.select("#filter-btn");
var inputElement = d3.select("input");

// Create an empty object
var filterPairs = {}

// Create handler
inputElement.on("change", function () {

    var inputValue = inputElement.property("value");
    var inputId = inputElement.property("id");
    console.log(inputId)
    console.log("inEventHandler", this)

    // obj["key3"] = "value3";
    filterPairs[inputId] = inputValue;
    // delete thisIsObject["Cow"];
    //Delete filter pairs if value is blank
    if (inputValue === "") {
        delete filterPairs[inputId];
    }
    console.log("filterPairs", filterPairs)

    var tbody = d3.select("tbody");

    //Select table rows
    var tableRows = d3.select(".table>tbody>tr")
    // Blank table rows
    tableRows.html("");

    for (j = 0; j < tableData.length; j++) {
        if (inputValue === tableData[j][inputId] || inputValue === "") {
            console.log(tableData[j][inputId]);

            // Append row to table
            var row = tbody.append("tr");
            // Append cell for Date
            row.append("td").text(tableData[j]["datetime"]);
            // Append cell for City
            row.append("td").text(tableData[j]["city"]);
            // Append cell for State
            row.append("td").text(tableData[j]["state"]);
            // Append cell for Country
            row.append("td").text(tableData[j]["country"]);
            // Append cell for Shape
            row.append("td").text(tableData[j]["shape"]);
            // Append cell for Duration
            row.append("td").text(tableData[j]["durationMinutes"]);
            // Append cell for Comments
            row.append("td").text(tableData[j]["comments"]);
        }
    }

})