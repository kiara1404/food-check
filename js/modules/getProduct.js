import { fetchData } from './fetchData.js';



export function sendHash(barcode) {
    window.location.hash = 'products/' + barcode;
    console.log(barcode)
}

//get product info from barcode
export function getProduct(barcode) {
    const API_URL = 'https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json';

    return fetchData(API_URL)
}
