const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', ()=> {
        lepasClassAktif()
        panel.classList.add('active')
    })
})


function lepasClassAktif() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })    
}