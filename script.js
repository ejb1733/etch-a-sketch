function genDivs(v){ 
    var container = document.getElementById('container');
    for(var i = 0; i < v; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= v; x++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          row.appendChild(cell); 
      } 
      container.appendChild(row); 
    } 
    let nodelist = document.querySelectorAll('.gridsquare');
    let gridArray = Array.from(nodelist);
    console.log(gridArray.length);
    
    for (let n = 0; n < gridArray.length; n++) {
        gridArray[n].addEventListener('mouseover', () => {
            gridArray[n].style.backgroundColor = 'blue';
        })
    }
  }


