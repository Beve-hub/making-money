const currencySelect = document.getElementById('countryCurrency');

  // Fetch the list of currencies from the ExchangeRatesAPI.io
  fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
          const currencies = Object.keys(data.rates);
          currencies.forEach(currency => {
              const option = document.createElement('option');
              option.value = currency;
              option.text = currency;
              currencySelect.appendChild(option);
          });
      })
      .catch(error => console.error('Error fetching currencies:', error));