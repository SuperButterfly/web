## Crud de Component

- Add: http://localhost:4000/api/v1/component

Metodo: POST

Requerimentos:   BODY

|   Propiedades    |       Valores        |
|------------------|----------------------|
| projectId        | string               |
| pageId           | string               |
| parentId         | string               |
| tag              | string               |
| attributes       | Object               |
| nativeAttributes | Object               |
| isShow           | boolean              |
```JavaScript
//Ejemplo 
body = {
    projectId = "1ebeea58-88e7-46ff-bca2-8ba756feefc7",
    pageId = "8ebeea89-55e7-46ff-bca2-8ba756feefc7",
    parentId = "5ebeea92-66e7-46ff-bca2-8ba756feefc7", 
    tag = "button",
    attributes = {},
    nativeAttributes = {},
    isShow = true,
}
```
    Retorna: Componente creado

- Clone: http://localhost:4000/api/v1/component/:id

Metodo: ``POST``

Requerimentos:   **PARAMS** (ID del componente)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Componente e hijos clonados

- Copy styles: http://localhost:4000/api/v1/component/copystyles/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID del componente)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Copia de estilos del component

- Delete: http://localhost:4000/api/v1/component

Metodo: ``DELETE``

Requerimentos:   **BODY**

| Propiedades |       Valores        |
|-------------|----------------------|
| toDeletes   | [string]             |
```JavaScript
//Ejemplo 
body = {
    toDeletes = [
        "1ebeea58-88e7-46ff-bca2-8ba756feefc7",
        "1ebeea58-88e7-46ff-bca2-8ba756feefc7",
        "1ebeea58-88e7-46ff-bca2-8ba756feefc7"
        ]
}
```
    Retorna: Componente e hijos desactivados

- Delete: http://localhost:4000/api/v1/component/:id

Metodo: ``DELETE``

Requerimentos:   **PARAMS** (ID del componente)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Componente desactivado

- Get all: http://localhost:4000/api/v1/component/all/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID de la page)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Componentes segun su pagina

- Get by ID: http://localhost:4000/api/v1/component/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID del componente)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Componentes segun su ID y las properties asociada

- Patch: http://localhost:4000/api/v1/component/:id

Metodo: ``PATCH``

Requerimentos:   **PARAMS** (ID del componente)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY** (Pasar unicamente lo que se quiere modificar)

|   Propiedades    |       Valores        |
|------------------|----------------------|
| tag              | string               |
| attributes       | Object               |
| nativeAttributes | Object               |
| isShow           | boolean              |
```JavaScript
//Ejemplo 
body = {
    tag = "button",
    attributes = {},
    nativeAttributes = {},
    isShow = true,
}
```
    Retorna: Componente modificado

- Update: http://localhost:4000/api/v1/component/:id

Metodo: ``PUT``

Requerimentos:   **PARAMS** (ID del componente)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY**

|   Propiedades    |       Valores        |
|------------------|----------------------|
| projectId        | string               |
| pageId           | string               |
| parentId         | string               |
| tag              | string               |
| attributes       | Object               |
| nativeAttributes | Object               |
| isShow           | boolean              |
```JavaScript
//Ejemplo 
body = {
    projectId = "1ebeea58-88e7-46ff-bca2-8ba756feefc7",
    pageId = "8ebeea89-55e7-46ff-bca2-8ba756feefc7",
    parentId = "5ebeea92-66e7-46ff-bca2-8ba756feefc7", 
    tag = "button",
    attributes = {},
    nativeAttributes = {},
    isShow = true,
}
```
    Retorna: Componente modificado
