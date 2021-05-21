

function getPlatform(){
    console.log( "platform "+ window.navigator.platform);
}

getPlatform();

function browser(){
    console.log( "browser "+ window.navigator.appVersion);
}

browser(); 

function company(){
    console.log( "company "+ window.navigator.userAgent);
}

company();

function isOnline(){
    if (window.navigator.onLine==true){
        console.log("online")}
            else {console.log("offline")}
        }

        isOnline();
    
