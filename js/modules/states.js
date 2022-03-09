
export function loadingState() {
    const spinner = document.querySelector('.loading')

    const state = document.readyState
    console.log(state)
    if (state === 'complete') {
        spinner.classList.add('hide')
    }
}

export function productNotFound() {
    console.log('testttt')
    const errorMarkup = `
    <h3> Product niet gevonden </h3>
    <p>Het product komt niet voor in de database.</p>
   
    <section class="btn-markup">
     <a  class="scan-product" href="#scan"> Scan ander product</a>
    </section>`
    document.querySelector('.markup').insertAdjacentHTML("afterbegin", errorMarkup)
}

export function invalidCode(){
    const errorMarkup = `
    <h3> Ongeldige code </h3>
    <p>De code is niet goed gelezen.</p>
    <p>Scan het product nog een keer</p>
   
    <section class="btn-markup">
     <a  class="scan-product" href="#scan"> Scan product</a>
    </section>`
    document.querySelector('.wrapper').insertAdjacentHTML("afterbegin", errorMarkup)
}

// bron:  http://jsfiddle.net/p8h4an1g/1/