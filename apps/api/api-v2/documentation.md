# Backend V2

## Esquema de entidad-relacion

[Link de Esquema](https://lucid.app/lucidchart/be37a0ea-6096-4c02-9d19-aac20ff87eda/edit?viewport_loc=313%2C358%2C2560%2C1176%2C0_0&invitationId=inv_3122f203-d6d8-4d06-ba2a-2d5cd9c51805)


## Nomenclatura y explicacion de arquitectura

- **General**: tanto el manejo de carpetas y archivos, asi como el manejo de variables, constantes y el manejo de errores dentro de los mismos, seran extrictamente en Ingles y realizados de forma descriptiva.

- **Models**: cada modelo debe ser declaro sin ningun tipo de escritura espeficia, entiendase camelCase, PascalCase o snake_case. Por ejemplo: nuevomodelo.js

- **Routes**: las rutas estaran divididas en inputs y outputs, en los inputs iran las rutas que realizan una inyeccion de datos a la DB (considerese cualquier metodo que no sea GET como un input), mientras que en los outputs las rutas que realizan una peticion de datos. 
En ambos casos todas las rutas llevaran el nombre del modelo al cual responden. Ambos apartados convergen en el Index.

- **Middlewares-Validation**: una carpeta por modelo, los archivos llevaran camelCase con el nombre del modelo y el añadido de "Validation", por ejemplo: userValidation.js; 

- **Controllers**: una carpeta por modelo, los archivos dentro deben de llevar como nombre los metodos que se utilizan y al final el nombre del modelo. Por ejemplo: add-user.js / delete-user.js / get-all-user.js / get-id-user.js / patch-user.js / update-user.js

## Arquitectura

    src/
    ├── controllers/        # Carpeta para los controladores de eventos
    │   ├── modelo/         # Carpeta para los controladores de entradas segun modelo
    │   │   ├── add-modelo      # Módulo para el controlador de inyeccion de informacion
    │   │   ├── delete-modelo   # Módulo para el controlador de inyeccion de borrado logico
    │   │   ├── get-all-modelo  # Módulo para el controlador de peticon general
    │   │   ├── get-id-modelo   # Módulo para el controlador de peticion por ID
    │   │   ├── patch-modelo    # Módulo para el controlador de inyeccion de cambio de informacion
    │   │   ├── update-modelo   # Módulo para el controlador de inyeccion de actualizacion
    │   │   └── ...
    │   └── .............................................................................
    │
    ├── database/       # Carpeta para la conexión a la base de datos
    │   ├── connection/     # Carpeta para conexion y relaciones
    │   │   ├── database        # Módulo para la conexion a la base de datos y relaciones
    │   │   └── ...
    │   ├── models/         # Carpeta para los modelos de la base de datos
    │   │   ├── model           # Módulo para el modelo
    │   │   └── ...
    │   └── .............................................................................
    │
    ├── middlewares/    # Carpeta para las funciones que intervienen en las inyecciones y peticiones a la DB
    │   ├── auth/          # Carpeta para conexion y relaciones
    │   │   ├── auth           # Módulo para la conexion a la base de datos y relaciones
    │   │   └── ...
    │   ├── validation/    # Carpeta para los modulos de las validaciones
    │   │   ├── validation-model/       # Carpeta para las validaciones de cada modelo
    │   │   │   ├── model-validation        # Módulo para la validacion
    │   │   │   └── ...
    │   │   └── ...
    │   └── .............................................................................
    │
    ├── routes/     # Carpeta para los routers de la aplicación
    │   ├── inputs/     # Carpeta para los routers de inyeccion de datos a la DB
    │   │   ├── input-1     # Módulo para el router de inyeccion 1
    │   │   ├── input-2     # Módulo para el router de inyeccion 2
    │   │   └── ...
    │   │
    │   ├── outputs/    # Carpeta para los routers de peticion de datos
    │   │    ├── output-1   # Módulo para el router de peticion 1
    │   │    ├── output-2   # Módulo para el router de peticion 2
    │   │    └── ...
    │   ├── index         # Carpeta para la conversion de todas los routes
    │   └── .............................................................................
    │
    ├── utils/      # Carpeta para codigo reutilizable
    │   ├── err/        # Carpeta para el manejo de errores
    │   │    ├── catchedAsync    # Módulo para el chatcheo de errores
    │   │    ├── errors          # Módulo para los mensajes de errores
    │   │    ├── index           # Módulo para la conversion del manejo de errores
    │   │    ├── resError        # Módulo para los status de errores
    │   │    ├── response        # Módulo para la response de errores 2
    │   │    └── ...
    │   ├── helpers/        # Carpeta para las funciones reutilizables especificas del proyecto
    │   │    ├── helper-1    # Módulo para el helper 1
    │   │    ├── helper-2    # Módulo para el helper 2
    │   │    └── ...
    │   ├── token/        # Carpeta para guardar las validaciones especificas
    │   │    ├── token-1    # Módulo para el token 1
    │   │    ├── token-2    # Módulo para el token 2
    │   │    └── ...
    │   └── .............................................................................


## Endpoints

### Crud de Usuario

    - Register: http://localhost:4002/api/v1/user/register
        Metodo: POST
        Requerimentos:  BODY 
                        | Propiedades |       Valores        |
                        |-------------|----------------------|
                        | userName    | string               |
                        | email       | string               |
                        | password    | string               |

    - Delete: http://localhost:4002/api/v1/user/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/user
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/user/:id
        Metodo: GET

    - Login: http://localhost:4002/api/v1/user/login
        Metodo: POST
        Requerimentos:  BODY
                        | Propiedades |       Valores        |
                        |-------------|----------------------|
                        | email       | string               |
                        | password    | string               |

    - Patch: http://localhost:4002/api/v1/user/:id
        Metodo: PATCH
        Requerimentos:   BODY (Pasar unicamente lo que se quiere modificar)
                        |  Propiedades |       Valores        |
                        |--------------|----------------------|
                        | username     | string               |
                        | email        | string               |
                        | password     | string               |
                        | plane        | string               |
                        | resourceList | [{Object}]           |
                        | theme        | string               |
                        | billingDates | {Object}             |

    - Update: http://localhost:4002/api/v1/user/:id
        Metodo: PUT
        Requerimentos:   BODY
                        |  Propiedades |       Valores        |
                        |--------------|----------------------|
                        | username     | string               |
                        | email        | string               |
                        | password     | string               |
                        | plane        | string               |
                        | resourceList | [{Object}]           |
                        | theme        | string               |
                        | billingDates | {Object}             |


### Crud de WorkSpace

    - Add: http://localhost:4002/api/v1/workspace
        Metodo: POST
        Requerimentos:   BODY
                        | Propiedades |       Valores        |
                        |-------------|----------------------|
                        | userToolId  | string               |
                        | role        | string               |
                        | name        | string               |

    - Delete: http://localhost:4002/api/v1/workspace/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/workspace
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/workspace/:id
        Metodo: GET
                    
    - Patch: http://localhost:4002/api/v1/workspace/:id
        Metodo: PATCH
        Requerimentos:   BODY (Pasar unicamente lo que se quiere modificar)
                        | Propiedades |       Valores        |
                        |-------------|----------------------|
                        | role        | string               |
                        | name        | string               |

    - Post: http://localhost:4002/api/v1/workspace/setuser
        Metodo: POST
        Requerimentos:   BODY
                        | Propiedades |       Valores        |
                        |-------------|----------------------|
                        | userToolId  | string               |
                        | workSpaceId | string               |
                        | role        | string               |

    - Update: http://localhost:4002/api/v1/workspace/:id
        Metodo: PUT
        Requerimentos:   BODY
                        | Propiedades |       Valores        |
                        |-------------|----------------------|
                        | role        | string               |
                        | name        | string               |

### Crud de Project

    - Add: http://localhost:4002/api/v1/project
        Metodo: POST
        Requerimentos:   BODY
                        | Propiedades |       Valores        |
                        |-------------|----------------------|
                        | userToolId  | string               |
                        | workSpaceId | string               |
                        | role        | string               |
                        | name        | string               |

    - Delete: http://localhost:4002/api/v1/project/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/project
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/project/:id
        Metodo: GET
                    
    - Patch: http://localhost:4002/api/v1/project/:id
        Metodo: PATCH
        Requerimentos:   BODY (Pasar unicamente lo que se quiere modificar)
                        | Propiedades |       Valores        |
                        |-------------|----------------------|
                        | role        | string               |
                        | name        | string               |

    - Post: http://localhost:4002/api/v1/project/setuser
        Metodo: POST
        Requerimentos:   BODY
                        | Propiedades |       Valores        |
                        |-------------|----------------------|
                        | userToolId  | string               |
                        | projectId   | string               |
                        | role        | string               |

    - Update: http://localhost:4002/api/v1/project/:id
        Metodo: PUT
        Requerimentos:   BODY
                        | Propiedades |       Valores        |
                        |-------------|----------------------|
                        | role        | string               |
                        | name        | string               |


### Crud de Page

    - Add: http://localhost:4002/api/v1/page
        Metodo: POST
        Requerimentos:   BODY
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
                        

    - Delete: http://localhost:4002/api/v1/page/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/page
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/page/:id
        Metodo: GET
                    
    - Patch: http://localhost:4002/api/v1/page/:id
        Metodo: PATCH
        Requerimentos:   BODY (Pasar unicamente lo que se quiere modificar)
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

    - Update: http://localhost:4002/api/v1/page/:id
        Metodo: PUT
        Requerimentos:   BODY
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


### Crud de Component

    - Add: http://localhost:4002/api/v1/component
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


    - Delete: http://localhost:4002/api/v1/component/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/component
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/component/:id
        Metodo: GET

    - Patch: http://localhost:4002/api/v1/component/:id
        Metodo: PATCH
        Requerimentos:   BODY (Pasar unicamente lo que se quiere modificar)
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | projectId        | string               |
                        | pageId           | string               |
                        | parentId         | string               |
                        | tag              | string               |
                        | attributes       | Object               |
                        | nativeAttributes | Object               |
                        | isShow           | boolean              |

    - Update: http://localhost:4002/api/v1/component/:id
        Metodo: PUT
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


### Crud de Preset

    - Add: http://localhost:4002/api/v1/preset
        Metodo: POST
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | projectId        | string               |
                        | name             | string               |


    - Delete: http://localhost:4002/api/v1/preset/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/preset
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/preset/:id
        Metodo: GET

    - Patch: http://localhost:4002/api/v1/preset/:id
        Metodo: PATCH
        Requerimentos:   BODY (Pasar unicamente lo que se quiere modificar)
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | name             | string               |

    - Update: http://localhost:4002/api/v1/preset/:id
        Metodo: PUT
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | name             | string               |


### Crud de Color

    - Add: http://localhost:4002/api/v1/color
        Metodo: POST
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | name             | string               |
                        | value            | [Object]             |


    - Delete: http://localhost:4002/api/v1/color/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/color
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/color/:id
        Metodo: GET
                    
    - Patch: http://localhost:4002/api/v1/color/:id
        Metodo: PATCH
        Requerimentos:   BODY (Pasar unicamente lo que se quiere modificar)
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | name             | string               |
                        | value            | [Object]             |

    - Update: http://localhost:4002/api/v1/color/:id
        Metodo: PUT
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | name             | string               |
                        | value            | [Object]             |


### Crud de Layaout

    - Add: http://localhost:4002/api/v1/layaout
        Metodo: POST
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | name             | string               |
                        | value            | [Object]             |


    - Delete: http://localhost:4002/api/v1/layaout/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/layaout
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/layaout/:id
        Metodo: GET

    - Patch: http://localhost:4002/api/v1/layaout/:id
        Metodo: PATCH
        Requerimentos:   BODY (Pasar unicamente lo que se quiere modificar)
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | name             | string               |
                        | value            | [Object]             |

    - Update: http://localhost:4002/api/v1/layaout/:id
        Metodo: PUT
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | name             | string               |
                        | value            | [Object]             |


### Crud de Text

    - Add: http://localhost:4002/api/v1/text
        Metodo: POST
        Requerimentos:   BODY
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


    - Delete: http://localhost:4002/api/v1/text/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/text
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/text/:id
        Metodo: GET

    - Patch: http://localhost:4002/api/v1/text/:id
        Metodo: PATCH
        Requerimentos:   BODY (Pasar unicamente lo que se quiere modificar)
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

    - Update: http://localhost:4002/api/v1/text/:id
        Metodo: PUT
        Requerimentos:   BODY
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



### Crud de Property

    - Add: http://localhost:4002/api/v1/property
        Metodo: POST
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | style            | object               |
                        | grid             | object               |
                        | event            | string               |
                        | state            | object               |
                        | other            | object               |


    - Delete: http://localhost:4002/api/v1/property/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/property
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/property/:id
        Metodo: GET

    - Patch: http://localhost:4002/api/v1/property/:id
        Metodo: PATCH
        Requerimentos:   BODY (Pasar unicamente lo que se quiere modificar)
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | style            | object               |
                        | grid             | object               |
                        | event            | string               |
                        | state            | object               |
                        | other            | object               |

    - Update: http://localhost:4002/api/v1/property/:id
        Metodo: PUT
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | style            | object               |
                        | grid             | object               |
                        | event            | string               |
                        | state            | object               |
                        | other            | object               |


### Crud de CSSClass

    - Add: http://localhost:4002/api/v1/property
        Metodo: POST
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | name             | string               |
                        | style            | object               |
                        | activeDefault    | boolean              |

    - Delete: http://localhost:4002/api/v1/property/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/property
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/property/:id
        Metodo: GET

    - Patch: http://localhost:4002/api/v1/property/:id
        Metodo: PATCH
        Requerimentos:   BODY (Pasar unicamente lo que se quiere modificar)
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | name             | string               |
                        | style            | object               |
                        | activeDefault    | boolean              |

    - Update: http://localhost:4002/api/v1/property/:id
        Metodo: PUT
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |
                        |------------------|----------------------|
                        | name             | string               |
                        | style            | object               |
                        | activeDefault    | boolean              |