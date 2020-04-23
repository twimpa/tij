/*
 *  tij: Tiny ImageJ API in JavaScript
 *  Copyright (C) 2017-2020  Jean-Christophe Taveau.
 *
 *  This file is part of tij
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with tij.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */

'use strict';

/**
 * public class ResultsTable
 * extends java.lang.Object
 * implements java.lang.Cloneable
 *
 * This is a table for storing measurement results and strings as columns of values. 
 * Call the static get ResultsTable.getResultsTable() method to get a reference to the 
 * ResultsTable used by the <i>Analyze/Measure</i> command.
*/

import {Table} from '../core/Table';


export class ResultsTable {
  /**
   * Constructs a ResultsTable with 'nRows' rows.
   * Constructs an empty ResultsTable with the counter=0, no columns
   * and the precision set to 3 or the "Decimal places" value in
   * Analyze/Set Measurements if that value is higher than 3.
   * @constructor
   * 
   * 
   * @author Created by ijdoc2js
   */
  constructor (nRows = 0) {
    this.nRows = nRows;
    this.nColumns = 0;
    this.headings = [];
    this.labels = [];
    this.title = 'undefined';
    
    // ALl we need to display the ResultsTable in HTML
    this.table = new Table(this);
    
    // Add data2d for data storage
    this.dataset = []; 
    
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get COLUMN_NOT_FOUND () {
    return -1;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get COLUMN_IN_USE() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get TABLE_FULL() {
    return 0;
  };

  /**
   * 
   * @const {short}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get AUTO_FORMAT() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get AREA() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MEAN() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get STD_DEV() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MODE() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MIN() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MAX() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get X_CENTROID() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get Y_CENTROID() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get X_CENTER_OF_MASS() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get Y_CENTER_OF_MASS() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get PERIMETER() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get ROI_X() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get ROI_Y() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get ROI_WIDTH() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get ROI_HEIGHT() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MAJOR() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MINOR() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get ANGLE() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get CIRCULARITY() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get FERET() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get INTEGRATED_DENSITY() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MEDIAN() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get SKEWNESS() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get KURTOSIS() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get AREA_FRACTION() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get RAW_INTEGRATED_DENSITY() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get CHANNEL() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get SLICE() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get FRAME() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get FERET_X() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get FERET_Y() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get FERET_ANGLE() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MIN_FERET() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get ASPECT_RATIO() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get ROUNDNESS() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get SOLIDITY() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MIN_THRESHOLD() {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get MAX_THRESHOLD () {
    return 0;
  };

  /**
   * 
   * @const {int}
   * @default
   * 
   * @author Created by ijdoc2js
   */
  static get LAST_HEADING() {
    return 0;
  };

  /**
   * Returns the ResultsTable used by the Measure command. This
   * table must be displayed in the "Results" window.
   * 
   * @return ResultsTable
   * 
   * @author Created by ijdoc2js
   */
  static getResultsTable() {
    throw "Not Implemented - static ResultsTable.getResultsTable(..)";
  };

  /**
   * Returns the "Results" TextWindow.
   * 
   * @return TextWindow
   * 
   * @author Jean-Christophe Taveau
   */
  getResultsWindow() {
    return this.table;
  };

  /**
   * Increments the measurement counter by one.
   * 
   * 
   * @author Created by Jean-Christophe Taveau
   */
  incrementCounter() {
    // Add a new row and fill all the columns by 0 (zero)
    this.labels.push(this.getCounter() + 1);
    for (let i = 0; i < this.headings.length; i++) {
      this.dataset[i].push(0);
    }
    this.nRows++;
  };

  /**
   * Returns the current value of the measurement counter.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getCounter() {
    return this.nRows;
  };

  /**
   * Returns the size of this ResultsTable.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  size() {
    return this.nRows;
  };


  /**
   * Adds a string or a numeric value to the end of the given column. If the column
   * does not exist, it is created.
   * 
   * @param {String | Number} column - defined as a heading (String) or as the column number
   * @param {String | Number} value - may be a String or a number
   * 
   * @author Created by ijdoc2js
   */
  addValue(column_or_heading, value) {
  
    // Private
    const addColumn = (head) => {
      this.nColumns++;
      // Add a new empty column...
      this.dataset.push(new Array(this.nRows).fill(0));
      this.labels = Array.from({length: this.nRows}, (_,i) => [i,i+1]);
      this.headings.push(head);
    };
    
    // M A I N
    
    // Step #1 - Get column index
    let col_index = (typeof(column_or_heading) === 'number') ? column_or_heading : this.getColumnIndex(column_or_heading);
    let col_heading = (typeof(column_or_heading) === 'string') ? column_or_heading : `C${column_or_heading + 1}`;

    // Step #2 - Check if column already exists or must be created
    if (this.columnExists(col_index) === false) { 
      addColumn(col_heading);
      col_index = this.headings.length - 1;
    }

    // Step #3 - Set value to the given column index
    this.dataset[col_index][this.getCounter() - 1] = value;
  };

  /**
   * Adds a label to the beginning of the current row.
   * 
   * @param {java.lang.String} label - 
   * 
   * @author Created by ijdoc2js
   */
  addLabel(label) {
    throw "Not Implemented - ResultsTable.addLabel(..)";
  };

  /**
   * Adds a label to the beginning of the specified row, 
   * or updates an existing label, where 0show()
   * to update the window displaying the table.
   * 
   * @param {java.lang.String} label - 
   * @param {int} row - 
   * 
   * @author Created by ijdoc2js
   */
  setLabel(label, row) {
    throw "Not Implemented - ResultsTable.setLabel(..)";
  };

  /**
   * Set the row label column to null if the column label is "Label".
   * 
   * 
   * @author Created by ijdoc2js
   */
  disableRowLabels() {
    throw "Not Implemented - ResultsTable.disableRowLabels(..)";
  };

  /**
   * Returns a copy of the given column as a float array,
 * or null if the column is empty.
   * 
   * @param {int} column - 
   * @return float[]
   * 
   * @author Created by ijdoc2js
   */
  getColumn(column) {
    if ((column <0) || (column >= this.nColumns))
        {
            throw ("Index out of range");
        }
        else{       
            return this.dataset[column];
        }
  };

  /**
   * Returns a copy of the given column as a double array,
   * or null if the column is empty.
   * 
   * @param {int} column - 
   * @return double[]
   * 
   * @author Created by ijdoc2js
   */
  getColumnAsDoubles(column) {
    throw "Not Implemented - ResultsTable.getColumnAsDoubles(..)";
  };

  /**
   * Returns the contents of this ResultsTable as a FloatProcessor.
   * 
   * @return ImageProcessor
   * 
   * @author Created by ijdoc2js
   */
  getTableAsImage() {
    throw "Not Implemented - ResultsTable.getTableAsImage(..)";
  };

  /**
   * Creates a ResultsTable from an image or image selection.
   * 
   * @param {ImageProcessor} ip - 
   * @return ResultsTable
   * 
   * @author Created by ijdoc2js
   */
  createTableFromImage(ip) {
    throw "Not Implemented - ResultsTable.createTableFromImage(..)";
  };



  /**
   * Returns the index of the first column with the given heading.
   * heading. If not found, returns COLUMN_NOT_FOUND.
   * 
   * @param {jString} heading - 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getColumnIndex(heading) {
  /*
    let index;
    for (let i=0; i<this.headings.length; i++){
      if(this.headings[i] === heading) {
        index = i;
      }
    }
    */
    return this.headings.indexOf(heading);
  };

  /**
   * Sets the heading of the the first available column and
   * returns that column's index. Returns COLUMN_IN_USE
   * if this is a duplicate heading.
   * 
   * @param {java.lang.String} heading - 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getFreeColumn(heading) {
    throw "Not Implemented - ResultsTable.getFreeColumn(..)";
  };

  /**
   * Returns the value of the given column and row, where
   * column must be less than or equal the value returned by
   * getLastColumn() and row must be greater than or equal
   * zero and less than the value returned by size().
   * 
   * @param {int} column - 
   * @param {int} row - 
   * @return double
   * 
   * @author Created by ijdoc2js
   */
  getValueAsDouble(column, row) {
    return this.getValue(column,row);
  };

  /**
   * Returns the value of the specified column and row, where
   * column is the column heading and row is a number greater
   * than or equal zero and less than value returned by size(). 
   * Throws an IllegalArgumentException if this ResultsTable
   * does not have a column with the specified heading.
   * 
   * @param {number or String} column - column index or column headings
   * @param {int} row - 
   * @return double
   * 
   * @author ???
   * @author Jean-Christophe Taveau
   */
  getValue(column_or_heading, row) {

    // Step #1 - Get column index
    let col_index = (typeof(column_or_heading) === 'number') ? column_or_heading : this.getColumnIndex(column_or_heading);

    if (col_index === ResultsTable.COLUMN_NOT_FOUND || row < 0 || row > this.size()) {
      throw new IllegalArgumentException();
    }
    
    return this.dataset[col_index][row];
  };

  /**
   * Returns 'true' if the specified column exists and is not emptly.
   * 
   * @param {number or string} column - Column index or column Headings
   * @return boolean
   * 
   * @author ??
   * @author Jean-Christophe Taveau
   */
  columnExists(column) {
    let col_index = (typeof(column) === 'number') ? column : this.getColumnIndex(column);
    return (this.dataset[col_index]) ? true : false;
  };
  
/*
  columnExists(column) {
    //string
    if(typeof(column) === 'string'){
      for (let i=0; i<this.headings.length; i++){
          if(this.headings[i] === column){
              return true;
          }
      }
      return false;
  }
  
  //int
  if(typeof(column) === 'number'){
      if(typeof(this.dataset[column]) != 'undefined'){
          return true;
      }
      return false;
  }
  };
*/


  /**
   * Returns the string value of the given column and row,
 * where row must be greater than or equal zero
 * and less than the value returned by size().
   * 
   * @param {java.lang.String} column - 
   * @param {int} row - 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getStringValue(column, row) {
    throw "Not Implemented - ResultsTable.getStringValue(..)";
  };

  /**
   * Returns the string value of the given column and row, where
 * column must be less than or equal the value returned by
 * getLastColumn() and row must be greater than or equal
 * zero and less than the value returned by size().
   * 
   * @param {int} column - 
   * @param {int} row - 
   * @return java.lang.String
   * 
   * @author Created by Caroline Meguerditchian
   */
  getStringValue(column, row) {
    //string, int
    if(typeof(column) === 'string'){
      let index = this.getColumnIndex(column);
      let value = this.dataset[index][row].toString();
      return value;
  }

  //int, int
  if(typeof(column) === 'number'){
      let value = this.dataset[column][row].toString();
      return value;
  }
  };

  /**
   * Returns the label of the specified row. Returns null if the row does not have a label.
   * 
   * @param {int} row - 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getLabel(row) {
    throw "Not Implemented - ResultsTable.getLabel(..)";
  };

  /**
   * Sets the value of the given column and row, where
   * where 0&lt;=row&lt;size(). If the specified column does 
   * not exist, it is created. When adding columns, 
   * <code>show()</code> must be called to update the 
   * window that displays the table.
   * 
   * @param {java.lang.String} column - 
   * @param {int} row - 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  setValue(column, row, value) {
    throw "Not Implemented - ResultsTable.setValue(..)";
  };

  /**
   * Sets the value of the given column and row, where
 * where 0&lt;=column&lt;=(lastRow+1 and 0&lt;=row&lt;=size().
   * 
   * @param {int} column - 
   * @param {int} row - 
   * @param {double} value - 
   * 
   * @author Created by ijdoc2js
   */
  setValue(column, row, value) {
    throw "Not Implemented - ResultsTable.setValue(..)";
  };

  /**
   * Sets the string value of the given column and row, where
   * where 0&lt;=row&lt;size(). If the specified column does 
   * not exist, it is created. When adding columns, 
   * <code>show()</code> must be called to update the 
   * window that displays the table.
   * 
   * @param {java.lang.String} column - 
   * @param {int} row - 
   * @param {java.lang.String} value - 
   * 
   * @author Created by ijdoc2js
   */
  setValue(column, row, value) {
    throw "Not Implemented - ResultsTable.setValue(..)";
  };

  /**
   * Sets the string value of the given column and row, where
   * where 0&lt;=column&lt;=(lastRow+1 and 0&lt;=row&lt;=size().
   * 
   * @param {int} column - 
   * @param {int} row - 
   * @param {java.lang.String} value - 
   * 
   * @author Created by ijdoc2js
   */
  setValue(column, row, value) {
    throw "Not Implemented - ResultsTable.setValue(..)";
  };

  /**
   * Returns a tab or comma delimited string containing the column headings.
   * 
   * @return java.lang.String
   * 
   * @author Created by Caroline Meguerditchian
   */
  getColumnHeadings() {
    let heading_str = "";
      for(let i=0; i<this.headings.length; i++){
        if(i < this.headings.length - 1){
          heading_str += this.headings[i] + "	"; 
        }
        else{
          heading_str += this.headings[i];
        }
      }
    return heading_str;
  };

  /**
   * Returns the column headings as an array of Strings.
   * 
   * @return java.lang.String[]
   * 
   * @author Jean-Christophe Taveau
   */
  getHeadings() {
    return this.headings;
  };

  /**
   * Returns the heading of the specified column or null if the column is empty.
   * 
   * @param {int} column - 
   * @return java.lang.String
   * 
   * @author Created by Caroline Meguerditchian
   */
  getColumnHeading(column) {
    if(column > this.nColumns - 1){
      return null;
  }
  let heading = this.headings[column];
  return heading;
  };

  /**
   * Returns a tab or comma delimited string representing the
   * given row, where 0
   * 
   * @param {int} row - 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getRowAsString(row) {
    throw "Not Implemented - ResultsTable.getRowAsString(..)";
  };

  /**
   * Implements the Table.getColumn() macro function.
   * 
   * @param {java.lang.String} column - 
   * @return Variable[]
   * 
   * @author Created by ijdoc2js
   */
  getColumnAsVariables(column) {
    throw "Not Implemented - ResultsTable.getColumnAsVariables(..)";
  };

  /**
   * Implements the Table.setColumn() macro function.
   * 
   * @param {java.lang.String} column - 
   * @param {Variable[]} array - 
   * 
   * @author Created by ijdoc2js
   */
  setColumn(column, array) {
    throw "Not Implemented - ResultsTable.setColumn(..)";
  };

  /**
   * Sets the headings used by the Measure command ("Area", "Mean", etc.).
   * 
   * 
   * @author Created by ijdoc2js
   */
  setDefaultHeadings() {
    throw "Not Implemented - ResultsTable.setDefaultHeadings(..)";
  };

  /**
   * Sets the decimal places (digits to the right of decimal point)
 * that are used when this table is displayed.
   * 
   * @param {int} precision - 
   * 
   * @author Created by ijdoc2js
   */
  setPrecision(precision) {
    throw "Not Implemented - ResultsTable.setPrecision(..)";
  };

  /**
   * 
   * @param {int} column - 
   * @param {int} digits - 
   * 
   * @author Created by ijdoc2js
   */
  setDecimalPlaces(column, digits) {
    throw "Not Implemented - ResultsTable.setDecimalPlaces(..)";
  };

  /**
   * Set 'true' to initially fill data arrays with NaNs instead of zeros.
   * 
   * @param {boolean} NaNEmptyCells - 
   * 
   * @author Created by ijdoc2js
   */
  setNaNEmptyCells(NaNEmptyCells) {
    throw "Not Implemented - ResultsTable.setNaNEmptyCells(..)";
  };

  /**
   * 
   * @param {boolean} showNumbers - 
   * 
   * @author Created by ijdoc2js
   */
  showRowNumbers(showNumbers) {
    throw "Not Implemented - ResultsTable.showRowNumbers(..)";
  };

  /**
   * 
   * @param {boolean} showIndexes - 
   * 
   * @author Created by ijdoc2js
   */
  showRowIndexes(showIndexes) {
    throw "Not Implemented - ResultsTable.showRowIndexes(..)";
  };

  /**
   * This is a version of IJ.d2s() that uses scientific notation for
   * small numbes that would otherwise display as zero.
   * 
   * @param {double} n - 
   * @param {int} decimalPlaces - 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  static d2s(n, decimalPlaces) {
    throw "Not Implemented - ResultsTable.d2s(..)";
  };

  /**
   * Deletes the specified row.
   * 
   * @param {int} rowIndex - 
   * 
   * @author Created by Caroline Meguerditchian
   */
  deleteRow(rowIndex) {
    for(let i=0; i<this.dataset.length; i++){
      this.dataset[i].splice(rowIndex,1);
    }
    this.nRows--;
  };

  /**
   * Deletes the specified rows.
   * 
   * @param {int} index1 - 
   * @param {int} index2 - 
   * 
   * @author Created by Caroline Meguerditchian
   */
  deleteRows(index1, index2) {
    for(let i=0; i<index2-index1+1; i++){
      this.deleteRow(index1);
    } 
  };

  /**
   * Deletes the specified column.
   * 
   * @param {java.lang.String} column - 
   * 
   * @author Created by Caroline Meguerditchian
   */
  deleteColumn(column) {
    let index;
        for (let i=0; i<this.headings.length; i++){
            if(this.headings[i] === column){
                index = i;
            }
        }
        this.headings.splice([index],1);
        this.dataset.splice([index],1);
  };

  /**
   * Changes the name of a column.
   * 
   * @param {java.lang.String} oldName - 
   * @param {java.lang.String} newName - 
   * 
   * @author Created by ijdoc2js
   */
  renameColumn(oldName, newName) {
    throw "Not Implemented - ResultsTable.renameColumn(..)";
  };

  /**
   * 
   * 
   * @author Created by ijdoc2js
   */
  reset() {
    throw "Not Implemented - ResultsTable.reset(..)";
  };

  /**
   * Returns the index of the last used column, or -1 if no columns are used.
   * 
   * @return int
   * 
   * @author Created by ijdoc2js
   */
  getLastColumn() {
    if(this.nColumns == null){
      return -1;
    }
    else {
      let lastCol = this.nColumns -1;
      return lastCol;
    }
  };

  /**
   * Adds the last row in this table to the Results window without updating it.
   * 
   * 
   * @author Created by ijdoc2js
   */
  addResults() {
    throw "Not Implemented - ResultsTable.addResults(..)";
  };

  /**
   * Updates the Results window.
   * 
   * 
   * @author Created by ijdoc2js
   */
  updateResults() {
    throw "Not Implemented - ResultsTable.updateResults(..)";
  };

  /**
   * Displays the contents of this ResultsTable in a window with 
   * the specified title, or updates an existing results window. Opens
   * a new window if there is no open text window with this title. 
   * The title must be "Results" if this table was obtained using 
   * ResultsTable.getResultsTable() or Analyzer.getResultsTable .
   * 
   * @param {java.lang.String} windowTitle - 
   * 
   * @author Created by ijdoc2js
   */
  show(windowTitle) {
    this.title = windowTitle;

    // TODO display the ResultsTable
    this.table.show(windowTitle);
  };

  /**
   * 
   * @param {int} measurements - 
   * @param {ImagePlus} imp - 
   * @param {Roi} roi - 
   * 
   * @author Created by ijdoc2js
   */
  update(measurements, imp, roi) {
    throw "Not Implemented - ResultsTable.update(..)";
  };

  /**
   * Opens a tab or comma delimited text file and returns it 
   * as a ResultsTable, without requiring a try/catch statement.
   * Displays a file open dialog if 'path' is empty or null.
   * 
   * @param {java.lang.String} path - 
   * @return ResultsTable
   * 
   * @author Created by ijdoc2js
   */
  open2(path) {
    throw "Not Implemented - ResultsTable.open2(..)";
  };

  /**
   * Opens a tab or comma delimited text file and returns it as a 
   * ResultsTable. Displays a file open dialog if 'path' is empty or null.
   * 
   * @param {java.lang.String} path - 
   * @throws {java.io.IOException}
   * @return ResultsTable
   * 
   * @author Created by ijdoc2js
   */
  open(path) {
    throw "Not Implemented - ResultsTable.open(..)";
  };

  /**
   * Saves this ResultsTable as a tab or comma delimited text file. The table
   * is saved as a CSV (comma-separated values) file if 'path' ends with ".csv".
   * Displays a file save dialog if 'path' is empty or null. Does nothing if the
   * table is empty. Displays an error message and returns 'false' if there is
   * an error.
   * 
   * @param {java.lang.String} path - 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  save(path) {
    throw "Not Implemented - ResultsTable.save(..)";
  };

  /**
   * 
   * @param {java.lang.String} path - 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  saveAndRename(path) {
    throw "Not Implemented - ResultsTable.saveAndRename(..)";
  };

  /**
   * 
   * @param {java.lang.String} path - 
   * @throws {java.io.IOException}
   * 
   * @author Created by ijdoc2js
   */
  saveAs(path) {
    throw "Not Implemented - ResultsTable.saveAs(..)";
  };

  /**
   * Returns the default headings ("Area","Mean","StdDev", etc.).
   * 
   * @return java.lang.String[]
   * 
   * @author Created by ijdoc2js
   */
  getDefaultHeadings() {
    throw "Not Implemented - ResultsTable.getDefaultHeadings(..)";
  };

  /**
   * 
   * @param {int} index - 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getDefaultHeading(index) {
    throw "Not Implemented - ResultsTable.getDefaultHeading(..)";
  };

  /**
   * Duplicates this ResultsTable.
   * 
   * @return java.lang.Object
   * 
   * @author Created by ijdoc2js
   */
  clone() {
    let clone = this;
    return clone;
  };

  /**
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  toString() {
    throw "Not Implemented - ResultsTable.toString(..)";
  };

  /**
   * Applies a macro to each row of the table; the columns are assigned variable names
   * as given by getHeadingsAsVaribleNames(). New variables starting with an uppercase letter
   * create a new column with this name.
   * The variable 'row' (the row index) is pre-defined.
   * Except for the row label (if existing), currently only supports numeric values, no Strings.
   * 
   * @param {java.lang.String} macro - 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  applyMacro(macro) {
    throw "Not Implemented - ResultsTable.applyMacro(..)";
  };

  /**
   * Returns the column headings; headings not suitable as variable names are converted
   * to valid variable names by replacing non-fitting characters with underscores and
   * adding underscores. To make unique names, underscores+numbers are added as required.
   * 
   * @return java.lang.String[]
   * 
   * @author Created by ijdoc2js
   */
  getHeadingsAsVariableNames() {
    throw "Not Implemented - ResultsTable.getHeadingsAsVariableNames(..)";
  };

  /**
   * 
   * @return java.lang.String
   * 
   * @author Created by ijdoc2js
   */
  getTitle() {
    // TODO Check if table not already displayed
    return this.title;
  };

  /**
   * 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  columnDeleted() {
    throw "Not Implemented - ResultsTable.columnDeleted(..)";
  };

  /**
   * Selects the row in the "Results" table assocuiated with the specified Roi.
   * The row number is obtained from the roi name..
   * 
   * @param {Roi} roi - 
   * @return boolean
   * 
   * @author Created by ijdoc2js
   */
  selectRow(roi) {
    throw "Not Implemented - ResultsTable.selectRow(..)";
  };

  /**
   * Sorts this table on the specified column, with string support.
   * Author: 'mountain_man', 8 April 2019
   * 
   * @param {java.lang.String} column - 
   * 
   * @author Created by ijdoc2js
   */
  sort(column) {
    throw "Not Implemented - ResultsTable.sort(..)";
  };

} // End of class ResultsTable
