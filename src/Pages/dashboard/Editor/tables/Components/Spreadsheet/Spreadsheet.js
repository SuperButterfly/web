import React, { useEffect, useState } from 'react';
import { sortByColumns } from './SpreadsheetUtils';
import './temp.css';

const Spreadsheet = ({ lastState, sharedState, lastPosition }) => {
  const { storedData, storedColumns } = lastState;
  const { data, columns } = sharedState;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    data.splice(0, data.length);
    storedColumns.length &&
      storedColumns.forEach(column => {
        columns.push(column)
      })
    storedData.length &&
      storedData.forEach((record) => {
        // record.length === 0 && record.fill('');
        data.push(record)
      }
      );
  }

  const handleSort = () => {
    const orderedState = sortByColumns(data, columns);
    data.splice(0, data.length, ...orderedState);
  };
}

export default Spreadsheet;
