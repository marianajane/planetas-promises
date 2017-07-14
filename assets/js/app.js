var url = "data/earth-like-results.json";
var planetas= [];

function getJSON(url){
  return new Promise(function(resolve,reject){
    var ajax = new XMLHttpRequest();
    ajax.open("GET",url);
    ajax.send();
    ajax.onreadystatechange = function(){
      if(ajax.readyState == 4){
        resolve(JSON.parse(ajax.responseText));
      }
    }
  })
};

getJSON(url).then(function(respuesta){
    console.log(respuesta.results);

    for (var i=0; i< respuesta.results.length; i++){
        planetas.push(getJSON(respuesta.results[i]));
        planetas[i].then(function(planeta){
            console.log(planeta);
            datosPlaneta(planeta);
        });
    };
});

var datosPlaneta = function (planeta) {
    var nombre = planeta.pl_name;
    var distancia = planeta.st_dist;
    var descubrimiento = planeta.pl_disc;
    var telescopio = planeta.pl_telescope;
    crear_tarjeta(nombre, distancia, descubrimiento, telescopio);
}

//Creando elementos (createElement)
var crear_tarjeta = function (nombre, distancia, descubrimiento, telescopio){
    var contenedor_tarjetas= document.getElementById("contenedor_planetas")
    var card= document.createElement("div");
    var card_image= document.createElement("div");
    var imagen= document.createElement("img");
    var card_texto= document.createElement("div");
    var texto_nombre= document.createElement("h6");
    var texto_distancia= document.createElement("p");
    var texto_descubrimiento= document.createElement("span");
    var texto_telescopio= document.createElement("span");

//Asignando atributos (setAttribute)
    card.setAttribute("class", "card");
    card_image.setAttribute("class", "card-image");
    imagen.setAttribute("src", "http://www.migliorblog.it/wp-content/uploads/2016/11/HD-189733-Ab-1024x576.jpg");
    card_texto.setAttribute("class", "card-content");

//Escribiendo contenido de "planeta"
    texto_nombre.innerHTML = nombre;
    texto_distancia.innerHTML =  distancia+ " light years away";
    texto_descubrimiento.innerHTML = "Discovered in " + descubrimiento;
    texto_telescopio.innerHTML = " with " + telescopio;
    
//Agregando planetas (append) 
    card_texto.appendChild(texto_nombre);
    card_texto.appendChild(texto_distancia);
    card_texto.appendChild(texto_descubrimiento);
    card_texto.appendChild(texto_telescopio);
    card_image.appendChild(imagen);
    card.appendChild(card_image);
    card.appendChild(card_texto);
    contenedor_tarjetas.appendChild(card);
}


