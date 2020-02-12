/*
 *  tij: Tiny ImageJ API
 *  Copyright (C) 2020  Jean-Christophe Taveau.
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

let table = new ResultsTable(10);
table.addValue('A',99);
table.show('MyTable');

describe('ResultsTable', function () {
  describe('  #getTitle()', function () {
    it('should return the table's title', function () {
      const result = table.getTitle();
      expect(result).toBe('MyTable);
    });
  });
  
  describe('  #size()', function () {
    it('should return the size (nRows)', function () {
      const result = table.size();
      expect(result).toBe(10);
    });
  });

  describe('  #addValue(string,string)', function () {
    it('should return the value of the #1 column and row', function () {
      const result = table.getValue('A',0);
      expect(result).toBe(99);
    });
  });

});

TUNIT.stats();
