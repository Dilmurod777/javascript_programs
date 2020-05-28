module.exports = function countCats(backyard) {
  var number = 0;
  for(var i=0;i<backyard.length; i++){
    for(var j=0;j<backyard[i].length;j++){
      if(backyard[i][j] == '^^'){
        number += 1
      }
    }
  }

  return number;
};
