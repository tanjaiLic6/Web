
let TvShows= new Shows();
var allShows= new Shows();
let container=document.querySelector('.container');

function getShows(){ 

    let xmlhttp = new XMLHttpRequest(); 
    let url= 'http://api.tvmaze.com/shows';
    xmlhttp.open('GET',url);
    xmlhttp.onload=function(){
        if(xmlhttp.status>=200&&xmlhttp.status<400){
           
            let response=JSON.parse(xmlhttp.response);
            TvShows.listOfShows.push(response);
            TvShows.listOfShows[0].sort(function(a, b){return b.rating.average-a.rating.average});
            TvShows.listOfShows[0].length=50;
            let x=0;
            let listShows=TvShows.listOfShows[0];
            console.log(listShows )
          
            for (let i=0; i<listShows.length;i++){ 
             if(x===4){
                    x=0;
                    container.append(row);
                }
          
             if (x===0){
                var row=document.createElement('div');
                row.classList='row justify-content-center g-2';
                x++;
             }

             if (x>0&&x<4){ 
              x++
              let div=document.createElement('div');
              div.setAttribute('id',listShows[i].id)
              div.classList='col-7 col-sm-7 col-md-4 col-lg-3';
              let img= document.createElement('img');
              img.classList='img-fluid';
              let p=document.createElement('p');
              img.src=listShows[i].image.medium;
              p.textContent=listShows[i].name;
           
              div.append(img);
              div.append(p);
              row.append(div);
         
             }

           if(i===listShows.length-1){
           
            container.append(row);
              
            }
        }
    
            

        }

    }

    xmlhttp.send();
}

getShows();



document.querySelector('.container').addEventListener('click',function(e){ 

    let div=e.target.parentNode;
    // console.log(div.id)
    let showName=div.children[1].textContent;
    let poster=div.children[0].src;
    let showId=div.id;
    console.log(showId)

    
    
    localStorage.setItem('id',showId);

  window.location.href = "./info-page.html";

})














