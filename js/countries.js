//loading all countries
const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

//function to display countries

const displayCountries = (countries) => {
  const allCountriesHTML = countries.map((county) => getCountryHTML(county));
  console.log(allCountriesHTML[0]);
  const container = document.getElementById("countries");
  container.innerHTML = allCountriesHTML.join(" ");
  // console.log(county)
};

//get every single country html

const getCountryHTML = (country) => {
  //   console.log(country);
  const { name, flags } = country; //destructuring object
  return `
  <div class="single-country">
    <h2>${name.common}</h2>
    <img src="${flags.svg}">
  </div>
  `;
};

loadCountries();
