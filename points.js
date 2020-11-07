
function queryPoints(){
	//var fname = document.getElementById("point-query-fname").value.toUpperCase();
    //var lname = document.getElementById("point-query-lname").value.toUpperCase();
    var sid = document.getElementById("point-query-sid").value;
    if(sid=="")
    	alert("Please fill in all fields");

	var xml = new XMLHttpRequest();
    var result = null;
    xml.open("GET", "CSNHSPoints.json", false);
    xml.send();
    if (xml.status==200) {
      result = JSON.parse(xml.responseText);
    }
    //var result = JSON.parse('[{"id":760481,"name":"Nathan Mustafa","points":5},{"id":123456,"name":"Test User","points":123}]');
    console.log(result);

    console.log(sid);
    var user;
    for(var i=0; i<result.length; i++)
    	if(result[i]["id"]==sid){
    		user=result[i];
    		break;
    	}

    console.log("Member: "+user["name"]+"\nPoints: "+user["points"])
    document.getElementById("point-query-info").innerHTML = "Member: "+user["name"]+"<br/>Points: "+user["points"];
}