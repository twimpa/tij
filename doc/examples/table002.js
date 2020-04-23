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

// Check if we are running this script in ImageJ or a browser

if (typeof(IJ) !== 'undefined') {
  console = {
    info: (msg) => {
      print('ⓘ ' + msg);
    }
  }
}

// Main

let table002 = new ResultsTable(10);
table002.addValue(0,98); 
// Add values
const result1 = table002.getValue('C1',9);
const result2 = table002.getValue(0,9);
console.info(`${result1} ${result2}`);
// Check wrong parameters
try {
  const result3 = table002.getValue('Area',9);
} catch (exception) {
  console.info(exception);
}
try {
  const result4 = table002.getValue('C1',12);
} catch (exception) {
  console.info(exception);
}

// Return null if index out of range
const result5 = table002.getColumn(2);
console.info(result5);


table002.show('Table002');

