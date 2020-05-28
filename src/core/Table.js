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
 * public class Table
 *
 * This is a HTML table for displaying `ResultsTable` data.
*/

export class Table {

  /**
   * @constructor
   */
  constructor(table) {
    // TODO
    console.info('core/Table created');
    this.table_data = table;
  }

  /**
   * Display a table in a HTML5 page
   */
  show(title) {
    // TODO
    let container = document.getElementById('workspace');
    // TODO Fill the HTML table
    let caption = document.createElement('caption');
    caption.textContent = this.table_data.getTitle();
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody'); 
    let tfoot = document.createElement('tfoot'); 
    
    this.element = document.querySelector(`#${title}`) || document.createElement('table');
    this.element.id = title;
    this.element.className = 'table table-striped table-bordered table-resizable';
    this.element.innerHTML = ''; // Reset content
    this.element.appendChild(caption);
    this.element.appendChild(thead);
    this.element.appendChild(tbody);
    this.element.appendChild(tfoot);
    this._setHeading(thead);
    this._setRows(tbody);
    
    // Resizable columns
    this._resizableColumns(this.element,thead);

    if (container !== null) {
      container.appendChild(this.element);
    }
    else {
      document.body.appendChild(this.element);
    }

  }
  
  // Private
  _resizableColumns(table,thead) {
    let startX,
       startWidth,
       handle,
       pressed = false;

    // let thead = document.querySelector(`#${table.id} thead`);
    
    thead.addEventListener('mousedown', function(event) {
      event.preventDefault();
      console.log('MOUSE DOWN',event.target);
      handle = event.target;
      pressed = true;
      startX = event.pageX;
      startWidth = handle.offsetWidth;
      console.log(handle);
      handle.closest('.table-resizable').classList.add('resizing');
      
      const move = (event) => {
        if (pressed) {
          console.log('MOUSE MOVE', startWidth,event.pageX, startX);
          handle.style.width  = `${startWidth + (event.pageX - startX)}px`;
        }
      }
      
      const endMove = (event) => {
        if (pressed) {
          // let table = event.target.closest('.table-resizable');
          table.classList.remove('resizing');
          pressed = false;
        }
        document.removeEventListener('mousemove',move,true);
      }
      
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', endMove);
    
    });

    // Reset column widths when double click
    thead.addEventListener('dblclick', function(event) {
      // Reset column sizes on double click
      console.log(this.querySelectorAll('th'));
      this.querySelectorAll('th').forEach(th => th.style.width = null);
    });

  }

  _setHeading(parent) {
    
    let headings = this.table_data.headings;
    let label_status = this.table_data.rowLabelHeading;
    let rowIndex_status = this.table_data.rowIndex
    let rowNumber_status = this.table_data.rowNumber
    let html = '<tr>';

    if (rowIndex_status === true){
      html += `<th></th>`;
    }

    if (rowNumber_status === true){
      html += `<th></th>`;
    }

    if (label_status === "Label"){
      html += `<th>${label_status}</th>`;
    }

    for (let h of headings) {
      html += `<th>${h}</th>`;
    }
    html +='</tr>';
    parent.innerHTML = html;
  }
  
  // Private
  _setRows(parent) {
    let labels = this.table_data.labels_name;
    let label_status = this.table_data.rowLabelHeading;
    let row_index_number = this.table_data.labels;
    let rowIndex_status = this.table_data.rowIndex
    let rowNumber_status = this.table_data.rowNumber

    let nColumns = this.table_data.nColumns;
    let nRows = this.table_data.size();
    let dataset = this.table_data.dataset;
    let html='';

    for (let row=0; row < nRows; row++) {
        html += '<tr>';

        //add row index if enabled
        if(rowIndex_status === true) {
          let i = row_index_number[row][0];
          html += `<td>${i}</td>`;
        }

        //add row number if enabled
        if(rowNumber_status === true) {
          let n = row_index_number[row][1];
          html += `<td>${n}</td>`;
        }

        //add label column if enabled
        if(label_status === "Label"){
          let l = labels[row];
          html += `<td>${l}</td>`;
        }

      for (let col=0; col < nColumns; col++) {
        let v = dataset[col][row];
        html += `<td>${v}</td>`;
      }
      html +='</tr>';
    }
    parent.innerHTML = html;
  }
  
} // End of class Table
