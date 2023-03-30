# Html + CSS + Javascript
# Proyecto inicial simple

## Requerimientos
- Para poder levantar el sitio web se requiere de un servidor web local. Se puede utilizar http-server (https://www.npmjs.com/package/http-server)
`npm install -g http-server`
- Una vez instalado, utilizar la consola para posicionarse en el directorio raíz del proyecto, y ejecutar: `http-server`
- Luego, podrá ver el sitio web corriendo en http://localhost:8080

## Ejercicios a realizar
En base al proyecto inicial, realizar las siguientes modificaciones:

3. En la sección Contacto: 
 - Agregar un campo para que el usuario pueda ingresar un teléfono de contacto. Si el mensaje se envía correctamente, mostrar el teléfono junto con el resto de los datos.

4. En la sección donde obtenemos un usuario desde una api externa:
 - En el caso de darse un error (por ej por desconexión de internet), manejar el error y mostrar un mensaje al usuario: "No se ha podido recuperar el usuario. Por favor inténtelo más tarde."

5. Estilos CSS:
 - Escribir una versión alternativa del archivo styles.css pero aplicando sass. Crear un archivo llamado styles.scss.
  - Siguiendo la estrategia Mobile First, modificar el archivo styles.css para que en la vista mobile:
  	-  quitar al container-right el borde negro (en todas las páginas).
  	-  las opciones de menu se vean horizontalmente, uno al lado del otro
