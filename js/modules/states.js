export const spinner = document.querySelector('.loading')

export function state() {

    const state = document.readyState
    console.log(state)
    if (state === 'complete') {
        spinner.classList.add('hide')
    }
}

// bron:  http://jsfiddle.net/p8h4an1g/1/