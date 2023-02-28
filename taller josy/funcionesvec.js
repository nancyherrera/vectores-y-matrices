
//funcion includes= esta funcion nos dice si es verdero
//o falso que un elemento este dentro de un vector ejemplo=
var num = [1,2,3,4,5,6,7,8,9,10];
document.write(num.includes(3) + "<br>");
document.write(num.includes(11)+ "<br>");
//funcion push= anexa elementos al final del vector
//ejemplo=
var A1=[1,3,20,40,10]
A1.push(55,66,70,100);
document.write(A1 + "<br>");
//funcion unshift nos anexa los elementos al inicio del vector
//ejemplo:
var fruta= ['🍒','🍓','🍍','🍇'];
fruta.unshift('🥦','🍉');
document.write(fruta + "<br>")
//pop=elimina el ultimo elemento del vector
var nombre=["juan", "valentina","gloria", "camila"]
nombre.pop();
document.write(nombre + "<br>");
//shift elimina el primer elemento del vector 
var nombre=["juan", "valentina","gloria", "camila"]
nombre.shift();
document.write(nombre);