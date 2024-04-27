/*1- Crea un objeto llamado auto que tenga algunas
características como el color, marca, modelo y si
está encendido o apagado. Crea los métodos necesarios
para permitir encender y apagar el auto.

Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

const auto={

    color: "rojo",
    marca: "ford",
    modelo: "2017",
    estado: false,
    
    encendido:function(){

 
    
        if(this.encendido){
            console.log("El auto esta encendido")
        } else{
            console.log("El auto no esta encendido")
        }


    },

    apagado: function(){

if(this.apagado){
    console.log("El auto esta apagado")
    
}else{
    console.log("El auto aun sigue encendido")
}
    }
}
auto.encendido();
