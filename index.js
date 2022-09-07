/*Array de objetos c/destinos a elegir*/
const lugares= [
    {id:1, nombre:"bariloche",precio:50000},
    {id:2,nombre:"cataratas",precio:30000}, 
    {id:3,nombre: "catamarca",precio:70000}
];
/*definimos variales*/

let bariloche =50000;
let cataratas= 45000;
let catamarca=55000;
let costo;
let total;
let descuento= 123;
let numeroDePasajeros;
let nombre;
let numeroDeTarjeta;
let tarjeta;
let pasajeros;


alert("Los destinos disponibles por el momento son: Bariloche, Cataratas y Catamarca - ¡Con tu código promocional hasta 50%  de descuento HotSale!");
    let lugar = prompt('Ingrese el destino al que desea viajar').toLowerCase ();
        if (lugar !="bariloche" && lugar != "cataratas" && lugar != "catamarca"){
            alert("Destino inválido");}
            else if (lugar==='bariloche'){
                alert("El precio del destino elegido es de $"+ lugares[0].precio);
                let pasajeros= prompt('Ingrese la cantidad de pasajeros');
                alert ("Confirma que desea añadir en su carrito el viaje seleccionado");
                    nombre = prompt ("Ingrese su nombre y apellido");
                    numeroDeTarjeta = prompt ("Ingrese su numero de tarjeta");
                    tarjeta= parseInt (numeroDeTarjeta);
                    numeroDePasajeros= parseInt (pasajeros);
            }
            else if (lugar==='catamarca'){
                alert("El precio del destino elegido es de $"+ lugares[1].precio);
                let pasajeros= prompt('Ingrese la cantidad de pasajeros');
                alert ("Confirma que desea añadir en su carrito el viaje seleccionado");
                    nombre = prompt ("Ingrese su nombre y apellido");
                    numeroDeTarjeta = prompt ("Ingrese su numero de tarjeta");
                    tarjeta= parseInt (numeroDeTarjeta);
                    numeroDePasajeros= parseInt (pasajeros);
            }
            else if (lugar ==='cataratas'){
                alert("El precio del destino elegido es de $"+ lugares[2].precio);
                let pasajeros= prompt('Ingrese la cantidad de pasajeros');
                alert ("Confirma que desea añadir en su carrito el viaje seleccionado");
                    nombre = prompt ("Ingrese su nombre y apellido");
                    numeroDeTarjeta = prompt ("Ingrese su numero de tarjeta");
                    tarjeta= parseInt (numeroDeTarjeta);
                    numeroDePasajeros= parseInt (pasajeros);
            }else ("Debe colocar un destino válido para continuar");



/* Definimos función de descuento más impuestos*/
function PrecioNeto(precio) {
    let impuestos = 1.21;
    let descuentos= costo/2;
    return ( precio * impuestos ) - descuentos;
  }
  /*Definimos función sin descuento más impuestos */
function SinDescuento (precio) {
    let impuestos = 1.21;
    return (precio * impuestos);
}

/*Procesamos la compra con o sin descuento e impuestos*/

if (lugar=="bariloche"){
    costo= bariloche * numeroDePasajeros;
    alert ("Hola " + nombre +" su costo de viaje es: $"+ costo);
        let codigoDedescuento= prompt("Ingrese un código de descuento");
        /*Calcular valor final de un producto seleccionado llamando a la función de descuentos. */
        if (codigoDedescuento==descuento){
        total=PrecioNeto(costo);
        alert ("su costo con descuento es: $ "+ total);
        alert("Su pago fue procesado.Muchas Gracias por elegir Norte Viajes");
        } else alert("Su costo sin descuento es :$"+ SinDescuento(costo));
               alert("Su pago fue procesado.Muchas Gracias por elegir Norte Viajes"); 
}else if (lugar=="cataratas"){
    costo = cataratas*numeroDePasajeros;
    alert ("Hola " + nombre +" su costo de viaje es: $"+ costo)
        let codigoDedescuento= prompt("Ingrese un código de descuento");
        /*Calcular valor final de un producto seleccionado en función de descuentos. */
        if (codigoDedescuento==descuento){
        total=PrecioNeto(costo);
        alert ("su costo con descuento es: $"+ total)
        alert("Su pago fue procesado.Muchas Gracias por elegir Norte Viajes");
        } else alert("Su costo sin descuento es :$"+ SinDescuento(costo)); 
        alert("Su pago fue procesado.Muchas Gracias por elegir Norte Viajes"); 
}else if (lugar== "catamarca"){
    costo= catamarca*numeroDePasajeros;
    alert ("Hola "+ nombre +" su costo de viaje es $:"+ costo)
        let codigoDedescuento= prompt("Ingrese un código de descuento");
        /*Calcular valor final de un producto seleccionado en función de descuentos. */
        if (codigoDedescuento==descuento){
        total=PrecioNeto(costo);
        alert ("su costo con descuento es: $"+ total)
        alert("Su pago fue procesado.Muchas Gracias por elegir Norte Viajes");
        }else alert("Su costo sin descuento es :$"+ SinDescuento(costo)); 
        alert("Su pago fue procesado.Muchas Gracias por elegir Norte Viajes"); 
}else alert("ningun destino es correcto");




