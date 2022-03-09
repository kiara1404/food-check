import {spinner } from './states.js'

export function deleteMarkup() {
    const markup = document.querySelector('.markup')

    if (markup) {
        markup.style.display = 'none';
        spinner.style.display = 'flex'

    }
}