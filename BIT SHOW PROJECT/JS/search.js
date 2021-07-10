var allShows= new Shows();
let form=document.querySelector('form');

let searchInput=document.querySelector('.form-control');
searchInput.addEventListener("input",searchShows);
let ul=document.createElement('ul');



function searchShows(){
    ul.innerHTML='';

    let xmlhttp = new XMLHttpRequest(); 
    let url= 'http://api.tvmaze.com/search/shows?q='+searchInput.value;
    xmlhttp.open('GET',url);
    xmlhttp.onload=function(){
        if(xmlhttp.status>=200&&xmlhttp.status<400){
            let response=JSON.parse(xmlhttp.response);
            allShows.listOfShows.push(response);
            let list=allShows.listOfShows[allShows.listOfShows.length-1];

           
            console.log(list)
              
            for(let i=0; i<list.length; i++){
                    let li=document.createElement('li');
                    li.textContent=list[i].show.name;
                    li.setAttribute('id',list[i].show.id);
                        ul.append(li);          

                    }
                    
                    form.append(ul);

        }
       
       
     }

        xmlhttp.send();

        let liSearch=ul;
        console.log(liSearch)
        liSearch.addEventListener('click',function(e){ 
          let id=e.target.id;

            localStorage.setItem('id',id);

             window.location.href = "./info-page.html";



        })
  
       
}



