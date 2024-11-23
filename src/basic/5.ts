enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: string): boolean => {
  if (
    day === DayOfWeek[DayOfWeek.Saturday] ||
    day === DayOfWeek[DayOfWeek.Sunday]
  ) {
    return true;
  } else {
    return false;
  }
};
