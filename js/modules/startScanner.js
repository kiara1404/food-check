import { barcodeDetector } from './barcodeDetector.js';

export const videoEl = document.querySelector('video')
export async function startScanner() {

    console.log(document.readyState);
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
    loader()
    barcodeDetector()

}

function loader() {
    const spinner = document.querySelector('.loading')
    const state = document.readyState
    if (state == 'complete') {
        spinner.style.display = 'none'
    }
}
