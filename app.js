// Programa Hola Mundo para práctica de Integración Continua
// Autor: Wilmar Gómez - Matrícula: 20240103
// Curso: Electiva 2 (Virtual) 2025-C-3
// Profesor: Elvys Cruz

console.log("¡Hola Mundo desde DevOps ITLA!");
console.log("Integración Continua con GitHub Actions");
console.log("Estudiante: Wilmar Gómez - 20240103");

// Función para mostrar fecha y hora actual
function mostrarFechaHora() {
    const ahora = new Date();
    console.log(`Fecha y hora: ${ahora.toLocaleString('es-DO')}`);
}

mostrarFechaHora();

// Exportar para testing si es necesario
module.exports = { mostrarFechaHora };