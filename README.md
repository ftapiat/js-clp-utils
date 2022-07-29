# Paquetes NPM

Debes tener instalado **npm** y luego ejecutar el comando `npm install`.

Esto instalará: 
- Jest
- EsLint
- Prettier
- Typescript

# Modificaciones del template para proyecto

- Debes eliminar la carpeta **doc**.
- En **package.json** debes reemplazar:
  - **@ftapiat/ts-library-template** por el nombre de tu proyecto.
  - **version** por la versión de tu proyecto.
  - **description** por la descripción de tu proyecto.
  - **keywords** por las palabras clave de tu proyecto.
  - **author** por el autor de tu proyecto.
  - Los datos de **repository** por la url de repositorio de tu proyecto.
  - **license** por la licencia que usarás.
  - **directories** puedes eliminar **doc** si eliminaste la carpeta.
- Si vas a desarrollar para una versión superior de ES5, debes modificar la propiedad 
**target** del archivo **tsconfig.json**.

# EsLint

Este proyecto tiene implementado ESLint. Este es una herramienta de linting que se encarga de revisar el código de 
una forma automática y correcta.

Puede que al abrir el proyecto este esté desactivado, por lo que tendrás que activarlo manualmente. Si estás usando una 
herramienta de JetBrains como PHPStorm o WebStorm, puedes activarla en la sección 
**Languages & Frameworks > Code Quality Tools > ESLint**, seleccionando la opción **Automatic ESLint configuration** 
de la siguiente forma:

![Captura para implementar EsLint en IntelliJ (PHPStorm)](/doc/capturas/1.EsLinter-IntelliJ.PNG)

# Prettier

Este proyecto cuenta con Prettier, que es una herramienta que se encarga de formatear el código de una forma más bonita. 
Esto lo realiza corrigiendo o agregando espacios, cambiando las comillas dobles por comillas simples
(según el contexto), etc.

Para asociarlo con el comando de JetBrains para formatear código (**CTRL + ALT + L**), debes dirigirte a
**Languages & Frameworks > JavaScript > Prettier**, seleccionando la opción **on 'Reformat Code' action** 
de la siguiente forma:

![Captura para mapear Prettier con el comando de formateo de Código en IntelliJ (PHPStorm)](/doc/capturas/2.Prettier-IntelliJ.PNG)

# Pruebas Jest

## Escribir pruebas

Las pruebas deben estar escritas en la carpeta **src/__tests__**. Estas deben comprobar el funcionamiento correcto de 
cada clase, función, componente de la aplicación. 

La extensión del archivo debe ser **.test.ts**.

## Ejecutar pruebas

Las puedes ejecutar con el comando `npm test`.