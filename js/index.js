console.log('are we connected?')

let barcode = '737628064502'
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
    console.log(data)
    document
    .querySelector('.app')
    .insertAdjacentHTML("afterbegin", '<h1>' + data.product['categories'] +'</h1>')
})

