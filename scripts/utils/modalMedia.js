let currentIndex = 0
let medias = null
let p = null
let isCreateImg = false
let isCreateVideo = false
let currentMedia = null

function displayMediaModal(title) {
    const modal = document.getElementById("media_modal");
    const bground = document.querySelector('.bground')
    modal.style.display = "block";
    bground.style.display = "block";
    medias = document.querySelectorAll('.media-card img:first-child')
    p = document.querySelector('.media_modal_data p')
    currentIndex = getMediaIndex(title)
    medias[currentIndex].dataset.video ? currentMedia = 'video' : currentMedia = 'img'
    getMedia()
}

function closeMediaModal() {
    const modal = document.getElementById("media_modal");
    const bground = document.querySelector('.bground')
    modal.style.display = "none";
    bground.style.display = "none";
    currentMedia === 'video' ? removeVideo() : removeImg()
}

function getMediaIndex(title) {
    for (let i = 0; i < medias.length; i++) {
        if (medias[i].alt === title) {
            return i
        }
    }
}

function isImg(element) {
    return element.dataset.video ? false : true
}

function moveForward() {
    currentIndex + 1 === medias.length ? currentIndex = 0 : currentIndex++
    getMedia()
}

function moveBackward() {
    currentIndex - 1 === -1 ? currentIndex = medias.length - 1 : currentIndex--
    getMedia()
}

function createImg(src, alt) {
    isCreateImg = true
    const img = document.createElement('img')
    img.setAttribute('alt', alt)
    img.setAttribute("src", src);
    return img
}

function createVideo(src) {
    isCreateVideo = true
    const video = document.createElement("video")
    video.setAttribute("src", src);
    video.setAttribute("type", "video/mp4")
    video.controls = true
    return video
}

function removeImg() {
    const img = document.querySelector('.media_modal_data img')
    img.remove()
    isCreateImg = false
    currentMedia = 'img'
}

function removeVideo() {
    const video = document.querySelector('.media_modal_data video')
    video.remove()
    isCreateVideo = false
    currentMedia = 'video'
}

function getMedia(title) {
    const mediaModalData = document.querySelector('.media_modal_data')
    if (isImg(medias[currentIndex])) {
        if (currentMedia !== 'img')
            removeVideo() 
        if (isCreateImg) {
            const img = document.querySelector('.media_modal_data img')
            img.setAttribute("src", medias[currentIndex].src)
            img.setAttribute("alt", medias[currentIndex].alt)
        } else {
            mediaModalData.insertAdjacentElement('afterbegin',createImg(medias[currentIndex].src, medias[currentIndex].alt))
        }
        currentMedia = 'img'
    } else {
        if (currentMedia !== 'video') 
            removeImg()
        if (isCreateVideo) {
            const video = document.querySelector('.media_modal_data video')
            video.setAttribute("src", medias[currentIndex].dataset.video);
        } else {
            mediaModalData.insertAdjacentElement('afterbegin',createVideo(medias[currentIndex].dataset.video))
        }
        currentMedia = 'video'
    }
    p.textContent = medias[currentIndex].alt
}


