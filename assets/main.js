document.querySelector('.genera').addEventListener("click", clickbutton);


function clickbutton(){
    let firstname = document.querySelector('#btn1').value;
    let km = document.querySelector('#btn2').value;
    let age = document.querySelector('#age').value;
    var ticket = km * 0.21;
    if (age < 18) {
        ticket = ticket - (ticket * 20 / 100);
        
    } else if (age > 65) {
        ticket = ticket - (ticket * 40 / 100);
    }
    document.querySelector('.risultato').append(`${ticket}`)

}


