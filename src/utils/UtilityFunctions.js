/**
 * Date Converter Function for release dates
 * @param {*} dateString
 * @returns converted UTC Date
 */

export const dateConverter = (dateString) => {
  let convertedDate = new Date(dateString);
  return `${convertedDate.getUTCMonth() + 1
    }/${convertedDate.getUTCDate()}/${convertedDate.getUTCFullYear()}`;
};

/**
 * Release Object To Array - converts object of objects to array of objects.
 * @param {*} releaseData 
 * @returns an array
 */
//!! ask Erich/Maanuj if they can just return an array of objects instead of doing this

export const releaseObjectToArray = (releaseData) => {
  if (typeof releaseData === "object" && releaseData !== null) {
    let arrayFromObject = Object.keys(releaseData).map((key) => {
      return releaseData[key];
    });
    return arrayFromObject;
  }
}



