import { barcodeDetector } from './barcodeDetector.js';

export const videoEl = document.querySelector('video')
export async function startScanner() {


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
}
