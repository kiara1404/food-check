import {spinner } from './loadingState.js'

export function deleteMarkup() {
    const markup = document.querySelector('.markup')

    if (markup) {
        markup.style.display = 'none';
        spinner.style.display = 'flex'

    }
}