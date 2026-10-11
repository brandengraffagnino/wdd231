// Navigation

const menuButton =
    document.querySelector("#menu");

const navigation =
    document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("show");

    menuButton.classList.toggle("show");

});


// Footer Dates

const currentYear =
    document.querySelector("#currentyear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}

const lastModified =
    document.querySelector("#lastModified");

if (lastModified) {

    lastModified.textContent =
        `Last Modified: ${document.lastModified}`;

}


// Featured Paddle

const featuredPaddle =
    document.querySelector("#featured-paddle");

if (featuredPaddle) {

    const paddle = {

        brand: "JOOLA",

        model: "Perseus Pro V",

        generation: "Gen 3",

        shape: "Elongated",

        description:
            "A control-oriented power paddle popular among advanced players for its balance of power and precision."

    };

    featuredPaddle.innerHTML = `
        <h3>${paddle.brand} ${paddle.model}</h3>

        <p>
            <strong>Generation:</strong>
            ${paddle.generation}
        </p>

        <p>
            <strong>Shape:</strong>
            ${paddle.shape}
        </p>

        <p>
            ${paddle.description}
        </p>
    `;

}