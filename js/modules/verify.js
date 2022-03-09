
import { productNotFound } from './states.js'

//ik heb de opbouw van deze fuctie gezien bij: https://github.com/dannyfrelink/foodie-app/blob/main/scripts/checkBarcode.js

export function verifyBarcode(data) {
   if (data.status_verbose === 'product not found') {
      console.log('test')
      productNotFound()

   } 
}