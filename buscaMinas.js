var seccion = document.getElementById("buscaMinas");
var tabla = document.createElement("table");
var tamanio = parseInt(prompt("¿De qué tamaño será tu tabla?"));
var contador = 1;
var arregloIndices =[];


function crearTabla(){
    for(var i = 0; i<tamanio; i++){
      var tr = document.createElement("tr");
        for(var j = 0; j<tamanio; j++){
          var td = document.createElement("td");
          var bomba = document.createElement("img");
          var botoncillo = document.createElement("button");
          //var txt = document.createTextNode("*");
          bomba.src="bomba.png";
          td.id = contador++;
          arregloIndices.push(td.id);
          //console.log(a);
          //td.appendChild(bomba);
          td.appendChild(botoncillo);
          botoncillo.appendChild(bomba);
          tr.appendChild(td);
        }
      tabla.appendChild(tr);
    }
  seccion.appendChild(tabla);
}

function imgClick(){

  }


boton.addEventListener("click", crearTabla);
