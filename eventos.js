/*
EVENTOS
--------
un evento es 'cualquier cosa' que sucede en la aplicacion 

¿Como reconocer los eventos dsponibles en un objeto?
	console.dir(obj)
	todos los q comiencen con on... son objetos


¿Como aplico una funcion a un evento?
	objeto.onNameEvent = function(){} <- (No recomendable) por que solo se puede usar una sola vez.
	
	*Se recomienda usar addEventListener(esta a la escucha de un evento)
	objeto.addEventListener('evento', function(){});
		event <- es el nombre del evento
		
		
EVENTOS COMUNES:
----------------

De Mouse:
--------

	'click' <- cuando el user hace click 
	'dblclick' <- al hacer doble click
	'mousedown' <- al poner el mouse sobre un elemento. Equivalente al hover
	'mouseenter <- cuando el mouse sale del elemento
	'mouseleave' <- cuando el mouse sale del elemento
	'mouseout' <- cuando ,ueves el mouse
	'mousemove' <- cuando 
	'mouseout' <- cuando
	'mouseover' <- cuando pones el cursor encima de un elemento	
	'mouseup' <- cuando
	'mousewheel' <- cuando usas la rueda
	
De teclado:
-----------
	'keydown' <- 
	'keyup' <-

De Formulario:
--------------
	'submit' <- cuando s enevia el formulario
	'change' <- detecta el cambio de valor de un input

De window:
----------
	'resize' <- cuando se redimensiona la ventana
	'scroll' <- cuando se hace scroll
	'load' <- cuando se carga completamente toda la pag web 
	'DOMContentLoaded' <- cuando se remderiza el DOM
	
*/

/*let eventHandler = (e) => {
//	console.log(e.target);//dice donde se sisparo el evento
	e.preventDefault();//evita q el navegador dispare x evento para los eventos
	e.target.style.color = 'red';
	e.target.style.backgroundColor = 'yellow';
}


menu.addEventListener('click', eventHandler);*/
	

/*
Delegacion de eventos:
----------------------
cuando un evento se dispara hay dos fases:
La fase de capture y de public

*/


let eventHandler = e => {
	e.preventDefault();
	if(e.target.tagName === 'A'){//los tagName tienen q ser en mayuscula
		console.log(e.target.textContent);
	}
}

menu.addEventListener('click', eventHandler)









