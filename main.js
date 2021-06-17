const toggleButton = document.getElementsByClassName('toggler')[0]
const navlinks = document.getElementsByTagName('ul')[0]

toggleButton.addEventListener('click', () =>{
    navlinks.classList.toggle('active')
})