import './vendor/router.min.js';
import { renderData, scanOtherProduct } from './renderData.js';
import { getProduct } from './getProduct.js';
import { stopScanner } from './stopScanner.js';
import { scanButton } from '../index.js'
import { deleteMarkup } from './deleteMarkup.js';
import { updateUI } from './ui.js';
import { startScanner } from './startScanner.js';
import { state } from './states.js';

export function handleRoutes() {
    //  console.log('test')
    routie(
        {
            'scan': () => {

                updateUI('scanner')
                startScanner()

                //scanOtherProduct()

            },

            'products/:code': code => {
                getProduct(code).then(data => {
                    renderData(data, code)
                    stopScanner()

                })
            }

        })
}

