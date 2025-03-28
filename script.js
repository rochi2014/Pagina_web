// Mensaje en consola para verificar que JS está cargado
console.log("Página de Serviteca Siberia cargada correctamente");

// Función para confirmar si el usuario quiere llamar
document.querySelector(".btn[href^='tel']").addEventListener("click", function() {
    return confirm("¿Quieres llamar a Serviteca Siberia?");
});
