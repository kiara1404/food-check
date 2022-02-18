
(async () => {
    // addeventlistener (knop) vraag toestemming om camera te gebruiken

    // access camera
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: {
                ideal: "environment"
            }
        },
        audio: false
    });
    const list = document.getElementById('barcode-list');
    let itemsFound = [];

    // video block ( feedback voor gebruiker)
    const videoEl = document.querySelector("video");
    videoEl.srcObject = stream;
    await videoEl.play();

    const barcodeDetector = new BarcodeDetector();
    window.setInterval(async () => {
        const barcodes = await barcodeDetector.detect(videoEl);
        barcodes.forEach(barcode => {
            if (!itemsFound.includes(barcode.rawValue)) {
                itemsFound.push(barcode.rawValue);
                let newBarcode = barcode.rawValue
                const API_URL = 'https://world.openfoodfacts.org/api/v0/product/' + newBarcode + '.json';
                fetchData(API_URL).then(data => {
                    const markup = `8718452498246
                            <h1>
                            ${data.product['brands']}
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
                            
                            <button> Bewaren </button>`

                    console.log(data)
                    document
                        .querySelector('.wrapper')
                        .insertAdjacentHTML('afterbegin', markup)
                })
            }
        });
    }, 1000)
})();




// button scanner 
let buttonScanner = document.getElementById('scan')
buttonScanner.addEventListener('click', function () {
    changeDisplay()

})

// fetch data
async function fetchData(url) {

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data;

    } catch (err) {
        console.log(err)

    }
}
// change display in css -- niet de beste manier maar werkt voor nu --
function changeDisplay() {
    let buttons = document.querySelector('.btn-primary')
    let products = document.querySelector('.products')
    let img = document.querySelector('.image')
    let scanner = document.querySelector('.scanner')

    buttons.style.display = 'none';
    products.style.display = 'none';
    img.style.display = 'none';
    scanner.style.display = 'block'
}



// src : https://daily-dev-tips.com/posts/detecting-barcodes-from-the-webcam/