import { fetchData } from './fetchData.js';
import { renderData } from './renderData.js';
import { stopScanner } from './stopScanner.js';


export function sendHash(barcode) {
    window.location.hash = 'products/' + barcode;
}

//get product info from barcode
export function getProduct(barcode) {
    const API_URL = 'https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json';



    fetchData(API_URL)
        .then(data => {
            renderData(data)
            stopScanner()
        }

        )
}

