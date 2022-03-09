import { videoEl } from './startScanner.js';
import { sendHash } from './getProduct.js';


//new barcode detector
export async function barcodeDetector() {
    const barcodeDetector = new BarcodeDetector();
    window.setInterval(async () => {
        const barcodes = await barcodeDetector.detect(videoEl);

        // stukje code van joeri geplakt, nog even vragen hoe dit zit
        if (barcodes.length <= 0) {
            return;
        } else {
            console.log("geslaagd")
            sendHash(barcodes[0].rawValue)
            
        }
        
    }, 2000)
}

