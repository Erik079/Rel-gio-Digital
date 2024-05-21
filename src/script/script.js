function menu() {
    

    let clock = document.querySelector("#clock")
    let body = document.body

    let date = new Date()
    let hours = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    if (second < 10) {
        clock.innerHTML = `${hours}:${minute}:0${second}`
    } else {
        clock.innerHTML = `${hours}:${minute}:${second}`
    }

    if (hours > 24 && hours < 6 || hours > 0 && hours < 6) {
        body.style.backgroundImage = "url('src/images/Early_morning.gif')"
    } else if (hours > 18) {
        body.style.backgroundImage = "url('src/images/night.gif')"
    } else if (hours > 12) {
        body.style.backgroundImage = "url('src/images/Afternoon.gif')"
    } else if (hours == 12) {
        body.style.backgroundImage = "url('src/images/Midday.gif')"
    } else {
        body.style.backgroundImage = "url('src/images/Morning.gif')"
    }
}

setInterval(menu)