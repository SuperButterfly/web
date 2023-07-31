## Crud de User

- Register: http://localhost:4000/api/v1/user/register

Metodo: ``POST``

Requerimentos:  **BODY**

| Propiedades |       Valores        |
|-------------|----------------------|
| userName    | string               |
| email       | string               |
| password    | string               |

``` JavaScript
//Ejemplo 
body = {
    userName = "usuario",
    email = "ejemplo@ejemplo.com",
    password = "Abcde#6789",
}
```
        Retorna: Usuario ya creado

- Delete: http://localhost:4000/api/v1/user/:id

Metodo: ``DELETE``

Requerimentos:   **PARAMS** (ID del usuario)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Usuario ya desactivado

- Get all: http://localhost:4000/api/v1/user

Metodo: ``GET``

    Retorna: Usuarios

- Get by ID: http://localhost:4000/api/v1/user/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID del usuario)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Usuario por ID

- Login: http://localhost:4000/api/v1/user/login

Metodo: ``POST``

Requerimentos:  **BODY**

| Propiedades |       Valores        |
|-------------|----------------------|
| email       | string               |
| password    | string               |
``` JavaScript
//Ejemplo 
body = {
    email = "ejemplo@ejemplo.com",
    password = "Abcde#6789",
}
```
    Retorna: Token del usuario

- Patch: http://localhost:4000/api/v1/user/:id

Metodo: ``PATCH``

Requerimentos:   **PARAMS** (ID del usuario)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY** (Pasar unicamente lo que se quiere modificar)

|  Propiedades |       Valores        |
|--------------|----------------------|
| userName     | string               |
| email        | string               |
| password     | string               |
| plane        | string               |
| theme        | string               |
``` JavaScript
//Ejemplo 
body = {
    plane = "Premium",
    theme = "Dark"
}
```
    Retorna: Usuario con datos modificados

- Update: http://localhost:4000/api/v1/user/:id

Metodo: ``PUT``
Requerimentos:   **PARAMS** (ID del usuario)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY** (Es obligatorio pasar todos los datos)

|  Propiedades |       Valores        |
|--------------|----------------------|
| userName     | string               |
| email        | string               |
| password     | string               |
| plane        | string               |
| resourceList | [{Object}]           |
| theme        | string               |
| billingDates | {Object}             |
``` JavaScript
//Ejemplo 
body = {
    userName = "newUser"
    email = "ejemplo@ejemplo.com",
    password = "Abcde#6789",
    plane = "Premium",
    resourceList = [{propiedad: valor}, {propiedad: valor}]
    billingDates = {propiedad: valor}
}
```
    Retorna: Usuario con datos modificados