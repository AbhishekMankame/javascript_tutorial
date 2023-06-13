// strict mode is a special mode which makes us to write secure JavaScript code
'use strict';   // this statement should be the very first statement in the script, if there is any code before this statement, it will not work in strict mode
// strict mode is used to avoid accidental errors in the code

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // this will not throw any error in normal mode, but in strict mode it will throw an error