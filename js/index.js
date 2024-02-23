// Al cargar la página, se muestra un prompt que pide el nombre del usuario
let user_Name = prompt("Por favor, introdusca su nombre:");

// Si el usuario introduce un nombre, se guarda en la variable user_Name
// Si el usuario cancela el prompt, la variable user_Name es null

alert("Bienvenido " + user_Name + ' a "CarpiCoder te pone la nota"');

alert("¡A continuación podrás hacer el examen virtual de la comisión #53940 JAVASCRIPT versión CarpiCrazy!");

// Obtener el elemento div que contiene el contenido de la página
let contenido = document.getElementById("contenido");

// Cambiar el estilo del div para que se muestre
contenido.style.display = "block";