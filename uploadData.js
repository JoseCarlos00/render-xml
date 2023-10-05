import { xmlRender } from "./xmlRender.js";

document.querySelectorAll("input[type=file]").forEach(item => {

  item.addEventListener('change', (e) => {
    // console.log(e);
    const tablaSelected = item.getAttribute('tablaSelected');
    const fileInput = document.querySelector(`#${e.target.id}`)

    // Aquí se ejecutará cuando el usuario seleccione un archivo
    const selectedFile = e.target.files[ 0 ]; // Obtiene el primer archivo seleccionado

    // Poner el nombre del archivo
    document.querySelector('.archivo-info-name').innerHTML = selectedFile.name;

    if (selectedFile) {
      // Llama a una función para leer el contenido del archivo
      readFile(selectedFile, tablaSelected);
    }
  })
})


function readFile(file, tablaSelected) {
  const reader = new FileReader();
  reader.onload = function (e) {
    // La función onload se ejecuta cuando se completa la lectura del archivo
    const fileContent = e.target.result;

    const parser = new DOMParser();
    const xmlDocumnet = parser.parseFromString(fileContent, 'text/xml');

    // remplazamos el contenido del tbody
    const table = document.querySelector(`main > section.${tablaSelected} > table`);
    const tbody = document.querySelector(`main > section.${tablaSelected} > table > tbody`);
    const newTbody = document.createElement('tbody');

    table.replaceChild(newTbody, tbody);

    xmlRender(xmlDocumnet, tablaSelected);
  };

  reader.readAsText(file); // Lee el archivo como texto
}
