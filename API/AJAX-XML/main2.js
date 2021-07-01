var p=document.querySelector('p');
var button=document.querySelector('button');
var inputIp=document.querySelector('#ip');
var xmlhttp = new XMLHttpRequest();


button.addEventListener('click',loc)

 function loc(){ 
    var xmlhttp = new XMLHttpRequest();

  
    xmlhttp.open("GET","http://www.geoplugin.net/xml.gp?ip="+inputIp.value,true);

    xmlhttp.onload=function(){ 
    if(xmlhttp.status===200){
        var xmlDoc = xmlhttp.responseXML;
        p.textContent=xmlDoc.querySelector("geoplugin_countryName").textContent;
        // .querySelector("geoplugin_countryName").textContent
    }

    else{
        p.textContent=xmlhttp.status;
    }

 }
 xmlhttp.send();

}