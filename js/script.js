const slider = document.querySelector('.slider')

const sliderWrapper = slider.querySelector('.slider-wrapper')

const sliderCard = slider.querySelector('.row__card')

const bulletFirst = slider.querySelector('[data-bullet-index="1"]')
const bulletSecond = slider.querySelector('[data-bullet-index="2"]')
const bulletThird = slider.querySelector('[data-bullet-index="3"]')

function dropStyles() {
  slider.querySelectorAll('.bullet').forEach((el) => (el.className = 'bullet'))
}

function adaptiveSlider(documentWidth) {
  if (documentWidth >= 1280) {
    bulletFirst.addEventListener('click', () => {
      dropStyles()

      sliderWrapper.style.transform = `translate3d(0px,0px,0px)`
      bulletFirst.classList.add('bullet-active')
    })

    bulletSecond.addEventListener('click', () => {
      dropStyles()

      sliderWrapper.style.transform = `translate3d(-${
        sliderCard.offsetWidth + 30
      }px,0px,0px)`
      bulletSecond.classList.add('bullet-active')
    })
  }

  if (documentWidth >= 768 && documentWidth <= 1279) {
    bulletFirst.addEventListener('click', () => {
      dropStyles()

      sliderWrapper.style.transform = `translate3d(0px,0px,0px)`
      bulletFirst.classList.add('bullet-active')
    })

    bulletSecond.addEventListener('click', () => {
      dropStyles()

      sliderWrapper.style.transform = `translate3d(-${
        sliderCard.offsetWidth + 280
      }px,0px,0px)`
      bulletSecond.classList.add('bullet-active')
    })
  }

  if (documentWidth >= 480 && documentWidth <= 767) {
    bulletFirst.addEventListener('click', () => {
      dropStyles()

      sliderWrapper.style.transform = `translate3d(0px,0px,0px)`
      bulletFirst.classList.add('bullet-active')
    })

    bulletSecond.addEventListener('click', () => {
      dropStyles()

      sliderWrapper.style.transform = `translate3d(-${
        sliderCard.offsetWidth + 30
      }px,0px,0px)`
      bulletSecond.classList.add('bullet-active')
    })

    bulletThird.addEventListener('click', () => {
      dropStyles()

      sliderWrapper.style.transform = `translate3d(-${
        sliderCard.offsetWidth + 251.5
      }px,0px,0px)`
      bulletThird.classList.add('bullet-active')
    })
  }

  if (documentWidth >= 320 && documentWidth <= 479) {
    bulletFirst.addEventListener('click', () => {
      dropStyles()

      sliderWrapper.style.transform = `translate3d(0px,0px,0px)`
      bulletFirst.classList.add('bullet-active')
    })

    bulletSecond.addEventListener('click', () => {
      dropStyles()

      sliderWrapper.style.transform = `translate3d(-${
        sliderCard.offsetWidth + 38
      }px,0px,0px)`
      bulletSecond.classList.add('bullet-active')
    })

    bulletThird.addEventListener('click', () => {
      dropStyles()

      sliderWrapper.style.transform = `translate3d(-${
        sliderCard.offsetWidth * 2 + 66
      }px,0px,0px)`
      bulletThird.classList.add('bullet-active')
    })
  }
}

adaptiveSlider(document.body.offsetWidth)

const questionDropdowns = document.querySelectorAll('.question__dropdown')

questionDropdowns.forEach((el) => {
  const arrow = el.querySelector('.dropdown__arrow')
  const body = el.querySelector('.dropdown__body')

  arrow.addEventListener('click', () => {
    if (el.classList.contains('dropdown-active')) {
      el.classList.remove('dropdown-active')
      body.classList.add('hidden')
      body.classList.remove('visible')
      arrow.style.transform = `rotate(0deg)`
    } else {
      el.classList.add('dropdown-active')
      body.classList.add('visible')
      body.classList.remove('hidden')
      arrow.style.transform = `rotate(180deg)`
    }
  })
})
