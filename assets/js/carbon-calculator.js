document.getElementById("carbonForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get user input values
  const energy = parseFloat(document.getElementById("energy").value);
  const transport = parseFloat(document.getElementById("transport").value);
  const waste = parseFloat(document.getElementById("waste").value);

  // Calculate the carbon footprint (using rough average carbon emission factors)
  const energyEmissions = energy * 0.92; // kg CO2 per kWh (average)
  const transportEmissions = transport * 0.12; // kg CO2 per km (average for car)
  const wasteEmissions = waste * 0.3; // kg CO2 per kg of waste (average)

  // Total carbon footprint
  const totalEmissions = energyEmissions + transportEmissions + wasteEmissions;

  // Display result
  document.getElementById(
    "footprintResult"
  ).textContent = `Your total carbon footprint is ${totalEmissions.toFixed(
    2
  )} kg of CO2 per month.`;

  // Suggestions to reduce emissions
  let suggestions = "";
  if (energyEmissions > 50) {
    suggestions +=
      "Consider switching to renewable energy sources to reduce your energy-related emissions.\n";
  }
  if (transportEmissions > 30) {
    suggestions +=
      "Using public transportation or an electric vehicle can help lower your carbon footprint from transportation.\n";
  }
  if (wasteEmissions > 10) {
    suggestions +=
      "Recycling and reducing waste can significantly reduce your carbon footprint.\n";
  }

  document.getElementById("suggestions").textContent =
    suggestions || "Keep up the good work in reducing emissions!";

  // Show the result section
  document.getElementById("result").classList.remove("hidden");
});
