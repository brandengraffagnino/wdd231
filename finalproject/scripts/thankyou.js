const params =
    new URLSearchParams(
        window.location.search
    );

document.querySelector("#first").textContent =
    params.get("first");

document.querySelector("#last").textContent =
    params.get("last");

document.querySelector("#email").textContent =
    params.get("email");

document.querySelector("#skill").textContent =
    params.get("skill");

document.querySelector("#generation").textContent =
    params.get("generation");

document.querySelector("#questions").textContent =
    params.get("questions");