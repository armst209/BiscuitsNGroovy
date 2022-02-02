/**
 * Date Converter Function for release dates
 * @param {*} dateString
 * @returns converted UTC Date
 */

export const dateConverter = (dateString) => {
  let convertedDate = new Date(dateString);
  return `${
    convertedDate.getUTCMonth() + 1
  }/${convertedDate.getUTCDate()}/${convertedDate.getUTCFullYear()}`;
};

//add function for background scroll
