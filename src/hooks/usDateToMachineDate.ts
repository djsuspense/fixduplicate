const usDateToMachineDate = (dateStr: string): Date => {
  let [month, day, year] = dateStr.split("/").map(num => {
    if (num.length === 1) {
      return "0" + num;
    } else {
      return num;
    }
  });

  // Not using the time, just the date, but making sure it's right
  return new Date(`${year}-${month}-${day}T00:00:00${process.env.EVENT_TIME_ZONE_OFFSET}`);
}

export default usDateToMachineDate;
