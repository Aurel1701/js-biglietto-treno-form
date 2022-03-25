document.querySelector('.genera').addEventListener("click", clickbutton);


function clickbutton(){
    let firstname = document.querySelector('#btn1').value;
    let km = document.querySelector('#btn2').value;
    let age = document.querySelector('#age').value;
    let ticket = km * 0.21;
    let carrozza = Math.floor(Math.random() * 10);
    let cp = Math.floor(Math.random() * 100000);
    let offerta;
    let offerta2 = 'no sale'

    if (age == 'under18') {
        offerta = (ticket * 20 / 100)
        ticket = ticket - offerta;
        offerta2 = 'sale minorenne'
        
    } else if (age == 'over65') {
        offerta = (ticket * 40 / 100)
        ticket = ticket - offerta;
        offerta2 = 'sale over65'
    }
    document.querySelector('.risultato').innerHTML =  `<div class="row">
    <h4 class="text-center">DETTAGLIO PASSEGGERI</h4>
    <div class="col nome-passeggero">${firstname}</div>
    <div class="col Offerta">${offerta2}</div>
    <div class="col Carrozza">${carrozza}</div>
    <div class="col Codice-Cp">${cp}</div>
    <div class="col Costo-biglietto">${ticket.toFixed(2)}$</div>
    </div>
    `

}


