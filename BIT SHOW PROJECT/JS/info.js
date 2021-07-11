let section=document.querySelector('section');
let showNameH1=document.querySelector('.show-name');
let poster=document.querySelector('.img-info');
let summary=document.querySelector('.summary');
let numOfSeasons=document.querySelector('.seasons-num');
let seasonList=document.querySelector('.season-list')
let castList=document.querySelector('.cast-list');
let crewList=document.querySelector('.crew-list');
let pAkas=document.querySelector('.p-akas');


function getInfo(){
    let localId=localStorage.getItem("id");
    console.log(localId)
    let url='http://api.tvmaze.com/shows/'+localId;

    let xmlhttp = new XMLHttpRequest(); 
    xmlhttp.open('GET',url);
    xmlhttp.onload=function(){
        if(xmlhttp.status>=200&&xmlhttp.status<400){
           
            let response=JSON.parse(xmlhttp.response);
            // console.log(response)
            let showName=response.name;
            let showImg=response.image.medium;
            let summaryTxt=response.summary;
            console.log(summaryTxt)
            
            showNameH1.textContent=showName;
            poster.src=showImg;
            summary.innerHTML=summaryTxt;

      ///////////////////////////////// GETING SEASONS///////////////////////

            let url2='https://api.tvmaze.com/shows/'+localId+'/seasons';
            console.log(url2)
            let xmlhttp2 = new XMLHttpRequest(); 
            xmlhttp2.open('GET',url2);
            xmlhttp2.onload=function(){ 
              
                if(xmlhttp2.status>=200&&xmlhttp2.status<400){  
                    let response2=JSON.parse(xmlhttp2.response);

                    let numberOfSeasons=response2.length;
                   
                    for(let i=0; i<numberOfSeasons;i++){ 
        
                        let li=document.createElement('li');
                        li.textContent=response2[i].premiereDate+'-'+response2[i].endDate;
                        li.setAttribute('id',response2[i].id)
                        seasonList.append(li)
                     
                }
                   
                    numOfSeasons.textContent='Seasons'+'('+numberOfSeasons+')';
                     

                }

            }
  
            xmlhttp2.send();
         ///////////////////////////////////FOR CAST///////////////////////////////////////////   
          let url3='https://api.tvmaze.com/shows/'+localId+'/cast';
          let xmlhttp3 = new XMLHttpRequest(); 
          xmlhttp3.open('GET',url3);
          xmlhttp3.onload=function(){
            if(xmlhttp3.status>=200&&xmlhttp3.status<400){ 
                let response3=JSON.parse(xmlhttp3.response);
                  
                for (let i = 0; i < 10; i++) {
                  let castName= response3[i].person.name;
                  let li=document.createElement('li');
                  li.textContent=castName;
                   castList.append(li);

                    
                }
           

             }

           }


         xmlhttp3.send();

        /////////////////////////////////////////////////////////////////////// 
      }
     
    }

 xmlhttp.send();
     ///////////////////////////////////EPISODE LIST////////////////////////////////
    
  seasonList.addEventListener('click',function(e){
    let lista=document.querySelector('.ep-list')
      if(e.target.classList.contains('extended')){
          lista.remove();
          e.target.classList.remove('extended')
      }
      else { 
       let seasonId=e.target.id;
       let url4= 'https://api.tvmaze.com/seasons/'+seasonId+'/episodes';
       let xmlhttp4 = new XMLHttpRequest(); 
          xmlhttp4.open('GET',url4);
          xmlhttp4.onload=function(){
            if(xmlhttp4.status>=200&&xmlhttp4.status<400){ 
                 let ul=document.createElement('ul'); 
                 ul.classList='ep-list'; 
         
                let response4=JSON.parse(xmlhttp4.response);  
                for(i=0; i<response4.length; i++){
                  let epName=response4[i].name;
                  let li=document.createElement('li');
                   li.textContent=epName;
                   ul.append(li);
                   e.target.append(ul);
                   e.target.classList='extended';
                  
                }

            console.log(response4)

          }

        }

        xmlhttp4.send();}

  })

  //////////////////////////////////// CREW/////////////////////////////////////////////////////////////
  let url5='https://api.tvmaze.com/shows/'+localId+'/crew';
  let xmlhttp5 = new XMLHttpRequest(); 
  xmlhttp5.open('GET',url5);
  xmlhttp5.onload=function(){
    if(xmlhttp5.status>=200&&xmlhttp5.status<400){
         
        let response5=JSON.parse(xmlhttp5.response); 
        for(let i=0; i<10; i++){
           let type=response5[i].type;
           let crewName=response5[i].person.name;
           let li=document.createElement('li');
           li.textContent='Crew position:'+type+'-'+crewName;
           crewList.append(li);

        }


    }


  }

  xmlhttp5.send();

  //////////////////////////////////////////////////////////////////////////////////////////////////////
   

  let url6='https://api.tvmaze.com/shows/'+localId+'/akas';
  let xmlhttp6 = new XMLHttpRequest(); 
  xmlhttp6.open('GET',url6);
  xmlhttp6.onload=function(){
    if(xmlhttp6.status>=200&&xmlhttp6.status<400){
      let response6=JSON.parse(xmlhttp6.response); 
       for (let i=0; i<5; i++) {
        let aka=response6[i].name;
         if(i===4){
          pAkas.textContent+=aka;
         }
        
      else   pAkas.textContent+=(aka+', ');
         
       }
    }
  }
  xmlhttp6.send();
}

getInfo()