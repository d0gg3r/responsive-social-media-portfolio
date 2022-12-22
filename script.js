// SIDEBAR
const menuItem = document.querySelectorAll(".sidebar__item")
const notificationsEl = document.querySelector("#notifications")
const notificationsPopup = document.querySelector(".notifications-popup")

// remove .active class
const removeActiveClass = () => {
  menuItem.forEach(item => {
    item.classList.remove('active')
  })
}

// add .active class
menuItem.forEach(item => {
  item.addEventListener('click', () => {
    removeActiveClass()
    item.classList.add('active')
    if(item.id != 'notifications') {
      notificationsPopup.classList.remove('open')
    }
  })

});

// notifications popup
notificationsEl.addEventListener('click', () => {
  notificationsPopup.classList.toggle('open')
  document.querySelector('#notifications .notification-count').
  style.display = 'none'
})

// MESSAGES
const messagesNotifications = document.querySelector("#messages-notifications")
const messages = document.querySelector('.messages')

// highlight messages card when menu item is clicked
messagesNotifications.addEventListener('click', () => {
  messagesNotifications.querySelector('.notification-count').
  style.display = 'none'
  messages.style.boxShadow = '0 0 1rem var(--color-primary)'
  setTimeout(() => {
    messages.style.boxShadow = 'none'
  }, 2500);
})

// search chat
const message = messages.querySelectorAll('.messages__message')
const messageSearchBox = document.querySelector('#search-messages')

const searchMessage = () => {
  const val = messageSearchBox.value.toLowerCase()
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase()
    if(name.indexOf(val) != -1) {
      chat.style.display = 'flex'
    } else {
      chat.style.display = 'none'
    }
    // if(messageSearchBox.value = '') {
    //   chat.style.display = 'flex'
    // }
  })
}

messageSearchBox.addEventListener('keyup', searchMessage)

// THEME/DISPLAY CUSTOMIZAtION
const themeEl = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')
var root = document.querySelector(':root')

// open modal
const openThemeModal = () => {
   themeModal.style.display = 'grid'
}

// close modal
const closeThemeModal = (e) => {
  if(e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none'
  }
}

themeModal.addEventListener('click', closeThemeModal)
themeEl.addEventListener('click', openThemeModal)

// font sizes
const fontSizes = document.querySelectorAll('.choose-size span')

// remove active class from spans
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active')
  });
}

fontSizes.forEach(size => {
  let fontSize
  
  size.addEventListener('click', () =>{
    removeSizeSelector()
    size.classList.toggle('active')

    if(size.classList.contains('font-size-1')) {
      fontSize = '10px';
      root.style.setProperty('---sticky-top-left', '5.4rem')
      root.style.setProperty('---sticky-top-right', '5.4rem')
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px'
      root.style.setProperty('---sticky-top-left', '5.4rem')
      root.style.setProperty('---sticky-top-right', '-7rem')
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px'
      root.style.setProperty('---sticky-top-left', '-2rem')
      root.style.setProperty('---sticky-top-right', '-17rem')
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px'
      root.style.setProperty('---sticky-top-left', '-5rem')
      root.style.setProperty('--sticky-top-right', '-25rem')
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px'
      root.style.setProperty('---sticky-top-left', '-10rem')
      root.style.setProperty('---sticky-top-right', '-33rem')
    }
    // change font size of the root html element
  document.querySelector("html").style.fontSize = fontSize
  })

})


// PRIMARY COLORS
const colors = document.querySelectorAll('.primary-color')

// remove active color span
const removeColorSelector = () => {
  colors.forEach(color => {
    color.classList.remove('active')
  })
}

colors.forEach(color => {
  let primary

  color.addEventListener('click', () => {
    removeColorSelector()
    color.classList.toggle('active')

    if(color.classList.contains('color-1')) {
      primary = 252 
    } else if(color.classList.contains('color-2')) {
      primary = 52
    } else if(color.classList.contains('color-3')) {
      primary = 352
    } else if(color.classList.contains('color-4')) {
      primary = 152
    } else if(color.classList.contains('color-5')) {
      primary = 202
    }
    
    root.style.setProperty('--primary-color-hue', primary)
  })
})

// BACKGROUNDS
const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')

let lightColorLightness
let whiteColorLightness
let darkColorLightness

const changeBg = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness)
  root.style.setProperty('--white-color-lightness', whiteColorLightness)
  root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

bg2.addEventListener('click', () => {
  darkColorLightness = '95%'
  lightColorLightness = '20%'
  whiteColorLightness = '15%'

  bg2.classList.add('active')
  bg1.classList.remove('active')
  bg3.classList.remove('active')

  changeBg()
})

bg1.addEventListener('click', () => {
  darkColorLightness = '17%'
  lightColorLightness = '95%'
  whiteColorLightness = '100%'

  bg1.classList.add('active')
  bg3.classList.remove('active')
  bg2.classList.remove('active')
  
  changeBg()
})

bg3.addEventListener('click', () => {
  darkColorLightness = '95%'
  lightColorLightness = '0%'
  whiteColorLightness = '10%'

  bg3.classList.add('active')
  bg2.classList.remove('active')
  bg1.classList.remove('active')

  changeBg()
})