import { v4 as uuidv4 } from 'uuid'
class Spreadsheet {
  constructor(title = 'Nueva hoja', data, columns) {
    this.title = title
    this.data = data
    this.genTitle = this.genColumnTitle()
    this.columns = columns
    this.defaultValues = {
      text: '',
      number: 0,
      checkbox: false,
      date: new Date().toISOString().substring(0, 10),
      priority: 'low',
      state: 'unstarted',
      dropdownMenu: []
    }
    this.defaultCell = {
      value: '',
      type: 'text',
      format: {}
    }
    this.defaultColumn = {
      orderBy: 'ASC',
      type: 'text',
      visible: true,
      title: undefined
    }
  }

  static getInstance(title, data, columns) {
    console.log('GET INSTANCE')
    if (!Spreadsheet.instance) {
      console.log('NOT EXIST!')
      Spreadsheet.instance = new Spreadsheet((title = undefined), data, columns)
      Spreadsheet.instance.inicializar()
    }
    console.log('RETURN')
    return Spreadsheet.instance
  }

  static resetInstance() {
    console.log('CLEAN')
    Spreadsheet.instance = null
  }

  * genColumnTitle(lastColumnTitle) {
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

  inicializar(columnsQty = 10, rowsQty = 10) {
    console.log('INIT CLEAN SHEET')
    this.columns.splice(0, this.columns.length)
    this.data.splice(0, this.data.length)
    const newColumns = []
    for (let i = 0; i < columnsQty; i++) {
      const title = this.genTitle.next().value
      const newColumn = {
        ...this.defaultColumn,
        title
      }
      newColumns.push(newColumn)
    }
    this.columns.push(...newColumns)
    const newCleanRow = Array(this.columns.length).fill(this.defaultCell)
    const newSheet = Array(rowsQty).fill(newCleanRow)
    this.data.push(...newSheet)
  }

  addRow() {
    const newRow = []
    this.columns.forEach((el, i) => {
      newRow.push({
        ...this.defaultCell,
        type: el.type,
        value: this.defaultValues[el.type]
      })
    })
    this.data.push(newRow)
  }

  addColumn(column = {}) {
    const title = this.genTitle.next().value
    const newColumn = {
      ...this.defaultColumn,
      ...column,
      title
    }
    this.columns.push(newColumn)
    this.data.forEach((row) =>
      row.push({
        ...this.defaultCell,
        type: newColumn.type,
        value: this.defaultValues[newColumn.type]
      })
    )
  }

  get titlesValue() {
    return this.titles
  }

  moveRow(sourceIndex, destinationIndex) {
    const [removedRow] = JSON.parse(
      JSON.stringify(this.data.splice(sourceIndex, 1))
    )
    this.data.splice(destinationIndex, 0, removedRow)
  }

  moveColumn(sourceIndex, destinationIndex) {
    this.data.forEach((row) => {
      const [removedCell] = JSON.parse(
        JSON.stringify(row.splice(sourceIndex, 1))
      )
      row.splice(destinationIndex, 0, removedCell)
    })
  }

  moveColumnWithTitles() {}

  deleteRow(rowIndex) {
    this.data.splice(rowIndex - 1, 1)
  }

  deleteColumn(columnIndex) {
    this.data.forEach((row) => row.splice(columnIndex, 1))
    this.columns.splice(columnIndex, 1)
  }

  getColumns() {
    return this.columns
  }

  getData() {
    return this.data
  }
}

export default Spreadsheet
