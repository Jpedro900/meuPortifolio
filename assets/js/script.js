const techIcon = document.querySelectorAll('i')
const description = document.querySelectorAll('.tech-description')
const project = document.querySelectorAll('.project')

console.log(description)

techIcon.forEach((icon,i) =>{
    icon.addEventListener('click', () =>{
        const coloredIcon = document.querySelector('.colored')
        coloredIcon.classList.remove('colored')
        icon.classList.add('colored')
        
        const activeDescription = document.querySelector('.active')
        activeDescription.classList.remove('active')
        description[i].classList.add('active')
    })
})
