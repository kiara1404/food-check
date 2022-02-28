const videoEl = document.querySelector('video')

//new barcode detector
async function barcodeDetector() {
    const barcodeDetector = new BarcodeDetector();
    window.setInterval(async () => {
        const barcodes = await barcodeDetector.detect(videoEl);
        console.log('new barcode detector')

        // stukje code van joeri geplakt, nog even vragen hoe dit zit
        if (barcodes.length <= 0) {
            return;
        } else {
            console.log("geslaagd")
            getProduct(barcodes[0].rawValue)
        }

    }, 1000)
}

//get product info from barcode
function getProduct(barcode) {
    const API_URL = 'https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json';

    fetchData(API_URL)
        .then(data => {
            renderData(data)
        })
}


// render data from food api
function renderData(data) {

    const markup = `
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
}



// button scanner 
let scanButton = document.getElementById('scan')
scanButton.addEventListener('click', function () {
    changeDisplay()
    startScanner()
})

// make sure camera doesnt turn on before clicked on btn
let startScanButton = document.querySelector('.scanner')

startScanButton.addEventListener('click', function () {
    startScanner()
})

async function startScanner() {
    // access camera
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: {
                ideal: "environment"
            }
        },
        audio: false
    });

    // video block ( feedback voor gebruiker)
    videoEl.srcObject = stream;
    await videoEl.play();
    barcodeDetector()
    console.log('video gaat goed')
}

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