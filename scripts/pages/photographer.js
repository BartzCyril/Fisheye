async function getMedia() {
    try {
        return fetch("./data/photographers.json", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        }).then(async function (response) {
            const urlParams = new URLSearchParams(window.location.search);
            const id = parseInt(urlParams.get('id'))
            const data = await response.json()
            let media = data.media
            let photographers = data.photographers
            media = media.filter(media => media.photographerId === id)
            photographers = photographers.filter(photographer => photographer.id === id)
            return {media, photographers}
        })
    } catch (error) {
        console.log(error)
    }
}

async function displayData(data) {
    const body = document.querySelector('body')
    const photographer = photographerFactory(data.photographers[0])
    const medias = data.media
    const sectionMedia = document.querySelector('.section-media')
    const totalLikes = medias.reduce((accumulator, currentValue) => accumulator + currentValue.likes, 0);
    photographer.getUserHeaderDom()
    medias.forEach(media => {
        const mediaModel = mediaFactory(media)
        const mediaCardDOM = mediaModel.getMediaCardDOM()
        sectionMedia.appendChild(mediaCardDOM)
    })
    sortByPopularity()
    body.insertAdjacentElement('beforeend', photographer.getUserInformationsDom(totalLikes))
    photographer.addNameForm()
};

async function init() {
    // Récupère les datas des photographes
    const photographerData = await getMedia()
    displayData(photographerData)
};



init();