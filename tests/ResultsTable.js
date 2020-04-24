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
  
  describe('addValue( column, value) => content', function () {
    it('(string,number) => should return a <number> of the last row of the column', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('A',99);
      const result = table.getValue('A',9);
      expect(result).toBe(99);
    });

    it('(number, number) => should return a <number> of the last row of the given column', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue(0,98); 
      const result = table.getValue(0,9);
      expect(result).toBe(98);
    });

    it('(string,string) => should add a <string> of the last row of the column', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'One');
      const result = table.getStringValue('D',9);
      expect(result).toBe('One');
    });
  });

  describe('getStringValue( column, row) => String', function () {
    it('(string, number) => should return a <string> at (column,row)', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'One');
      const result = table.getStringValue('D',9);
      expect(result).toBe('One');
    });

    it('(number, number) => should return a <string>  at (column,row)', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'One');
      const result = table.getStringValue(0,9);
      expect(result).toBe('One');
    });
  });
  
  describe('columnExists(column) => boolean', function () {
    it('(string) => should return true if the column exists', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'One');
      const result = table.columnExists('D');
      expect(result).toBe(true);
    });
    it('(string) => should return false if the column does not exist', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'One');
      const result = table.columnExists('A');
      expect(result).toBe(false);
    });
    it('(number) => should return true if the column exists', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue(1, 98);
      table.addValue('D', 'One');
      const result = table.columnExists(0);
      expect(result).toBe(true);
    });
    it('(number) => should return false if the column does not exist', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue(1, 98);
      table.addValue('D', 'One');
      const result = table.columnExists(-1);
      expect(result).toBe(false);
    });
  });


  describe('deleteColumn(String column) => ', function () {
    it('should delete the column ', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'One');
      table.deleteColumn('D');
      const result = table.columnExists('D');
      expect(result).toBe(false);
    });
  });

  describe('columnDeleted() => boolean', function () {
    it('should return true if a column is deleted and false otherwise ', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'One');
      table.deleteColumn('D');
      const result = table.columnDeleted();
      expect(result).toBe(true);
    });
  });

  describe('deleteRow(int rowIndex) => ', function () {
    it('should delete the specified row', function () {
      let table = new ResultsTable(10);
      table.show('MyTable');
      table.addValue('D', 'One');
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
      table.addValue('D', 'One');
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
        table.addValue('D', 'One');
        table.show('MyTable');
        const result = table.getColumnHeadings();
        expect(result).toBe("A	D");
      });
    });

   describe('getColumnIndex() => int', function () {
      it('Should return the index of the first column with the given heading', function () {
        let table = new ResultsTable(2);
        table.addValue('A',99);
        table.addValue('D', 'One');
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
        table.addValue('D', 'One');
        table.show('MyTable');
        const result = table.getLastColumn();
        expect(result).toBe(1);
   });
  });


  describe('getRowAsString(int row) => string', function () {
    it('Should return a tab or comma delimited string representing the given row', function () {
      let table = new ResultsTable(2);
      table.addValue('A',99);
      table.addValue('D', 'One');
      table.show('MyTable');
      const result = table.getRowAsString(1);
      expect(JSON.stringify(result)).toBe('"99\\tOne"');
    });
  });


  describe('getValue(String column, int row) => int', function () {
    it('(string, number) => Should return the value of the specified column and row', function () {
      let table = new ResultsTable(2);
      table.addValue('A',99);
      table.show('MyTable');
      const result = table.getValue("A",1);
      expect(result).toBe(99);
    });
    it('(number, number) => Should return the value of the specified column and row', function () {
      let table = new ResultsTable(1);
      table.addValue('A',999);
      table.show('MyTable');
      const result = table.getValue(0,0);
      expect(result).toBe(999);
    });
    it('column not found => Should throw a "column not found" Exception', function () {
      const func = () => {
        let table = new ResultsTable(1);
        table.addValue('A',999);
        table.show('MyTable');
        return table.getValue('B',0);
      }
      expect(func).toThrow(new Error('"B" column not found'));
    });
    it('column index out of range => Should throw a "Column not defined" Exception', function () {
      const func = () => {
        let table = new ResultsTable(1);
        table.addValue('A',999);
        table.show('MyTable');
        return table.getValue(10,0);
      }
      expect(func).toThrow(new Error('Column not defined: 10'));
    });
    it('Row out of range => Should throw a "out of range" Exception', function () {
      const func = () => {
        let table = new ResultsTable(1);
        table.addValue('A',999);
        table.show('MyTable');
        return table.getValue('A',2);
      }
      expect(func).toThrow(new Error('Row out of range'));
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
      let table = new ResultsTable();
      table.incrementCounter();
      table.addValue('A',99);
      table.incrementCounter();
      table.addValue('A',98);
      table.show('MyTable');
      const result = table.getColumn(0);
      expect(result).toEqual([99,98]);
    });
    
    it('should return null for an unknown column index', function () {
      let table = new ResultsTable(3);
      table.show('MyTable');
      const result = table.getColumn(3);
      expect(result).toBeNull();
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

  describe('getColumnAsDoubles() => float[] / null', function(){
    it('should return a copy of the given column as a double array, or null if the column is empty', function(){
        let table = new ResultsTable(4);
        table.addValue('B',99);
        table.addValue(1,98);
        table.addValue('D',97);
        table.setLabel('I',0);
        table.setLabel('II',1);
        table.setLabel('III',2);
        table.addLabel('Last row');
        table.show('MyTable');
        const result = table.getColumnAsDoubles(0);
        expect(result).toEqual([0,0,0,99]);
    });
  });

  describe('setDecimalPlaces(int column, int digits', function(){
    it('should set the decimal places of a given column', function(){
        let table = new ResultsTable(4);
        table.addValue('B',99);
        table.addValue(1,98);
        table.addValue('D',97);
        table.setLabel('I',0);
        table.setLabel('II',1);
        table.setLabel('III',2);
        table.addLabel('Last row');
        table.show('MyTable');
        const set_digits = table.setDecimalPlaces(0,3);
        const result = table.getColumnAsDoubles(0);
        expect(result).toEqual([0.000, 0.000, 0.000, 99.000]);
    });
  });

  describe('setHeading(int column, String heading', function(){
    it('should set heading of a given column', function(){
        let table = new ResultsTable(4);
        table.addValue('B',99.8967);
        table.addValue(1,98.4354);
        table.addValue('D',97.356784);
        table.setLabel('I',0);
        table.setLabel('II',1);
        table.setLabel('III',2);
        table.addLabel('Last row');
        table.setHeading(2,"3ème colonne");
        table.show('MyTable');
        const set_Heading = table.setHeading(2,"3ème colonne");
        const result = table.getHeadings();
        expect(result).toEqual(["Label","B","C2","3ème colonne"]);
    });
  });

  describe('getHeadings() => String[]', function(){
    it('should return the column headings as an array of Strings', function(){
        let table = new ResultsTable(4);
        table.addValue('B',99.8967);
        table.addValue(1,98.4354);
        table.addValue('D',97.356784);
        table.setLabel('I',0);
        table.setLabel('II',1);
        table.setLabel('III',2);
        table.addLabel('Last row');
        table.setHeading(2,"3ème colonne");
        table.show('MyTable');
        const result = table.getHeadings();
        expect(result).toEqual(["Label","B","C2","3ème colonne"]);
    });
  });

  describe('setPrecision(int precision)', function(){
    it('should set the decimal places that are used when this table is displayed', function(){
        let table = new ResultsTable(4);
        table.addValue('B',99);
        table.addValue(1,98);
        table.addValue('D',97);
        table.setLabel('I',0);
        table.setLabel('II',1);
        table.setLabel('III',2);
        table.addLabel('Last row');
        table.show('MyTable');
        const setPrecision = table.setPrecision(2);
        const result = table.getColumn(0);
        expect(result).toEqual([0.00, 0.00, 0.00, 99.00]);
    });
  }); 

  describe('renameColumn(String oldName, String newName)', function(){
    it('should rename a given column', function(){
      let table = new ResultsTable(4);
      table.addValue('B',99);
      table.addValue('D', 97);
      table.show('MyTable');
      const rename_Column = table.renameColumn("D","A");
      const result = table.getColumnIndex("A");
      expect(result).toBe(1);
    });
  }); 


  describe('setValue( column, row, value)', function() {
    it('(int,int, number) => should throw an "row>counter" Exception when row<size()', function(){
      const func = () => {
        let table = new ResultsTable(4);
        table.setValue(3,5,1);
        table.show('MyTable');
      }
      expect(func).toThrow(new Error('row>counter'));
    });
    
    it('(int,int, number) => should throw an "out of range" Exception when 0<=row', function(){
      const func = () => {
        let table = new ResultsTable(4);
        table.setValue(3,-10,1);
        table.show('MyTable');
      }
      expect(func).toThrow(new Error(`-10`));
    });
    
    it('(int,int, number) => should set the value of the given column and row, where 0<=row<size()', function(){
      let table = new ResultsTable(4);
      table.setValue(3,0,2.33);
      table.show('MyTable');
      let result = table.getValue(3,0);
      expect(result).toBeCloseTo(2.33);
    });
    
    it('(int,int,string) => should set the string value of the given column and row, where 0<=column<=lastRow+1 and 0<=row<=size()', function() {
      let table = new ResultsTable(4);
      table.setValue(1,0,"One");
      table.show('MyTable');
      let result = table.getStringValue(1,0);
      expect(result).toBe("One");
    });
    
    it('(string,int,int) => should set the value of the given column and row', function() {
      let table = new ResultsTable();
      table.setValue("A",0,10);
      table.setValue("D",0,5);
      table.show('MyTable');
      let result = table.getValue("D",0);
      expect(result).toBe(5);
    });

    it('(string,int,string) => should set the value of the given column and row', function() {
      let table = new ResultsTable(4);
      table.setValue("D",2,"Seven");
      table.show('MyTable');
      const result = table.getStringValue("D",2);
      expect(result).toBe("Seven");
    });
  });


}); // End of tests for ResultsTable



