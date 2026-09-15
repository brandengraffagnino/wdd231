const url = "data/members.json";

const membersContainer = document.querySelector("#members");

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

const levels = {
    1: "Member",
    2: "Silver",
    3: "Gold"
};

async function getMemberData() {
    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data);
}

const displayMembers = (members) => {

    members.forEach((member) => {

        const card = document.createElement("section");
        card.classList.add("member-card");

        const name = document.createElement("h2");
        const logo = document.createElement("img");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const membership = document.createElement("p");

        name.textContent = member.name;

        address.textContent = member.address;

        phone.textContent = member.phone;

        membership.textContent =
            `Membership: ${levels[member.membership]}`;

        website.textContent = "Visit Website";
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");
        website.setAttribute("rel", "noopener noreferrer");

        logo.setAttribute("src", `images/${member.image}`);
        logo.setAttribute("alt", `${member.name} logo`);
        logo.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        membersContainer.appendChild(card);
    });
};

gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

getMemberData();