import { barcodeDetector } from './barcodeDetector.js';
import { loadingState } from './states.js'

export const videoEl = document.querySelector('video')
export async function startScanner() {


    //  console.log(document.readyState);
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
    loadingState()
    barcodeDetector()


}

