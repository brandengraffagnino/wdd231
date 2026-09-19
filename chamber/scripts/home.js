const currentTemp = document.querySelector("#current-temp");
const weatherDescription = document.querySelector("#weather-description");
const forecastContainer = document.querySelector("#forecast");

const currentURL = "https://api.openweathermap.org/data/2.5/weather?lat=33.36&lon=-111.79&units=imperial&appid=e8b8dde32992f39acac24adf2f3fe00f"
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=33.36&lon=-111.79&units=imperial&appid=e8b8dde32992f39acac24adf2f3fe00f"

async function getCurrentWeather() {
    try {
        const response = await fetch(currentURL);

        if (response.ok) {
            const data = await response.json();

            currentTemp.textContent =
                `${Math.round(data.main.temp)}°F`;

            weatherDescription.textContent =
                data.weather[0].description;
        }
    } catch (error) {
        console.log(error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastURL);

        if (response.ok) {
            const data = await response.json();

            displayForecast(data);
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {

    forecastContainer.innerHTML = "";

    const forecastDays = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    forecastDays.slice(0, 3).forEach(day => {

        const forecastCard = document.createElement("p");

        const date = new Date(day.dt_txt);

        forecastCard.textContent =
            `${date.toLocaleDateString("en-US", {
                weekday: "short"
            })}: ${Math.round(day.main.temp)}°F`;

        forecastContainer.appendChild(forecastCard);
    });
}

const spotlightContainer =
    document.querySelector("#spotlight-container");

const memberURL = "data/members.json";

const levels = {
    1: "Member",
    2: "Silver",
    3: "Gold"
};

async function getSpotlights() {

    try {

        const response = await fetch(memberURL);

        if (response.ok) {

            const data = await response.json();

            displaySpotlights(data);

        }

    } catch (error) {

        console.log(error);

    }
}

function displaySpotlights(members) {

    spotlightContainer.innerHTML = "";

    const featuredMembers = members.filter(member =>
        member.membership === 2 ||
        member.membership === 3
    );

    featuredMembers.sort(() => Math.random() - 0.5);

    const spotlights = featuredMembers.slice(0, 3);

    spotlights.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("spotlight-card");

        const image = document.createElement("img");
        image.src = `images/${member.image}`;
        image.alt = `${member.name} logo`;

        const title = document.createElement("h3");
        title.textContent = member.name;

        const address = document.createElement("p");
        address.textContent = member.address;

        const phone = document.createElement("p");
        phone.textContent = member.phone;

        const website = document.createElement("a");
        website.href = member.website;
        website.target = "_blank";
        website.textContent = "Visit Website";

        const membership = document.createElement("p");
        membership.textContent =
            `Membership: ${levels[member.membership]}`;

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        spotlightContainer.appendChild(card);

    });
}

getCurrentWeather();
getForecast();
getSpotlights();