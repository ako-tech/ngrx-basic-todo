# Aplicación de Tareas de la serie de videos de NgRx

Esta es una aplicación básica de tareas (To Do App) usada en la serie de videos del canal para explicar el funcionamiento de las librerías store y effects de NgRx para Angular.

El repositorio esta divido en ramas, cada una de las cuales se corresponde con una etapa del desarrollo de la aplicación.

## Enlaces de los Videos

- [@ngrx/store](https://youtu.be/btFk-R3tVjo)
- [@ngrx/effects](https://youtu.be/WzLJbtCrVTU)
- [@ngrx/entity](https://youtu.be/3m3GEutSm-s)

## Ramas (Branches)

- [Estado inicial](https://github.com/ako-tech/ngrx-basic-todo)
- [@ngrx/store](https://github.com/ako-tech/ngrx-basic-todo/tree/ngrx/store)
- [@ngrx/effects](https://github.com/ako-tech/ngrx-basic-todo/tree/ngrx/effects)
- [@ngrx/entity](https://github.com/ako-tech/ngrx-basic-todo/tree/ngrx/entity)

## Observaciones

El único objetivo de este proyecto es mostrar las caracteristicas principales de las librerías de NgRx. Debido a esto, una parte del código esta simplificado para una mostrar dichas caracteristicas más claramente. Incluyendo entre otras cosas el CSS imprescindible para mostrar la aplicación correctamente única y exclusivamente en los videos del mismo y para una anchura del visor de 500px.

Este proyecto **NO** está pensado para producción.

## Comandos

El proyecto está realizado sobre la v13 de Angular.

Para levantar un servidor de desarrollo usar el comando `ng serve`. Este estará disponible en `http://localhost:4200/`.

Para compilar la aplicación usar el comando `ng build`. Pudiendo usar la opcion `--prod` para compilar la versión de producción. Los archivos de la aplicación estarán disponibles en la carpeta `dist/`.
