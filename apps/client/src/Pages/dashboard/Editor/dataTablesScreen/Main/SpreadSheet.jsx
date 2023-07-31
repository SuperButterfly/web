import { v4 as uuidv4 } from 'uuid'
class Spreadsheet {
  constructor(
    metadata = { title: 'hoja1', description: 'my new spreadsheet' },
    data,
    columns,
    rows,
    awareness = { selectedRow: null, selectedColumn: null, selectedCell: [null, null] }
  ) {
    this.title = metadata.title
    this.description = metadata.description
    this._selectedColumn = awareness.selectedColumn
    this._selectedRow = awareness.selectedRow
    this._selectedCell = awareness.selectedCell
    this.data = data
    this.genTitle = this.genColumnTitle()
    this.columns = columns
    this.rows = rows
    this.defaultValues = {
      text: 'Default',
      number: 0,
      checkbox: false,
      date: new Date().toISOString().substring(0, 10),
      priority: 'low',
      state: 'unstarted',
      dropdownMenu: [],
      people: []
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
    this.defaultRow = {
      key: undefined,
      height: 30
    }
  }

  static getInstance(metadata, data, columns, rows) {
    if (!Spreadsheet.instance) {
      Spreadsheet.instance = new Spreadsheet(metadata, data, columns, rows)
      !data.length && Spreadsheet.instance.inicializar()
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

  inicializar(columnsQty = 26, rowsQty = 26) {
    console.log('INIT CLEAN SHEET')
    this.columns.splice(0, this.columns.length)
    this.rows.splice(0, this.rows.length)
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
    const newRows = Array(rowsQty).fill(this.defaultRow)
    this.columns.push(...newColumns)
    this.rows.push(...newRows)
    const newCleanRow = Array(this.columns.length).fill(this.defaultCell)
    // const newCleanRow = Array.from({ length: this.columns.length }, (_, i) => ({ ...this.defaultCell, id: i }))
    const newSheet = Array(rowsQty).fill(newCleanRow)
    // const newSheet = Array.from({ length: rowsQty }, (_, i) => ({ id: i, ...newCleanRow }))
    this.data.push(...newSheet)
  }

  get selectedColumn() {
    return this._selectedColumn
  }

  set selectedColumn(column) {
    this._selectedRow = null
    this._selectedCell = [null, null]
    this._selectedColumn = column
  }

  get selectedRow() {
    return this._selectedRow
  }

  set selectedRow(row) {
    this._selectedColumn = null
    this._selectedCell = [null, null]
    this._selectedRow = row
  }

  get selectedCell() {
    return this._selectedCell
  }

  set selectedCell(cell) {
    this._selectedRow = null
    this._selectedColumn = null
    this._selectedCell = cell
  }

  hasSelection() {
    return (
      this._selectedCell !== null ||
      this._selectedColumn !== null ||
      this._selectedRow !== null
    )
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
  
  addColumn(position, column = {}) {
    const title = this.genTitle.next().value
    const newColumn = {
      ...this.defaultColumn,
      ...column,
      title
    }
    if (position === this.columns.length) {
      this.columns.push(newColumn)
      this.data.forEach((row) =>
        row.push({
          ...this.defaultCell,
          type: newColumn.type,
          value: this.defaultValues[newColumn.type]
        })
      )
    }
    else {
      this.columns.splice(position, 0, newColumn)
      this.data.forEach((row) =>
        row.splice(position, 0, {
          ...this.defaultCell,
          type: newColumn.type,
          value: this.defaultValues[newColumn.type]
        })
      )
    }
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

  moveColumnWithTitles() { }

  deleteRow(rowIndex) {
    this.data.splice(rowIndex - 1, 1)
    this._selectedRow = null
  }

  deleteColumn(columnIndex) {
    this.data.forEach((row) => row.splice(columnIndex, 1))
    this.columns.splice(columnIndex, 1)
    this._selectedColumn = null
  }

  getColumns() {
    return this.columns
  }

  getRows() {
    return this.rows
  }

  getData() {
    return this.data
  }
}

export default Spreadsheet