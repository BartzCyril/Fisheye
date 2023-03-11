function mediaFactory(data) {
    const {title, likes, price} = data

    function video() {
        const video = document.createElement("video")
        video.setAttribute("src", `assets/photographers/${data.video}`);
        video.setAttribute("type", "video/mp4")
        video.setAttribute("controls", "")
        return video
    }

    function img() {
        const img = document.createElement("img")
        img.setAttribute("src", `assets/photographers/${data.image}`)
        img.setAttribute("alt", title)
        return img
    }

    function getMedia(title) {
        const media = data.image ? img() : video()
        return media
    }

    function getMediaCardDOM() {
        const mediaCard = document.createElement('div')
        mediaCard.classList.add("media-card")
        mediaCard.appendChild(getMedia())
        const div = document.createElement('div')
        div.classList.add("media-card-informations")
        const h2 = document.createElement('h2')
        h2.textContent = title
        const divLikes = document.createElement('div')
        const p = document.createElement('p')
        p.textContent = likes
        const img = document.createElement('img')
        img.setAttribute("src", "assets/images/likes.png")
        div.appendChild(h2)
        divLikes.appendChild(p)
        divLikes.appendChild(img)
        div.appendChild(divLikes)
        mediaCard.appendChild(div)
        return mediaCard
    }

    return {getMediaCardDOM}
}