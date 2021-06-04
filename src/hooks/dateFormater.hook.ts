export const useDateFormater = (date: number | Date) => {
  const _date = typeof date === "number" ? new Date(date) : date;
  const [day, month, year] = [
    _date.getDate(),
    _date.getMonth(),
    _date.getFullYear(),
  ];
  const fullDate = `
    ${day > 10 ? day : "0" + day}.${month > 10 ? month : "0" + month}.${year}
  `;

  return { fullDate };
};
