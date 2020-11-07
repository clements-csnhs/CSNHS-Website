
function queryPoints(){
	//var fname = document.getElementById("point-query-fname").value.toUpperCase();
    //var lname = document.getElementById("point-query-lname").value.toUpperCase();
    var sid = document.getElementById("point-query-sid").value;
    if(sid=="" || sid==null)
    	alert("Please fill in all fields");

	var xml = new XMLHttpRequest();
    var result = null;
    xml.open("GET", "CSNHSPoints.json", false);
    xml.send();
    if (xml.status==200) {
      result = JSON.parse(xml.responseText);
    }
    console.log(result);

    var user;
    for(var temp in result)
    	if(temp.id=sid)
    		user=temp;

    console.log("Member: "+user["name"]+"\nPoints: "+user["points"])
    document.getElementById("point-query-info").innerHTML = "Member: "+user["name"]+"\nPoints: "+user["points"];
}