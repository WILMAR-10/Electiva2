// Utilidades comunes para el proyecto
// Archivo de funciones auxiliares

/**
 * Formatea una fecha al formato local
 * @param {Date} fecha - La fecha a formatear
 * @returns {string} Fecha formateada
 */
function formatearFecha(fecha = new Date()) {
    return fecha.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Valida si un string no está vacío
 * @param {string} texto - El texto a validar
 * @returns {boolean} True si el texto es válido
 */
function validarTexto(texto) {
    return texto && texto.trim().length > 0;
}

/**
 * Registra un mensaje con timestamp
 * @param {string} mensaje - El mensaje a registrar
 */
function log(mensaje) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${mensaje}`);
}

module.exports = {
    formatearFecha,
    validarTexto,
    log
};