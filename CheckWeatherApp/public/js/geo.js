getGeo();
getWeather();

function getGeo() {
    const LATITUDE = document.querySelector('.latitude');
    const LONGITUDE = document.querySelector('.longitude');
    const SUBMIT = document.querySelector('#submit');

    SUBMIT.addEventListener('click', ()=> {
        navigator.geolocation.getCurrentPosition( async position => {
            let USER_LAT = position.coords.latitude;
            let USER_LON = position.coords.longitude;
            console.log(`LAT: ${USER_LAT} LONG: ${USER_LON}`);
            LATITUDE.textContent = USER_LAT;
            LONGITUDE.textContent = USER_LON;

            let user_data_obj = {
                lat: USER_LAT
            ,   long: USER_LON
            };
            let option = {
                method: "POST"
            ,   headers: {
                    'Content-Type': 'application/json'
                }
            ,   body: JSON.stringify(user_data_obj)
            }
            const RESPONSE = await fetch('/api', option);
            const DATA = await RESPONSE.json();
        })
    });
}

function getWeather() {
    navigator.geolocation.getCurrentPosition( async position => {
        let latitude = position.coords.latitude.toFixed(2);
        let longitude = position.coords.longitude.toFixed(2);
        const fetched_weahter = await fetch(`/weather/${latitude}/${longitude}`);
        const fetched_weahter_json = await fetched_weahter.json();
        console.log(fetched_weahter_json);
        // const city = document.querySelector('.weather_city');
        // const condition = document.querySelector('.weather_condition');
        // const temperature = document.querySelector('.weather_temp');
        // city.textContent = fetched_weahter_json.name;
        // condition.textContent = fetched_weahter_json.weather[0].description;
        // temperature.textContent = fetched_weahter_json.main.temp;
        // console.log(fetched_weahter_json);
    });
}
