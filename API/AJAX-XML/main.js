
var p=document.querySelector('p');
var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "http://www.geoplugin.net/xml.gp?ip=87.116.166.74");

xmlhttp.send();

xmlhttp.onload = function() {

    if(xmlhttp.status===200){
        var xmlDoc = xmlhttp.responseXML;
        p.textContent=xmlDoc.querySelector("geoplugin_countryName").textContent
    }
}

// var xmlDoc = xmlhttp.responseXML;

// var from = xmlDoc.querySelector("geoplugin_countryName").textContent;}

