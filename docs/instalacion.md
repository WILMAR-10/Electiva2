# Guía de Instalación

## Requisitos del Sistema

- **Node.js**: Versión 14.0 o superior
- **npm**: Versión 6.0 o superior
- **Git**: Para el control de versiones

## Instalación Paso a Paso

### 1. Verificar Requisitos

Antes de comenzar, verifica que tienes los requisitos instalados:

```bash
node --version
npm --version
git --version
```

### 2. Clonar el Repositorio

```bash
git clone https://github.com/WILMAR-10/Electiva2.git
cd Electiva2
```

### 3. Instalar Dependencias

```bash
npm install
```

### 4. Verificar la Instalación

Ejecuta el proyecto para verificar que todo funciona correctamente:

```bash
npm start
```

Deberías ver el mensaje de bienvenida del proyecto.

## Configuración del Entorno de Desarrollo

### Variables de Entorno

Si es necesario, crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
NODE_ENV=development
PORT=3000
```

### Herramientas Recomendadas

- **Editor**: Visual Studio Code
- **Extensiones útiles**:
  - JavaScript (ES6) code snippets
  - GitLens
  - Prettier - Code formatter

## Solución de Problemas

### Problemas Comunes

1. **Error de permisos al instalar dependencias**:
   ```bash
   sudo npm install
   ```

2. **Node.js no encontrado**:
   - Instala Node.js desde [nodejs.org](https://nodejs.org)

3. **Error de Git**:
   - Configura Git con tu información:
   ```bash
   git config --global user.name "Tu Nombre"
   git config --global user.email "tu.email@example.com"
   ```

## Siguiente Paso

Una vez completada la instalación, consulta la [Guía de Desarrollo](desarrollo.md) para comenzar a trabajar en el proyecto.