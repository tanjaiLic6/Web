
let TvShows= new Shows();
var allShows= new Shows();
let container=document.querySelector('.container');
let form=document.querySelector('form');

let searchInput=document.querySelector('.form-control');
searchInput.addEventListener("search",searchShows);
let ul=document.createElement('ul');


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



function searchShows(){
    let xmlhttp = new XMLHttpRequest(); 
    let url= 'http://api.tvmaze.com/shows';
    xmlhttp.open('GET',url);
    xmlhttp.onload=function(){
        if(xmlhttp.status>=200&&xmlhttp.status<400){
            let response=JSON.parse(xmlhttp.response);
            allShows.listOfShows.push(response);
            let list=allShows.listOfShows[0];
            console.log(list);
            let searchShow=searchInput.value.toUpperCase();
            console.log(searchShow)
            let searchHelpArray=[];
            console.log(searchHelpArray)
              
            for(let i=0; i<list.length; i++){
               
                if(list[i].name.toUpperCase().indexOf(searchShow)>=0){
                    let li=document.createElement('li');
                    searchHelpArray.push(list[i].id);
                    li.textContent=list[i].name;
                    li.setAttribute('id',list[i].id);

                    if(searchHelpArray.length<=9 ){
                        ul.append(li);
                        form.append(ul);

                    }
                    
                    
               
                }
                else{

                }
                
            }
             
            searchShow.value='';

        }
     }

        xmlhttp.send();


}




