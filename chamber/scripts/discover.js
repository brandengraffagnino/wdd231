import { places } from "../data/places.mjs";

const discoverGrid =
    document.querySelector("#discover-grid");

const visitMessage =
    document.querySelector("#visit-message");

displayVisitMessage();
displayPlaces();

function displayVisitMessage() {

    const lastVisit =
        localStorage.getItem("lastVisit");

    const currentVisit =
        Date.now();

    if (!lastVisit) {

        visitMessage.textContent =
            "Welcome! Let us know if you have any questions.";

    } else {

        const difference =
            currentVisit - Number(lastVisit);

        const days =
            Math.floor(difference / 86400000);

        if (days < 1) {

            visitMessage.textContent =
                "Back so soon! Awesome!";

        } else if (days === 1) {

            visitMessage.textContent =
                "You last visited 1 day ago.";

        } else {

            visitMessage.textContent =
                `You last visited ${days} days ago.`;

        }
    }

    localStorage.setItem(
        "lastVisit",
        currentVisit
    );
}

function displayPlaces() {

    places.forEach((place, index) => {

        const card =
            document.createElement("section");

        card.classList.add("discover-card");

        card.classList.add(`card${index + 1}`);

        card.innerHTML = `
            <h2>${place.name}</h2>

            <figure>
            <img
            src="${place.image}"
            alt="${place.name}"
            loading="lazy"
            width="300"
            height="200">
            </figure>

            <address>
                ${place.address}
            </address>

            <p>
                ${place.description}
            </p>

            <button>
                Learn More
            </button>
        `;

        discoverGrid.appendChild(card);

    });

}