// document.write("Welcome to our visitors from "+geoplugin_city()+", "+geoplugin_countryName()); 
 function c(){ 
var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "http://www.geoplugin.net/xml.gp?ip=87.116.166.74", false);

xmlhttp.send();

xmlhttp.onload = function() {

var xmlDoc = xmlhttp.responseXML;

var from = xmlDoc.querySelector("geoplugin_countryName").textContent;}}

c();