module.exports = function createDreamTeam(members) {
  if(!(members instanceof Array)){
    return false;
  }

  var letters = [];

  for(var i=0;i<members.length; i++){
    if(typeof(members[i]) != 'string'){
      continue;
    }

    letters.push(members[i].trim()[0].toUpperCase());
  }

  letters.sort();
  
  return letters.join(''); 
};