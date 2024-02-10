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

  sessionStorage.setItem("package", selectedPlan);
  sessionStorage.setItem("amount", amount);

  window.location.href = `overview.html?amount=${encodeURIComponent(
    amount
  )}&package=${encodeURIComponent(selectedPlan)}`;

  return false;
}
