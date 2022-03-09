import './vendor/router.min.js';
// import { barcodeDetector } from './barcodeDetector.js';
import { renderData } from './renderData.js';
import { getProduct } from './getProduct.js';
import { stopScanner } from './stopScanner.js';

export function handleRoutes() {
    //  console.log('test')
    routie(
        {
            //   'scan'://   barcodeDetector(),

            'products/:code': code => {
                //    console.log(code)
                getProduct(code).then(data => {
                    console.log(data)
                    renderData(data, code)
                    stopScanner()
                })
            }

        })
}

