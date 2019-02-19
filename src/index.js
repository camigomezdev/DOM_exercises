// DOM_exercises logic

/* NOTE: This code is over-commented, it is not usual or advisable to document 
 * your code in this way as it is highly inefficient.
 * This has been done to provide an exaggeratedly clear base for the exercise.
 */

/**
 * Makes an API call and then executes a callback function.
 * @param {function} callback 
 */
let preInit = (callback) => {
  // Make API call
  axios.get('https://restcountries.eu/rest/v2/all')
    // after, execute this
    .then(
      // function to execute with the obtained response
      (response) => {
        // Format data.
        let data = response.data.map(country => {
          return {
            'name': country.name,
            'capital': country.capital,
            'population': country.population,
            'nativeName': country.nativeName
          }
        });
        // Execute callback once formating is done
        callback(data);
      });
}

/**
 * Receibes and passes on the data object to be used along the page.
 * @param {object} data 
 */
const initPage = (data) => {
  // Show country list in the DOM
  showCountries(data);

  // call your functions here 

}

/**
 * Takes the data object and appends it to the DOM in a organized list.
 * @param {object} data 
 */
let showCountries = (data) => {
  // Gets the contaienr to add the country list.
  let listContainer = document.getElementById("countries_content")
  // creates our list and adds the initial tag.
  let countryList = '<ul>';
  // Goes through each entry in data and treats it as "country"
  data.forEach(country => {
    // adds each country formatted inside and LI to our UL.
    // this line is using backtick notation, can be writen like '<li>' + country.name +'</li>'
    // in an "old" way, which is ok if you prefer it.
    countryList += `<li>${country.name}</li>` 
  });
  // adds the closing tag to our list.
  countryList += '</ul>'
  // append the list contents to the container in the DOM.
  listContainer.innerHTML = countryList;
}

// Running the API call and passing initPage as a callback to start all page operations.
preInit(initPage);