document.getElementById("startersPlan").addEventListener("click", function () {
  selectPlan("starters");
});

document
  .getElementById("professionalPlan")
  .addEventListener("click", function () {
    selectPlan("professional");
  });

document.getElementById("companyPlan").addEventListener("click", function () {
  selectPlan("company");
});

function selectPlan(plan) {
  const nextPage = "Make.html?plan=" + encodeURIComponent(plan);
  window.location.href = nextPage;

  // Set the selected package in the dropdown
  const packageInput = document.getElementById("package");
  const options = packageInput.options;
  for (let i = 0; i < options.length; i++) {
    if (options[i].value === plan) {
      packageInput.selectedIndex = i;
      break;
    }
  }
}
