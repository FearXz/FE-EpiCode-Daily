// in che mese siamo e quanti giorni ha quel mese
// poi devo salvare appuntamenti , ogni giorno devo contenere infiniti appuntamenti
// ogni mese ha un numero variabile di giorni
// qui pusho  dentro tanti sotto array quanti son i giorni del mese corrente
const now = new Date()

const appointments = [];
const monthNames = [
    'Genaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre']

const printCurrentMonthInH1 = function () {
    const title = document.querySelector('h1');
    const monthIndex = now.getMonth();
    const currentMonth = monthNames[monthIndex];
    title.innerText = currentMonth;
}
// dobbiamo ora calcolare il numero dei giorni per riempire correttamente le celle
// per trovare l'ultimo giorno di un mese si prende il mese successivo e si toglie un giorno
const daysInThisMonth = function () {
    const getYear = now.getFullYear()
    const getMonth = now.getMonth()

    const lastDayInTheMonth = new Date(getYear, getMonth + 1, 0) // lo 0 di dicembre = 30 novembre
    const numberofTheDay = lastDayInTheMonth.getDate()
    return numberofTheDay
}
const unSelectAllDays = function () {
    /* rimuovere le classi  selected precedentemente applicate
    cosi quanto applico selected ce ne sarà solo 1 selezionato */

    /* APPROCCIO BULLDOZER  prendo tutte le celle e rimuovo la classe selected
    const allTheCells = document.getElementsByClassName('day')
    const allTheCellsAsArray = array.from(allTheCells)
    allTheCellsAsArray.forEach((cell)=> {cell.classList.remove('selected')})*/

    /* APPROCCIO CHIRURGICO */
    const previousSelected = document.querySelector('.selected')
    if(previousSelected){
        previousSelected.classList.remove('selected')
    }/* cerchiamo se era stata cliccata una cella precedentemente, 
    cercando dei tag con la classe .selected , e se la trova la rimuove */
}
const changeMeetingDaySection = function (indexOfTheDay) {
    const span = document.getElementById('newMeetingDay')
    span.classList.add('hasday')
    span.innerText = indexOfTheDay+1
}



const createDays = function (nOfDays) {
    const calendarDiv = document.getElementById('calendar')
    //aggancio il div del calendario principale
    for (let i = 0; i < nOfDays; i++) {
        //ciclo tutti i giorni e creo n componenti = n giorni
        const dayCellDiv = document.createElement('div')
        //crea <div></div>
        dayCellDiv.classList.add('day')
        //aggiungo la classe al div <div class="day"></div>
        dayCellDiv.addEventListener('click',function (e) {
            unSelectAllDays(); 
            dayCellDiv.classList.add('selected');
            /*clearo le altre celle con unSelectAllDays() 
            ed aggiungo la classe .selected all'elemento cliccato*/
            changeMeetingDaySection(i);
            /* changeMeetingDaySection(i); inserisce l'indice del giorno nella section in basso*/
            if (appointments[i].length>0){
                showAppointments(i)
            }
            else {
                const appointmentsDiv = document.getElementById('appointments')
                appointmentsDiv.style.display = 'none'
            }
        })
        const cellValue = document.createElement('h3')
        // creo il tag  <h3></h3> da inserire dentro la cella div con classe day
        cellValue.innerText = i + 1
        //inserisco il valore numerico del giorno dentro <h3> i+1</h3>
        dayCellDiv.appendChild(cellValue)
        //appendo l'h3 al div cella     
        calendarDiv.appendChild(dayCellDiv)
        //appendo la celladiv al calendario
        appointments.push([])
        /*ora che ho creato  la pagina , inserisco gli appointments*/
    }

}
const showAppointments = function (indexOfTheDay) {
    const appointmentsForThisDay =  appointments[indexOfTheDay] 
    const appointmentsList = document.querySelector('#appointments ul')
    appointmentsList.innerHTML = ''
    appointmentsForThisDay.forEach((appointment)=>{
        const newLi = document.createElement('li')
        newLi.innerText = appointment
        appointmentsList.appendChild(newLi)
    })
    const appointementDiv = document.getElementById('appointments')
    appointementDiv.style.display = 'block'
}

const handleFormSubmit = function (e) {
    e.preventDefault()
    const selectedDay = document.getElementById('newMeetingDay').innerText
    const meetingTime = document.getElementById('newMeetingTime').value
    const meetingName = document.getElementById('newMeetingName').value
    const meetingString = meetingTime+ ' - ' +meetingName;
    const rightIndexForAppointments = parseInt(selectedDay) - 1
    appointments[rightIndexForAppointments].push(meetingString);

    const dot = document.createElement('span')
    dot.classList.add('dot')
    const selectedCell = document.querySelector('.selected')
    if (!selectedCell.querySelector('.dot')) {

        selectedCell.appendChild(dot)
      }

    showAppointments(rightIndexForAppointments)
}

// evochiamo qua sotto
//stampa il mese in h1
printCurrentMonthInH1();
/* con la funzione daysInThisMonth() trovo il numero di giorni del mese corrente
e lo associo alla variabile nDaysInCurrentMonth che sarà il parametro che userà 
createDays() per stampare i giorni nel calendario */
const nDaysInCurrentMonth = daysInThisMonth();
createDays(nDaysInCurrentMonth);

const meetingForm = document.querySelector('form')
meetingForm.addEventListener('submit', handleFormSubmit)