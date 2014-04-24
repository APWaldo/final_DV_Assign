/**
 * @author Annie P Waldman
 */

//Putting my api key in.
var myKey = "&key=AIzaSyC_YvjF2i4ejxQorXr0ge-tvfwv4HQrQoA";
//Putting my table url in for google fusion api. 
var myTableURL = "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1IKIyk3Bt7ch0wbJy4i-_dduINj-_JcoZegNkSb5C+WHERE+DATE>";

//Console log to make sure that I know that this works.
console.log("Hi there. About to make a pretty cool visualization about Finance Jobs in New York.");






//Instead of adding data from a static json file, I'm going to load it from a google fusion table.
function googleLoaded() {
	
	var myURL = History.getState().cleanUrl;
	var queryArray = myURL.split("?"); //split url on question marjk
	var defaultYear ="1990";
	
	if(queryArray.length>1){
		//get the query string, break it on the =, and then take the second element.
		defaultYear = queryArray[1].split("=")[1];
	}
	
	//is there something in the URL that specifies the year?

	console.log("Google has loaded");
	$(".btn-info").on("click", showNewData);
	//Time to load data with get function. This will tell my page to go and get this data set and use the function
	//dataLoaded to render it. this grabs the button with the id that is year_"defaultYear"
	$("#year_"+defaultYear).click();

}



//Adding my new function pageLoaded and console logging to make sure that the pageLoaded function activates on
//document ready. This will eventually load my google visualization.
function pageLoaded() {

	//console log checks to make sure that page loaded works.
	console.log("Got to page loaded.");

	//Load the google visualization library with the callback googleLoaded. This will tell the browser to load the function
	//googleLoaded. This is using the google visualization script to work. But now I have to make sure that I have
	//my function googleLoaded working.
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "googleLoaded"
	});

}

//Adding my document ready to activate my pageLoaded function (which will activate the visualization).
$(document).ready(pageLoaded);

//Putting an end page console log just for double checking things.
console.log("This is the end page console log. Just for double checking things.");