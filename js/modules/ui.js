export function updateUI(route){
    const sections = document.querySelectorAll('section');
    const activeSection = document.querySelector(`[data-route=${route}]`);
    console.log(activeSection)
    sections.forEach(section => {
        section.classList.remove('active')
    });

    activeSection.classList.add('active')
}

// bron: https://github.com/cmda-minor-web/web-app-from-scratch-2021/blob/master/examples/modules/static/js/modules/ui.js