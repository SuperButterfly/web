## Crud de Project

- Add: http://localhost:4000/api/v1/project

Metodo: ``POST``

Requerimentos:   **BODY**

| Propiedades |       Valores        |
|-------------|----------------------|
| userToolId  | string               |
| workSpaceId | string               |
| role        | string               |
| name        | string               |
```JavaScript
//Ejemplo 
body = {
    userToolId = "f4f4a4ed-cca8-4b48-862c-496401d18d5c",
    workSpaceId = "57b76706-5ae6-49ff-9690-dfe777c1d0eb",
    role = "Editor",
    name = "newProject"
}
```
    Retorna: Projecto creado

- Delete: http://localhost:4000/api/v1/project/:id

Metodo: ``DELETE``

Requerimentos:   **Params** (ID del usuario)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Projecto desactivado

- Get all: http://localhost:4000/api/v1/project/getbyrol/:id?role=role

Metodo: ``GET``

Requerimentos:   **Params** (ID del usuario)
| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **Query**

| Propiedades |       Valores        |
|-------------|----------------------|
| role        | string               |

    Retorna: Todos los projectos excepto los del rol enviado, por defecto el valor de role sera "Owner"

- Get by ID: http://localhost:4000/api/v1/project/:id

Metodo: ``GET``

Requerimentos:   **Params** (ID del usuario)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Projecto por ID
                    
- Patch: http://localhost:4000/api/v1/project/:id

Metodo: ``PATCH``

Requerimentos:   **Params** (ID del usuario)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY** (Pasar unicamente lo que se quiere modificar)

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
    Retorna: Projecto modificado

- Post: http://localhost:4000/api/v1/project/setuser

Metodo: ``POST``

Requerimentos:   **BODY**

| Propiedades |       Valores        |
|-------------|----------------------|
| userToolId  | string               |
| projectId   | string               |
| role        | string               |
```JavaScript
//Ejemplo 
body = {
    userToolId = "f4f4a4ed-cca8-4b48-862c-496401d18d5c",
    role = "Editor",
    name = "newName"
}
```
    Retorna: Projecto con el usuario y su nuevo rol

- Update: http://localhost:4000/api/v1/project/:id

Metodo: ``PUT``

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
        Retorna: Projecto actualizado
