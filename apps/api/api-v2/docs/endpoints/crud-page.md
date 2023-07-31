## Crud de Page

- Add: http://localhost:4000/api/v1/page

Metodo: ``POST``

Requerimentos:   **BODY**

|   Propiedades   |       Valores        |
|-----------------|----------------------|
| projectId       | string               |
| name            | string               |
| title           | string               |
| author          | string               |
| keywords        | [string]             |
| urlSlug         | string               |
| metaDescription | string               |
| cssStyles       | text                 |
| script          | [string]             |
| ogTitle         | string               |
| ogDescription   | string               |
| ogImage         | string               |
| canonicalURL    | string               |
| sitemapPriority | float                |
| changeFrequency | string               |
| robotsMeta      | string               |
| altTags         | text                 |
```JavaScript
//Ejemplo 
body = {
    projectId = "1ebeea58-88e7-46ff-bca2-8ba756feefc7",
    name = "newPage",
    title = "onePage", 
    author = "User",
    keywords = ["palabras clave"], 
    urlSlug = "aythen.com",
    metaDescription = "Explora nuestro contenido",
    cssStyles = "CSS Globales",
    script = ["bootstrap", "mateialUI", "js"],
    ogTitle = "titulo al compartir por redes",
    ogDescription = "descripcion al compartir por redes",
    ogImage = "imagen al compartir por redes",
    canonicalURL = "www.aythen.com",
    sitemapPriority = 1.1,
    changeFrequency = "1 semana", (frecuencia con la que se actualiza)
    robotsMeta = "string",
    altTags = "div",
}
```
    Retorna: Pagina creada

- Delete: http://localhost:4000/api/v1/page/:id

Metodo: ``DELETE``

Requerimentos:   **PARAMS** (ID de la page)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

    Retorna: Pagina desactivada

- Get all: http://localhost:4000/api/v1/page/all/:id

Metodo: ``GET``

Requerimentos:   **Params** (ID del proyecto)

| Propiedades |       Valores        |
|-------------|----------------------|
| projectId   | string               |

    Retorna: Paginas segun su proyecto

- Get by ID: http://localhost:4000/api/v1/page/:id

Metodo: ``GET``

Requerimentos:   **PARAMS** (ID de la page)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |
        
    Retorna: Paginas segun su ID
                    
- Patch: http://localhost:4000/api/v1/page/:id

Metodo: ``PATCH``

Requerimentos:   **PARAMS** (ID de la page)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY** (Pasar unicamente lo que se quiere modificar)

|   Propiedades   |       Valores        |
|-----------------|----------------------|
| projectId       | string               |
| name            | string               |
| title           | string               |
| author          | string               |
| keywords        | [string]             |
| urlSlug         | string               |
| metaDescription | string               |
| cssStyles       | text                 |
| script          | [string]             |
| ogTitle         | string               |
| ogDescription   | string               |
| ogImage         | string               |
| canonicalURL    | string               |
| sitemapPriority | float                |
| changeFrequency | string               |
| robotsMeta      | string               |
| altTags         | text                 |
```JavaScript
//Ejemplo 
body = {
    projectId = "1ebeea58-88e7-46ff-bca2-8ba756feefc7",
    name = "newPage",
    title = "onePage", 
    author = "User",
    keywords = ["palabras clave"], 
    urlSlug = "aythen.com",
    metaDescription = "Explora nuestro contenido",
    cssStyles = "CSS Globales",
    script = ["bootstrap", "mateialUI", "js"],
    ogTitle = "titulo al compartir por redes",
    ogDescription = "descripcion al compartir por redes",
    ogImage = "imagen al compartir por redes",
    canonicalURL = "www.aythen.com",
    sitemapPriority = 1.1,
    changeFrequency = "1 semana", (frecuencia con la que se actualiza)
    robotsMeta = "string",
    altTags = "div",
}
```
    Retorna: Pagina modificada

- Update: http://localhost:4000/api/v1/page/:id

Metodo: ``PUT``

Requerimentos:   **PARAMS** (ID de la page)

| Propiedades |       Valores        |
|-------------|----------------------|
| id          | string               |

Requerimentos:   **BODY**

|   Propiedades   |       Valores        |
|-----------------|----------------------|
| projectId       | string               |
| name            | string               |
| title           | string               |
| author          | string               |
| keywords        | [string]             |
| urlSlug         | string               |
| metaDescription | string               |
| cssStyles       | text                 |
| script          | [string]             |
| ogTitle         | string               |
| ogDescription   | string               |
| ogImage         | string               |
| canonicalURL    | string               |
| sitemapPriority | float                |
| changeFrequency | string               |
| robotsMeta      | string               |
| altTags         | text                 |
```JavaScript
//Ejemplo 
body = {
    projectId = "1ebeea58-88e7-46ff-bca2-8ba756feefc7",
    name = "newPage",
    title = "onePage", 
    author = "User",
    keywords = ["palabras clave"], 
    urlSlug = "aythen.com",
    metaDescription = "Explora nuestro contenido",
    cssStyles = "CSS Globales",
    script = ["bootstrap", "mateialUI", "js"],
    ogTitle = "titulo al compartir por redes",
    ogDescription = "descripcion al compartir por redes",
    ogImage = "imagen al compartir por redes",
    canonicalURL = "www.aythen.com",
    sitemapPriority = 1.1,
    changeFrequency = "1 semana", (frecuencia con la que se actualiza)
    robotsMeta = "string",
    altTags = "div",
}
```
    Retorna: Pagina modificada
