/*
El objeto Window es el padre de todos los objetos en el navegador. De ahi parten todos los demas objetos

ejm:
alert('hola'); ==== window.alert('hola');
console.log(variable); === window.console.log(variable);

-------------------------------------------------------
*****************	PROPIEDADES	  *****************
-------------------------------------------------------

Dimensiones(tamaño):
-------------------
Nos dan las dimensiones del navegador.
.innerWidth <- muestra el tamaño de ancho del navegador
.innerHeight <- muestra el tamaño de alto del contenido del navegador
.outerWith <- muestra el tamaño de ancho total incluyendo el scroll del navegador
.outerHeight <- muestra el tamaño de alto total del navegador
*/

/*let x = innerWidth === window.innerWidth;
window.console.log(x);

console.log(innerWidth);
console.log(outerWidth);
console.log(innerHeight);
console.log(outerHeight);

console.log(window.screenX);*/

/*
Coordenadas de la ventana:
-------------------------
podemos obtener las coordenadas de la ventana respecto a la pantalla. Para ello tenemos:
screenX
screenY
*/
/*
console.log(window.screenX);//imprime la cordenada q hay entre la esquina superior derecha de mi pantalla y la esquina superior derecha de mi navegador

console.log(window.screenY);//muestra la cordenada q hay entre arriba de la pantalla y la distancia del navegador
*/

/* 
Scroll:
-------
.scrollX
.scrollY
*/
//console.log(window.scrollX);
//console.log(window.scrollY);


/*
Storage:
--------
almacenamiento
.localStorage
.sessionStorage
*/


/* -----------------------------------------------
*****************	METODOS DE WINDOWS	**********
--------------------------------------------------

Dialogos:
---------
.alert();
.prompt();
.confirm();

*/

/*
alert('hola Mundo');
prompt('que edad tienes?',0);
confirm('¿Estas seguro?');*/


/*  
Manipular Ventanas:
------------------

.open(url); <- sirve para abrir una ventana
.close(); <- cierra una ventana abierta
.getSelection(); <-  obtiene la seleccion
.getSelection().toString() <- obtiene el texto de la seleccion y retorna ese texto
.getcomputedStyle(); <- devuelve todo el estilo ya computado por el navegador
*/
/*//escribir esto en la consola del navegador
let myWindow= window.open('hhtps://google.com');
myWindow.close();*/

//window.getSelection().toString();


/*
Mover el scroll
---------------
De esta manera manipulamos el scroll
scrollTo(x,y) <- nos envia a la posicion x, y
scrollBy(x,y) <- suma a la posicion actual los valores x,y
*/

/*
//escribir esto en el navegador
scrollTo(0,200);//avanza el scroll hasta donde le indique como parametros
scrollTo(0,100);

scrollBy(0,200);//aumenta al scroll actual esa cantidad del parametro
*/


/* 
history
-------
guarda el historial de la pestaña abierta y de la sesion actual

window.history <- muestra cuantos elementos tengo en memoria

Moverse en el historial
----------
.back() <- moverse hacia atras
.forward() <- moverse hacia adelante
.go(n) <- moverse en el historial. n positivo (adelante) n negativo(atras)
*/
/*console.log(history);

history.go(-1);

history.forward();*/










