const mobileMenuItems = document.querySelector('.mobile-menu-items')
const bars = document.querySelector('.fa-bars')

bars.addEventListener('click', function(){
    mobileMenuItems.classList.toggle('show-mobile-menu-items')
    if(mobileMenuItems.classList.contains('show-mobile-menu-items')) {
        document.body.style.overflow = "hidden"
    }
})

