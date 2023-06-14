const cheerio = require('cheerio');
const { readFile } = require('fs/promises')

function extraerEstilos(estilos) {
  let aux1
  if (estilos.includes(';')) {
    let aux = estilos.split(';')
    if (aux.includes('')) {
      aux.splice(aux.indexOf(''))
    }
    aux1 = aux.map(item => item.split(':'))
  }
  else {
    const aux = estilos.replaceAll('{', '').replaceAll('}', '').replaceAll('"', '')
    aux1 = aux.split(',').map(item => item.split(':'))
  }
  const aux2 = {}
  aux1.forEach(item => aux2[item[0]] = item[1])
  return aux2
};

const readFrom = async (from, file) => {
  try {
    let html = '';
    if (from === 'dir') {
      const data = await readFile(file)
      html = data.toString()
    }
    else html = file
    
    const $ = cheerio.load(html)

    const padre = $('body').html().trim()

    function extraerInformacion(elemento) {
      const tag = $(elemento).prop('tagName').toLowerCase()
      
    const allAttributes = $(elemento).attr()
    const keys = Object.keys(allAttributes)
    let style = {}
    if (keys.includes('style')) {
      style = extraerEstilos(allAttributes.style)
      keys.splice(keys.indexOf('style'))
    }
    let attributes = {}
    for (const key of keys) {
      if (key === 'width' || key === 'height') {
        style[key] = allAttributes[key]
      }
      else {
        attributes[key] = allAttributes[key]
      }
    }
    
    let innerHTML = ''
    if($(elemento).text() === $(elemento).html()){
      innerHTML = $(elemento).text()
    }

    let properties = {
      style,
      innerHTML
    }

    const hijos = [];
    $(elemento).children().each((i, e) => {
      hijos.push(extraerInformacion(e));
    });

    return {
      tag,
      properties,
      attributes,
      children: hijos
    };
    }
    
    return extraerInformacion(padre)
  }
  catch (error) {
    return error
  }
}

// read('index.html')
module.exports = { readFrom };
