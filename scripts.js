/**
 * @author Annie P Waldman
 */

//Putting my api key in.
var myKey = "&key=AIzaSyC_YvjF2i4ejxQorXr0ge-tvfwv4HQrQoA";
//Putting my table url in for google fusion api. 
var myTableURL = "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1IKIyk3Bt7ch0wbJy4i-_dduINj-_JcoZegNkSb5C+WHERE+DATE>";

//Console log to make sure that I know that this works.
console.log("Hi there. About to make a pretty cool visualization about Finance Jobs in New York.");



//Adding my document ready to activate my pageLoaded function (which will activate the visualization).
$(document).ready(pageLoaded);

//Putting an end page console log just for double checking things.
console.log("This is the end page console log. Just for double checking things.");