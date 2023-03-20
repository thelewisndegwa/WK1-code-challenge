function calculatePoints(speed) {
    
    const speedLimit = 70;
    const kmPerreducePoint = 5;
    
    if (speed <= speedLimit) {
      console.log("Okay");
    } else {
      demeritPoints = Math.floor((speed - speedLimit) / kmPerreducePoint);
      console.log(`Points: ${demeritPoints}`);
      if (demeritPoints >= 12) {
        console.log("License suspended");
      }
    }
  }
  calculatePoints(70);
  
  
  
  
  
  
  
  