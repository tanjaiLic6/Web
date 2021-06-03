

function URLproperties(){
    console.log("Full URL adress"+window.location.href);
    console.log("Domain name"+window.location.hostname);
    console.log("Protocol"+window.location.protocol);
    console.log("parametri"+window.location.search);
}


URLproperties();

function ToReload(){
 return   window.location.reload()
}

// ToReload();

window.stop();

// function redirect(){
//     return window.location.href("https://www.google.com");
// }

// redirect();