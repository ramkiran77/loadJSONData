var space_count;

function setup(){
		console.log("I am in loadData");
	loadJSON("http://api.open-notify.org/astros.json",gotData,'jsonp');
}

function gotData(data){
		console.log("I am in gotData");	
	space_count = data;
}

function workData(){
		console.log("I am in workData");	
	if (space_count){
		console.log(space_count);
	}
}
