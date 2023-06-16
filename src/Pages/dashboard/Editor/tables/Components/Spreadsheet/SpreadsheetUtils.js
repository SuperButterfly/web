function sortByColumns(records, columns) {
    const orderedRecords = [...records]
    orderedRecords.sort((a, b) => {
        for (let column of columns) {
            let comparison = 0;

            if (column.orderBy === 'ASC') {
                comparison = compareColumns(a[column.index].value, b[column.index].value);
              } else if (column.orderBy === 'DESC') {
                comparison = compareColumns(b[column.index].value, a[column.index].value);
              }
            if (comparison !== 0) {
                return comparison;
            }
        }
        return 0;
    });
    return Array.from(orderedRecords, (rec) => JSON.parse(JSON.stringify(rec)));
}
function compareColumns(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
    if (typeof a === 'boolean' && typeof b === 'boolean') {
        return a === b ? 0 : (a ? -1 : 1);
    }
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() - b.getTime();
    }
    return 0;
}

export { sortByColumns }