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
 * 
 */


'use strict';



describe('ResultsTable', function () {
  describe('getTitle() => int', function () {
    it('should return the tables title', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      const result = table.getTitle();
      expect(result).toBe('MyTable');
    });
  });
  
  describe('size() => int', function () {
    it('should return the size (nRows)', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      const result = table.size();
      expect(result).toBe(10);
    });
  });

  describe('setLabel(String label,int row) => String', function () {
    it('should give a label to the row', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.setLabel('I',0);
      const result = table.getLabel(0);
      expect(result).toBe('I');
    });
  });

  describe('getLabel(int row) => String', function () {
    it('should return the name of the row', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.setLabel('I',0);
      const result = table.getLabel(0);
      expect(result).toBe('I');
    });
  });

  describe('addLabel(String label) => String', function () {
    it('should add a label to the current row ', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addLabel('Current row');
      const result = table.getLabel(9);
      expect(result).toBe('Current row');
    });
  });
  
  describe('addValue(String column, double value) => double', function () {
    it('should return the value of the last row of the column', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('A',99);
      const result = table.getValue('A',9);
      expect(result).toBe(99);
    });
  });

  describe('addValue(int column, double value) => int', function () {
    it('should return the value of the last row of the given column', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue(0,98); 
      const result = table.getValue('C1',9);
      expect(result).toBe(98);
    });
  });
  
  describe('addValue(String column, String Value) => String', function () {
    it('should add a String value to the last row of the column', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'Un');
      const result = table.getStringValue('D',9);
      expect(result).toBe('Un');
    });
  });

  describe('getStringValue(String column, int row) => String', function () {
    it('should return the String value of the column and row', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'Un');
      const result = table.getStringValue('D',9);
      expect(result).toBe('Un');
    });
  });

  describe('getStringValue(int column, int row) => String', function () {
    it('should return the String value of the column and row', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'Un');
      const result = table.getStringValue(0,9);
      expect(result).toBe('Un');
    });
  });
  
  describe('columnExists(String column) => boolean', function () {
    it('should return true if the column exists and false otherwise', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'Un');
      const result = table.columnExists('D');
      expect(result).toBe(true);
    });
  });

  describe('columnExists(int column) => boolean', function () {
    it('should return true if the column exists and false otherwise', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue(1, 98);
      table.addValue('D', 'Un');
      const result = table.columnExists(0);
      expect(result).toBe(true);
    });
  });



  describe('deleteColumn(String column) => ', function () {
    it('should delete the column ', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'Un');
      table.deleteColumn('D');
      const result = table.columnDeleted();
      expect(result).toBe(true);
    });
  });

  describe('columnDeleted() => boolean', function () {
    it('should return true if a column is deleted and false otherwise ', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'Un');
      table.deleteColumn('D');
      const result = table.columnDeleted();
      expect(result).toBe(true);
    });
  });

  describe('deleteRow(int rowIndex) => ', function () {
    it('should delete the specified row', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'Un');
      table.deleteColumn('D');
      table.deleteRow(9);
      const result = table.size();
      expect(result).toBe(9);
    });
  });
  
  describe('deleteRows(int index1, int index2) => ', function () {
    it('should delete the specified row', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'Un');
      table.deleteColumn('D');
      table.deleteRows(7,8);
      const result = table.size();
      expect(result).toBe(8);
    });
  });

    
  describe('getColumnHeading(int column) => String', function () {
    it('should return the heading of the specified column or null if the column is empty ', function () {
      let table = new ResultsTable(2);
      table.addValue('A',99);
      table.show('MyTable');
      const result = table.getColumnHeading(0);
      expect(result).toBe("A");
    });
  });


describe('getColumnHeadings() => String', function () {
    it('should return a tab or comma delimited string containing the column headings', function () {
      let table = new ResultsTable(2);
      table.addValue('A',99);
      table.addValue('D', 'Un');
      table.show('MyTable');
      const result = table.getColumnHeadings();
      expect(result).toBe("A	D");
    });
  });



 describe('getColumnIndex() => int', function () {
    it('Should return the index of the first column with the given heading', function () {
      let table = new ResultsTable(2);
      table.addValue('A',99);
      table.addValue('D', 'Un');
      table.show('MyTable');
      const result = table.getColumnIndex("A");
      expect(result).toBe(0);
    });
  });


 describe('getCounter() => int', function () {
    it('should return the current value of the measurement counter', function () {
      let table = new ResultsTable(2);
      table.show('MyTable');
      const result = table.getCounter();
      expect(result).toBe(2);
    });
 });

 describe('getLastColumn() => int', function () {
    it('should return the index of the last used column, or -1 if no columns are used', function () {
      let table = new ResultsTable(2);
      table.addValue('A',99);
      table.addValue('D', 'Un');
      table.show('MyTable');
      const result = table.getLastColumn();
      expect(result).toBe(1);
 });
});


  describe('getRowAsString(int row) => string', function () {
    it('Should return a tab or comma delimited string representing the given row', function () {
      let table = new ResultsTable(2);
      table.addValue('A',99);
      table.addValue('D', 'Un');
      table.show('MyTable');
      const result = table.getRowAsString(1);
      expect(result).toBe("99	Un");
    });
  });


  describe('getValue(String column, int row) => int', function () {
    it('Should return the value of the specified column and row', function () {
      let table = new ResultsTable(2);
      table.addValue('A',99);
      table.show('MyTable');
      const result = table.getValue("A",1);
      expect(result).toBe(99);
    });
  });


describe('getValueAsDouble(int column, int row) => int', function () {
  it('Should return the value of the specified column and row', function () {
    let table = new ResultsTable(2);
    table.addValue('A',99);
    table.show('MyTable');
    const result = table.getValueAsDouble(0,1);
    expect(result).toBe(99);
  });
});



describe('clone() => Object', function () {
  it('Should duplicate the ResultsTable', function () {
    let table = new ResultsTable(2);
    table.addValue('A',99);
    table.show('MyTable');
    let table_clone = table.clone();
    const result = table_clone.size();
    expect(result).toBe(2);
  });
});


describe('getColumn(int column) => float []', function () {
  it('should return the specified column', function () {
    let table = new ResultsTable(3);
    table.setValue('A',1,99);
    table.setValue('A',2,98);
    table.show('MyTable');
    const result = table.getColumn(0);
    expect(result).toEqual([0,99,98]);
  });
});


//donne le label par défaut 
describe('getDefaultHeading(int index) => String', function () {
  it('should return the default heading for a specified index', function () {
    const result = ResultsTable.getDefaultHeading(0);
    expect(result).toBe("Area");
  });
});


 describe('sort(String column) => ', function () {
    it('should sort this table on the specified column, with string support', function () {
      let table = new ResultsTable(3);
      table.setValue('A',1,99);
      table.setValue('A',2,98);
      table.sort('A');
      table.show('MyTable');
      const result = table.getValue("A",2);
      expect(result).toBe(99);
    });
  });


  
  describe('disableRowLabels()', function () {
    it('should set the row label column to null if the column label is "Label" ', function () {
      let table = new ResultsTable(3);
      table.setValue('A',1,99);
      table.setLabel('I',0);
      table.disableRowLabels();
      table.show('MyTable');
      const result = table.getLabel(0);
      expect(result).toBe(null); 
    });
  });


  describe('getFreeColumn(String) => String', function () {
    it('should set the heading of the the first available column and returns that columns index', function () {
      let table = new ResultsTable(3);
      table.setValue('A',1,99);
      table.getFreeColumn("E");
      table.show('MyTable');
      const result = table.getColumnHeading(1);
      expect(result).toBe("E");
    });
  });


  describe('incrementCounter() => ', function () {
    it('Should increment the measurement counter by one', function () {
      let table = new ResultsTable(3);
      table.incrementCounter();
      table.show('MyTable');
      const result = table.getCounter();
      expect(result).toBe(4);
    });
  });


  describe('reset() => ', function () {
    it('Should return an empty table', function () {
      let table = new ResultsTable(3);
      table.setValue('A',1,99);
      table.reset();
    table.show('MyTable');
      const result = table.size();
      expect(result).toBe(0);
    });
  });


  describe('ResultsTable() => ', function () {
    it('Should return a new table', function () {
      let table = new ResultsTable();
      const result = table.getCounter();
      expect(result).toBe(0);
    });
  });


  describe('setNaNEmptyCells(boolean NaNEmptyCells) => boolean', function () {
    it('Should set "true" to initially fill data arrays with NaNs instead of zeros', function () {
      let table = new ResultsTable(3);
      table.setValue('A',1,99);
      table.setNaNEmptyCells(true)
      table.getFreeColumn("E");
      table.show('MyTable');
      let result = table.getValue(1,0);
      if(isNaN(result)){
      result = "NaN"
      }
      expect(result).toBe("NaN");
    });
  });

  describe('setDefaultHeadings() => String', function () {
    it('Should set the headings used by the Measure command ("Area", "Mean", etc.)', function () {
      let table = new ResultsTable(3);
      table.setValue('A',1,99);
      table.setValue('B',1,99);
      table.setDefaultHeadings();
      table.show('MyTable');
      const result = table.getColumnHeadings();
      expect(result).toBe(" 	Area	Mean");
    });
  });

});



