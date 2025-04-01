document.addEventListener("DOMContentLoaded", function () {
  fetch("../api/emissions.json") // Fetch JSON file
    .then((response) => response.json())
    .then((data) => {
      displayChart(data);
    })
    .catch((error) => console.error("Error loading data:", error));
});

function displayChart(data) {
  const ctx = document.getElementById("emissionsChart").getContext("2d");

  // Extract Data
  const states = data.map((entry) => entry.state);
  const co2Emissions = data.map((entry) => entry.co2);
  const ch4Emissions = data.map((entry) => entry.ch4);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: states,
      datasets: [
        {
          label: "CO₂ Emission per Capita (kg)",
          data: co2Emissions,
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "CH₄ Emission per Capita (kg)",
          data: ch4Emissions,
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
