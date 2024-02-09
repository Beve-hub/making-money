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




  // Store the overview string in session storage
  sessionStorage.setItem("package", "Package");
  sessionStorage.setItem("card", "Card");
  sessionStorage.setItem("amount", "Amount");

  // Redirect to the overview page with parameters in the URL
  window.location.href = `overview.html?amount=${Amount}&package=${Package}&card=${Card}`;

  // Prevent the form from submitting the traditional way
  return false;
}

