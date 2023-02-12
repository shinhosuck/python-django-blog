const mobileMenuItems = document.querySelector('.mobile-menu-items')
const barsBtn = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-close')
const mobileSearchBtn = document.querySelector('.mobile-search-btn')
const mobileSearchForm = document.querySelector('.mobile-search-form')



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
    else if(event.target == window) {
        if(window.innerWidth > 500) {
            // document.body.style.overflow = "auto"
            closeBtn.style.display = 'none'
            barsBtn.style.display = 'inline-block'
            mobileMenuItems.classList.remove('show-mobile-menu-items')
        }
    }
}

barsBtn.addEventListener('click', clickEvents)

closeBtn.addEventListener('click', clickEvents)

window.addEventListener('resize', clickEvents)

mobileSearchBtn.addEventListener('click', clickEvents)
