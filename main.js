// Usando un ciclo for para mostrar números del 1 al 5 como alerta
for (let i = 1; i <= 5; i++) {
    alert(i);
}
// Y ahora un ciclo con un prompt en el que se tenga que poner el nombre "Pepito" para salir del cuadro de interacción//
let texto = prompt ("nombre");
while (texto !== "Pepito") {
    texto += "agregado";
    alert("texto actualizado");
    texto = prompt("Pon el nombre 'Pepito' para abortar");
}