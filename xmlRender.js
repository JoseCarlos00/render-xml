export function xmlRender(xmlDocumnet, table) {
  let tablaSelected = table ?? 'pedido1';
  const sku = xmlDocumnet.querySelectorAll('SKU');

  //Obteniendo datos de las cabeceras
  const customer = xmlDocumnet.querySelector('Customer > Customer').innerHTML;
  const shipTo = xmlDocumnet.querySelector('ShipTo').innerHTML;
  const shipToName = xmlDocumnet.querySelector('ShipToAddress > Name').innerHTML;
  const shipmentId = xmlDocumnet.querySelector('ShipmentId').innerHTML;

  /*  Insertar datos al DOOM */

  //Parafos Info
  const tagCustomer = document.querySelector(`section.${tablaSelected} .customerId`);
  const tagShipTo = document.querySelector(`section.${tablaSelected} .shipToId`);
  const tagShitToName = document.querySelector(`section.${tablaSelected} .shipToNameId`);
  const tagShipmentId = document.querySelector(`section.${tablaSelected} .shipmentId`);

  //Agregando contenido a las filas
  tagCustomer.innerHTML = customer;
  tagShipTo.innerHTML = shipTo;
  tagShitToName.innerHTML = shipToName;
  tagShipmentId.innerHTML = shipmentId;

  //Agreganddo atributos a los elementos de Thead
  const elementosThead = document.querySelectorAll(
    `main > section.${tablaSelected} > table > thead > tr`
  );

  elementosThead.forEach((tr, index) => {
    if (index !== elementosThead.length - 1) {
      tr.firstElementChild.setAttribute('colspan', '3');
    }
  });

  //Tabla Body
  const tbody = document.querySelector(`body > main  section.${tablaSelected}  table  .tbody`);

  sku.forEach(item => {
    const tr = document.createElement('tr');
    const tdNumero = document.createElement('td');
    const tdItem = document.createElement('td');
    const tdQuantity = document.createElement('td');

    const tags = item.childNodes;

    tags.forEach((children, index) => {
      if (index === 3) {
        tdItem.innerHTML = children.innerHTML;
      }
      if (index === 5) {
        tdQuantity.innerHTML = children.innerHTML;
      }

      tr.appendChild(tdNumero);
      tr.appendChild(tdItem);
      tr.appendChild(tdQuantity);
    });
    tbody.appendChild(tr);
  });

  /**Enumerar fila */
  const tdbody = document.querySelector(
    `body > main > section.${tablaSelected} table  .tbody`
  ).childNodes;
  let iterador = 1;

  tdbody.forEach(tr => {
    tr.firstElementChild.innerHTML = iterador++;
  });
}
