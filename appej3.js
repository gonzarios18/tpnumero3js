/*Escribe una clase que permita crear distintos objetos
“rectángulos”, con las propiedades de alto y ancho, mas
los métodos necesarios para modificar y mostrar sus
propiedades, calcular el perímetro y el área
*/
class Rectangulos {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  modificarAlto(nuevoAlto) {
    this.alto = nuevoAlto;
  }

  modificarAncho(nuevoAncho) {
    this.alto = nuevoAncho;
  }
  mostrar() {
    console.log(`El alto es ${this.alto} y el ancho es ${this.ancho}`);
  }
  calcularPerimetro(perimetro) {
     return perimetro = 2 * this.alto + 2 * this.ancho;
    
  }
  calcularArea(area) {
     return area = this.alto * this.ancho;
   
  }
}


const alto = prompt("ingrese el alto");
const ancho = prompt("ingrese el ancho");
const rectanguloNuevo = new Rectangulos(alto,ancho);
rectanguloNuevo.mostrar();
console.log("El perimetro es:", rectanguloNuevo.calcularPerimetro());
console.log("El area es:", rectanguloNuevo.calcularArea());
