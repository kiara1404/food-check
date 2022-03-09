
// render data from food api
export function renderData(data) {

        const markup = `    
                            <h1>
                            ${data.product.brands}
                            </h1>
                            <section class="img-markup">
                                <img src="${data.product['image_front_url']}">
                            </section>
                            <ul>
                                <h3>Voedingswaarde per 100 gram </h3>

                                <li><span>kcal</span>${data.product['nutriments']['energy-kcal']}</li>
                                <li><span>koolhydraten</span>${data.product['nutriments']['carbohydrates']}</li>
                                <li><span>Proteine</span>${data.product['nutriments']['proteins']}</li>
                                <li><span>Vet</span>${data.product['nutriments']['fat']}</li>
                            </ul>
                            <section class="btn-markup">
                            <a class="bewaren"> Bewaren </a>
                            <a  class="scan-product" href="#scan"> Scan ander product</a>
                            </section>`


        console.log(data)
        
        document
            .querySelector('.markup')
            .insertAdjacentHTML('afterbegin', markup)
    }


