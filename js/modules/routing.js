import './vendor/router.min.js';
import { fetchData } from './fetchData.js';
import { renderData } from './renderData.js';

export function handleRoutes() {
  //  console.log('test')
    routie(
        {
            'scan': () => {
                console.log('test')
                // fetchData().then(data => {
                //     renderData(data)

                // })
            }
        }
    )
}