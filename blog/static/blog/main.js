const mobileMenuItems = document.querySelector('.mobile-menu-items')
const barsBtn = document.querySelector('.bars-btn')
const closeBtn = document.querySelector('.close-btn')
const navItems = document.querySelector('.nav-items')
const barsBtn2 = document.querySelector('.bars-btn-2')
const closeBtn2 = document.querySelector('.close-btn-2')
const mobileSearchForm = document.querySelector('.mobile-search-form')
const mobileSearch = document.querySelector('.mobile-search')
const userProfile = document.querySelector('.user-profile')
const userInfo = document.querySelector('.user-info')




let clickEvents = function handleClickEvents(event) {
    
    if(event.currentTarget == barsBtn) {
        mobileMenuItems.classList.toggle('show-mobile-menu-items')
        closeBtn.style.display = 'inline-block'
        barsBtn.style.display = 'none'
    }
    if(event.currentTarget == closeBtn) {
        mobileMenuItems.classList.toggle('show-mobile-menu-items')
        closeBtn.style.display = 'none'
        barsBtn.style.display = 'inline-block'
        mobileSearchForm.classList.remove('show-mobile-search-form')
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
    if(event.currentTarget == mobileSearch) {
        event.preventDefault()
        mobileSearchForm.classList.toggle('show-mobile-search-form')
    }
    if(event.currentTarget == userProfile) {
        event.preventDefault()
        userInfo.classList.toggle('show-user-info')
    }
    else if(event.target == window) {
        if(window.innerWidth > 780) {
            closeBtn.style.display = 'none'
            barsBtn.style.display = 'inline-block'
            mobileMenuItems.classList.remove('show-mobile-menu-items')
        }
        if(window.innerWidth > 1150 || window.innerWidth < 770) {
            closeBtn2.style.display = 'none'
            barsBtn2.style.display = 'inline-block'
            navItems.classList.remove('show-nav-items')
        }
        if(window.innerWidth < 1150) {
            userInfo.classList.remove('show-user-info')
        }
    }
}

barsBtn.addEventListener('click', clickEvents)

closeBtn.addEventListener('click', clickEvents)

window.addEventListener('resize', clickEvents)

barsBtn2.addEventListener('click', clickEvents)

closeBtn2.addEventListener('click', clickEvents)

mobileSearch.addEventListener('click', clickEvents)

userProfile.addEventListener('click', clickEvents)

// window.addEventListener('scroll', function() {
//     console.log(document.body.offsetHeight)
//     let mobileNavHeight  = document.body.scrollHeight
//     mobileMenuItems.style.height = `${mobileNavHeight}px`
// })

   