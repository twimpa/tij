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
    this.element = document.createElement('table');
  }

  /**
   * Display a table in a HTML5 page
   */
  show(title) {
    // TODO
    let container = document.getElementById('workspace');
    // TODO Fill the HTML table
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody'); 
    let tfoot = document.createElement('tfooter'); 
    this.element.appendChild(thead);
    this.element.appendChild(tbody);
    this.element.appendChild(tfoot);
    
    this._setHeading(thead);
    this._setRows(tbody);
    
    if (container !== null) {
      container.appendChild(this.element);
    }
    else {
      document.body.appendChild(this.element);
    }

  }
  
  // Private
  _setHeading(parent) {
    let headings = this.table_data.headings;
    let html = '<tr>';
    for (let h of headings) {
      html += `<th>${h}</th>`;
    }
    html +='</tr>';
    parent.innerHTML = html;
  }
  
  _setRows(parent) {
    let nColumns = this.table_data.nColumns;
    let nRows = this.table_data.size();
    let dataset = this.table_data.dataset;
    let html='';
    for (let row=0; row < nRows; row++) {
        html += '<tr>';
      for (let col=0; col < nColumns; col++) {
        let v = dataset[col][row];
        html += `<td>${v}</td>`;
      }
      html +='</tr>';
    }
    parent.innerHTML = html;
  }
  
} // End of class Table
