// window.onload = () => {
//     detect();
// };

// async function detect() {
//     const barcodeDetector = new BarcodeDetector();

//     const mediaStream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: 'environment' }
//     });

//     // video block, feedback for user
//     const video = document.querySelector('video');
//     video.srcObject = mediaStream;
//     video.autoplay = true;

//     list.before(video);

//     function render() {
//         barcodeDetector
//             .detect(video)
//             .then(barcodes => {
//                 barcodes.forEach(barcode => {
//                     if (!itemsFound.includes(barcode.rawValue)) {
//                         itemsFound.push(barcode.rawValue);
//                         const li = document.createElement('li');
//                         li.innerHTML = barcode.rawValue;
//                         list.appendChild(li);
//                         let newBarcode = barcode.rawValue
//                         const API_URL = 'https://world.openfoodfacts.org/api/v0/product/' + newBarcode + '.json';
//                         fetchData(API_URL).then(data => {
//                             const markup = `
//                             <h1>
//                             ${data.product['brands']}
//                             </h1>
//                             <img src="${data.product['image_front_url']}">`

//                             console.log(data)
//                             document
//                                 .querySelector('.scanner')
//                                 .insertAdjacentHTML('afterbegin', markup)
//                         })
//                     }
//                 });
//             })
//             .catch(console.error);
//     }

//     (function renderLoop() {
//         requestAnimationFrame(renderLoop);
//         render();
//     }()
//     )
// }
(async () => {
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

    const videoEl = document.querySelector("video");
    videoEl.srcObject = stream;
    await videoEl.play();

    const barcodeDetector = new BarcodeDetector();
    window.setInterval(async () => {
        const barcodes = await barcodeDetector.detect(videoEl);
        barcodes.forEach(barcode => {
                    if (!itemsFound.includes(barcode.rawValue)) {
                        itemsFound.push(barcode.rawValue);
                        const li = document.createElement('li');
                        li.innerHTML = barcode.rawValue;
                        list.appendChild(li);
                        let newBarcode = barcode.rawValue
                        const API_URL = 'https://world.openfoodfacts.org/api/v0/product/' + newBarcode + '.json';
                        fetchData(API_URL).then(data => {
                            const markup = `
                            <h1>
                            ${data.product['brands']}
                            </h1>
                            <img src="${data.product['image_front_url']}">`

                            console.log(data)
                            document
                                .querySelector('.scanner')
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