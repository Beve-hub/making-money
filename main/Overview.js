// Retrieve values from URL parameters
let Params = new URL(document.location).SearchParams;
let amount = Params.get('amount');
let packageValue = Params.get('package');
let card = Params.get('card');

// Display user choices in summary
document.getElementById('overview').innerHTML = `Amount: $${amount}<br>Package: ${packageValue}<br>card: ${packageValue}`;