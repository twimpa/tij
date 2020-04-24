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

// ImageJ Version
const ij_open = () => {
  const path = IJ.getDirectory('');
  let table003 = ResultsTable.open(path+'/Table003_labels_numbers.csv');
  table003.show('Table003');
}


// TIJ version
const tij_open = async() => {
  const path = '.';
  let table003 = await ResultsTable.open(path+'/Table003_labels_numbers.csv');
  await table003.show('Table003'); 
}

// Check if we are running this script in ImageJ or a browser
if (typeof(IJ) === 'undefined') {
  tij_open();
}
else {
  ij_open();
}
  



