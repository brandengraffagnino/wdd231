const paddleContainer =
    document.querySelector("#paddle-container");

const generationFilter =
    document.querySelector("#generation-filter");

const modal =
    document.querySelector("#paddle-modal");

const modalContent =
    document.querySelector("#modal-content");

const closeModalButton =
    document.querySelector("#close-modal");

let paddles = [];

initialize();

async function initialize() {

    await getPaddles();

    loadSavedFilter();

}

async function getPaddles() {

    try {

        const response =
            await fetch("data/paddles.json");

        if (!response.ok) {

            throw new Error(
                "Failed to load paddle data."
            );

        }

        paddles =
            await response.json();

        displayPaddles(paddles);

    }

    catch (error) {

        console.error(error);

        paddleContainer.innerHTML = `
            <p>
                Unable to load paddle data.
            </p>
        `;

    }

}

function displayPaddles(paddleList) {

    paddleContainer.innerHTML = "";

    paddleList.forEach(paddle => {

        const card =
            document.createElement("section");

        card.classList.add("paddle-card");

        card.innerHTML = `

            <img
            src="${paddle.image}"
            alt="${paddle.brand} ${paddle.model}"
            loading="lazy"
            >

            <h3>
                ${paddle.brand}
            </h3>

            <p>
                <strong>Model:</strong>
                ${paddle.model}
            </p>

            <p>
                <strong>Generation:</strong>
                ${paddle.generation}
            </p>

            <p>
                <strong>Shape:</strong>
                ${paddle.shape}
            </p>

            <p>
                <strong>Price:</strong>
                ${paddle.price}
            </p>

            <button class="details-button">
                View Details
            </button>

        `;

        const detailsButton =
            card.querySelector(".details-button");

        detailsButton.addEventListener(
            "click",
            () => openModal(paddle)
        );

        paddleContainer.appendChild(card);

    });

}

function openModal(paddle) {

    modalContent.innerHTML = `

        <h2>
            ${paddle.brand}
            ${paddle.model}
        </h2>

            <img
            src="${paddle.image}"
            alt="${paddle.brand} ${paddle.model}"
            loading="lazy"
            >

        <p>
            <strong>Generation:</strong>
            ${paddle.generation}
        </p>

        <p>
            <strong>Shape:</strong>
            ${paddle.shape}
        </p>

        <p>
            <strong>Price:</strong>
            ${paddle.price}
        </p>

        <p>
            <strong>Skill Level:</strong>
            ${paddle.skillLevel}
        </p>

        <p>
            ${paddle.description}
        </p>

    `;

    modal.showModal();

}

closeModalButton.addEventListener(
    "click",
    () => {

        modal.close();

    }
);

generationFilter.addEventListener(
    "change",
    filterPaddles
);

function filterPaddles() {

    const selectedGeneration =
        generationFilter.value;

    localStorage.setItem(
        "preferredGeneration",
        selectedGeneration
    );

    if (selectedGeneration === "all") {

        displayPaddles(paddles);

        return;

    }

    const filteredPaddles =
        paddles.filter(
            paddle =>
                paddle.generation ===
                selectedGeneration
        );

    displayPaddles(filteredPaddles);

}

function loadSavedFilter() {

    const savedFilter =
        localStorage.getItem(
            "preferredGeneration"
        );

    if (!savedFilter) {

        return;

    }

    generationFilter.value =
        savedFilter;

    filterPaddles();

}