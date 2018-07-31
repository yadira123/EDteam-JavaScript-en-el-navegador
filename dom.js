/*
DOM <- Document Object Model
----
del document empiezan a ramificars etodos los objetos q conforman el DOM osea las estructura HTML

	document <- devuelve el html desde el doctype 
	.body <- devuelve body element
	.documentElement <- devuelve root el(html) completo
	.links <- devuelve todos los enlaces
	.scripts <- devuelve todos los scripts
	.images <- devuelve todas las imagenes
	.head <- devuelve el elemento head 
	.styleSheets <- devuelve todos los css

*/

/*//escribir en la consola
document.body;
document.documentElement;
document.links*/


/*
cada vez q trabaje con el DOM debo de comenzar con la palabra document seguido de la funcion:

document.getElementById('id'); <- devuelve el elemento del DOM q tenga ese 'id'

document.querySelector('cssSelector'); <- cualquier selector de CSS se puede pasar incluso avanzados. Pero Obtiene solo el primer elemento q coincida con este señector 

document.querySelectorAll('cssSelector');<- cualquier selector de CSS se puede pasar la difierencia. Devuelve todos los elementos q coincida

*IMPORTANTE*
Si no se encuentra el(los) elementos se devuelve null. y si hay lineas debajo no se ejecutara ya q el null detiene el flujo de ejecucion

*/
/*
let title = document.getElementById('title');//null
title.textContent='Bienvenidos';//esta linea saldra un error
//se detendra el flujo aqui y no se mostrara esto
console.log('Esto no se mostrara');
*/


/*let title = document.getElementById('title');//null
if(title){
	title.textContent='Bienvenidos';
}
//continuara el flujo
console.log('Sigo funcionando');*/


/*
*IMPORTANTE2*

querySelector() y querySelectorAll()
 Se pueden ejecutar desde el documento o desde un elemento(ejm: etiqueta, clase, id, variable) querySelectorAll no devuelve un array, devuelve un(nodeList), es necesario expandirlo osea convertirlo en array asi: [...document.querySelector('selector')]

*/

/*
let menu = document.getElementById('menu'),
	
//	menuLinks = document.querySelectorAll('#menu li a'); //no es recomendable usar el document.query... de esta manera ya q exige mas al navegador ya q tiene q buscar dnetro d todo el documento(document) 
	
	menuLinks = [...menu.querySelectorAll('a')];//busca dentro del elemento menu. Esto es mas optimo ya que el navegador hace menos esfuerzo xq el elemento menu ya lo tiene guardado en cache. Ahorita esto es un nodeList entonces tenemos q convertirlo a un array con [...]

	console.dir(menuLinks);
*/


/*
----------------------
	DOM Traversing
----------------------
moverse a traves del DOM

Hermanos:
--------
	element.nextSibling <- hermano siguiente (nodo)

	element.nextElementSibling <- obtiene el hermano siguiente (elemento)

	element.previousSibling <- hermano anterior (nodo)

	element.previousElementSibling <- obtiene el hermano anterior (elemento)


Padres:
-------
	element.parentElement <- padre del elemento 

	element.parentElement.parentElement <- abuelo del elemento
	
	element.parentNode <- padre (nodo)

Hijos:
------
	element.children <- lista de hijos del elemento

	element.children <- lista de elementos hijos del elemento.

	element.childNodes <- todos los nodos hijos

	element.firstElementChild <-  primer elemento hijo

	element.lastElementChild <-  ultimo elemento hijo

	element.firstChild <- primer nodo hijo

	element.lastChild <- ultimo nodo hijo
*/
let menu = document.getElementById('menu'),
	menuLinks = [...menu.querySelectorAll('a')],
	menuItems = [...menu.querySelectorAll('li')];


console.dir(menuItems[1])




/*
Propiedades de los elementos

Contenido:
----------
Acceder al contenido de los elementos

.textContent <- devuelve el texto plano del elemento (lectura y escritura)

.innerHTML <- HTML interno de un elemento. Devuleve un html

item.firstElementChild.textContent =  'Me acaban de escribir' <- setea un contenido


Atributos:
----------
.attributes <- obtiene el atributo del elemento

.getAttribute('atributo')

.setAttribute('atributo','valor')

.removeAttribute('atributo')


Clases:
------
.classList <- devuelve un nodeList con todas las clases d este elemento

	.add('nombreClase') <- añadir una clase a un elemento
	.remove('nombreClase') <- quitar una clase
	.toggle('nombreClase') <- si tenia una clase la quita y si no la tenia la añade.
	.contains('nombreClase') <- devuelve true si el elemento contiene esa clase
	
Estilos CSS:
------------
.style <- se le puede pasar cualquier propiedad CSS. Es para definir propiedades

	.cssProperty (usar camelCase en lugar de guiones)
	ejm: border_radius === borderRadius

	ejm:
	item.style.color ='red'
	item.firstElementChild.style.color = 'green'
	item.style.backgroundColor = 'pink'
*/
/*//ejemplos:
item.getAttribute('class')
//"item"
item.getAttribute('id')
//"item2"
item.getAttribute('data-menu')
//"2"
item.classList
//DOMTokenList ["item", value: "item"]
item.id
//"item2"
checkbox.setAttribute('checked','true');//haria q el checkbox este marcado*/


let item = menuItems[1];


/*
--------------------------
	Transformar el DOM
--------------------------
Crear elementos:
----------------
.document.createElement('NombreElemento'); <-crea un elemento con el nombre de la etiqueta html q le pase por parametro

Insertar elementos:
-------------------
.appendChild(childElement) <- inserta un elemento al final del padre
	ejm:
	parent.appendChild(element)

.insertBefore() <- inserta un elemento antes de otro 
	ejm:
	parent.insertBefore(newElement, nextElement)
		parent <- elemento padre
		newElement <- elemento a insertar
		nextElement <- elemento ya existente antes del cual se insertara el nuevo

*/


let element = document.createElement('li');

element.textContent = 'Soy un nuevo elemento';

//menu.appendChild(element);
menu.insertBefore(element,menuItems[1]);



/*
----------------------------------
Eliminar y Mover elementos del DOM
----------------------------------

parent.removeChild(element) <- elimina elemento respecto al parent(padre)

element.remove() <- elimina element por si solo

*/
/*//ejm:
menu.removeChild(menuItems[2]);//esto si podria meterlo en uan variable ya q devuelev el elemento eliminado
menuItems[2].remove()*/


let elem = menu.removeChild(menuItems[0]);//elimino el elemento 0 y lo meto dnetro d una variable

menu.appendChild(elem);//inserto al final


