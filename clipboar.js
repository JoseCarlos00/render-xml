 document.querySelectorAll('.boton-copiar-info').forEach(item => {

  item.addEventListener('click', e => {
    const tablaSelected = item.getAttribute('tablaSelected');
    const tablaInfo = document.querySelector(`.${tablaSelected} > .tabla-info`);
    copyTablaInfo(tablaInfo);
  })
})


document.querySelectorAll('.boton-copiar-items').forEach(item => {
  
  item.addEventListener('click', e => {
    const tablaSelected = item.getAttribute('tablaSelected');
    const tablaItems = document.querySelector(`.${tablaSelected} > .tabla-items`);
    copyTablaItems(tablaItems);
  })
})
 

function copyTablaInfo(tablaInfo) {
  var textoInfo = tablaInfo.innerText;
  navigator.clipboard.writeText(textoInfo);

  alert("Tabla info copiada al portapapeles");
}

function copyTablaItems(tablaItems) {
  var textoItems = tablaItems.innerText;
  navigator.clipboard.writeText(textoItems);

  alert("Tabla items copiada al portapapeles");
}