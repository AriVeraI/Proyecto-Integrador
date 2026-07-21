const mainForm = () => {
    //variables para la manipulacion del DOM para la captura de datos del formulario
    const nameInput = document.querySelector('#contactName').value;
    const emailInput = document.querySelector('#contactEmail ').value;
    const numberInput = document.querySelector('#contactNumber').value;
    const message = document.querySelector('#contactMessage').value;
    //comprobacion de entrada de datos correcta con una llamada a la funcion encargada de esta tarea
    veriForm(nameInput, emailInput, numberInput, message);
}
//funcion para la verificacion de ingreso de datos
const veriForm = (nameInput, emailInput, numberInput, message) => {
    //expresion regular para la verificacion de email ingresado correctamente 
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Expresión regular para número de teléfono (acepta de 7 a 15 dígitos numéricos)
    const regexTel = /^[0-9]{7,15}$/;
    //verificacion de que todos los campos son obligatorios
    if (nameInput.trim() === '' || emailInput.trim() === ''
        || numberInput.trim() === '' || message.trim() === '') {
        alert('Los campos son obligatorios');
    } else if (regexEmail.test(emailInput.trim())) {//verificacion de que el email ingresado sea correcto   
        alert('Debe ingresar un email valido');
    } else if (!regexTel.test(numberInput.trim())) {   //Verificación de que el teléfono contenga solo números válidos
        alert('Por favor, ingrese un número de teléfono válido (solo números, entre 7 y 15 dígitos).');
    }else {
        enviarCorreo (nameInput, emailInput, numberInput, message);
        alert('¡Gracias por contactarnos!\nEquipo Yeya\'s Little Shop');
    }
}
document.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.getElementById('contactNumber');

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      // Remueve cualquier carácter que NO sea un número del 0 al 9
      e.target.value = e.target.value.replace(/[^0-9]/g, '');

      // Recorta a 10 dígitos como máximo por si intenta pegar un texto largo
      if (e.target.value.length > 10) {
        e.target.value = e.target.value.slice(0, 10);
      }
    });
  }
});
//const enviarCorreo = (nameInput, emailInput, numberInput, message) => {
// Todavía no nos enseñan
//}
//Evento para llamar al formulario


// document.getElementById('contact-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     mainForm();
// })