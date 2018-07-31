/*
El objeto Navigator nos da las propiedades del navegador
*/

//console.log(window.navigator)


/*
Geolocation:
------------
Es un objeto con tres metodos.
Es un objeto estandar para todos los navegadores. Es la API de geolocalizacion y de esa manera es como se puede conocer la ubicacion del usuario.

Metodos de geolocation:
-----------------------
.clearWatch() <- limpiar el watchPosition

.watchPosition() <- siguiendo la direccion del usuario

.getCurrentPosition(succes,[error, options]) <- obtiene la ubicacion en este momento del usuario


*/

/*navigator.geolocation.getCurrentPosition(function(position){
	console.log(position);
})*/

/*
//Conocer mi direccion o localizacion actual solo con mi longitud y latitud
navigator.geolocation.getCurrentPosition(function(geoposition){
	let coords = geoposition.coords,
		lat = coords.latitude,
		long = coords.longitude;
	console.log(lat, long);
})
*/



/*
Location:
--------
Contiene la informacion de la pagina actual

.href <- url
.parthname <- la ruta dentro del dominio
.hash <- el marcador q redirige a una parte d ela pagina #
.origin <- protocol + hostname
.protocol <- http o https
.hostname <- hostname (dominio o IP)
.host <- hostname y port. Si el puerto es del https por defecto no se mostrara el puerto
.port <- puerto
.search <- parametros de busqueda ? id = 1

*/



//Determinar link activo de un menu

function getCurrentMenuItem(containerElement){
	let url = location.href,
		links = [...containerElement.querySelectorAll('a')];//buscando todos los a q esten dentro d este containerElement
	links.map(link => {
		if(link.href == url) return link.classList.add('active');
	})
}

getCurrentMenuItem(document.getElementById('menu'));

