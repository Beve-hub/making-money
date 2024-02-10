document.addEventListener("DOMContentLoaded", function () {
  // Retrieve values from session storage
  let Amount = sessionStorage.getItem("Amount");
  let Package = sessionStorage.getItem("Package");
  let Card = sessionStorage.getItem("Card");

  // Display user choices in summary if values are present
  const overviewElement = document.getElementById("overview");
  if (overviewElement && Amount !== null && Package !== null && Card !== null) {
    overviewElement.innerHTML = `
        <div class="mt-3">
          <h3 class="custom-bold">$${Amount}</h3>
          <p class="custom-font-size-16">${Card}</p>
        </div>
        <div class="my-4">
          <div class=" d-flex align-items-center justify-content-between">
            <p>Package:</p>
            <p>${Package}</p>
          </div>
          <!-- Include other details here -->
        </div>
      `;
  } else {
    console.error("Session storage values not found");
  }
});
