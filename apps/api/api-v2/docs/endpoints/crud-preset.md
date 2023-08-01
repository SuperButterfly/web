## Crud de Preset

- Add: http://localhost:4000/api/v1/preset

Metodo: ``POST``

Requerimentos:   **BODY**

|   Propiedades    |       Valores        |
|------------------|----------------------|
| projectId        | string               |
| name             | string               |
```JavaScript
//Ejemplo 
body = {
    projectId = "1ebeea58-88e7-46ff-bca2-8ba756feefc7",
    name = "newPreset"
}
```
    Retorna: Preset creado


- Delete: http://localhost:4000/api/v1/preset/:id

Metodo: ``DELETE``

Requerimentos:   **PARAMS** (ID del preset)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Preset desactivado

- Get all: http://localhost:4000/api/v1/preset/all/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID del projecto)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Preset segun su projectID

- Get by ID: http://localhost:4000/api/v1/preset/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID del preset)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Preset segun su projectID

- Patch: http://localhost:4000/api/v1/preset/:id

Metodo: ``PATCH``

Requerimentos:   **PARAMS** (ID del preset)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY** (Pasar unicamente lo que se quiere modificar)

|   Propiedades    |       Valores        |
|------------------|----------------------|
| name             | string               |
```JavaScript
//Ejemplo 
body = {
    name = "newPreset"
}
```
    Retorna: Preset modificado

- Update: http://localhost:4000/api/v1/preset/:id

Metodo: ``PUT``

Requerimentos:   **PARAMS** (ID del preset)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY**

|   Propiedades    |       Valores        |
|------------------|----------------------|
| name             | string               |
```JavaScript
//Ejemplo 
body = {
    name = "newPreset"
}
```
    Retorna: Preset modificado
