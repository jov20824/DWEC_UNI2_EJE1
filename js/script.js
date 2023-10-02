var nombreCompleto = prompt("Escriba su nombre completo");

function contar(nombreC){
    for (var i=0;i<nombreC.length;i++){
        nombreC.replace(" ","");
    }
    return nombreC.length;
}
function mayusculas(nombreC){
    return nombreC.toUpperCase();
}
function minusculas(nombreC){
    return nombreC.toLowerCase();
}
function imprimir(nombreC){
    var lista = nombreC.split(" ");
    console.log("Nombre: "+lista[0]);
    console.log("Apellido 1: "+lista[1]);
    console.log("Apellido 2: "+lista[2]);
}
function propuestaUsuario(nombreC){
    nombreC = nombreC.toLowerCase();
    var lista = nombreC.split(" ");
    var nombreUsuario1 = lista[0]+(lista[1].charAt(0))+(lista[2].charAt(0));
    var nombreUsuario2 = (lista[0].slice(0,2))+(lista[1].slice(0,2))+(lista[2].slice(0,2));
    console.log("Nombre de usuario recomendado 1: "+nombreUsuario1);
    console.log("Nombre de usuario recomendado 2: "+nombreUsuario2);
}
function contrasenia(nombreC){
    nombreC = nombreC.toLowerCase();
    var lista =nombreC.split(" ");
    var contrasenia="";
    for(var i=0;i<lista[0].length;i++){
        contrasenia += lista[0].charAt(i)+i;
    }
    return contrasenia;
}
console.log(contar(nombreCompleto));
console.log(mayusculas(nombreCompleto));
console.log(minusculas(nombreCompleto));
imprimir(nombreCompleto);
propuestaUsuario(nombreCompleto);
console.log(contrasenia(nombreCompleto));
