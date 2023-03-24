function increment(media, index) {
    let globalLikes = document.querySelector(".photographer-informations-likes p")
    globalLikes.textContent = parseInt(globalLikes.textContent) + 1
    media.dataset.like = true
    const likes = document.querySelectorAll(".media-card-informations div p")
    likes[index].textContent = parseInt(likes[index].textContent) + 1
}

function decrement(media, index) {
    let globalLikes = document.querySelector(".photographer-informations-likes p")
    globalLikes.textContent = parseInt(globalLikes.textContent) - 1
    media.dataset.like = false
    const likes = document.querySelectorAll(".media-card-informations div p")
    likes[index].textContent = parseInt(likes[index].textContent) - 1
}

function getIndex(medias, title) {
    for (let i = 0; i < medias.length; i++) {
        if (medias[i].dataset.title === title) {
            return i
        }
    }
}

function like(title) {
    const medias = document.querySelectorAll(".media-card")
    const index = getIndex(medias, title)
    medias[index].dataset.like === "true" ? decrement(medias[index], index) : increment(medias[index], index)
}