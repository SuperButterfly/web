## Crud de Color

- Add: http://localhost:4000/api/v1/color

Metodo: ``POST``

Requerimentos:   **BODY**

|   Propiedades    |       Valores        |
|------------------|----------------------|
| name             | string               |
| value            | [Object]             |
```JavaScript
//Ejemplo 
body = {
    name = "newColor"
    value= [
        {
          name: 'Primary',
          types: [
            { value: '#003EB3' },
            { value: '#0074F0' },
            { value: '#14A9FF' },
            { value: '#85DCFF' }
          ]
        }
    ]
}
```
    Retorna: Preset modificado

- Delete: http://localhost:4000/api/v1/color/:id

Metodo: ``DELETE``

Requerimentos:   **PARAMS** (ID del color)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Preset desactivado

- Get all: http://localhost:4000/api/v1/color/all/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID del preset)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Color segun su preset

- Get by ID: http://localhost:4000/api/v1/color/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID del color)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Color segun su ID

                    
- Patch: http://localhost:4000/api/v1/color/:id

Metodo: ``PATCH``

Requerimentos:   **PARAMS** (ID del color)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY** (Pasar unicamente lo que se quiere modificar)

|   Propiedades    |       Valores        |
|------------------|----------------------|
| name             | string               |
| value            | [Object]             |
```JavaScript
//Ejemplo 
body = {
    name = "newColor"
    value= [
        {
          name: 'newName',
          types: [
            { value: '#003EB3' },
            { value: '#0074F0' },
            { value: '#14A9FF' },
            { value: '#85DCFF' }
          ]
        }
    ]
}
```
    Retorna: Preset modificado

- Update: http://localhost:4000/api/v1/color/:id

Metodo: ``PUT``

Requerimentos:   **PARAMS** (ID del color)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY**

|   Propiedades    |       Valores        |
|------------------|----------------------|
| name             | string               |
| value            | [Object]             |
```JavaScript
//Ejemplo 
body = {
    name = "newColor"
    value= [
        {
          name: 'newName',
          types: [
            { value: '#003EB3' },
            { value: '#0074F0' },
            { value: '#14A9FF' },
            { value: '#85DCFF' }
          ]
        }
    ]
}
```
    Retorna: Preset modificado
