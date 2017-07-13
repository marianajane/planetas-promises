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
    var masa = planeta.pl_masse;
    var descubrimiento = planeta.pl_disc;
    var telescopio = planeta.pl_telescope;
    crear_tarjeta(nombre, masa, descubrimiento, telescopio);
}

//Creando elementos (createElement)
var crear_tarjeta = function (nombre, masa, descubrimiento, telescopio){
    var contenedor_tarjetas= document.getElementById("contenedor_planetas")
    var card= createElement("div");
    var card_image= createElement("div");
    var imagen= createElement("img");
}

//Asignando atributos (setAttribute)

//Agregando planetas (append)