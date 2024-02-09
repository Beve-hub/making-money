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
}
