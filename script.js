document.getElementById('savings-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const monthlyBill = parseFloat(document.getElementById('monthly-bill').value);
    const location = document.getElementById('location').value;

    // Constants
    const TNB_TARIFF = 0.509;
    const SOLAR_PANEL_COST = 3000;
    const PEAK_SUN_HOURS = 3;
    const INTEREST_RATE = 0.05;

    // Calculations
    const monthlyEnergy = monthlyBill / TNB_TARIFF;
    const dailyEnergy = monthlyEnergy / 30;
    const systemSize = dailyEnergy / (PEAK_SUN_HOURS * 0.8);
    const totalSystemCost = systemSize * SOLAR_PANEL_COST;
    const targetMonthlyPayment = monthlyBill * 0.7;

    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h3>Calculation Results</h3>
        <p>System Size (kWp): ${systemSize.toFixed(2)}</p>
        <p>Total System Cost (RM): ${totalSystemCost.toFixed(2)}</p>
        <p>Target Monthly Payment (RM): ${targetMonthlyPayment.toFixed(2)}</p>
    `;
});

document.getElementById('print-quote').addEventListener('click', function() {
    window.print();
});

document.getElementById('callback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Here you would typically send this data to your server
    alert(`Callback requested for ${name} at ${email}`);
});