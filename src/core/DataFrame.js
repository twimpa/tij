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

  constructor(data=undefined,shape=[],dtype='float32') {
  
    // Data are stored as a 1D Float32Array
    this._data = data;
    
    
    // shape = [nRows, nColumns]
    this._shape = shape;
    
    // Strides
    this.strides = (this._shape.length === 0 ) ? [] : this._calcStrides(shape);

    // Rows Labels
    this._labels;
    
    // Column Headings
    this._headings;

    /**
     * Data Types:
     * 1 = boolean
     * 4 = date
     * 6 = category
     * 8 = byte
     * 16 = 16-bit integer (pixel value)
     * 24 = 24-bit RGB (pixel value)
     * 32 = 32-bit float (pixel value)
     * 64 = number
     */
    this._dtypes;

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

  from(data) {
    // Step #1: check ResultsTable, ImagePlus, ImageProcessor, and ImageStack.
    if (data.class) {
      this.fromIJ(data);
    }
    //  Step #2: check 
    else if (data.columns) {
      this.fromObject(data);
    }
    //  Step #3: check matrix
    else if (data[0] && data[0][0]) {
      this.fromMatrix(data);
    }
  }

  fromIJ(data) {
    let className = data.class.toString();

    if (className.indexOf('ImagePlus') !== -1 && data.getNSlices() > 1) {
      this.fromStack(data.getImageStack());
    }
    else if (className.indexOf('ImagePlus') !== -1) {
      this.fromProcessor(data.getProcessor());
    }
    else if (className.indexOf('Processor') !== -1) {
      this.fromProcessor(data);
    }
    else if (className.indexOf('ImageStack') !== -1) {
      this.fromStack(data);
    }
    else if (className.indexOf('ResultsTable') !== -1) {
      this.fromTable(data);
    }
  }

  fromJSON(json,order='row') {
    // TODO
    this._rows = [];
    this._columns = [];
    this._dtypes = [];
    let count = 0;
    if (order == 'row') {
      for (let key in Object.keys(json) ) {
        this._rows.push(key);
        this._columns.push(count++);
      }
    }
    else if (order == 'column') {
    }
    else {
      alert('Unknown order - Must be `row` or `column`');
    }
    this._data = new Float32Array(other);
  }

  fromMatrix(data) {

  }

  fromCSV(table,order='row') {
    // TODO
    if (order == 'row') {
    }
    else if (order == 'column') {
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
    this._rows   = Array.from({length: this._height}, (i,v) => i);
    this._columns = Array.from({length: this._width}, (i,v) => i);
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
    this._rows   = Array.from({length: this._height}, (i,v) => i);
    this._columns = Array.from({length: this._width}, (i,v) => i);
    // Copy Processor
    for (let i = 0; i < w * h ; i++) {
      this._data.setf(i, ip.getf(i) );
    }
  }

  fromTable(table) {
  }

  array() {
    // TODO: replace the Categoricals and the booleans.
    return this._data.getFloatArray();
  }

  /**
   *
   * @return {DataFrame} - Returns a new DataFrame
   */
  column(col) {
    // TODO
    let df = new DataFrame();
    let _col = [];
    for (let y = 0; y < this._height; y++) {
      _col.push(this._data.getf(col,y));
    }

    df._data = new Float32Array(1, this._height, Java.to(_row, "float[]") );
    df._columns = [this._columns[col]]; 
    df._rows = this._rows.map( r => r);
    // TODO df._dtypes = this.dtypes.map( t => t);
    return df;
  }

  row(index) {
    // TODO
    let df = new DataFrame();
    let _row = [];
    for (let x = 0; x < this._width; x++) {
      _row.push(this._data.getf(x,index));
    }
    // NASHORN Trick
    df._data = new Float32Array(this._width, 1, Java.to(_row, "float[]") );
    df._columns = this.columns.map( c => c);
    df._rows = [this._rows[index]];
    // TODO df._dtypes = this.dtypes.map( t => t);
    return df;
  }

  reshape(nrows,ncols) {
    // TODO
    // Return a new rescaled DataFrame/Float32Array 
    let df = new DataFrame(this._data,[nrows,ncols],this._dtypes);
    df._headings = this._headings.map( h => h); // Copy
    df._labels   = this._labels.map( lbl => lbl); // Copy
    return df;
  }

  transpose(index) {
    // TODO
    // Return a new DataFrame/Float32Array rotated by 90°
    // Update _rows and _columns.
  }

  describe() {
    // count,mean,std,min,25%,50%,75%,max
  }

  mean(col=-1) {
    if (col == -1) {
    // Compute mean for all the columns
    }
    else {
      return this.column(col).array().reduce( (mean,v) => mean + v,0) / this._height;
    }
  }

  std() {
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
    imp.show();
  }

  /**
   * Print in console
   */
  print(verbose=false) {

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
  

  /*
   * @private
   */
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
  
  _fillWith(len,data) {
    Array.from({length: len}, (v,i) => data);
  }
  
} // End of class DataFrame
