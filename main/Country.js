const countrySelect = document.getElementById('country');

  // Fetch the list of countries from the Restcountries API
  fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
          data.forEach(country => {
              const option = document.createElement('option');
              option.value = country.alpha3Code;
              option.text = country.name.common;
              countrySelect.appendChild(option);
          });
      })
      .catch(error => console.error('Error fetching countries:', error));