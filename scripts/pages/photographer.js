async function getMedia() {
    try {
        return fetch("../../data/photographers.json", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        }).then(async function (response) {
            const urlParams = new URLSearchParams(window.location.search);
            const id = parseInt(urlParams.get('id'))
            const data = await response.json()
            const media = data.media
            return media.filter(media => media.photographerId === id);
        })
    } catch (error) {
        console.log(error)
    }
}

async function displayData(data) {
    data.forEach((data) => {
        const photographerData = mediaFactory(data);
        const media = photographerData.getMedia()
    });
};

async function init() {
    // Récupère les datas des photographes
    const photographerData = await getMedia()
    displayData(photographerData)
};

init();