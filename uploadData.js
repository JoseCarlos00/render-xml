import { xmlRender } from "./xmlRender.js";

function inicio() {
  const fileInput = document.querySelector('#data');

  fileInput.addEventListener('change', function (e) {
    // Aquí se ejecutará cuando el usuario seleccione un archivo
    const selectedFile = e.target.files[0]; // Obtiene el primer archivo seleccionado

    // Poner el nombre del archivo
    document.querySelector('.archivo-info-name').innerHTML = selectedFile.name;

    if (selectedFile) {
      // Llama a una función para leer el contenido del archivo
      readFile(selectedFile);
    }
  });

  function readFile(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // La función onload se ejecuta cuando se completa la lectura del archivo
      const fileContent = e.target.result;
      
      const parser = new DOMParser();
      const xmlDocumnet = parser.parseFromString(fileContent, 'text/xml');

      // remplazamos el contenido del tbody
      const table = document.querySelector("body > main > table");
      const tbody = document.querySelector("body > main > table > tbody");
      const newTbody = document.createElement('tbody');

      table.replaceChild(newTbody, tbody);

      xmlRender(xmlDocumnet);
    };

    reader.readAsText(file); // Lee el archivo como texto
  }
}  

window.onload = inicio;