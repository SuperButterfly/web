**ES UNA PR DE EJEMPLO, NO MERGEAR**
**DISCLAIMER: NO SE MERGEARÁ NINGUNA PR QUE NO PASE LOS CHECKS O CON CONFLICTOS**

# EJEMPLO

Ticket #1234: crear una PR de demostración
Descripción: Añadí una pull request de demostracion para que quede como ejemplo c:

- Estado: 🟩 Finalizado
- dificulad: facil
- duración: 1hs

#

### **Ticket vacio para copiar y pegar**

```
### #TICKET_ID : TICKET_TITLE
Descripción:

- Estado: 🟩 🟧 🟨 🟪
- dificulad:
- duración:
```

#

### **Las propiedades con el icono "🟥" son estrictamente obligatorias**

## Propiedades de cada ticket

- 🟥 Header \*

  -
  - En la parte superior de cada ticket tiene que estar su ID y en caso de tener titulo añadirlo
  - No es tan importante el titulo pero el ID si

- 🟥 Descripción \*

  -
  - Descripción del el lo que realizaron en el ticket
  - Se puede poner los problemas que tuvieron al desarrollar el ticket

- 🟥 Estado \*

  -
  - ### Estado en el que se encuentra el desarrollo del ticket
  - Estados posibles:

    -
    - 🟩 Finalizado - Completado - Done

      - Se completo el desarrollo de todo lo especificado en el ticket
      - En la **Descripción** debe colocarse la funcionalidad que terminaron
      - Se debe agregar el ticket en la lista de `🟩 Revisar` de **Trello**

    - 🟧 En proceso - en desarrollo

      - Se inicio el desarrollo del ticket
      - En la **Descipción** se debe colocar los avances que se consiguieron desarrollar hasta el momento
      - Se debe agregar el ticket en la lista de `🟧 En proceso` de **Trello**

    - 🟨 Pausado - Detenido

      - Se detuvo el desarrollo del ticket
      - En la **Descipción** se debe colocar el por qué se detuvo el desarrollo del ticket
      - Se debe agregar el ticket en la lista de `🟨 Pausado` de **Trello**

    - 🟪 Duda
      - Tiene alguna duda acerca de el ticket, alguna funcionalidad o estilo no esta del todo clara en el ticket
      - En la **Descipción** se debe colocar cual es la duda o cuestión que tiene respecto al desarrollo del ticket
      - Se debe agregar el ticket en la lista de `🟪 Duda` de **Trello**

- Dificultad

  -
  - Dificultad del desarrollo del ticket
  - Ejemplos
    - Baja
    - Media
    - Alta
    - Muy Alta
  - En la **Descipción** se puede colocar el por que le pusieron ese nivel de dificultad

- Duración
  -
  - En caso de estar `🟩 Finalizado` colocar el tiempo que tomo el desarrollo
  - En caso de estar `🟨 Pausado` o en `🟪 Duda` colocar el tiempo estimado que tomara realizar el ticket una vez se vuelva a poner en desarrollo
  - En caso de estar `🟧 En proceso` colocar el tiempo estimado que tomara desarrollar el ticket
