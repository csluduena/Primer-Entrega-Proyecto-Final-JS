let boton = document.getElementsByClassName("centerStart")[0];

// Crear la función que se ejecuta al hacer clic en el botón
function jugar() {
   let puntaje = 0;
   // Creamos un objeto con las 10 preguntas y las respuestas
   let preguntas = {
      pregunta1: {
         texto: "Pregunta 1: ¿Messi es mejor que CR7?",
         respuesta: "si"
      },
      pregunta2: {
         texto: "Pregunta 2: ¿Hamburgueza con pepinos?",
         respuesta: "no"
         },
      pregunta3: {
         texto: "Pregunta 3: ¿Es realmente la vida un dilema?",
         respuesta: "si"
      },
      pregunta4: {
         texto: "Pregunta 4: Responde por si o por no; ¿Sabías que 'Carlos' en realidad se llama 'Carlos Sebastian' y odia que le digan 'Carlos' en la vida real?",
         respuesta: "no"
      },
      pregunta5: {
         texto: "Pregunta 5: ¿Si la inflamación se va, el dolor vuelve?",
         respuesta: "no"
      },
      pregunta6: {
         texto: "Pregunta 6: ¿Es acaso Carpi el mejor Profe de CoderHouse?",
         respuesta: "si"
      },
      pregunta7: {
         texto: "Pregunta 7: ¿Es acaso '01110011 01101001' un 'si' en código binario?",
         respuesta: "si"
      },
      pregunta8: {
         texto: "Pregunta 8: ¿Debería 'CARLOS' (Cara enojada) Aprobar el curso?",
         respuesta: "si"
      },
      pregunta9: {
         texto: "Pregunta 9: ¿Es verdad que no hay que llorar porque la vida es un carnaval?",
         respuesta: "si"
      },
      pregunta10: {
         texto: "Pregunta 10: ¡Snacks! ¿Es mejor lo dulce que lo salado?",
         respuesta: "no"
      },
   };

   //Usamos un for para recorrer las propiedades del objeto
   for (let i = 1; i <= 10; i++) {
         let respuesta = prompt(preguntas["pregunta" + i].texto + " - Tipea: SI o NO");
         if (respuesta.toLowerCase() == preguntas["pregunta" + i].respuesta) {
      // Si la respuesta es correcta, sumar 10 puntos al puntaje del usuario
         puntaje += 10;
      // Mostrar un alert que diga "Correcto, sumas 10 puntos"
         alert("Correcto, sumas 10 puntos");
      } else {
      // Si la respuesta es incorrecta, no sumar nada
      // Mostrar un alert que diga "Incorrecto, no sumas puntos"
         alert("Incorrecto, no sumas puntos");
      }
   }

  // Al final del bucle, muestro un prompt con el puntaje final del usuario
  // y un mensaje que diga si aprobó o no el CarpiCurso
   if (puntaje >= 70) {
      alert("Felicidades, aprobaste el CarpiCurso con " + puntaje + " puntos");
   } else {
      alert("Tu puntaje es " + puntaje + ". Estás totalmente fuera de onda");
   }
   // Mostramos un cuadro de diálogo al usuario
   var userConfirmed = confirm('¿Desea usted autodestruir esta cosa y olvidar totalmente su existencia?');

   if (userConfirmed) {
      // Si acepta ocurre la magia.
      window.close();
   }
}

// Asignar la función al evento click del botón
boton.addEventListener("click", jugar);