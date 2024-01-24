const burger = document.querySelector('.burger'),
navbar = document.querySelector('.navbar-nav'),
links = document.querySelectorAll('#header_links')
console.log(burger.classList);
burger.addEventListener('click',()=>{
    burger.classList.toggle('active')
    navbar.classList.toggle('active')
    

})
links.forEach((el)=>{
    el.addEventListener('click',()=>{
        burger.classList.remove('active')
        navbar.classList.remove('active')
    })
})


