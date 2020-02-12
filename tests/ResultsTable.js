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
