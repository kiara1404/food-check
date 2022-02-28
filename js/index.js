import { startScanner } from '../js/modules/startScanner.js';


// function loader() {
//     const spinner = document.querySelector('.loading')
//     const state = document.readyState
//  if (state == 'complete') {
//         spinner.style.display = 'none'
//     }
// }


// button scanner 
let scanButton = document.getElementById('scan')
scanButton.addEventListener('click', function () {
    changeDisplay()
    startScanner()
   // loader()
})

// make sure camera doesnt turn on before clicked on btn
let startScanButton = document.querySelector('.scanner')

startScanButton.addEventListener('click', function () {
    startScanner()
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





// document.onreadystatechange = function () {
//     const spinner = document.querySelector('.loading')
//     const video = document.querySelector('video')
//     const state = document.readyState

//     if (state == 'loading') {
//         spinner.style.display = 'block'
//     } else if (state == 'complete') {
//         setTimeout(function () {
//             spinner.style.display = 'none';
//             video.style.display = 'block'
//         }, 1000)
//     }
// }

// src : https://daily-dev-tips.com/posts/detecting-barcodes-from-the-webcam/