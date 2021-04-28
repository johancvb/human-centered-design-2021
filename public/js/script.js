// DARK MODE

const chk = document.getElementById('chk');

const body = document.body
const img = document.getElementById('nav_img')
const nav = document.getElementById('navbar')
const label = document.getElementById('label')
const ball = document.getElementById('ball')
const uur_btn = document.getElementById('uur_btn')
const morgen_btn = document.getElementById('morgen_btn')
const switch_btn = document.getElementById('switchBtn')
const andere_btn = document.getElementById('popup_btn')
const andereDatum_btn = document.getElementById('andereDatum_btn')
const switch_btnAnders = document.getElementById('switchBtnAnders')

const beginstation = document.getElementById('beginStation')
const eindstation = document.getElementById('eindStation')

const beginstationAnders = document.getElementById('beginStationAnders')
const eindstationAnders = document.getElementById('eindStationAnders')


chk.addEventListener('change', () => {
    body.classList.toggle('dark');
    img.classList.toggle('dark');
    nav.classList.toggle('dark');
    label.classList.toggle('dark');
    ball.classList.toggle('dark');
    
    uur_btn.classList.toggle('dark');
    morgen_btn.classList.toggle('dark');
    switch_btn.classList.toggle('dark');
    andere_btn.classList.toggle('dark');
    andereDatum_btn.classList.toggle('dark');
    switch_btnAnders.classList.toggle('dark');

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
const ochtend = "10:00"
const uur = vandaag.getHours()
const uur2 = uur + 1
const tijd = `${uur}:${vandaag.getMinutes()}`
const tijd2 = `${uur2}:${vandaag.getMinutes()}`

const URL = "https://www.ns.nl/reisplanner/#/?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=2021-04-15T13:52"




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



// POPUP 

const popup = document.getElementById('popup-1')
const datumAnders = document.getElementById('datum')
const tijdAnders = document.getElementById('time')
const datum_wrapper = document.getElementById('datum_wrapper')


function togglePopup(){
    console.log(vandaag.getMonth())
    popup.classList.toggle("active");
    // datum_wrapper.insertAdjacentHTML('afterbegin', `
    //     <select>
    //         <option>${vandaag.getDate()+2}-${vandaag.getMonth()+1}-${vandaag.getFullYear()}</option>
    //         <option>${vandaag.getDate()+3}-${vandaag.getMonth()+1}-${vandaag.getFullYear()}</option>
    //         <option>${vandaag.getDate()+4}-${vandaag.getMonth()+1}-${vandaag.getFullYear()}</option>
    //         <option>${vandaag.getDate()+5}-${vandaag.getMonth()+1}-${vandaag.getFullYear()}</option>
    //         <option>${vandaag.getDate()+6}-${vandaag.getMonth()+1}-${vandaag.getFullYear()}</option>
    //         <option>${vandaag.getDate()+7}-${vandaag.getMonth()+1}-${vandaag.getFullYear()}</option>
    //         <option>${vandaag.getDate()+8}-${vandaag.getMonth()+1}-${vandaag.getFullYear()}</option>
    //         <option>${vandaag.getDate()+9}-${vandaag.getMonth()+1}-${vandaag.getFullYear()}</option>
    //         <option>${vandaag.getDate()+10}-${vandaag.getMonth()+1}-${vandaag.getFullYear()}</option>
    //     </select>
    // `)
}

switch_btnAnders.addEventListener('click', function (e) {
    const beginStationValueAnders = beginstationAnders.value
    const eindStationValueAnders = eindstationAnders.value

    beginstationAnders.value = eindStationValueAnders
    eindstationAnders.value = beginStationValueAnders

    e.preventDefault()
})

function andereDatum() {
    
    console.log("hoi")
    if (beginstationAnders.value === eindstationAnders.value || !tijdAnders.checkValidity()) {
        window.alert("Stop eens met proberen te slopen, Marijn!")
    }
    else {
        window.open(`https://www.ns.nl/reisplanner/#/?vertrek=${beginstationAnders.value}&vertrektype=treinstation&aankomst=${eindstationAnders.value}&aankomsttype=treinstation&type=vertrek&tijd=${datumAnders.value}T${tijdAnders.value}`);
    }
}

