async function getPhotographers() {
    try {
        return fetch("../../data/photographers.json", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        }).then(async function (response) {
            const data = await response.json()
            return data.photographers
        })
    } catch (error) {
        console.log(error)
    }
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    displayData(photographers)
};

init();

