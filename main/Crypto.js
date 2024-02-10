const cryptoImages = document.querySelectorAll(".crypto-image");
const selectedCryptoContainer = document.getElementById("selectedCrypto");
const displayedIcon = document.getElementById("displayedIcon");
const clearSelectionBtn = document.getElementById("clearSelection");

clearSelectionBtn.addEventListener("click", function () {
  displayedIcon.src = "";
  selectedCryptoContainer.classList.add("hidden");
  clearSelectionBtn.classList.remove("active");
});

cryptoImages.forEach((image) => {
  image.addEventListener("click", function () {
    const selectedCrypto = this.dataset.crypto;
    displayedIcon.src = `${selectedCrypto.toLowerCase()}.png`;
    selectedCryptoContainer.classList.remove("hidden");
    clearSelectionBtn.classList.add("active"); // Add active class
  });
});
