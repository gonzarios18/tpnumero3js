/*-Escribe un programa que cree un objeto "cuenta"
con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta,
pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada 
como parámetro.
Un método informar() que retorne la información del estado
de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar
y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/

const cuenta={
titular:"alex",
saldo: 0,
ingresar: function(cantidad){
   cantidad=Number(prompt("Ingrese dinero a la cuenta"));
   this.saldo+=cantidad;
},
extraer: function(extraer){
    extraer=Number(prompt("Escriba cuanto dinero desea extraer"));
    this.saldo -=extraer
        

    

},
informar: function(informacion){
    informacion= (this.cantidad-this.extraer)
    console.log(`El estado actual de su cuenta es de ${this.saldo}`);
}
}
cuenta.ingresar();
cuenta.extraer();
cuenta.informar();