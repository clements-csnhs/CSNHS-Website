
function queryPoints(){
	var fname = document.getElementById("point-query-fname").value.toUpperCase();
    var lname = document.getElementById("point-query-lname").value.toUpperCase();
    var sid = document.getElementById("point-query-sid").value.toUpperCase();

	var xml = new XMLHttpRequest();
    var result = null;
    xml.open("GET", "points.txt", false);
    xml.send();
    if (xml.status==200) {
      result = JSON.parse(xml.responseText);
    }
    console.log(result);

}