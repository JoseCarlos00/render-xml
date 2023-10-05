import { xmlRender } from "./xmlRender.js";

const loadDoc = () => {
  fetch('./public/data.xml')
    .then(response => response.text())
    .then(data => {
      // Aquí puedes trabajar con el contenido del archivo XML
      parseXML(data);
    })
    .catch(error => {
      console.error('Error al cargar el archivo XML:', error);
    });

  function parseXML(xmlString) {
    const parser = new DOMParser();
    const xmlDocumnet = parser.parseFromString(xmlString, 'text/xml');

    xmlRender(xmlDocumnet);
  }

}


window.onload = loadDoc();