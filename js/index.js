console.log('are we connected?')

let barcode = '90162800'
const endpoint = 'https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json';


async function fetchData(url) {

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data;

    } catch (err) {
        console.log(err)

    }

}



fetchData(endpoint).then(data => {
    const markup =  `
        <h1>
        ${data.product['brands']}
        </h1>
        <img src="${data.product['image_front_url']}">`
    console.log(data)
    document
    .querySelector('.wrapper')
    .insertAdjacentHTML('afterbegin', markup )
})

