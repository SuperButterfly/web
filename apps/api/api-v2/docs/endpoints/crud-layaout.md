## Crud de Layaout

- Add: http://localhost:4000/api/v1/layaout

Metodo: ``POST``

Requerimentos:   **BODY**

|   Propiedades    |       Valores        |
|------------------|----------------------|
| name             | string               |
| value            | [Object]             |
```JavaScript
//Ejemplo 
body = {
    name = "newLayaout"
    value= [
        {
          name: 'Size',
          types: [
            { name: 'XS', size: '16px' },
            { name: 'SM', size: '48px' },
            { name: 'MD', size: '96px' },
            { name: 'LG', size: '144px' },
            { name: 'XL', size: '192px' },
            { name: 'XXL', size: '288px' },
            { name: 'MAX', size: '1400px' }
          ]
        }
    ]
}
```
    Retorna: Layaout creado

- Delete: http://localhost:4000/api/v1/layaout/:id

Metodo: ``DELETE``

Requerimentos:   **PARAMS** (ID del layaout)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Layaout desactivado

- Get all: http://localhost:4000/api/v1/layaout/all/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID del preset)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Layaout segun su preset

- Get by ID: http://localhost:4000/api/v1/layaout/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID del layaout)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Layaout segun su ID

- Patch: http://localhost:4000/api/v1/layaout/:id

Metodo: ``PATCH``

Requerimentos:   **PARAMS** (ID del layaout)

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
    name = "newName"
    value= [
        {
          name: 'Size2',
          types: [
            { name: 'XS', size: '20px' },
            { name: 'SM', size: '22px' },
            { name: 'MD', size: '24px' },
            { name: 'LG', size: '26px' },
            { name: 'XL', size: '28px' },
            { name: 'XXL', size: '30px' },
            { name: 'MAX', size: '32px' }
          ]
        }
    ]
}
```
    Retorna: Layaout modificado

- Update: http://localhost:4000/api/v1/layaout/:id

Metodo: ``PUT``

Requerimentos:   **PARAMS** (ID del layaout)

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
    name = "newName"
    value= [
        {
          name: 'Size2',
          types: [
            { name: 'XS', size: '20px' },
            { name: 'SM', size: '22px' },
            { name: 'MD', size: '24px' },
            { name: 'LG', size: '26px' },
            { name: 'XL', size: '28px' },
            { name: 'XXL', size: '30px' },
            { name: 'MAX', size: '32px' }
          ]
        }
    ]
}
```
    Retorna: Layaout modificado