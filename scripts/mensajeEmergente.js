/* // Prevenir el envío del formulario y mostrar el modal
document.getElementById("form-registro").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    mostrarMensaje(); // Mostrar el modal
});

// Función para mostrar el modal
function mostrarMensaje() {
    document.getElementById("modelo").style.display = "block";
    document.getElementById("mensajeEmergente").style.display = "block";
}

// Función para cerrar el modal
function cerrarMensaje() {
    document.getElementById("modelo").style.display = "none";
    document.getElementById("mensajeEmergente").style.display = "none";
} */


    document.getElementById("form-registro").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        mostrarMensaje(); // Mostrar el modal
    });
    
    // Función para mostrar el modal
    function mostrarMensaje() {
        document.getElementById("modelo").style.display = "block";
        document.getElementById("mensajeEmergente").style.display = "block"; // Si quieres mostrarlo, aunque no está usado
    }
    
    // Función para cerrar el modal
    function cerrarMensaje() {
        document.getElementById("modelo").style.display = "none";
        document.getElementById("mensajeEmergente").style.display = "none"; // Si quieres ocultarlo también
    }
    