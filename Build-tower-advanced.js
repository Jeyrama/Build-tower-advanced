/*
Build Tower by the following given arguments:
  number of floors (integer and always greater than 0)
  block size (width, height) (integer pair and always greater than (0, 0))

Tower block unit is represented as *. 
Tower blocks of block size (2, 1) and (2, 3) would look like respectively:
  **

  **
  **
  **

for example, a tower of 3 floors with block size = (2, 3) looks like below:
  [
    '    **    ',
    '    **    ',
    '    **    ',
    '  ******  ',
    '  ******  ',
    '  ******  ',
    '**********',
    '**********',
    '**********'
  ]

and a tower of 6 floors with block size = (2, 1) looks like below:
  [
    '          **          ', 
    '        ******        ', 
    '      **********      ', 
    '    **************    ', 
    '  ******************  ', 
    '**********************'
  ]

Don't return a whole string containing line-endings 
but a list/array/vector of strings instead!
*/


// Solution

function towerBuilder(nFloors, nBlockSz) {
  const w = nBlockSz[0], h = nBlockSz[1];
  const tower = [];
  
  for (let floor = 1; floor <= nFloors; floor++) {
    let stars = '*'.repeat(w * (floor * 2 - 1));
    let space = ' '.repeat(w * (nFloors - floor));
    for (let i = 0; i < h; i++) {
      tower.push(space + stars + space);
    }
  }
  
  return tower;
}

// or

function towerBuilder(nFloors, nBlockSz) {
  const w = nBlockSz[0], h = nBlockSz[1];
  const tower = [];
  
  for (let floor = 1; floor <= nFloors; floor++) {
    let stars = '*'.repeat(w * (floor * 2 - 1));
    let space = ' '.repeat(w * (nFloors - floor));
    for (let i = 0; i < h; i++) {
      tower.push(space + stars + space);
    }
  }
  
  return tower;
}