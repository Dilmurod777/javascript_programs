const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) != 'string'){
    return false;
  }

  var sample = parseFloat(sampleActivity);
  if(sample <= 0 || sample > 15 || isNaN(sample)){
    return false;
  }

  k = 0.693 / HALF_LIFE_PERIOD;

  return Math.ceil(Math.log(MODERN_ACTIVITY / sample) / k);
};
