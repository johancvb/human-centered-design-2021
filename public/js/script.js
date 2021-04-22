// DARK MODE

const chk = document.getElementById('chk');

const body = document.body
const img = document.getElementById('nav_img')
const nav = document.getElementById('navbar')
const label = document.getElementById('label')
const ball = document.getElementById('ball')
const zsm_btn = document.getElementById('zsm_btn')
const uur_btn = document.getElementById('uur_btn')
const morgen_btn = document.getElementById('morgen_btn')
const switch_btn = document.getElementById('switchBtn')

const zsm = document.getElementById('zsm_btn')

const morgen = document.getElementById('morgen_btn')
const beginstation = document.getElementById('beginStation')
const eindstation = document.getElementById('eindStation')


chk.addEventListener('change', () => {
    body.classList.toggle('dark');
    img.classList.toggle('dark');
    nav.classList.toggle('dark');
    label.classList.toggle('dark');
    ball.classList.toggle('dark');
    zsm_btn.classList.toggle('dark');
    uur_btn.classList.toggle('dark');
    morgen_btn.classList.toggle('dark');
    switch_btn.classList.toggle('dark');

});

switch_btn.addEventListener('click', function (e) {
    const beginStationValue = beginstation.value
    const eindStationValue = eindstation.value

    beginstation.value = eindStationValue
    eindstation.value = beginStationValue

    e.preventDefault()
})

function playAudio(url) {
    new Audio("/sounds/guitar1.mp3").play();
}

// BUTTON LINKS




const vandaag = new Date();
const datum = `${vandaag.getFullYear()}-${vandaag.getMonth() + 1}-${vandaag.getDate()}`
const datum2 = `${vandaag.getFullYear()}-${vandaag.getMonth() + 1}-${vandaag.getDate() + 1}`
const ochtend = "08:00"
const uur = vandaag.getHours()
const uur2 = uur + 1
const tijd = `${uur}:${vandaag.getMinutes()}`
const tijd2 = `${uur2}:${vandaag.getMinutes()}`

const URL = "https://www.ns.nl/reisplanner/#/?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=2021-04-15T13:52"



function ZSM_link() {
    if (beginstation.value !== eindstation.value) {
        window.open(`https://www.ns.nl/reisplanner/#/?vertrek=${beginstation.value}&vertrektype=treinstation&aankomst=${eindstation.value}&aankomsttype=treinstation&type=vertrek&tijd=${datum}T${tijd}`);
    }
    else {
        window.alert("Je beginstation en eindstation zijn hetzelfde! Kies een andere vertrek- of eindbestemming.")
    }
}

function UUR_link() {
    if (beginstation.value !== eindstation.value) {
        window.open(`https://www.ns.nl/reisplanner/#/?vertrek=${beginstation.value}&vertrektype=treinstation&aankomst=${eindstation.value}&aankomsttype=treinstation&type=vertrek&tijd=${datum}T${tijd2}`);
    }
    else {
        window.alert("Je beginstation en eindstation zijn hetzelfde! Kies een andere vertrek- of eindbestemming.")
    }
}

function MORGEN_link() {
    if (beginstation.value !== eindstation.value) {
        window.open(`https://www.ns.nl/reisplanner/#/?vertrek=${beginstation.value}&vertrektype=treinstation&aankomst=${eindstation.value}&aankomsttype=treinstation&type=vertrek&tijd=${datum2}T${ochtend}`);
    }
    else {
        window.alert("Je beginstation en eindstation zijn hetzelfde! Kies een andere vertrek- of eindbestemming.")
    }
}

