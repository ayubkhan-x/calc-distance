let distanceInp = document.querySelector('.distance__inp')
let timeWalker = document.getElementById('time__walker')
let timeBiker = document.getElementById('time__biker')
let timeCar = document.getElementById('time__car')
let timePlane = document.getElementById('time__plane')

function distanceFun() {
    timeWalker.textContent = distanceInp.value / 4
    timeBiker.textContent = distanceInp.value / 20
    timeCar.textContent = distanceInp.value / 100
    timePlane.textContent = distanceInp.value / 800
}