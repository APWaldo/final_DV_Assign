/**
 * @author Annie P Waldman
 */

//Putting my api key in.
var myKey = "&key=AIzaSyC_YvjF2i4ejxQorXr0ge-tvfwv4HQrQoA";
//Putting my table url in for google fusion api. 
var myTableURL = "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1IKIyk3Bt7ch0wbJy4i-_dduINj-_JcoZegNkSb5C+WHERE+DATE>";

//Console log to make sure that I know that this works.
console.log("Hi there. About to make a pretty cool visualization about Finance Jobs in New York.");


function dataLoaded(FINJOBS) {

	//Console log that the data has loaded just to double check. Put the name of the data UNRATE just to check.
	console.log(FINJOBS);

	var gDataTable = new google.visualization.DataTable();

	//When adding columns, the first parameter is the datatype in that column.
	//The second parameter is the name of the column.

	gDataTable.addColumn('string', FINJOBS.columns[0]);

	gDataTable.addColumn('number', FINJOBS.columns[1]);

	//Now that we have the headers, lets add some rows.

	gDataTable.addRows(FINJOBS.rows)

	//Create options object to add fanciness to the chart, like a title.
	var chartOptions = {
		title : "Finance Jobs Since 1990"
	};

	//Now I tell it to create a line chart and give it a div that matches the index.html, meaning I should now go back and create
	//that div in my index.
	var myFinJobsChart = new google.visualization.LineChart(document.getElementById('myFinJobsChartDiv'));
	//Telling it to draw it using my data and using my options! Finished! So exciting!
	myFinJobsChart.draw(gDataTable, chartOptions);
}



//Selecting my date using the e.target.id. This will push data based on what button is pressed. 
function showNewData(e) {
	var myID = e.target.id;
	//e.g. "year_2000"
	console.log(myID);
	//splits it into an array, "2000" will be second
	var myNameArray = myID.split("_");
	//grab the year
	var myYear = myNameArray[1];

	$.get(myTableURL + "'" + myYear + "-12-01'" + myKey, dataLoaded, "json");
	
	History.pushState({year:myYear}, "Unemployment from - "+myYear, "?year="+myYear); // logs {state:1}, "State 1", "?state=1"
}



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