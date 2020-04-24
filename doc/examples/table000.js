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

let labels = ['i','ii','iii','iv'];
let table000 = new ResultsTable();
let count = 1;
for (let row = 0; row < 4; row++) {
  table000.incrementCounter();
  // table000.addLabel(labels[row]);
  for (let col of ['A','B','C','D']) {
    table000.addValue(col,count++);
  }
}
// table000.disableRowLabels();
// table000.showRowNumbers(true);
// table000.showRowIndexes(true);
table000.show('Table000');



