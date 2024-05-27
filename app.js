
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
function getRandomInt() 
{
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
            var trailers;
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FhMTgyNDIwMDQ2M2Q4MjU0YTc1YzEwODE2NWQyOSIsInN1YiI6IjY2NGRlYzQwNjE4NmRlZGQ3YzA2MTIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4pkljTBym5mxAnOKvFF509JyMq0leCBwbNl68c7f_U'
                }
              };      
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
                            new_ele = document.getElementById(`movies${i}`);
                            new_ele.id = `movie_layout:${responses.results[i].id}`
                            new_img = document.createElement('img');
                            new_title = document.createElement('p');
                            new_title.id = "movie_title";
                            new_img.src = `https://image.tmdb.org/t/p/original${responses.results[i].poster_path}`
                            var descc =  responses.results[i].overview;
                            new_img.style.width = "240px";
                            build_lay(new_img, new_title, new_ele)
                            new_ele1.append(new_ele)
                            
                        }

                        setInterval(function(){
                            new_ig = document.getElementById("title")
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


function hide()
{

    if(document.getElementById("movied").style.display != "none")
    {
        document.getElementById("movied").style.display = "none";
        document.getElementById("Yt").src = "";
        stopVideo();

    }
        

}

const options1 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FhMTgyNDIwMDQ2M2Q4MjU0YTc1YzEwODE2NWQyOSIsInN1YiI6IjY2NGRlYzQwNjE4NmRlZGQ3YzA2MTIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4pkljTBym5mxAnOKvFF509JyMq0leCBwbNl68c7f_U'
    }
  };

function Tap(){
    if(document.getElementById("catg").style.display == "none")
        document.getElementById("catg").style.display = "flex";
    else if(!(document.getElementById("catg").style.display === "none"))
        document.getElementById("catg").style.display = "none";
}


 function Categories(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FhMTgyNDIwMDQ2M2Q4MjU0YTc1YzEwODE2NWQyOSIsInN1YiI6IjY2NGRlYzQwNjE4NmRlZGQ3YzA2MTIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4pkljTBym5mxAnOKvFF509JyMq0leCBwbNl68c7f_U'
        }
      };
      
      fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(response => response.json())
        .then(response => 
            {
                var catgs = document.getElementById(catg);
                for(var g = 0; g < 20; g++)
                    {
                        var new_catg = document.createElement('a')
                        new_catg.innerHTML = response.genres[g].name;
                        new_catg.id = response.genres[g].id;
                        catg.appendChild(new_catg);
                    }
                    console.log(response + "|")
            }
        )
        .catch(err => console.error(err));
 }
Categories();

function get_info(id)
{

    var s_id = id.split(":")[1];
    console.log(s_id);
    var movies_box = document.getElementById("movied")
    movies_box.style.display = "flex";
    movies_box.style.animation = "fadeIn 0.5s";


    const fadeInKeyframes = `
        @keyframes fadeIn {
            0% {
                scale: 0.8;
            }
            50% {
                scale: 1.2;
            }
            100%{
                scale: 1
            }
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.innerHTML = fadeInKeyframes;
    movies_box.appendChild(styleElement);

    var trailers;
    var credits;
    var casts = document.getElementById("actors")
    fetch(`https://api.themoviedb.org/3/movie/${s_id}/videos`, options)
    .then(trailers => trailers.json())
    .then(trailers =>{
        fetch(`https://api.themoviedb.org/3/movie/${s_id}/credits`, options1)
        .then(credits => credits.json())
        .then(credits =>{
            console.log(credits)
            for(var c = 0;c < 10 ; c++)
                {
                    if(c===0)
                        casts.innerHTML = "<b>Cast : </b>" + credits.cast[c].name;
                    if(c == 9)
                        {
                            casts.innerHTML += credits.cast[c].name;            
                        }
                    else 
                        casts.innerHTML += credits.cast[c].name + " , ";            
                    }
                    var descp
                    fetch(`https://api.themoviedb.org/3/movie/${s_id}`, options)
                    .then(descp => descp.json())
                    .then(descp => {
                        document.getElementById("original language").innerHTML = "<b>original Language :</b>" + descp.original_language;
                        document.getElementById("original title").innerHTML = "<b>original title : </b>" + descp.original_title;
                        document.getElementById("Rating").innerHTML = "<b>Rating : </b>" + descp.vote_average;
                        for(var i = 0; i < descp.genres.length; i++)
                            document.getElementById("genres").innerHTML = descp.genres[i].name + " ";
                        document.getElementById("runtime").innerHTML = "<b>Duration :</b>"  + descp.runtime + "min";
                        
                        md.innerHTML = "<b>Overview : </b>  " + descp.overview;
                        var title = document.getElementById("mt")
                        title.innerHTML = descp.title;
                    }

                    )
                    .catch(err => console.error(err));
                }
        )
        .catch(err => console.error(err));

        var trailer = document.getElementById("Yt")
        for(var Y = 0; Y < 20; Y++)
            if(trailers.results[Y].type === "Trailer" || trailers.results[Y].type === "Teaser")
            Yt.src = `https://www.youtube.com/embed/${trailers.results[Y].key}?autoplay=1`

    }
)
.catch(err => console.error(err));
}
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