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
  //getRandomCountry(data);
  loadData();

  paintOdds();
  addDeleteButtons();
  // call your functions here 

}

const loadData = () => {
  data = {
    name: 'juan',
    email: '<script>alert("attack!");</script>'
  }
  var userDiv = document.createElement('DIV')
  userDiv.innerHTML = `${data.email}`;
  document.body.appendChild(userDiv);
}

function alertame() {
  alert("hola!");
}

/**
 * Takes the data object and appends it to the DOM in a organized list.
 * @param {object} data 
 */
const showCountries = (data) => {
  // Gets the contaienr to add the country list.
  let listContainer = document.getElementById("countries_content");

  let countryList = '<ul class="country-list">';
 
  data.forEach(country => {

    countryList += `<li id="${country.name}" class="list-item"><div class="country-box"><p>Country: ${country.name}</p><p>Capital: ${country.capital}</p></div></li>`;
  });

  countryList += '</ul>';

  listContainer.innerHTML = countryList;
}

const getRandomCountry = (data) => {
  let randomCountry;
  let randomPick = Math.floor(Math.random()*data.length);

  randomCountry = data[randomPick];

  document.getElementById('random-country').innerHTML = `${randomCountry.name} - ${randomCountry.capital}`;
  console.log(randomCountry.name + " " + randomCountry.capital);
}



















// check if number is odd or not
function isOdd(num) { return !!(num % 2);}

// paint odd entries in list red
const paintOdds = () => {
  let listContainer = document.getElementById("countries_content");
  let list = listContainer.firstChild;

  list.childNodes.forEach((node,index) => {
    if (isOdd(index)) {
      node.firstChild.style.backgroundColor = '#1f252cbb';
    }
  });
}

const addDeleteButtons = () => {
  let listContainer = document.getElementById("countries_content");
  let list = listContainer.firstChild;

  list.childNodes.forEach((node) => {  

      let closeButton = document.createElement("BUTTON");
      closeButton.classList.add('country-box--close');
      let closeButtonText = document.createTextNode("X");
      closeButton.appendChild(closeButtonText); 
      closeButton.addEventListener('click', obliterateGrandParent)
      
      node.firstChild.appendChild(closeButton); 
  });

}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

const obliterateGrandParent = (e) => {

  let assasinationTarget = e.target.parentNode.parentNode;
  removeElement(assasinationTarget);
  
}

const removeElement = (element) => {
  element.parentNode.removeChild(element);
}

// Running the API call and passing initPage as a callback to start all page operations.
preInit(initPage);