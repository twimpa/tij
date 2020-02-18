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
table.addValue(1,98); 
table.setValue(1,3,56); 
table.addValue('D', 'Un');
table.setLabel('I',0);
table.setLabel('II',1);
table.setLabel('III',2);
table.addLabel('Current row');
table.columnExists('D');
table.sort("C2")
table.show('MyTable');

let table_clone = table.clone();
let table_test = new ResultsTable();

let table2 = new ResultsTable(10);
table2.addValue('A',99);
table2.addValue(1,98); 
table2.addValue('D', 'Un');
table2.setLabel('I',0);
table2.setLabel('II',1);
table2.setLabel('III',2);
table2.addLabel('Current row');
table2.columnExists('D');




describe('ResultsTable', function () {
    
  //donne le label d'une colonne donnée 
  describe('  #getColumnHeading(int column) => String', function () {
    it('should return the heading of the specified column or null if the column is empty ', function () {
      const result = table.getColumnHeading(0);
      expect(result).toBe("A");
    });
  });

  //donne le label de toutes les colonnes
  describe('  #getColumnHeadings() => String', function () {
      it('should return a tab or comma delimited string containing the column headings', function () {
        const result = table.getColumnHeadings();
        expect(result).toBe("Label	A	C2	D");
      });
    });

    //donne l'indice de la colonne dont le nom est spécifié
    describe('  #getColumnIndex() => int', function () {
      it('Should return the index of the first column with the given heading', function () {
        const result = table.getColumnIndex("A");
        expect(result).toBe(0);
      });
    });

    //donne le nombre de rangs dans la table 
    describe('  #getCounter() => int', function () {
      it('should return the current value of the measurement counter', function () {
        const result = table.getCounter();
        expect(result).toBe(10);
      });
    });

  //donne le nom de la dernière colonne utilisée 
  describe('  #getLastColumn() => int', function () {
    it('should return the index of the last used column, or -1 if no columns are used', function () {
      const result = table.getLastColumn();
      expect(result).toBe(2);
    });
  });

  //donne le rang spécifé sous forme de string
  describe('  #getRowAsString(int row)() => string', function () {
    it('Should return a tab or comma delimited string representing the given row', function () {
      const result = table.getRowAsString(0);
      expect(result).toBe("I	0	0	0");
    });
  });

  //donne la valeur de la colonne et rangée spécifiée
  describe('  #getValue(String column, int row) => int', function () {
    it('Should return the value of the specified column and row', function () {
      const result = table.getValue("A",9);
      expect(result).toBe(99);
    });
  });

  //donne la valeur de la colonne et rangée spécifiée
  describe('  #getValueAsDouble(int column, int row) => int', function () {
    it('Should return the value of the specified column and row', function () {
      const result = table.getValueAsDouble("A",9);
      expect(result).toBe(99);
    });
  });

  //Crée un clone du tableau
  describe('  #clone() => Object', function () {
    it('Should duplicate the ResultsTable', function () {
      const result = table_clone.size();
      expect(result).toBe(10);
    });
  });

  //donne le label d'une colonne donnée 
  describe('  #getColumn(int column) => float []', function () {
    it('should return the specified column', function () {
      const result = table.getColumn(0);
      expect(result).toEqual([0,0,0,0,0,0,0,0,0,99]);
    });
  });

  //donne le label par défaut 
  describe('  #getDefaultHeading(int index) => String', function () {
    it('should return the default heading for a specified index', function () {
      const result = ResultsTable.getDefaultHeading(0);
      expect(result).toBe("Area");
    });
  });

  //trie la colonne spécifiée 
  describe('  #sort(String column) => ', function () {
    it('should sort this table on the specified column, with string support', function () {
      const result = table.getValue("C2",8);
      expect(result).toBe(56);
    });
  });


  //label supprimés, colonne E ajoutée, compteur +1
  table.disableRowLabels();
  table.getFreeColumn("E");
  table.incrementCounter();

    
  //supprime la colonne des labels
  describe('  #disableRowLabels()', function () {
    it('should set the row label column to null if the column label is "Label" ', function () {
      const result = table.getLabel(1);
      expect(result).toBe(null); 
    });
  });

  //crée une nouvelle colonne après la dernière avec le label spécifié
  describe('  #getFreeColumn(String) => String', function () {
    it('should set the heading of the the first available column and returns that columns index', function () {
      const result = table.getColumnHeading(3);
      expect(result).toBe("E");
    });
  });

  //augmente le compteur(qui correspond au nombre de rangée) de 1
  describe('  #incrementCounter() => ', function () {
    it('Should increment the measurement counter by one', function () {
      const result = table.getCounter();
      expect(result).toBe(11);
    });
  });

  table.reset();

  //reset le tableau
  describe('  #reset() => ', function () {
    it('Should return an empty table', function () {
      const result = table.size();
      expect(result).toBe(0);
    });
  });


  describe('  #ResultsTable() => ', function () {
    it('Should return a new table', function () {
      const result = table_test.getCounter();
      expect(result).toBe(0);
    });
  });


});

table = table2

describe('ResultsTable', function () {

  table.setNaNEmptyCells(true)
  table.getFreeColumn("E");

  //donne le label d'une colonne donnée 
  describe('  #setNaNEmptyCells(boolean NaNEmptyCells) => boolean', function () {
    it('Should set "true" to initially fill data arrays with NaNs instead of zeros', function () {
      let result = table.getValue(3,0);
      if(isNaN(result)){
        result = "NaN"
      }
      expect(result).toBe("NaN");
    });
  });

  table.setDefaultHeadings();
  //nomme les colonnes par défaut
  describe('  #setDefaultHeadings() => String', function () {
    it('Should set the headings used by the Measure command ("Area", "Mean", etc.)', function () {
      const result = table.getColumnHeadings();
      expect(result).toBe(" 	Label	Area	Mean	StdDev	Mode");
    });
  });


});

TUNIT.stats();
