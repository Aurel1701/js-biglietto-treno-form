document.querySelector('.genera').addEventListener("click", clickbutton);


function clickbutton(){
    let firstname = document.querySelector('#btn1').value;
    let km = document.querySelector('#btn2').value;
    let age = document.querySelector('#age').value;
    let ticket = km * 0.21;
    let carrozza = Math.random();
    let cp = Math.random();
    let offerta;

    if (age == 'under18') {
        offerta = (ticket * 20 / 100)
        ticket = ticket - offerta;
        
    } else if (age == 'over65') {
        offerta = (ticket * 40 / 100)
        ticket = ticket - offerta;
    }
    document.querySelector('.risultato').InsertAdjacentHTML('afterend',`<div class="row">
    <h4 class="text-center">DETTAGLIO PASSEGGERI</h4>
    <div class="col nome-passeggero">${firstname}</div>
    <div class="col Offerta">${offerta}</div>
    <div class="col Carrozza">${carrozza}</div>
    <div class="col Codice-Cp">${cp}</div>
    <div class="col Costo-biglietto">${carrozza}</div>
    </div>
    `)

}


