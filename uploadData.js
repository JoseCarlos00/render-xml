import { xmlRender } from './xmlRender.js';
// Borrar

document.querySelectorAll('input[type=file]').forEach(item => {
  item.addEventListener('change', e => {
    const tablaSelected = item.getAttribute('tablaSelected');
    const fileInput = document.querySelector(`#${e.target.id}`);

    // Aquí se ejecutará cuando el usuario seleccione un archivo
    const selectedFile = e.target.files[0]; // Obtiene el primer archivo seleccionado

    // Poner el nombre del archivo y tooltip
    const nameArchivo = document.querySelector(`section.${tablaSelected} .nameArchivo`);
    nameArchivo.setAttribute('data-tooltip', selectedFile.name);

    if (selectedFile) {
      // Llama a una función para leer el contenido del archivo
      readFile(selectedFile, tablaSelected);
    }
  });
});

/** Arrastrar y Soltar Archivo */
//ondragover="allowDrop(event)" ondrop="handleFileDrop(event)
document.querySelectorAll('.upload').forEach(item => {
  item.addEventListener('dragover', allowDrop);
});
document.querySelectorAll('.upload').forEach(item => {
  item.addEventListener('drop', handleFileDrop);
});

function allowDrop(event) {
  event.preventDefault();
}

function handleFileDrop(event) {
  event.preventDefault();
  const tablaSelected = event.target.getAttribute('tablaSelected');
  const dataTransfer = event.dataTransfer;

  if (tablaSelected === 'pedido2') {
    document.querySelector('.pedido2').style.display = 'flex';
    document.querySelector('.pedido2').style.opacity = 1;
  }

  if (dataTransfer.files.length > 0) {
    const file = dataTransfer.files[0];
    const inputFile = document.getElementById('data');
    inputFile.files = dataTransfer.files;

    const nameArchivo = document.querySelector(`section.${tablaSelected} .nameArchivo`);
    nameArchivo.setAttribute('data-tooltip', file.name);

    readFile(file, tablaSelected);
  }
}
// END

function readFile(file, tablaSelected) {
  const reader = new FileReader();
  reader.onload = function (e) {
    // La función onload se ejecuta cuando se completa la lectura del archivo
    const fileContent = e.target.result;

    const parser = new DOMParser();
    const xmlDocumnet = parser.parseFromString(fileContent, 'text/xml');

    // remplazamos el contenido del tbody
    const table = document.querySelector(`main > section.${tablaSelected}  .table`);
    const tbody = document.querySelector(`main > section.${tablaSelected}  .table  .tbody`);
    const newTbody = document.createElement('tbody');
    newTbody.classList.add('tbody');

    table.replaceChild(newTbody, tbody);
    xmlRender(xmlDocumnet, tablaSelected);
  };

  reader.readAsText(file); // Lee el archivo como texto
}
