import { startScanner } from '../js/modules/startScanner.js';
import { handleRoutes } from './modules/routing.js';


handleRoutes()
// button scanner 
let scanButton = document.getElementById('scan')
scanButton.addEventListener('click', function () {
    changeDisplay()
    startScanner()
})

// make sure camera doesnt turn on before clicked on btn
// function startScanButton(){
// let startScanButton = document.querySelector('.scanner')
// startScanButton.addEventListener('click', function () {
//     startScanner()
// })
// }


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