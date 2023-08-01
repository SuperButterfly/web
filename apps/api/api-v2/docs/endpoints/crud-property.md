## Crud de Property

- Add: http://localhost:4000/api/v1/property

Metodo: ``POST``

Requerimentos:   **BODY**

|   Propiedades    |       Valores        |
|------------------|----------------------|
| name             | string               |
| style            | object               |
| activeDefault    | boolean              |
```JavaScript
//Ejemplo 
body = {
    name = "newProperty",
    style = {},
    activeDefault = true
}
```
    Retorna: Property creado

- Delete: http://localhost:4000/api/v1/property/:id

Metodo: ``DELETE``

Requerimentos:   **PARAMS** (ID del property)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Property desactivado

- Get all: http://localhost:4000/api/v1/property

Metodo: ``GET``

    Retorna: Todos los properties 

- Get by ID: http://localhost:4000/api/v1/property/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID del property)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Property segun su ID

- Patch: http://localhost:4000/api/v1/property/:id

Metodo: ``PATCH``

Requerimentos:   **BODY** (Pasar unicamente lo que se quiere modificar)

|   Propiedades    |       Valores        |
|------------------|----------------------|
| name             | string               |
| style            | object               |
| activeDefault    | boolean              |
```JavaScript
//Ejemplo 
body = {
    name = "newName",
    style = {},
    activeDefault = true
}
```
    Retorna: Layaout modificado

- Update: http://localhost:4000/api/v1/property/:id

Metodo: ``PUT``

Requerimentos:   **BODY**

|   Propiedades    |       Valores        |
|------------------|----------------------|
| name             | string               |
| style            | object               |
| activeDefault    | boolean              |
```JavaScript
//Ejemplo 
body = {
    name = "newName",
    style = {},
    activeDefault = true
}
```
    Retorna: Layaout modificado