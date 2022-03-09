import { startScanner } from './startScanner.js'
import { deleteMarkup } from './deleteMarkup.js'


// render data from food api
export function renderData(data) {

    const markup = `    <section class="markup">
                            <h1>
                            ${data.product.brands}
                            </h1>
                            <section class="img-wrapper">
                                <img src="${data.product['image_front_url']}">
                            </section>
                            <ul>
                                <h3>Voedingswaarde per 100 gram </h3>

                                <li><span>kcal</span>${data.product['nutriments']['energy-kcal']}</li>
                                <li><span>koolhydraten</span>${data.product['nutriments']['carbohydrates']}</li>
                                <li><span>Proteine</span>${data.product['nutriments']['proteins']}</li>
                                <li><span>Vet</span>${data.product['nutriments']['fat']}</li>
                            </ul>
                            
                            <button> Bewaren </button>
                            <button  class="scan-other-product" href="#scan"> Scan ander product</button>
                        </section>`


    console.log(data)
    document
        .querySelector('.wrapper')
        .insertAdjacentHTML('afterbegin', markup)
}


// knop werkend maken om ander product te scannen
export function scanOtherProduct() {
    let scanOtherProductButton = document.querySelector('.scan-other-product')
    scanOtherProductButton.addEventListener('click', function () {
        // om hash te clearen van product code
        window.location.hash = 'scan'
        deleteMarkup()
        startScanner()
    })
}
