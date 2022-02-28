import { videoEl } from './startScanner.js';
import { getProduct } from './getProduct.js';

//new barcode detector
export async function barcodeDetector() {
    const barcodeDetector = new BarcodeDetector();
    window.setInterval(async () => {
        const barcodes = await barcodeDetector.detect(videoEl);
        console.log(document.readyState);
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

