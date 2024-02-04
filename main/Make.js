function onSubmit() {
    // Get values for the form
    const Package = document.getElementById('package').value;
    const Amount = document.getElementById('amount').value;
    const Card = document.querySelector('.selected').innerText;
  
    // Create an overview string
    const overview = `Package: ${Package}\nAmount: ${Amount}\nCard: ${Card}`;
  
    // Store the overview string
    sessionStorage.setItem("overview", overview);
  
    // Redirect to the overview page
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