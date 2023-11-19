'use strict'

function verAño(añoNacimiento){
    let resultado;
    resultado=2023 - añoNacimiento;
    alert("tu edad es:" + resultado);
}
let aN=Number(prompt("ingrese fecha de nacimiento"));
verAño(aN);