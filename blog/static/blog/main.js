const mobileMenuItems = document.querySelector('.mobile-menu-items')
const barsBtn = document.querySelector('.bars-btn')
const closeBtn = document.querySelector('.close-btn')
const mobileSearchBtn = document.querySelector('.mobile-search-btn')
const mobileSearchForm = document.querySelector('.mobile-search-form')
const navItems = document.querySelector('.nav-items')
const barsBtn2 = document.querySelector('.bars-btn-2')
const closeBtn2 = document.querySelector('.close-btn-2')


console.log(closeBtn2)

let clickEvents = function handleClickEvents(event) {
    
    if(event.currentTarget == barsBtn) {
        mobileMenuItems.classList.toggle('show-mobile-menu-items')
        // document.body.style.overflow = "hidden"
        closeBtn.style.display = 'inline-block'
        barsBtn.style.display = 'none'
    }
    if(event.currentTarget == closeBtn) {
        mobileMenuItems.classList.toggle('show-mobile-menu-items')
        closeBtn.style.display = 'none'
        barsBtn.style.display = 'inline-block'
        // document.body.style.overflow = "auto"
    }
    if(event.currentTarget == mobileSearchBtn) {
        event.preventDefault()
        mobileSearchForm.classList.toggle('show-mobile-search-form')
    }
    if(event.currentTarget == barsBtn2) {
        navItems.classList.toggle('show-nav-items')
        barsBtn2.style.display = 'none'
        closeBtn2.style.display = 'inline-block'
    }
    if(event.currentTarget == closeBtn2) {
        navItems.classList.toggle('show-nav-items')
        barsBtn2.style.display = 'inline-block'
        closeBtn2.style.display = 'none'
    }
    else if(event.target == window) {
        if(window.innerWidth > 780) {
            // document.body.style.overflow = "auto"
            closeBtn.style.display = 'none'
            barsBtn.style.display = 'inline-block'
            mobileMenuItems.classList.remove('show-mobile-menu-items')
        }
        if(window.innerWidth > 1150 || window.innerWidth === 780) {
            // document.body.style.overflow = "auto"
            closeBtn2.style.display = 'none'
            barsBtn2.style.display = 'inline-block'
            navItems.classList.remove('show-nav-items')
        }
    }
}

barsBtn.addEventListener('click', clickEvents)

closeBtn.addEventListener('click', clickEvents)

window.addEventListener('resize', clickEvents)

mobileSearchBtn.addEventListener('click', clickEvents)

barsBtn2.addEventListener('click', clickEvents)

closeBtn2.addEventListener('click', clickEvents)