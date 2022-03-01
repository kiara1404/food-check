export const spinner = document.querySelector('.loading')

export function loader() {
    const state = document.readyState
    if (state == 'complete') {
        spinner.style.display = 'none'
    }
}

// bron:  http://jsfiddle.net/p8h4an1g/1/