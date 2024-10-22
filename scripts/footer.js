

document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault();  // Evita el comportamiento por defecto del enlace
    document.getElementById('footer').scrollIntoView({
       behavior: 'smooth'  // Transición suave
    });
 });
 