// Archivo principal del proyecto Electiva 2
// Autor: Wilmar Gomez de la Cruz

console.log('¡Bienvenido al proyecto Electiva 2!');

// Configuración inicial del proyecto
const config = {
    nombre: 'Electiva 2',
    version: '1.0.0',
    autor: 'Wilmar Gomez de la Cruz',
    año: '2024'
};

// Función principal
function iniciarProyecto() {
    console.log(`Iniciando ${config.nombre} v${config.version}`);
    console.log(`Desarrollado por: ${config.autor}`);
    console.log(`Año: ${config.año}`);
    
    // Aquí se puede agregar la lógica principal del proyecto
    console.log('Proyecto configurado exitosamente');
}

// Ejecutar al cargar el módulo
if (require.main === module) {
    iniciarProyecto();
}

module.exports = {
    config,
    iniciarProyecto
};