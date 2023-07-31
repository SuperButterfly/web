# Backend V2

## Consejo

- Si estas leyendo este documento en VisualStudioCode, al abrilo dirige el mouse a este mismo archivo en la solapa superior, dale click derecho y selecciona "Open Preview"

- Para inicializar el backend, parandote sobre "\web>" ejecuta el comando "npm run start:server"

- Para inicializar el backend, parandote sobre "\web>" ejecuta el comando "npm run dev"


## Endpoints

- En la carpeta "endpoints" encontraras todos los endpoints segun el crud correspondiente al modelo. Por ejemplo, en el archivo "crud-user.md" encontraras todos los endpoints relacionados al modelo de "User".

- Todos los endpoints estan ordenados en forma alfabetica.
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
