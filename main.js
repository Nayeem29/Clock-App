setInterval(setClock, 1000)

const hour = document.querySelector('[data-hour]')
const minute = document.querySelector('[data-minute]')
const second = document.querySelector('[data-second]')
console.log(second)

function setClock() {
    const currentDate = new Date()

    const secondRatio = currentDate.getSeconds() / 60
    console.log(secondRatio)

    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    console.log(minuteRatio)

    const hourRatio = (minuteRatio + currentDate.getHours()) / 12
    console.log(hourRatio)
    console.log(second)
    setRotation(second, secondRatio)
    setRotation(minute, minuteRatio)
    setRotation(hour, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()