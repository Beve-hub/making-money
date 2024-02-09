function onSubmit() {
  // Get values for the form
  const amountInput = document.getElementById("amount");
  const selectedCard = document.querySelector(".selected");

  // Check if required elements exist
  if (!amountInput || !selectedCard) {
    console.error("Required form elements not found");
    return false;
  }

  // Get the selected plan
  let selectedPlan;
  if (document.getElementById("startersPlan").checked) {
    selectedPlan = "starters";
  } else if (document.getElementById("professionalPlan").checked) {
    selectedPlan = "professional";
  } else if (document.getElementById("companyPlan").checked) {
    selectedPlan = "company";
  } else {
    console.error("No plan selected");
    return false;
  }

  // Update package input with the selected plan
  const packageInput = document.getElementById("package");
  if (packageInput) {
    packageInput.value = selectedPlan;
  } else {
    console.error("Package input element not found");
    return false;
  }

  const Amount = amountInput.value;
  const Card = selectedCard.innerText;

  // Store the overview data in session storage
  sessionStorage.setItem("package", selectedPlan);
  sessionStorage.setItem("card", Card);
  sessionStorage.setItem("amount", Amount);

  // Redirect to the overview page with parameters in the URL
  window.location.href = `overview.html?amount=${Amount}&package=${selectedPlan}&card=${Card}`;

  // Prevent the form from submitting the traditional way
  return false;
}
