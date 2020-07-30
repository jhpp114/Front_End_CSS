// ========= API ==========
const MOVIE_API_KEY = 'd4f510ee596cdef59915335d15c4c13a';
const SEARCH_META = `/movie/now_playing`;
//  ======= DOM Element =======
const NEW_MOVIES = document.querySelector('.new_movies');
const MOVIE_UPDATED_DATE = document.querySelector('.side_movie_updated_date');


get_movie_data();
async function get_movie_data() {
    const API_LINK =`https://api.themoviedb.org/3${SEARCH_META}?api_key=${MOVIE_API_KEY}`;
    const result_data = await fetch(API_LINK).then(response => response.json());
    console.log(result_data);
    console.log(result_data.dates.maximum);
    console.log(result_data.results);
    
    let updated_date = result_data.dates.maximum; 
    let result_datas = result_data.results;
    result_datas.forEach(data_result => {
        let div = document.createElement("div");
        div.style.backgroundColor = "red";
        div.style.margin = "0.5rem";
        let h4 = document.createElement("h4");
        let textNode = document.createTextNode(data_result.original_title);
    
        h4.appendChild(textNode);
        div.appendChild(h4);
        NEW_MOVIES.appendChild(div);
    });

    // Apply DOM Data
    MOVIE_UPDATED_DATE.textContent = `Data Updated Date: ${updated_date}`;
}
