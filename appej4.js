/*Escribe una clase Producto para crear objetos.
Estos objetos, deben presentar las propiedades
código, nombre y precio, además del método
imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este
objeto y guárdalas en un array.
Por último, utilice el método imprime
datos para mostrar por pantalla los valores de los tres objetos instanciados*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimirDatos() {
    console.log(
      `El codigo es ${this.codigo}, el nombre es ${this.nombre}, y el precio es ${this.precio}`
    );
  }
 
}
 const producto1= new Producto(1,"El monje que vendio su ferrari",3500+ " pesos");
 const producto2= new Producto(2,"La vaca purpura",2500+ " pesos");
 const producto3=new Producto(3,"El diario de Ana Frank",4500+" pesos");
  const arrayDeProductos=[producto1,producto2,producto3];

  arrayDeProductos.forEach(function(producto){
    producto.imprimirDatos();
  });
  