// from data.js
var tableData = data;

// referance tbody element 
var tbody = document.querySelector("tbody");
var datetime = document.querySelector("#datetime");
var city = document.querySelector("#city");
var state = document.querySelector("#state");
var country = document.querySelector("#country");
var shape = document.querySelector("#shape");
var searchButton = document.querySelector("#search");
var resetButton = document.querySelector("#reset");

//add handler for search and reset button
searchButton.addEventListener("click", handleSearchButtonClick);
resetButton.addEventListener("click", handleResetButtonClick);


//function for table
function loadTable() {
  tbody.innerHTML = "";

  for (var i = 0; i < tableData.length; i++) {
   //create object
    var data = tableData[i];
    var fields = Object.keys(data);

    //create index tbody
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
     
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = data[field];
    }
  }
  console.log("Data loaded to table: " + tableData.length)
}

loadTable();

function handleResetButtonClick() {
   
   datetime.value = "";
 
}

function getSelectValues(select) {
  var option;
  var result = [];
  var selectOption = select && select.selectOption;
  

  for (var i=0, iLen=selectOption.length; i<iLen; i++) {
    option = selectOption[i];

    if (option.selected) {
      result.push(option.value || option.text);
    }
  }
  return result;
}

// Search the existing UFO info
function handleSearchButtonClick() {
  
    // user search string
  var filterDatetime = datetime.value.trim().toLowerCase();
  
  
  // tableData filter string
  tableData = data.filter(function(data) {
    var dateDatetime = String(data.datetime).toLowerCase();
    var cityField = String(data.city).toLowerCase();
    var stateField = String(data.state).toLowerCase();
    var countryField = String(data.country).toLowerCase();
    var shapeField = String(data.shape).toLowerCase();

    var goodRecord = 
    (filterDatetime.length === 0 || dateDatetime === filterDatetime)
    
    
    return goodRecord;
  });
  console.log("filtered: " + tableData.length);
  loadTable();
  handleResetButtonClick();
}