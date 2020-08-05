getLocation();

function getLocation() {
    const LAT = document.querySelector('.lat');
    const LON = document.querySelector('.lon');
    const TOKEN = `pk.eyJ1IjoiamhwcDExNG5lbW8iLCJhIjoiY2tkaDJ3bnprMm84ZDJycG00OGliZmdtbSJ9.cpPCTavPZtVDIPrLXqWUJQ`;
    if('geolocation' in navigator) {
        /* geolocation is available */
        console.log("geolocation Exist");
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position.coords.latitude);
            const User_Latitude = position.coords.latitude;
            const User_Longitude = position.coords.longitude;
            LAT.textContent = `: ${User_Latitude}`;
            LON.textContent = `: ${User_Longitude}`;
            const mymap = L.map('mapid').setView([User_Latitude, User_Longitude], 15);
            L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${TOKEN}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);
            const marker = L.marker([User_Latitude, User_Longitude]).addTo(mymap);
        });
      } else {
        /* geolocation IS NOT available */
        console.log("geolocation Not Exist");
      }
}