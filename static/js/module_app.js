const tableData = data;
var tbody = d3.select('tbody');

function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
      let row = tbody.append("tr");
  
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  function handleClick() {

    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
    if (date) {
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
    buildTable(filteredData);
  }
  
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  buildTable(tableData);