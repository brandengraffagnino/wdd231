document.querySelector("#timestamp").value =
    new Date().toISOString();


const npModal = document.querySelector("#np-modal");
const bronzeModal = document.querySelector("#bronze-modal");
const silverModal = document.querySelector("#silver-modal");
const goldModal = document.querySelector("#gold-modal");

document.querySelector("#np-link").addEventListener("click", (event) => {
    event.preventDefault();
    npModal.showModal();
});

document.querySelector("#bronze-link").addEventListener("click", (event) => {
    event.preventDefault();
    bronzeModal.showModal();
});

document.querySelector("#silver-link").addEventListener("click", (event) => {
    event.preventDefault();
    silverModal.showModal();
});

document.querySelector("#gold-link").addEventListener("click", (event) => {
    event.preventDefault();
    goldModal.showModal();
});


document.querySelectorAll(".close").forEach(button => {

    button.addEventListener("click", () => {

        button.parentElement.close();

    });

});