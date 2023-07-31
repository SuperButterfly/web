## Crud de Text

- Add: http://localhost:4000/api/v1/text

Metodo: ``POST``

Requerimentos:   **BODY**

|   Propiedades    |       Valores        |
|------------------|----------------------|
| name             | string               |
| size             | string               |
| weigth           | string               |
| fontFamily       | string               |
| isBold           | boolean              |
| isItalic         | boolean              |
| haveUnderline    | boolean              |
| haveMidline      | boolean              |
```JavaScript
//Ejemplo 
body = {
    name: "FinalText",
    size: 222,
    weigth: 222,
    fontFamily: "boldBlack",
    isBold: false,
    isItalic: false,
    haveUnderline: false,
    haveMidline: false,
    ProjectId: "1ebeea58-88e7-46ff-bca2-8ba756feefc7",
    presetId: "766fecd9-14a2-4137-8f70-1808439ce78d"
}
```
    Retorna: Text creado

- Delete: http://localhost:4000/api/v1/text/:id

Metodo: ``DELETE``

Requerimentos:   **PARAMS** (ID del text)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Text desactivado

- Get all: http://localhost:4000/api/v1/text/all/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID del preset)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Text segun su presetID

- Get by ID: http://localhost:4000/api/v1/text/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID del text)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Obtiene el text

- Patch: http://localhost:4000/api/v1/text/:id

Metodo: ``PATCH``

Requerimentos:   **PARAMS** (ID del text)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY** (Pasar unicamente lo que se quiere modificar)

|   Propiedades    |       Valores        |
|------------------|----------------------|
| name             | string               |
| size             | string               |
| weigth           | string               |
| fontFamily       | string               |
| isBold           | boolean              |
| isItalic         | boolean              |
| haveUnderline    | boolean              |
| haveMidline      | boolean              |
```JavaScript
//Ejemplo 
body = {
    name: "FinalText",
    size: 222,
    weigth: 222,
    fontFamily: "boldBlack",
    isBold: false,
    isItalic: false,
    haveUnderline: false,
    haveMidline: false,
}
```

- Update: http://localhost:4000/api/v1/text/:id

Metodo: ``PUT``

Requerimentos:   **PARAMS** (ID del text)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY**

|   Propiedades    |       Valores        |
|------------------|----------------------|
| name             | string               |
| size             | string               |
| weigth           | string               |
| fontFamily       | string               |
| isBold           | boolean              |
| isItalic         | boolean              |
| haveUnderline    | boolean              |
| haveMidline      | boolean              |

```JavaScript
//Ejemplo 
body = {
    name: "FinalText",
    size: 222,
    weigth: 222,
    fontFamily: "boldBlack",
    isBold: false,
    isItalic: false,
    haveUnderline: false,
    haveMidline: false,
}
```
