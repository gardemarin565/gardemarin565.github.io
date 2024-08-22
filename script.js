const sqlite3 = require('sqlite3').verbose()
var h1Id=document.getElementById('h1')
var buttonId=document.getElementById('image')
var counter=0
var upgrade=1
let progressBar = document.getElementById('pro');
var progress=500
var energu=document.getElementById('energy')
var priblzatap=document.getElementById('priblzatap')
var energylimit=document.getElementById('energyplus')
var EnergyLimitUpgrade = 500
var tap = document.getElementById('tap')
var shop = document.getElementById('shopin')
var h1IdShop = document.getElementById('clicker')
let params = new URLSearchParams(document.location.search)
let value = params.get('id')

h1Id.textContent = value

const meme = new sqlite3.Database('database.db')

meme.run('CREATE TABLE users (id INT, coins INT, energy INT, tap INT, energylimit INT, autotap INT')

const LoadProgress = function(){
    meme.run('SELECT coins FROM users WHERE id = ?', [])
}

const energycharge=() => {
    if (progress<EnergyLimitUpgrade) {
        progress=progress+1
        progressBar.setAttribute('value', progress)
        energu.textContent=`${progress}/500`
    }
    else {}
}

do {
    setInterval(() => energycharge(), 1000);
} while (progress<EnergyLimitUpgrade);

buttonId.addEventListener('click', function(){
    if(progress!=0) {
        async function PlusPosxalko() {
            await eel.Pocxalko(counter+upgrade)
        }
        counter=counter+upgrade
        h1Id.textContent=counter
        progress=progress-1
        energu.textContent=`${progress}/${EnergyLimitUpgrade}`
        progressBar.setAttribute('value', progress)
    }
    else {}
})

priblzatap.addEventListener('click', function() {
    if (counter>=200) {
        counter=counter-200
        EnergyLimitUpgrade=EnergyLimitUpgrade+500
        h1Id.textContent=counter
    }
})

shop.addEventListener('click', function() {
    h1IdShop.textContent=counter
})