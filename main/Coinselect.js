function handleCryptoOptionClick(cryptoOption) {
    // Remove the "selected" class from all options
    var cryptoOptions = document.querySelectorAll('.crypto-option');
    cryptoOptions.forEach(function (option) {
        option.classList.remove('selected');
    });
  
    // Add the "selected" class to the clicked option
    cryptoOption.classList.add('selected');
  }