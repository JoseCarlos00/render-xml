/** Boton copiar Tablas */
document.querySelectorAll('.boton-copiar-info').forEach(item => {

  item.addEventListener('click', () => {
    const tablaSelected = item.getAttribute('tablaSelected');
    const tablaInfo = document.querySelector(`.${tablaSelected}  .tabla-info`);
    copyTablaInfo(tablaInfo);
  })
})

document.querySelectorAll('.boton-copiar-items').forEach(item => {

  item.addEventListener('click', () => {
    const tablaSelected = item.getAttribute('tablaSelected');
    const tablaItems = document.querySelector(`.${tablaSelected}  .tabla-items`);
    copyTablaItems(tablaItems);
  })
})


async function copyTablaInfo(tablaInfo) {
  try {
    const textoInfo = tablaInfo.innerText;
    await navigator.clipboard.writeText(textoInfo);

    document.querySelector('#alerta-copy').style.opacity = 1;
    setTimeout(() => { document.querySelector('#alerta-copy').style.opacity = 0; }, 4000)
  }
  catch (err) {
    console.error('Error al copiar al portapapeles:', err);
  }
}

async function copyTablaItems(tablaItems) {
  try {
    const textoItems = tablaItems.innerText;
    navigator.clipboard.writeText(textoItems);

    document.querySelector('#alerta-copy').style.opacity = 1;
    setTimeout(() => { document.querySelector('#alerta-copy').style.opacity = 0; }, 4000)
  }
  catch (err) {
    console.error('Error al copiar al portapapeles:', err);
  }
}


/** Boton Copiar hover */
/** TabláInfo */
document.querySelectorAll('.container-tabla-info').forEach(item => {
  item.addEventListener('mouseover', () => {
    const tablaSelected = item.children[ 0 ].getAttribute('tablaSelected');
    const btnCopy = document.querySelector(`section.${tablaSelected} .boton-copiar-info`);
    btnCopy.style.opacity = 1;
  })
})

document.querySelectorAll('.container-tabla-info').forEach(item => {
  item.addEventListener('mouseout', () => {
    const tablaSelected = item.children[ 0 ].getAttribute('tablaSelected');
    const btnCopy = document.querySelector(`section.${tablaSelected} .boton-copiar-info`);
    btnCopy.style.opacity = 0;
  })
})


/** Tabla Items */
document.querySelectorAll('.container-tabla-items').forEach(item => {
  item.addEventListener('mouseover', () => {
    const tablaSelected = item.children[ 1 ].getAttribute('tablaSelected');
    const btnCopy = document.querySelector(`section.${tablaSelected} div.container-tabla-items div.boton-copiar-items`);
    const btnCopyItemsModify = document.querySelector(`section.${tablaSelected} .container-boton-copiar-items-modify`);

    btnCopy.style.opacity = 1;
    btnCopyItemsModify.style.opacity = 1;
  })
})

document.querySelectorAll('.container-tabla-items').forEach(item => {
  item.addEventListener('mouseout', () => {
    const tablaSelected = item.children[ 1 ].getAttribute('tablaSelected');
    const btnCopy = document.querySelector(`section.${tablaSelected} div.container-tabla-items div.boton-copiar-items`);
    const btnCopyItemsModify = document.querySelector(`section.${tablaSelected} .container-boton-copiar-items-modify`);

    btnCopy.style.opacity = 0;
    btnCopyItemsModify.style.opacity = 0;
  })
})


/** Copiar Items */
// boton-copiar-items
document.querySelectorAll('.boton-copiar-items-modify').forEach(item => {
  item.addEventListener('click', async () => {
    try {
      const tablaSelected = item.getAttribute('tablaSelected');
      const tablaItems = document.querySelector(`.${tablaSelected}  .tabla-items`);
      const items = tablaItems.children[ 1 ].childNodes;
      const textoItems = [];

      items.forEach(item => {
        textoItems.push(`'${item.children[ 1 ].innerText}',`);
      })

      const textoACopiar = textoItems.join('\n')
      await navigator.clipboard.writeText(textoACopiar)
      // alert("Tabla items copiada al portapapeles");
    }
    catch (err) {
      console.error('Error al copiar al portapapeles:', err);
    }
  })
})
