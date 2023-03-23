function mediaFactory(data) {
    const {title, likes, date} = data

    function getImgThumbnail() {
        const video = document.createElement("video")
        video.setAttribute("src", `assets/photographers/${data.video}`);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d'); 
        const img = document.createElement('img');
        img.setAttribute("alt", title)
        img.setAttribute("data-video", `assets/photographers/${data.video}`)
        img.setAttribute("tabindex", "0")
        img.classList.add("media-card-img")
        img.addEventListener('click', () => {displayMediaModal(title)})
        img.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
              displayMediaModal(title);
            }
        });
        video.addEventListener('loadeddata', () => {
            // Définir la taille du canvas en fonction de la vidéo
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
          
            // Dessinez l'image miniature sur le canvas
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            img.src = canvas.toDataURL();
        });
        return img
    }

    function getImg() {
        const img = document.createElement("img")
        img.setAttribute("src", `assets/photographers/${data.image}`)
        img.setAttribute("alt", title)
        img.setAttribute("tabindex", "0")
        img.classList.add("media-card-img")
        img.addEventListener('click', () => {displayMediaModal(title)})
        img.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
              displayMediaModal(title);
            }
        });
        return img
    }

    function getMedia() {
        const media = data.image ? getImg() : getImgThumbnail()
        return media
    }

    function getMediaCardDOM() {
        const mediaCard = document.createElement('div')
        mediaCard.classList.add("media-card")
        mediaCard.appendChild(getMedia())
        mediaCard.setAttribute("data-title", title)
        mediaCard.setAttribute("data-likes", likes)
        mediaCard.setAttribute("data-date", new Date(date).getTime() / 1000)
        mediaCard.setAttribute("data-like", false)
        mediaCard.setAttribute("tabindex", "0")
        const div = document.createElement('div')
        div.classList.add("media-card-informations")
        const h2 = document.createElement('h2')
        h2.textContent = title
        h2.setAttribute("tabindex", "0")
        const divLikes = document.createElement('div')
        const p = document.createElement('p')
        p.textContent = likes
        p.setAttribute("tabindex", "0")
        const button = document.createElement('button')
        button.setAttribute("aria-label", "likes")
        button.addEventListener('click', () => {like(title)})
        const img = document.createElement('img')
        img.setAttribute("src", "assets/images/likes.png")
        button.appendChild(img)
        div.appendChild(h2)
        divLikes.appendChild(p)
        divLikes.appendChild(button)
        div.appendChild(divLikes)
        mediaCard.appendChild(div)
        return mediaCard
    }

    return {getMediaCardDOM}
}