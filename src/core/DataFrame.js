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

export class DataFrame {

  constructor(data=undefined,shape=[],dtype='float32',columnFirst=true) {
  
    // Data are stored as a 1D Float32Array
    this._data = (data !== undefined) ? this._setData(data) : undefined;
    
    // shape = [nRows, nColumns, nSlices,...]
    this._shape = shape;
    
    // Strides
    this.strides = (this._shape.length === 0 ) ? [] : this._calcStrides(shape);

    // Rows Labels
    this._labels;
    
    // Column Headings
    this._headings;

    /**
     * Data Types:
     * 0 = unknown
     * 1 = boolean
     * 4 = date
     * 6 = category
     * 8 = byte
     * 16 = 16-bit integer (pixel value)
     * 24 = 24-bit RGB (pixel value)
     * 32 = 32-bit float (pixel value)
     * 64 = number
     */
    this._dtypes = this._getDType(dtype);

    /**
     * Categorical Data
     * The categorical data are stored in a dictionary and only the index is stored in the underlying DataFrame/Float32Array
     */
    this._categoricals;
  }

  static timestamp(a_date) {
    // TODO Number of seconds since 1970
    return 12345678;
  }

  get rank() {
    return this._shape.length;
  }
  
  get size() {
    return this._shape.reduce( (accu,d) => d * accu, 1.0);
  }
  
  get shape() {
    return (this._shape === undefined) ? calcDimensions(this.data)[0] : this._shape;
  }
  
  isScalar() {
    return (shape.length ===1 && shape[0] === 1)
  }
  
  reshape(new_shape) {
    this._shape = new_shape;
    this._strides = this.calcStrides(new_shape);
    return this;
  }
  
  fill(value,dtype='float32') {
    console.log(this.shape);
    let num = this.shape.reduce( (siz,v) => siz * v, 1);
    this.data = new Array(num).fill(value);
    return this;
  }
  
  get nRows() {
    return this._shape[0];
  }

  get nColumns() {
    return this._shape[1];
  }

  get labels() {
    return this._labels;
  }

  get headings() {
    return this._headings;
  }

  set headings(heads) {
    // Copy
    this._headings = heads.map( (v) => v);
  }

  set labels(rows) {
    // Copy
    this._labels = rows.map( (v) => v);
  }

  from(data, shape=[], dtype='float32') {
    // Step #1: check 
    if (data.columns) {
      this.fromObject(data);
    }
    //  Step #2: check matrix
    else if (data[0] && data[0][0]) {
      this.fromMatrix(data);
    }
  }

  fromJSON(json,order='row') {
    // TODO
    this._labels = [];
    this._headings = [];
    this._dtypes = [];
    let count = 0;
    if (order === 'row') {
      for (let key in Object.keys(json) ) {
        this._labels.push(key);
        this._headings.push(count++);
      }
    }
    else if (order === 'column') {
    }
    else {
      alert('Unknown order - Must be `row` or `column`');
    }
    this._data = new Float32Array(other);
  }

  fromCSV(table,sep=',',order='row') {
    // TODO
    let lines = table.split('\n');
    
    if (order === 'row') {
    }
    else if (order === 'column') {
    }
    else {
      alert('Unknown order - Must be `row` or `column`');
    }
    this._data = new Float32Array(other);
  }


  fromStack(stack) {
    let w = stack.getWidth();
    let h = stack.getHeight();
    let num = stack.getSize();

    this._data = new Float32Array(w * h, num);
    this._width = w * h;
    this._height = num;
    this._dtypes = stack.getBitDepth();
    this._labels   = Array.from({length: this._height}, (i,v) => i);
    this._headings = Array.from({length: this._width}, (i,v) => i);
    for (let z=1; z <= num; z++) {
      let ip = stack.getProcessor(z);
      for (let i = 0; i < w * h ; i++) {
        this._data.setf(i,z-1, ip.getf(i) );
      }
    }
  }

  fromProcessor(ip) {
    let w = stack.getWidth();
    let h = stack.getHeight();

    this._data = new Float32Array(w, h);
    this._width = w;
    this._height = h;
    this._dtypes = stack.getBitDepth();
    this._labels   = Array.from({length: this._height}, (i,v) => i);
    this._headings = Array.from({length: this._width}, (i,v) => i);
    // Copy Processor
    for (let i = 0; i < w * h ; i++) {
      this._data.setf(i, ip.getf(i) );
    }
  }

  from(obj) {
    // Step #1 - Extract headings and labels if any
    this._headings = obj.headings ? obj.headings : Object.keys(obj).filter( h => h !== 'headings' && h !== 'labels');
    this._labels = (obj.labels) ? obj.labels : [];

    // Step #2 - Extract labels if any
    let nrows = (obj.labels !== undefined) ? obj.labels.length : obj[this._headings[0]].length;
    // Step #3 - Calc strides
    this._strides = []
    this._shape = [nrows, this._headings.length];
    this._dtypes = this._headings.map( _ => 'float32'); // By default
    // Step #4 - Set data
    this._data = new Float32Array(this.size);
    this._headings.forEach( h => {
      let col = obj[h];
      this._data.set(col);
    });
  }


  fromTable(table) {
  }

  array() {
    // TODO: replace the Categoricals and the booleans.
    return {data:this._data, shape: this._shape};
  }

  data() {
    // TODO: replace the Categoricals and the booleans.
    return this._data;
  }

  /**
   * Get the value at given position
   *
   * @param {string|number} args - row, column, slice, ... N-dimensional 
   *
   * @author Jean-Christophe Taveau
   */
  loc(...args) {
    // Convert args to integers
    // TODO
    let new_args = [];
    return this.iloc(...new_args);
  }
  
  /**
   * Get the value at given integer position
   *
   * @author Jean-Christophe Taveau
   */
  iloc(...args) {
    let idx = args.reduce( (idx,pos,i) => pos + this._strides[i], 0);
    return this._data(idx);
  }
  
  /**
   * Get the value at given position
   *
   * @param {string|number} row
   * @param {string|number} column
   * @param {string|number} slice
   * @param {string|number} value - Value assigned at given location
   
   */
  loc(...args) {
    let pos = args.slice(0,-1);
    let value = args[args.length - 1];
  }
  
  /**
   * Set the value(s) at given position(s)
   *
   * @author Jean-Christophe Taveau
   */
  assign(...args) {
    let value = args[args.length - 1];
    let idx = args.slice(0,-1).reduce( (idx,pos,i) => pos + this._strides[i], 0);
    this._data[idx] = value;
    // Step #1 - Allocate memory if needed
    // Step #2 - Update headings and labels
  }
  
  /**
   * Set the value(s) at given position(s)
   *
   * @author Jean-Christophe Taveau
   */
  set(...args) {
    // TODO
  }
  
  
  
  /**
   * Set all the elements to zero
   *
   * @author Jean-Christophe Taveau
   */
  zeros(shape=undefined, dtype='unknown') {
    let sh = (shape === undefined) ? this._shape : shape;
    let len = sh.reduce( (accu,v) => accu * v, 1);
    this._fillWith(len,0.0);
  }
  
  /**
   * Set all the elements to one
   *
   * @author Jean-Christophe Taveau
   */
  ones(shape=undefined, dtype='unknown') {
    let sh = (shape === undefined) ? this._shape : shape;
    let len = sh.reduce( (accu,v) => accu * v, 1);
    this._fillWith(len,1.0);
  }
  

  /**
   * Get all the values of a given column named by its heading
   * @return {DataFrame} - Returns a new DataFrame
   */
  column(col) {
    // TODO - Check if string or number
    const col_idx = isNaN(col) ? this._headings.indexOf(col) : col;
    return icolumn(col_idx);
  }


  /**
   * Get all the values of a given column named by its heading
   * @return {DataFrame} - Returns a new DataFrame
   */
  icolumn(col) {
    let df = new DataFrame();
    let _col = [];
    for (let y = 0; y < this._height; y++) {
      _col.push(this._data[this.coord2i([col_idx,y])]);
    }

    df._data = new Float32Array(1, this._height, Java.to(_row, "float[]") );
    df._headings = [this._headings[col]]; 
    df._labels = this._labels.map( r => r);
    // TODO df._dtypes = this.dtypes.map( t => t);
    return df;
  }
  
  /**
   * Get all the values of a given row at index location
   *
   * @param {number} index - index of 
   * @returns {DataFrame} - Returns a new DataFrame
   * @author Jean-Christophe Taveau
   */
  irow(index) {
    // TODO
    let df = new DataFrame();
    let _row = [];
    for (let x = 0; x < this._width; x++) {
      _row.push(this._data.getf(x,index));
    }

    df._data = new Float32Array(this._width, 1, Java.to(_row, "float[]") );
    df._headings = this.columns.map( c => c);
    df._labels = [this._labels[index]];
    // TODO df._dtypes = this.dtypes.map( t => t);
    return df;
  }

  /**
   * Get all the values of a given row named by its label
   *
   * @param {string} label - index of 
   * @returns {DataFrame} - Returns a new DataFrame
   * @author Jean-Christophe Taveau
   */
  row(label) {
    // TODO Get index from label
    let idx = 0;
    return this.irow(idx);
  }

  reshape(nrows,ncols) {
    // TODO
    // Return a new rescaled DataFrame/Float32Array 
    let df = new DataFrame(this._data,[nrows,ncols],this._dtypes);
    df._headings = this._headings.map( h => h); // Reset headings
    df._labels   = this._labels.map( lbl => lbl); // Reset labels
    return df;
  }

  transpose(index) {
    // TODO
    // Return a new DataFrame/Float32Array rotated by 90°
    // Update _labels and _headings.
  }

  /**
   * Compute basic column statistics
   *
   */
  describe() {
    // count,mean,std,min,25%,50%,75%,max
  }

  /**
   * Compute overall mean or by column(s)
   *
   */
  mean(col=-1) {
    if (col == -1) {
    // Compute mean for all the columns
    }
    else {
      return this.column(col).array().reduce( (mean,v) => mean + v,0) / this._height;
    }
  }

  /**
   * Compute overall standard deviation or by column(s)
   *
   */
  std() {
    // TODO
  }

  /**
   * Use for display in console
   */
  toString() {
    let str = ''
  }

  /**
   * Only for debug
   */
  show() {
    // let imp = new ImagePlus('DataFrame',this._data);
    // imp.show();
  }

  /**
   * Print in console
   */
  print(verbose=false,start=0,end=-1) {

    const printRow = (data) =>  data.join(' , ');
    
    // Step #1: Run `compose` with transducers?
    // TODO
    
    // Step #2: Print
    if (this.isScalar() ) {
      return this.data[0];
    }
    else {
      let header = '';
      if (verbose) {
        header = `  dtype: ${this.dtype}\n  rank: ${this.rank}\n  shape: ${JSON.stringify(this.shape)}\n  stride: ${JSON.stringify(this.strides)}\n  values:`;
      }
      let prefix = '    ';
      let that = this;
      let len = this.shape[this.shape.length - 1];
      let numRows = this.data.length / len;
      let msg = Array.from({length: numRows}, (_,i) => i).reduce( (str,i) => {
        let brktOpen = this.strides.slice(0,-1).filter( (v) => i*len % v === 0);
        let brktClose = this.strides.slice(0,-2).filter( (v) => (i+1) * len % v === 0);
        let row = printRow(that.data.slice(len * i,len * (i+1)));
        return str + `${(i!==0) ? prefix + ' ': ''}${brktOpen ? '['.repeat(brktOpen.length) : ''}${row}]${brktClose ? ']'.repeat(brktClose.length) : ''},\n`;
      },'');

      return `Dataset\n${header}\n${prefix}[${msg.slice(0,-2)}]`;
    }
  }
  
  head(n_first) {
  
  }
  
  tail(n_last) {
  
  }
  
  /*
   * @private
   */
  
  // Index to ZYX..- coordinates
  i2coord(index) {
    return this._strides.map( (v,i) => Math.floor(index / v) % this._shape[i]);
  }
    
  // ZYX..- coordinates to Index
  coord2i(coords) {
    return  coords.reduce( (accu,v,i) => accu + v * this._strides[i],0);
  }

  _calcDimensions() {
    this._shape = tu.shape(this.data);
    this.strides = this._calcStrides(this._shape);
    return [this._shape,this.strides];
  }
  
  _calcStrides(a_shape) {
    return a_shape.reduce( (accu,v,i) => {
        accu[i] *= v; 
        return accu;
      },
      [1,...a_shape,1]
    )
    .slice(2);

  }
  
  /*
   * Get Data Types:
   * 1 = boolean
   * 4 = date
   * 6 = category
   * 8 = byte
   * 16 = short - 16-bit integer (pixel value)
   * 24 = rgb - 24-bit RGB (pixel value)
   * 32 = float32 - 32-bit float (pixel value)
   * 64 = number
   */
  _getDType(dtypes) {
    const codes = {unknown: 0, bool:1, boolean:1, date:4, category:6, byte:8, short:16, rgb:24, float:32, float32:32, number:64};
    if (Array.isArray(dtypes) ) {
      this._dtypes = dtypes.map( v => codes[v]);
    }
    else {
      // Same type for all the values in dataset.
      // Set as a negative code
      this._dtypes = -codes[dtypes];
    }
  }
  
  _getShape(arr) {
    let accu = [arr.length];
    let a = arr[0];
    while (Array.isArray(a)) {
      accu.push(a.length);
      a = a[0];
    }
    return accu;
  }
  
  _fillWith(len,data) {
    Array.from({length: len}, (v,i) => data);
  }
  
  _setData(data) {
    //  Step #1: check object defined as column-first order
    console.log(data instanceof Object);
    if (data instanceof Object) {
      this.from(data);
      console.log(this._data);
    }
    //  Step #2: check N-dimensional array that must be flattened
    else if (Array.isArray(data) ) {
      this._shape = this._getShape(data);
      this.fromMatrix(data);
    }
    else {

    }
    return new Float32Array(data);
  }
  
} // End of class DataFrame
