// Retrieve values from session storage
let Amount = sessionStorage.getItem('Amount'); // Corrected case
let Package = sessionStorage.getItem('Package'); // Corrected case
let Card = sessionStorage.getItem('Card'); // Corrected case

// Display user choices in summary if values are present
const overviewElement = document.getElementById('overview');
if (overviewElement && Amount !== null && Package !== null && Card !== null) {
    overviewElement.innerHTML = `Amount: $${Amount}<br>Package: ${Package}<br>Card: ${Card}`;
} else {
    console.error("Session storage values not found");
}