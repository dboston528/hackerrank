
function countingValleys(stepsCount, stepsString) {
  let mountainCount = 0;
  let valleyCount = 0;
  let currentLevel = 0;
  let previousLevel = 0;
  
  for (let i = 0; i < stepsString.length; i++) {
    previousLevel  = currentLevel;
    if (stepsString[i] === 'U') {
        currentLevel +=1;
        } else {
          currentLevel -= 1;
        }
    
    if (previousLevel === 0 && currentLevel <0) {
      valleyCount += 1;
    }
  }
  
  return valleyCount;
}

