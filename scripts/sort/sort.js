const svg = document.querySelector('.select svg')
const pathSvg = document.querySelector('.select svg path')
const options = document.querySelectorAll('.select div')
const itemOptions = document.querySelectorAll('.select div p')
let optionsSelect = document.querySelectorAll('.select p')
let isOpenModal = false

function openModalSort() {
    isOpenModal = true
    pathSvg.setAttribute('d', 'M1.88 10.5466L8 4.43996L14.12 10.5466L16 8.66663L8 0.66663L-3.12482e-07 8.66663L1.88 10.5466Z')
    itemOptions.forEach(option => option.classList.add("pointer"))
    options[0].classList.add("pseudo-elt")
    options[1].classList.add("pseudo-elt")
    options[1].classList.remove("hidden")
    options[2].classList.remove("hidden")
}

function closeModalSort() {
    isOpenModal = false
    pathSvg.setAttribute('d', 'M14.12 0.453125L8 6.55979L1.88 0.453125L0 2.33312L8 10.3331L16 2.33312L14.12 0.453125Z')
    itemOptions.forEach(option => option.classList.remove("pointer"))
    options[0].classList.remove("pseudo-elt")
    options[1].classList.remove("pseudo-elt")
    options[1].classList.add("hidden")
    options[2].classList.add("hidden")
}

svg.addEventListener('click', function() {
    isOpenModal ? closeModalSort() : openModalSort()
})

function swapElements(array, index) {
    temp = array[0].textContent
    array[0].textContent = array[index].textContent
    array[index].textContent = temp
    return array
}

function switchElement(element) {
    let optionsSelect = document.querySelectorAll('.select p')
    let index = 0
    for (let i=0; i < optionsSelect.length; i++) {
        if (optionsSelect[i].textContent === element) {
            index = i
            break
        }
    }
    switch(element) {
        case 'Popularité' : 
        optionsSelect = swapElements(optionsSelect, index)
        break
        case 'Date' : 
        optionsSelect = swapElements(optionsSelect, index)
        break
        case 'Titre' : 
        optionsSelect = swapElements(optionsSelect, index)
        break
    }
    return optionsSelect
}

function sortByPopularity() {
    const sectionMedia = document.querySelector('.section-media')
    let mediaCards = Array.from(document.querySelectorAll('.media-card'))
    mediaCards = mediaCards.sort((a,b) => b.dataset.likes - a.dataset.likes)
    mediaCards.forEach(media => sectionMedia.appendChild(media))
    closeModalSort()
    optionsSelect = switchElement('Popularité')
}

function sortByDate() {
    console.log("date")
    const sectionMedia = document.querySelector('.section-media')
    let mediaCards = Array.from(document.querySelectorAll('.media-card'))
    mediaCards = mediaCards.sort((a,b) => b.dataset.date - a.dataset.date)
    mediaCards.forEach(media => sectionMedia.appendChild(media))
    closeModalSort()
    optionsSelect = switchElement('Date')
}

function sortByTitle() {
    const sectionMedia = document.querySelector('.section-media')
    let mediaCards = Array.from(document.querySelectorAll('.media-card'))
    mediaCards = mediaCards.sort((a,b) => {
        if (a.dataset.title < b.dataset.title) {
            return -1
        } else if (a.dataset.title > b.dataset.title) {
            return 1
        } else {
            return 0
        }
    })
    mediaCards.forEach(media => sectionMedia.appendChild(media))
    closeModalSort()
    optionsSelect = switchElement('Titre')
}

optionsSelect.forEach(element => element.addEventListener('click', function() {
    switch(element.textContent) {
        case 'Popularité' : 
        isOpenModal ? sortByPopularity() : ''
        break
        case 'Date' : 
        isOpenModal ? sortByDate() : ''
        break
        case 'Titre' : 
        isOpenModal ? sortByTitle() : ''
        break
    }
}))


