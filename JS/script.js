const mainForm = () => {
    //variables para la manipulacion del DOM para la captura de datos del formulario
    const nameInput = document.querySelector('#contactName').value;
    const emailInput = document.querySelector('#contactName').value;
    const subjectInput = document.querySelector('#contactSubject').value;
    const message = document.querySelector('#contactMessage').value;
    //comprobacion de entrada de datos correcta con una llamada a la funcion encargada de esta tarea
    veriForm(nameInput, emailInput, subjectInput, message);
}
//funcion para la verificacion de ingreso de datos
const veriForm = (nameInput, emailInput, subjectInput, message) => {
    //expresion regular para la verificacion de email ingresado correctamente 
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //verificacion de que todos los campos son obligatorios
    if (nameInput.trim() === '' || emailInput.trim() === ''
        || subjectInput.trim() === '' || message.trim() === '') {
        alert('Los campos son obligatorios');
    } else if (regexEmail.test(emailInput)) {//verificacion de que el email ingresado sea correcto   
        alert('Debe ingresar un email valido');
    } else {
        alert('Gracias por contactarnos.\nEquipo Tiendita de la Yeya');
    }
}
//Evento para llamar al formulario
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    mainForm();
})