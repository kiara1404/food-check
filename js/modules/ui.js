export function updateUI(route){
    const sections = document.querySelectorAll('section');
    const activeSection = document.querySelector(`[data-route=${route}]`);
    console.log(activeSection)
    sections.forEach(section => {
        section.classList.remove('active')
    });

    activeSection.classList.add('active')
}