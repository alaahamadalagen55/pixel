document.addEventListener("submit",table);
//we added function to but in it many jobs and name it table
function table(event){
	event.preventDefault();
	
	var hight=document.getElementById("inputHeight").value;
	var width=document.getElementById("inputWidth").value;
	var shape=document.getElementById("pixelCanvas");
	shape.innerHTML="";
	for(var x = 0; x < hight ; x++){
		var row=document.createElement("tr");
		for(var y = 0;y < width ; y++){
			var cell=document.createElement("td");
			cell.addEventListener("click",farben);
			row.appendChild(cell);
			
		}
		shape.appendChild(row);
	}
}

function farben(event){
	var color=document.getElementById("colorPicker").value;
	event.target.bgColor=color;
}