'use strict';

class ResultsTable {
    /**
     * Constructs a ResultsTable with 'nRows' rows.
     * Constructs an empty ResultsTable with the counter=0, no columns
     * and the precision set to 3 or the "Decimal places" value in
     * Analyze/Set Measurements if that value is higher than 3.
     * @constructor
     * 
     * 
     * @author Created by ijdoc2js
     */
    constructor (nRows = 0) {
      this.nRows = nRows;
      this.nColumns = 0;
      this.title = 'MyTable';
      this.lastColumn = -1;

      // ALl we need to display the ResultsTable in HTML
      this.table = [];
      
      // Add data2d for data storage
      this.dataset = []; 

    };


    getTitle() {
        // TODO Check if table not already displayed
        return this.title;
      };

    addColumns() {
        this.nColumns++;
        this.dataset.push([]);
    };

    addValueInt(column, value) {
        this.dataset[column].push(value);
      };


    getValueInt(column, row){
        let value = this.dataset[column][row];
        return value;
    }

    getValueString(column, row){
        let value = this.dataset[column][row];
        return value;
    }

    // Returns a copy of the given column as a float array, or null if the column is empty.
    getColumn(column){
        if ((column <0) || (column >= this.nColumns))
        {
            throw new Error("Index out of range");
        }
        else{
            let dataArray = [];
            for (let i=0; i<this.dataset.length;i++)
            {
                if (this.dataset[i][column] == null)
                {
                    return null;
                }
                else{
                dataArray.push(this.dataset[i][column]);
                }
            }           
            return dataArray;
        }
    }

    // Returns true if the specified column exists and is not empty.
    columnExists(column){
        if ((column <0) || (column >= this.nColumns))
        {
            return false;
        }
        else 
        {
            let data = this.dataset[column];
            return data != null;
        }
    }

    // Returns the index of the last used column, or -1 if no columns are used.
    getLastColumn(){
        if(this.nColumns == null)
        {
            return -1;
        }
        else
        {
            let lastCol = this.nColumns + this.lastColumn;
            return lastCol;
        }
    }


    
}

let test = new ResultsTable();
console.log(test.getTitle());
console.log(test);
test.addColumns();
test.addColumns();
console.log(test);

test.addValueInt(1,12);
test.addValueInt(0,2);
test.addValueInt(1,3);
test.addValueInt(0,8);
console.log(test);
console.log(test.getValueInt(1,1))

console.log(test.getColumn(0));
console.log(test.columnExists(0));
console.log(test.getLastColumn());
