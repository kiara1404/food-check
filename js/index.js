

let barcode = '90162800'
const endpoint = 'https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json';

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

// button scanner 
let buttonScanner = document.getElementById('scan')
buttonScanner.addEventListener('click', function () { 
 changeDisplay()
    window.onclick = () => {
        detect();
    };
 //   get data & render in html
    fetchData(endpoint).then(data => {
        const markup = `
        <h1>
        ${data.product['brands']}
        </h1>
        <img src="${data.product['image_front_url']}">`
        console.log(data)
        document
            .querySelector('.wrapper')
            .insertAdjacentHTML('afterbegin', markup)
    })

})

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

async function detect() {
    const barcodeDetector = new BarcodeDetector();
    const list = document.getElementById("barcodes");
    let itemsFound = [];
    const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } }
    });

    const video = document.createElement("video");
    video.srcObject = mediaStream;
    video.autoplay = true;
    video.videoWidth = "100vw";
    video.videoHeight = "300px";

}