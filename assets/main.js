// Quanti chilometri vuoi percorrere?

const firstname = document.querySelector('btn1').value = ''
console.log(firstname);






const distance = parseInt(prompt('quanti km devi fare?'))
console.log(distance);
// quanti anni hai?
const age = parseInt(prompt('quanti anni hai?'))
console.log(age);
// calcolo prezzo del biglietto in base ai km
var ticket = distance * 0.21;


// prezzo per under 18 e over 65

if (age < 18) {
    ticket = ticket - (ticket * 20 / 100);
    
} else if (age > 65) {
    ticket = ticket - (ticket * 40 / 100);
}

console.log(ticket.toFixed(2));

document.getElementById('ticket').innerHTML = ticket.toFixed(2)

