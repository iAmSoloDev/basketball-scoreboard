let homePoint = document.getElementById('homePoint')
let guestPoint = document.getElementById('guestPoint')
// console.log(homePoint)
// console.log(guestPoint)
let homeScore = 0
let guestScore = 0

function addOneHome() {
    homeScore ++
    homePoint.innerText = homeScore
}

function addOneGuest() {
    guestScore ++
    guestPoint.innerText = guestScore
}

function addTwoHome() {
    homeScore += 2
    homePoint.innerText = homeScore
}

function addTwoGuest() {
    guestScore += 2
    guestPoint.innerText = guestScore
}

function addThreeHome() {
    homeScore += 3
    homePoint.innerText = homeScore
}

function addThreeGuest() {
    guestScore += 3
    guestPoint.innerText = guestScore
}

function reload() {
    homeScore = 0
    homePoint.innerText = homeScore
    
    guestScore = 0
    guestPoint.innerText = guestScore
}

