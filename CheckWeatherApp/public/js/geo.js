getGeo();

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
            console.log(DATA);
        })
    });
}