// Al cargar la página, se muestra un prompt que pide el nombre del usuario
let user_Name = prompt("Por favor, introduzca su nombre:");

   while (user_Name == null || !(user_Name.length >= 3)) {
      user_Name = prompt("Por favor, no sea un antipático virtual, ingrese un nombre, así puedo saber quien es usted!");
   }

// Si el usuario introduce un nombre, se guarda en la variable user_Name
// Si el usuario cancela el prompt, la variable user_Name es null

alert("Bienvenido " + user_Name + ' a "CarpiCoder te pone la nota"');

alert("¡A continuación podrás hacer el examen virtual de la comisión #53940 JAVASCRIPT versión CarpiCrazy!");

// Obtener el elemento div que contiene el contenido de la página
let contenido = document.getElementById("contenido");

// Cambiar el estilo del div para que se muestre
contenido.style.display = "block";


//Lo siguiente es MEME. 

// Asegurarse de que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
   document.getElementById('myLink').addEventListener('click', function(event) {
     event.preventDefault(); // Previene la acción predeterminada del enlace
     var newWindow = window.open('./pages/carpiexamen.html'); // Abre la nueva página en una nueva ventana o pestaña

     // Comprueba cada segundo si la ventana está cerrada
      var checkWindowClosed = setInterval(function() {
         if (newWindow.closed) {
         alert('Bueno, eso fue gracioso... 💥La Página Explotó💥');
         clearInterval(checkWindowClosed);
         }
      }, 1000);
   });
});