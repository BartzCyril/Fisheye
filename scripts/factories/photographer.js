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
    return { getUserCardDOM }
}