/* eslint-disable indent */
// TODO: Fix
export const useDateFormatter = (date: number | Date) => {
  const _date = typeof date === "number" ? new Date(date) : date;
  const [day, month, year, hours, minutes] = [
    _date.getDate(),
    _date.getMonth(),
    _date.getFullYear(),
    _date.getHours(),
    _date.getMinutes(),
  ];
  const fullDate = `
    ${day > 10 ? day : "0" + day}.${month > 10 ? month : "0" + month}.${year}
  `;
  const fullTime = `
    ${hours > 10 ? hours : "0" + hours}:${
    minutes > 10 ? minutes : "0" + minutes
  }
  `;

  return { fullDate, fullTime };
};
