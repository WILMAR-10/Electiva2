# Estrategia de Branching

## Ramas Principales

### `main` / `copilot/fix-...`
- Rama principal del proyecto
- Contiene código estable y listo para producción
- Solo se fusionan cambios probados desde `develop`

### `develop`
- Rama de desarrollo principal
- Integra todas las características en desarrollo
- Base para crear nuevas ramas de características

## Ramas de Características

### `feature/documentacion`
- Para mejoras y actualizaciones de documentación
- Se fusiona con `develop` cuando está completa

### `feature/nuevas-funcionalidades`
- Para desarrollo de nuevas características del proyecto
- Se fusiona con `develop` después de pruebas

## Flujo de Trabajo

1. **Crear nueva característica**:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/nombre-caracteristica
   ```

2. **Desarrollar y probar**:
   ```bash
   # Hacer cambios
   git add .
   git commit -m "Descripción del cambio"
   ```

3. **Fusionar con develop**:
   ```bash
   git checkout develop
   git merge feature/nombre-caracteristica
   git push origin develop
   ```

4. **Fusionar con main** (cuando esté listo):
   ```bash
   git checkout main
   git merge develop
   git push origin main
   ```

## Convenciones de Nomenclatura

- `feature/nombre-descriptivo`: Nuevas características
- `bugfix/descripcion-bug`: Correcciones de errores
- `hotfix/solucion-urgente`: Correcciones urgentes
- `docs/actualizacion`: Actualizaciones de documentación

## Ramas Creadas

- ✅ `develop`: Rama principal de desarrollo
- ✅ `feature/documentacion`: Para mejoras de documentación
- ✅ `feature/nuevas-funcionalidades`: Para nuevas características

## Próximos Pasos

1. Desarrollar características en las ramas correspondientes
2. Probar cambios antes de fusionar
3. Mantener `develop` actualizado
4. Fusionar con `main` cuando las características estén completas