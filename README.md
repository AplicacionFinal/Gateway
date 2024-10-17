# GATEWAY

## INTRODUCCIÓN FUNCIONAMIENTO

El *gateway* se va a  encargar de recibir las solicitudes *http* que mandan los usuarios usando la aplicación web y de comunicarse con los demás microservicios usando NATS con el objetivo de resolver dichas solicitudes. 

## Construcción del Gateway
### Pasos a Seguir: 
1. Definir las variables de entorno y un esquema de validacion de las mismas.
2. Definir

### 1. VARIABLES DE ENTORNO

Las variables de entorno las configuramos gracias al **'doenv'** (Es mas ligero que ConfigModule) 

1.Creación de los archivos necesarios:  
* Instalamos el paquete **'doenv'** con npm.
* Creamos un archivo **'src/cofig/envs.ts'**.

* En el archivo incluimos el paquete **doenv/config** y exportamos una clase constante de  esta manera:

```
import 'doenv/config';

export const envs = {
variable_entorno: process.env.nombre_variable_entorno,
}
```
* Creamos nuestro archivo **'.env'** en la raiz del proyecto y otro **'.env.template'** para que se importe a github.

2. Definimos el esquema de validación de las variables de entorno: comprueba los valores de las variables de entorno y evita que se lance el microservicio si hay alguna incorrecta lanzando una excepción

* El paquete de validación que vamos a utilizar es **'joi'** y el esquema de validación lo vamos a situar en **'config/env.ts'**.
* Implementamos las validaciones de la siguiente manera: 
	
	```
	import * as joi from 'joi';
	
	const envSchema = joi.object({
		PORT: joi.number().required(); //requerido. 
	}).unknown(true); // Puedes incluir mas variables de entorno de las que viene y las va a aceptar. 
	
	const {error,value:envVars} = envSchema.validate(process.env);
	
	//Puedes hacer un 'console.log()' a las variables anteriores si lo deseas. 
	
	// Tambien si tenemos un error podemos lanzar una excepción de la siguiente manera: 
	
	if(error) throw new Error('ConfigValidationError: ${error.message}');
	```
	* Por útltimo cambiamos el código de la constante que hemos declarado anteriormente para hacer referencia al valor de las constantes validadas.

	```
	export const envs = {
	variable_entorno: envVars.variable_de_entorno,
	}
	```

	Ahora para usar las constantes tenemos que hacerlo con el envs que creamos en **'src/config/envs.ts'**.
	
	### Datos Importantes:
	
	* El formato de las variables de entorno en el archivo **'/.env'** es: ```variable_entorno = valor```
	* El **'process.env'** trae más variables de las que incluimos nosotros por lo que tenemos dos opciones: 
		* Poner el unknown true para que el validator acepte variables de entorno no especificadas en su configuración.
		* Hacer un conjunto de variables de entorno diferentes y validarlas. 
	
	## PRÁCTICAS INTERESANTES
	
	### Utilizar Logger: 

	Podemos implementar el módulo **'Logger'** para mostrar por consola logs con el formato de los demás. 