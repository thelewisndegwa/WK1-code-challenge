function calculatePoints(speed) {
    //Define the speed limit and the number of kilometers per reduced point as constants.
    const speedLimit = 70;
    const kmPerreducePoint = 5;
    //Initialize the reduce points variable to zero.
  //Check if the speed is less than or equal to the speed limit. If it is, print "Okay".
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
  
  
  
  
  
  
  
  