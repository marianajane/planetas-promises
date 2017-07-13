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
    var nombre = planeta
}
