// Open a dialog box to choose the path for unitary tests
const IJ_TUNIT = IJ.getDirectory(''); 

// Import.s
// Tiny Homemade Jasmine-like framework running in ImageJ
load(`${IJ_TUNIT}/TUNIT.js`);

print('\\Clear');

// Test Suite for ResultsTable
load(`${IJ_TUNIT}/ResultsTable.js`);

