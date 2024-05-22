
function build_lay(one, two, container){
    container.append(one)
    container.append(two)
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
        const body = document.body;
        const homeResp = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        if (homeResp.ok) {
            var data_home = await homeResp.json();
            // console.log(data_home);
            console.log(data_home.results[0].backdrop_path);
            for (var i = 0; i < data_home.length; i++) {
                console.log(data_home.results[i].title);
            }
            body.style.background = `url(https://image.tmdb.org/t/p/original${data_home.results[0].backdrop_path})`;
            body.style.position = absolute;
        }
    } 
        catch (error) {
            console.log(error);
        }
}
set()
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
            body.append(page)
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
                // new_div.append(new_poster)
                // new_poster.style.width = 500 + "px";
                // new_div.style.background = "lime";
                // new_div.style.display = "flex";
                // new_div.style.flex_direction = "column";
                // new_div.append(new_poster);
                // console.log("https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path)
            }
            //     if( data.results.title === "the Hangover")
                //         {
                    //     img.src = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/" + data.results[i].backdrop_path
                    // }
                    
                    // else
                    // cons÷t dataa =  data.array();
                }
            } catch (error) {
                console.log("photo not available")
            }
            inputelement.value = "";
}