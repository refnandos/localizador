var colores = new Array("white", "black");

function tablero () {
    var numfilas =  document.getElementById("numfilas").value;
    var numcolumnas = document.getElementById("numcolumnas").value;
    var contenedortabla = document.getElementById("contenedor");

    contenedortabla.innerHTML = "";
    var colorfondo, colorletra;
    var tabla = "<table> ";

    for(var i = 1; i<= numfilas ; i++){
        tabla +=  "<tr>"; 
        for(var j = 1; j<= numcolumnas ; j++){
            /*
            colorfondo = colores[Math.round( Math.random() * ((colores.length - 1 ) - 0) + 0 )];
            colorletra = colores[Math.round( Math.random() * ((colores.length - 1 ) - 0) + 0 )];
            */
           if (i%2 ===0){
            if (j%2 ===0){
                colorfondo = colores[0];
               }else{
                colorfondo = colores[1];
               }
           }else{
            if (j%2 !==0){
                colorfondo = colores[0];
               }else{
                colorfondo = colores[1];
               }
           }
            tabla += "<td style='background-color: " + colorfondo + "'>pato</td>"
        }   
        tabla += "</tr>";
    }

tabla += "</table>";
    contenedortabla.innerHTML = tabla;
}
