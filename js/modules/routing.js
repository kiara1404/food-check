import './vendor/router.min.js';
import { renderData } from './renderData.js';
import { getProduct } from './getProduct.js';
import { stopScanner } from './stopScanner.js';
import { updateUI } from './ui.js';
import { startScanner } from './startScanner.js';
import { verifyBarcode } from './verify.js'

export function handleRoutes() {
    //  console.log('test')
    routie(
        {
            'scan': () => {
                updateUI('scanner')
                startScanner()
            },

            'products/:code': code => {
                getProduct(code).then(data => {
                    verifyBarcode(data)
                    stopScanner()
                    renderData(data)
                    updateUI('wrapper')
                    
                    




                })
            }

        })
}

