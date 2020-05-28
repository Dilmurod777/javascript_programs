module.exports = function getSeason(date) {
  if(date === undefined || date === null){
    return "Unable to determine the time of year!";
  }

  if(!(date instanceof Date)){
    throw Error
  }

  month = date.getMonth()
  year = date.getYear()
  if(year == undefined || year == null) {
    throw Error
  }
  
  if([0, 1, 11].includes(month)){
    return 'winter'
  }else if ([2, 3, 4].includes(month)){
    return 'spring'
  }else if ([5, 6, 7].includes(month)){
    return 'summer'
  }else{
    return 'autumn'
  }
};
