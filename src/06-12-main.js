function getTaxiCount(passengersCount) {
    if (passengersCount <= 0) return 0;
    
    if (passengersCount <= 4) return 1;
    if (passengersCount <= 7) return 1;
    const c = passengersCount / 7;
    if (passengersCount % 7 === 0) return c;
    return Math.trunc(c) + 1;
    
  }

  console.log(getTaxiCount(22));