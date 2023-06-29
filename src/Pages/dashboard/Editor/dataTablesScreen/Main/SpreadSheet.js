class Spreadsheet {
    constructor(
        title = 'Nueva hoja',
        data,
        columns
    ) {
        this.title = title;
        this.titles = this.genColumnTitle();
        this.data = data;
        this.columns = columns;
        this.defaultCell =
        {
            value: '',
            type: 'text',
            format: {},
        };
        this.defaultColumn =
        {
            orderBy: 'ASC',
            type: 'text',
            visible: true,
            title: undefined
        };
    };
    // unstarted for state, low for priority, aaaa-mm-dd for date
    *genColumnTitle(lastColumnTitle) {
        let chars = lastColumnTitle
            ? [String.fromCharCode(lastColumnTitle.charCodeAt(0) + 1)]
            : ['A'];

        while (true) {
            yield chars.join('');

            let index = chars.length - 1;
            while (index >= 0 && chars[index] === 'Z') {
                chars[index] = 'A';
                index--;
            }

            if (index < 0) {
                chars.push('A');
            } else {
                chars[index] = String.fromCharCode(chars[index].charCodeAt(0) + 1);
            }
        }
    }

    inicializar() {
        // const genTitle = this.genColumnTitle();
        const newColumns = [];
        for (let i = 0; i < 10; i++) {
            const title = this.titles.next().value;
            const newColumn = {
                ...this.defaultColumn,
                title
            };
            newColumns.push(newColumn);
        }
        this.columns.push(...newColumns);
        const newCleanRow = Array(this.columns.length).fill(this.defaultCell);
        const newSheet = Array(10).fill(newCleanRow)
        this.data.push(...newSheet);
    }

    addRow() {
        const newRow = Array(this.columns.length).fill(this.defaultCell);
        this.data.push(newRow);
    }

    addColumn(column = {}) {
        const newColumn = {
            ...this.defaultColumn,
            ...column,
            title: column.title || this.genColumnTitle(this.columns[this.columns.length - 1].title).next().value,
        };
        this.data.forEach((row) => row.push(''));
        this.columns.push(newColumn);
    }

    moveRow(sourceIndex, destinationIndex) {
        const [removedRow] = this.data.splice(sourceIndex, 1);
        this.data.splice(destinationIndex, 0, removedRow);
    }

    moveColumn(sourceIndex, destinationIndex) {
        this.data.forEach((row) => {
            const [removedCell] = row.splice(sourceIndex, 1);
            row.splice(destinationIndex, 0, removedCell);
        });
    }

    deleteRow(rowIndex) {
        this.data.splice(rowIndex, 1);
    }

    deleteColumn(columnIndex) {
        this.data.forEach((row) => {
            row.splice(columnIndex, 1);
        });
        this.columns--;
    }
}

export default Spreadsheet;
