function onSubmit() {
  // Get values for the form
  const packageInput = document.getElementById('package');
  const amountInput = document.getElementById('amount');
  const selectedCard = document.querySelector('.selected');

  // Check if required elements exist
  if (!packageInput || !amountInput || !selectedCard) {
      console.error("Required form elements not found");
      return false;
  }

  const Package = packageInput.value;
  const Amount = amountInput.value;
  const Card = selectedCard.innerText;

  // Create an overview string
  const overview = `Package: ${Package}\nAmount: ${Amount}\nCard: ${Card}`;

  // Store the overview string in session storage
  sessionStorage.setItem("Package", Package);
  sessionStorage.setItem("Card", Card);
  sessionStorage.setItem("Amount", Amount);

  // Redirect to the overview page with parameters in the URL
  window.location.href = `overview.html?amount=${Amount}&package=${Package}&card=${Card}`;

  // Prevent the form from submitting the traditional way
  return false;
}

function handleCryptoOptionClick(cryptoOption) {
  // Remove the "selected" class from all options
  var cryptoOptions = document.querySelectorAll('.crypto-option');
  cryptoOptions.forEach(function (option) {
      option.classList.remove('selected');
  });

  // Add the "selected" class to the clicked option
  cryptoOption.classList.add('selected');
}