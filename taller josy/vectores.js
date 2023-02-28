//los vesctpores sn colecciones de datos, se guardan los datospor posiciones
//se representamn con []
//frutas individuales:
/*
var fruta1 = "mango";
var fruta2 = "pera";
var fruta3 = "Banano";
//futas en una variable 
var frutas ="";
for(var i =0; i<3;i++){
    var f =prompt("digite una fruta");
    frutas = frutas+f+" , ";
}
document.write("las frutas: " +frutas);
*/
//vector frutas 
//frutas_vector = ["sandia", "fresas", "piña"];
/*
datos = [
    344458,
    false, 
    "texto",
    function saludo(){
         alert ("hola");
    },
    ["texto 1", 76, true]
]
document.write("dato guardado "+datos [4][0] + "<br>");
var n = [5,7,10];
for(var i=0; i<n.length; i++){
    document.write("suma vectores" + ( n [ i ] *2 ) + "<br>");
}*/
/*
var verduras =[
    "Tomate",
    "Cebolla",
    "Pepino",
    "Aguacate",
    "Repollo",
    "Cilantro"
];
document.write("la verdura es: " + verduras [1] +"<br>");//mostrar la verdura que esta en el lugar uno del vector(se coloca el lugar que se desea mostrar)
document.write("Total de verduras es: " + verduras.length+ "<br>")//mostrar cuantas verduras hay en numero
//para mostrar cada verdura
for(var x=0; x< verduras.length; x++){
    document.write("la verdura es: " + verduras [x] +"<br>");
}
*/
//como meter informacion en un vector ya hecho 
/*
var cosasCocina = [];
for( var r = 0; r<5; r++){
    var cosas = prompt("ingrese un utensilio de cocina");
    cosasCocina[r] = cosas;
}
//mostrar datos del vector
for(var y=0; y < cosasCocina.length; y++)
{
    document.write("utencilio: "+y+ " " +cosasCocina[y] + "<br>");
}
*/
var cosasAseo = [];
var cant = parseInt(prompt("ingrese la cantidad de productos "));
for( var x = 1; x <= cant; x++){
    var cosas = prompt("ingrese un utensilio de Aseo");
    cosasAseo[x] = cosas;
}
//mostrar datos del vector
for(var i=1; i < cosasAseo.length; i++)
{
    document.write("Articulo: " + i + "" + cosasAseo[i] + "<br>");
}