const btnMenuResponsive = document.querySelector('.btn-menu-responsive')
const navBar = document.querySelector('.nav2')

btnMenuResponsive.addEventListener('click', () => {
    navBar.classList.toggle('active')
})