// Open a dialog box to choose the path for unitary tests
const IJ_TUNIT = IJ.getDirectory(''); 

// Import.s
load(`${IJ_TUNIT}/TUNIT.js`);

print('\\Clear');

// Test Suite for ResultsTable
load(`${IJ_TUNIT}/ResultsTable.js`);

