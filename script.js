// Carrusel de imágenes para cada servicio
const imagenes = {
    img1: ["aceite.jpg", "montallantas.jpg", "filtros.jpg", "lavado.jpg"],
    img2: ["montallantas.jpg", "filtros.jpg", "lavado.jpg", "aceite.jpg"],
    img3: ["filtros.jpg", "lavado.jpg", "aceite.jpg", "montallantas.jpg"],
    img4: ["lavado.jpg", "aceite.jpg", "montallantas.jpg", "filtros.jpg"]
};

let indices = { img1: 0, img2: 0, img3: 0, img4: 0 };

// Función para cambiar imágenes cada 3 segundos
function cambiarImagen(id) {
    let img = document.getElementById(id);
    indices[id] = (indices[id] + 1) % imagenes[id].length;
    img.src = imagenes[id][indices[id]];
}

// Ejecutar el cambio de imágenes automáticamente
setInterval(() => {
    cambiarImagen("img1");
    cambiarImagen("img2");
    cambiarImagen("img3");
    cambiarImagen("img4");
}, 3000);
