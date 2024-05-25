
function build_lay(one, two, container){
    container.prepend(two)
    container.prepend(one)
}

function highrate(array, body){
    var highrate = 0
    var k = 0;
    for(var i = 0; i < 20; i++)
        if(array.results[i].vote_average > highrate)
            {
                highrate = array.results[i].vote_average
                k = i;
            }
                        new_bg = document.createElement('img')
                        new_bg.id = "backdrop"
                        new_bg.src = `https://image.tmdb.org/t/p/original${array.results[k].backdrop_path}`;
                        body.prepend(new_bg);
                        var title = document.getElementById("title");
                        var des = document.getElementById("description");
                        title.innerHTML = array.results[k].title;
                        des.innerHTML = array.results[k].overview;
}

let k = -1;
function getRandomInt() {
    if(k > 7 )
        k = 0;
    return k++;
}

function randomize(array, body){
    randomNum = getRandomInt();
    console.log(randomNum)
    new_bg = document.getElementById("backdrop")
    var title = document.getElementById("title");
    var des = document.getElementById("description");
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FhMTgyNDIwMDQ2M2Q4MjU0YTc1YzEwODE2NWQyOSIsInN1YiI6IjY2NGRlYzQwNjE4NmRlZGQ3YzA2MTIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4pkljTBym5mxAnOKvFF509JyMq0leCBwbNl68c7f_U'
        }
      };
    var response;
    fetch(`https://api.themoviedb.org/3/movie/${array.results[randomNum].id}/images`, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
      for(var i = 0; i < 100; i++)
            {
                if(response.logos[i].iso_639_1 === "en")
                    break;
            }
            title.src = `https://image.tmdb.org/t/p/original${response.logos[i].file_path}`;
            title.style.height = "450px"
            if(!array.results[randomNum].overview)
                return
            des.innerHTML = array.results[randomNum].overview;
                console.log("hehe" +  "1")
                new_bg.src = `https://image.tmdb.org/t/p/original${array.results[randomNum].backdrop_path}`;

    })
    
}






async function set()
{ 
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FhMTgyNDIwMDQ2M2Q4MjU0YTc1YzEwODE2NWQyOSIsInN1YiI6IjY2NGRlYzQwNjE4NmRlZGQ3YzA2MTIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4pkljTBym5mxAnOKvFF509JyMq0leCBwbNl68c7f_U'
        }
    };
    try {
        const movies = document.getElementById("movies");
        const body = document.getElementById("page");
        var i = 5;
        const homeResp = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=100', options);
        if (homeResp.ok) {
            var data_home = await homeResp.json();
            console.log(data_home)
            
            var total_data = await fetch(`https://api.themoviedb.org/3/movie/popular`, options);
            if(total_data.ok)
                {
                    responses = await total_data.json();
                    highrate(responses, body)
                    
                    console.log("here")
                    console.log(responses)
                    new_ele1 = document.createElement(`div`);
                    new_ele1.id = "line"
                    movies.append(new_ele1)
                    
                    for(var i = 1; i < 9; i++)
                        {

                            var logo_i = 
                            new_ele = document.createElement(`div`);
                            new_ele.id = "movie_layout"
                            new_img = document.createElement('img');
                            new_title = document.createElement('p');
                            new_title.id = "movie_title";
                            new_img.src = `https://image.tmdb.org/t/p/original${responses.results[i].poster_path}`
                            new_img.style.width = "240px";
                            build_lay(new_img, new_title, new_ele)
                            new_ele1.append(new_ele)
                        }

                        setInterval(function(){
                            new_ig = document.getElementById("title")
                            // new_ig.style.transform = "translate(10px, 10px)";
                            // new_ig.style.transitionDuration = "1.5s";

                            randomize(responses, body)
                            loop();
                        } 
                        , 5000);
                    }                
        }
    } 
        catch (error) {
            console.log(error);
        }
}

set()
function display_bar()
{
    document.getElementById("name").style.display= "inline-flex";
}
 

async function getM()
{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FhMTgyNDIwMDQ2M2Q4MjU0YTc1YzEwODE2NWQyOSIsInN1YiI6IjY2NGRlYzQwNjE4NmRlZGQ3YzA2MTIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4pkljTBym5mxAnOKvFF509JyMq0leCBwbNl68c7f_U'
        }
      };
      
      
    const inputelement = document.getElementById("name").value;
    const page = document.getElementById("page");
    const img = document.getElementById("imaga")
    try {
        const responce = await fetch(`https://api.themoviedb.org/3/search/movie?query=${inputelement}`, options);
        if(responce.ok)
        {
            
            const data =  await responce.json();
            // console.log(data.results[0].title);
            // console.log(data.results[i]);
            const body = document.querySelector('body');
            // body.append(page)
            for(var i = 0; i < data.results.length ; i++){
                console.log(data.results[i]);
                const new_div = document.createElement('div')
                new_div.id = "container";
                var new_poster = document.createElement('img');
                if(data.results[i].adult == true)
{                    i++;
                    continue;}

                if (!data.results[i].poster_path)
                {
                    i++;
                    continue;
                }

                new_poster.src = "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path;
                new_poster.style.width = "100%"
                new_poster.style.height = "100%%"
                new_poster.id = "layout";
                new_poster.style.border = "solid white";
                new_poster.style["border-radius"] = "10px";
                build_lay(new_poster, data.results[i].title, new_div)
                new_div.style.fontFamily = "Rubik, sans-serif";
                new_div.style.display = "flex";
                new_div.style.flexDirection = "column";
                new_div.style.width = "400px";
                new_div.style.justifyContent = "center";
                new_div.style.alignItems = "center";
                new_div.style.padding = "1%"
                new_div.style.cursor = "pointer";
                new_div.style.padding = "10px"
                new_div.addEventListener("mouseover", function(){
                    new_div.style.transform = "scale(1.1)";
                });
                new_div.addEventListener("mouseout", function(){
                    new_div.style.transform = "scale(1)";
                });
                page.append(new_div);
            }
                }
            } catch (error) {
                console.log("photo not available")
            }
            inputelement.value = "";
}