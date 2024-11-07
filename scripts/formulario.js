


 const form = document.querySelector('#form-registro');

 form.addEventListener('submit', function(event) {
     event.preventDefault(); // Evita que la página se recargue

     // Obtener valores de los inputs
     const name = document.getElementById('name');
     const apellido = document.getElementById('apellido');
     const email = document.getElementById('email');
     const telefono = document.getElementById (`telefono`)
     
     

     // Limpiar errores previos
     clearErrors();

     let hasError = false;

     // Validación del nombre
     if (name.value.trim() === "") {
         showError('nameError', 'El nombre es obligatorio');
         name.classList.add('error-input');
         hasError = true;
     }

     // Validación de la apellido
     if ( apellido.value.trim() === "") {
         showError('apellidoError', 'El apellido es obligatorio');
         apellido.classList.add('error-input');
         hasError = true;
     }

     // Validación del correo electrónico (opcional)
     if (email.value && !validateEmail(email.value)) {
         showError('emailError', 'Formato de correo inválido');
         email.classList.add('error-input');
         hasError = true;
     }

     // validacion de telefono
/*      if (!/^[1-9]\d{3}-[1-9]\d{5}$/.test(telefono.value)) {
        showError('telefonoError', 'El número de teléfono no es válido');
        telefono.classList.add('error-input');
        hasError = true;
    } 
*/
    // Validación del número de teléfono
if (!/^[0-9]\d{3}[0-9]\d{5}$/.test(telefono.value.trim())) {
    showError('telefonoError', 'El número de teléfono no es válido');
    telefono.classList.add('error-input');
    hasError = true;

}
/*
const telefonoVal = /^\+?(\d{1,3})?[-.\s]?(\d{2,4})[-.\s]?(\d{3,5})[-.\s]?(\d{4})$/;
if (!telefonoVal.test(telefono.value.trim())) {
    showError('telefonoError', 'El número de teléfono no es válido. Por favor, ingrese un formato adecuado.');
    telefono.classList.add('error-input');
    hasError = true;
}*/



     // Si no hay errores, se muestra el feedback
     if (!hasError) {
        
        /*
        document.getElementById("nombre-feedback").textContent = nombre.value;
        document.getElementById("telefono-feedback").textContent = telefono.value;


        document.getElementById("feedback").style.display = "block";*/



         showFeedback(name.value, apellido.value, email.value, telefono.value);          

         /*form.reset();*/ // Limpia el formulario
         clearErrors(); // Limpia los errores previos
     }
 });

 // Función para limpiar los errores anteriores
 function clearErrors() {
     const errorElements = document.querySelectorAll('.error');
     errorElements.forEach(el => el.textContent = ''); // Limpia el texto de error

     const inputs = document.querySelectorAll('input, select');
     inputs.forEach(input => input.classList.remove('error-input')); // Elimina las clases de error de los inputs
 }

 // Función para mostrar un error
 function showError(elementId, message) {
     document.getElementById(elementId).textContent = message;
 }



// Función para mostrar el feedback

function showFeedback(name, apellido, email, telefono) {
    //const feedback = document.getElementById('feedback');
    document.getElementById("nombre-feedback").textContent = name;
    document.getElementById("telefono-feedback").textContent = telefono;
    feedback.style.display = 'block'; 
    



    // Ocultar el feedback después de 5 segundos
   setTimeout(() => {
        feedback.style.display = 'none';
    }, 5000) 
}



 // Validación del formato del correo electrónico
 function validateEmail(email) {
     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return re.test(String(email).toLowerCase());



    }

    


 

 