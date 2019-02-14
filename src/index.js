let getCountries = () => {
  return new Promise((resolve) => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(
        (response) => {
          let countries = response.data.map(country => {
            return {
              'name': country.name,
              'capital': country.capital,
              'population': country.population,
              'nativeName': country.nativeName
            }
          });
          resolve(countries);
        });
  });
}

let showCountries = async () => {
  await getCountries().then((countries) => {
    let container = document.getElementById("countries_content")
    let element = `<ul>`;
    countries.forEach(country => {
      element += `<li>${country.name}</li>`
    });
    element += `</ul>`
    container.innerHTML = element;
  })
}

showCountries();
