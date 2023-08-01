## Crud de WorkSpace

- Add: http://localhost:4000/api/v1/workspace

Metodo: ``POST``

Requerimentos:   **BODY**

| Propiedades |       Valores        |
|-------------|----------------------|
| userToolId  | string               |
| role        | string               |
| name        | string               |

``` JavaScript
//Ejemplo 
body = {
    userToolId = "f4f4a4ed-cca8-4b48-862c-496401d18d5c",
    role = "Owner",
    name = "newWorkSpace"
}
```
    Retorna: Workspace creado

- Delete: http://localhost:4000/api/v1/workspace/:id

Metodo: ``DELETE``

Requerimentos:   **PARAMS** (ID del workspace)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Usuario ya desactivado

- Get all: http://localhost:4000/api/v1/workspace/all/:id

Metodo: ``GET``
        
Requerimentos:   **PARAMS** (ID del usuario)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Todos los workspaces por ID de usuario

- Get by ID: http://localhost:4000/api/v1/workspace/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID del workspace)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: El workspace segun su ID
                    
- Patch: http://localhost:4000/api/v1/workspace/:id

Metodo: ``PATCH``
        
Requerimentos:   **PARAMS** (ID del workspace)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY** (Pasar unicamente lo que se quiere modificar)

| Propiedades |       Valores        |
|-------------|----------------------|
| role        | string               |
| name        | string               |
``` JavaScript
//Ejemplo 
body = {
    role = "Editor",
    name = "newName"
}
```
    Retorna: El workspace modificado

- Post: http://localhost:4000/api/v1/workspace/setuser

Metodo: ``POST``

Requerimentos:   **BODY**

| Propiedades |       Valores        |
|-------------|----------------------|
| userToolId  | string               |
| workSpaceId | string               |
| role        | string               |
``` JavaScript
//Ejemplo 
body = {
    userToolId = "f4f4a4ed-cca8-4b48-862c-496401d18d5c"
    role = "Editor",
    name = "newName"
}
```
    Retorna: El workspace con el usuario y su nuevo rol

- Update: http://localhost:4000/api/v1/workspace/:id

Metodo: ``PUT``

Requerimentos:   **PARAMS** (ID del workspace)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY**

| Propiedades |       Valores        |
|-------------|----------------------|
| role        | string               |
| name        | string               |
```JavaScript
//Ejemplo 
body = {
    role = "Editor",
    name = "newName"
}
```
    Retorna: El workspace actualizado
