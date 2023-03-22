function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement('a')
        a.setAttribute("href", `photographer.html?id=${id}`)
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const span = document.createElement('span')
        span.textContent = city + ", " + country
        const p = document.createElement('p')
        p.textContent = tagline
        const span2 = document.createElement('span')
        span2.textContent = price + "€/jour"
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(a)
        article.appendChild(span);
        article.appendChild(p);
        article.appendChild(span2);
        return (article);
    }
    function getUserHeaderDom() {
        const header = document.querySelector('.photograph-header')
        header.setAttribute('tabindex', '0')
        const div = document.createElement("div")
        div.setAttribute('tabindex', '0')
        const h1 = document.createElement("h1")
        h1.setAttribute('tabindex', '0')
        h1.textContent = name
        const span = document.createElement("span")
        span.textContent = city + ", " + country
        span.setAttribute('tabindex', '0')
        const p = document.createElement("p")
        p.textContent = tagline
        p.setAttribute('tabindex', '0')
        div.appendChild(h1)
        div.appendChild(span)
        div.appendChild(p)
        const img = document.createElement("img")
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        img.setAttribute('tabindex', '0')
        header.insertAdjacentElement('afterbegin', div)
        header.insertAdjacentElement('beforeend', img)
    }
    function getUserInformationsDom(countLikes) {
        const div = document.createElement('div')
        div.classList.add('photographer-informations')
        div.setAttribute('tabindex', '0')
        const divLikes = document.createElement('div')
        divLikes.classList.add('photographer-informations-likes')
        divLikes.setAttribute('tabindex', '0')
        const p = document.createElement('p')
        p.textContent = countLikes
        p.setAttribute('tabindex', '0')
        const img = document.createElement('img')
        img.setAttribute("src", "assets/images/likes.png")
        divLikes.appendChild(p)
        divLikes.append(img)
        const p2 = document.createElement('p')
        p2.textContent = price + "€ / jour"
        p2.setAttribute('tabindex', '0')
        div.appendChild(divLikes)
        div.appendChild(p2)
        return (div)
    }
    function addNameForm() {
        document.querySelector('.modal header h3').textContent = name
        document.querySelector('#contact_modal').setAttribute("aria-label", `Contact me ${name}`)
    }
    return { getUserCardDOM, getUserHeaderDom, getUserInformationsDom, addNameForm}
}