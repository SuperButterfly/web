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

- **Controllers-Variables**: Realizar reunion para redifinir el estandard a seguir.

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
    ├── utils/      # Carpeta para los utils utilizados en los controllers
    │   ├── err/        # Carpeta para el manejo de errores
    │   │    ├── catchedAsync    # Módulo para el chatcheo de errores
    │   │    ├── errors          # Módulo para los mensajes de errores
    │   │    ├── index           # Módulo para la conversion del manejo de errores
    │   │    ├── resError        # Módulo para los status de errores
    │   │    ├── response        # Módulo para la response de errores 2
    │   │    └── ...
    │   ├── helpers/        # Carpeta para los routers de peticion de datos
    │   │    ├── output-1.ts    # Módulo para el router de peticion 1
    │   │    ├── output-2.ts    # Módulo para el router de peticion 2
    │   │    └── ...
    │   ├── token/        # Carpeta para los routers de peticion de datos
    │   │    ├── output-1.ts    # Módulo para el router de peticion 1
    │   │    ├── output-2.ts    # Módulo para el router de peticion 2
    │   │    └── ...
    │   └── .............................................................................


## Endpoints

### Crud de Usuario

    - Register: http://localhost:4002/api/v1/user/register
        Metodo: POST
        Requerimentos:  BODY 
                        | Propiedades |       Valores        |       Ejemplo        |
                        |-------------|----------------------|----------------------|
                        | userName    | string               | user                 |
                        | email       | string               | example@gmail.com    |
                        | password    | string               | Abcde#6789           |

    - Delete: http://localhost:4002/api/v1/user/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/user
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/user/:id
        Metodo: GET

    - Login: http://localhost:4002/api/v1/user/login
        Metodo: POST
        Requerimentos:  BODY
                        | Propiedades |       Valores        |       Ejemplo        |
                        |-------------|----------------------|----------------------|
                        | email       | string               | example@gmail.com    |
                        | password    | string               | Abcde#6789           |
                    
    - Update: http://localhost:4002/api/v1/user/:id
        Metodo: PUT
        Requerimentos:   BODY
                        |  Propiedades |       Valores        |       Ejemplo        |
                        |--------------|----------------------|----------------------|
                        | username     | string               | user                 |
                        | email        | string               | example@gmail.com    |
                        | password     | string               | Abcde#6789           |
                        | plane        | string               | Free|Pro|Premmiun    |
                        | resourceList | [{Object}]           | [{Object},{Object}]  |
                        | theme        | string               | dark                 |
                        | billingDates | {Object}             | {Object}             |


### Crud de WorkSpace

    - Add: http://localhost:4002/api/v1/workspace
        Metodo: POST
        Requerimentos:   BODY
                        | Propiedades |       Valores        |       Ejemplo        |
                        |-------------|----------------------|----------------------|
                        | userToolId  | string               | user                 |
                        | role        | string               | Owner                |
                        | name        | string               | newWorkSpace         |

    - Delete: http://localhost:4002/api/v1/workspace/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/workspace
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/workspace/:id
        Metodo: GET
                    
    - Update: http://localhost:4002/api/v1/workspace/:id
        Metodo: PUT
        Requerimentos:   BODY
                        | Propiedades |       Valores        |       Ejemplo        |
                        |-------------|----------------------|----------------------|
                        | role        | string               | Owner|Editor|Viewer  |
                        | name        | string               | newWorkSpace         |

### Crud de Project

    - Add: http://localhost:4002/api/v1/project
        Metodo: POST
        Requerimentos:   BODY
                        | Propiedades |       Valores        |       Ejemplo        |
                        |-------------|----------------------|----------------------|
                        | userToolId  | string               | id                   |
                        | workSpaceId | string               | id                   |
                        | role        | string               | Owner|Editor|Viewer  |
                        | name        | string               | newProject           |

    - Delete: http://localhost:4002/api/v1/project/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/project
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/project/:id
        Metodo: GET
                    
    - Update: http://localhost:4002/api/v1/project/:id
        Metodo: PUT
        Requerimentos:   BODY
                        | Propiedades |       Valores        |       Ejemplo        |
                        |-------------|----------------------|----------------------|
                        | role        | string               | Owner|Editor|Viewer  |
                        | name        | string               | newProject           |


### Crud de Page

    - Add: http://localhost:4002/api/v1/page
        Metodo: POST
        Requerimentos:   BODY
                        |   Propiedades   |       Valores        |       Ejemplo        |
                        |-----------------|----------------------|----------------------|
                        | projectId       | string               | id                   |
                        | name            | string               | newPage              |
                        | tittle          | string               | Titulo               |
                        | author          | string               | Nombre de Creador    |
                        | keywords        | [string]             | palabras clave       |
                        | urlSlug         | string               | www.ejemplo.com      |
                        | metaDescription | string               | metaEtiqueta         |

    - Delete: http://localhost:4002/api/v1/page/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/page
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/page/:id
        Metodo: GET
                    
    - Update: http://localhost:4002/api/v1/page/:id
        Metodo: PUT
        Requerimentos:   BODY
                        |   Propiedades   |       Valores        |       Ejemplo        |
                        |-----------------|----------------------|----------------------|
                        | projectId       | string               | id                   |
                        | name            | string               | newPage              |
                        | tittle          | string               | Titulo               |
                        | author          | string               | Nombre de Creador    |
                        | keywords        | [string]             | palabras clave       |
                        | urlSlug         | string               | www.ejemplo.com      |
                        | metaDescription | string               | metaEtiqueta         |


### Crud de Component

    - Add: http://localhost:4002/api/v1/component
        Metodo: POST
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |       Ejemplo        |
                        |------------------|----------------------|----------------------|
                        | projectId        | string               | id                   |
                        | pageId           | string               | id                   |
                        | parentId         | string               | id                   |
                        | tag              | string               | button               |
                        | attributes       | Object               | Objeto               |
                        | nativeAttributes | Object               | Objeto               |
                        | isShow           | boolean              | False                |


    - Delete: http://localhost:4002/api/v1/component/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/component
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/component/:id
        Metodo: GET
                    
    - Update: http://localhost:4002/api/v1/component/:id
        Metodo: PUT
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |       Ejemplo        |
                        |------------------|----------------------|----------------------|
                        | projectId        | string               | id                   |
                        | pageId           | string               | id                   |
                        | parentId         | string               | id                   |
                        | tag              | string               | button               |
                        | attributes       | Object               | Objeto               |
                        | nativeAttributes | Object               | Objeto               |
                        | isShow           | boolean              | False                |


### Crud de Preset

    - Add: http://localhost:4002/api/v1/preset
        Metodo: POST
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |       Ejemplo        |
                        |------------------|----------------------|----------------------|
                        | projectId        | string               | id                   |
                        | name             | string               | newPreset            |


    - Delete: http://localhost:4002/api/v1/preset/:id
        Metodo: DELETE

    - Get all Users: http://localhost:4002/api/v1/preset
        Metodo: GET

    - Get by ID: http://localhost:4002/api/v1/preset/:id
        Metodo: GET
                    
    - Update: http://localhost:4002/api/v1/preset/:id
        Metodo: PUT
        Requerimentos:   BODY
                        |   Propiedades    |       Valores        |       Ejemplo        |
                        |------------------|----------------------|----------------------|
                        | projectId        | string               | id                   |
                        | name             | string               | newPreset            |