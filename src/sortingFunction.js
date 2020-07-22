export const sortingFunction = function (a, b, asc = true) {
  if (a < b) {
    return asc ? -1 : 1;
  }

  if (a > b) {
    return asc ? 1 : -1;
  }

  return 0;
};