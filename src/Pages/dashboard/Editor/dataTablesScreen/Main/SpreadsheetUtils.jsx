function sortByColumns (records, columns) {
  const orderedRecords = [...records]
  orderedRecords.sort((a, b) => {
    for (const column of columns) {
      let comparison = 0

      if (column.orderBy === 'ASC') {
        comparison = compareColumns(
          a[column.index].value,
          b[column.index].value
        )
      } else if (column.orderBy === 'DESC') {
        comparison = compareColumns(
          b[column.index].value,
          a[column.index].value
        )
      }
      if (comparison !== 0) {
        return comparison
      }
    }
    return 0
  })
  return Array.from(orderedRecords, (rec) => JSON.parse(JSON.stringify(rec)))
}
function compareColumns (a, b) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b)
  }
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b
  }
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return a === b ? 0 : a ? -1 : 1
  }
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime()
  }
  return 0
}

function countColumnTitles (columns) {
  const titles = {}
  columns.forEach((column) => {
    Object.hasOwn(titles, column.type)
      ? titles[column.type]++
      : Object.defineProperty(titles, column.type, {
        value: 0,
        writable: true
      })
  })
  return titles
}

// Generate titles like A, B , C , AA, AB, etc
function * genColumnTitle (lastColumnTitle) {
  const chars = lastColumnTitle
    ? [String.fromCharCode(lastColumnTitle.charCodeAt(0) + 1)]
    : ['A']

  while (true) {
    yield chars.join('')

    let index = chars.length - 1
    while (index >= 0 && chars[index] === 'Z') {
      chars[index] = 'A'
      index--
    }

    if (index < 0) {
      chars.push('A')
    } else {
      chars[index] = String.fromCharCode(chars[index].charCodeAt(0) + 1)
    }
  }
}

function getTitles (columnQty = Infinity) {
  let i = 0
  let iterationCount = 0
  const title = []

  const titlesIterator = {
    next () {
      let result
      if (i < columnQty) {
        let lastChar = title.length - 1
        if (lastChar >= 0 && title[lastChar] === 'Z') {
          title[lastChar] = 'A'
          lastChar--
        }
        if (lastChar < 0) {
          title.push('A')
        } else {
          title[lastChar] = String.fromCharCode(
            title[lastChar].charCodeAt(0) + 1
          )
        }
        result = { value: title.join(''), done: false }
        i++
        iterationCount++
        return result
      }
      return { value: `FIN${iterationCount}`, done: true }
    }
  }
  return titlesIterator
}

export {
  sortByColumns,
  countColumnTitles,
  genColumnTitle,
  getTitles
}
