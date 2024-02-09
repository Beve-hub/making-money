function onSubmit() {
  // Get values for the form
  const amountInput = document.getElementById("amount");
  const packageInput = document.getElementById("package");

  // Check if required elements exist
  if (!amountInput || !packageInput) {
    console.error("Required form elements not found");
    return false;
  }

  // Get the selected plan
  const selectedPlan = packageInput.value;

  // Get the selected amount
  const amount = amountInput.value;

  // Store the selected plan and amount in session storage
  sessionStorage.setItem("package", selectedPlan);
  sessionStorage.setItem("amount", amount);

  // Redirect to the overview page with parameters in the URL
  window.location.href = `overview.html?amount=${encodeURIComponent(
    amount
  )}&package=${encodeURIComponent(selectedPlan)}`;

  // Prevent the form from submitting the traditional way
  return false;
}
