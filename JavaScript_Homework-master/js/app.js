// from data.js
var tableData = data;

// YOUR CODE HERE!
// References to tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#datetime');
var $filterbtn = document.querySelector('#filter-btn');

// Add Event listener to filter-btn & call searchFilter with click
$filterbtn.addEventListener('click', searchFilter);

function tableGen() {

  $tbody.innerHTML = '';
  // Populate table with rows
  for (var i = 0; i < tableData.length; i++) {
    
    var displayData = tableData[i];
    var fields = Object.keys(displayData);
    var $row = $tbody.insertRow(i);
    
    // Populate cell content
    for (var j = 0; j < fields.length; j++) {
     
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = displayData[field];
    
    }
  }
}

function searchFilter() {
    
    // Take date input
    var refreshInput = $dateInput.value;
    // Filter tableData by date
    tableData = data.filter(function(displayData){
        
        var DataByDate = displayData.datetime;
        return DataByDate === refreshInput;
    
    }); 
    tableGen();  
}

tableGen();