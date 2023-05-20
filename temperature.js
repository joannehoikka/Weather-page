const showData = (data) => {

    const temp = [];
    const time = [];

    data.forEach((reading) => {
        temp.push(reading.temperature);
        time.push(reading.date_time);
    });

    console.log(temp);
    console.log(time);

    // taulukko
    const tableBody = document.getElementById("table");
    
    data.forEach((reading) => {
    const row = document.createElement("tr");

    const dateCell = document.createElement("td");
    dateCell.textContent = reading.date_time;
    row.appendChild(dateCell);

    const tempCell = document.createElement("td");
    tempCell.textContent = reading.temperature;
    row.appendChild(tempCell);

    tableBody.appendChild(row);
});

    // kaavio
    const context = document.getElementById("temperature").getContext("2d");
    const temperatureChart = new Chart(context, {
        type: "bar",
        data: {
            labels: time,
        datasets: [{
            label: "Celcius",
            data: temp, 
            backgroundColor: 'yellow',
            borderColor: 'orange',
            borderWidth: 4, 
        }
    ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                }
            }
        }
    });

  // statistiikka alkaa tästä
  let median, mode, range, stdDeviation;

  // mean
  const temperatures = data.map((item) => parseFloat(item.temperature));
  temperatures.sort((a, b) => a - b);
  const mean = (temperatures.reduce((a, b) => a + b, 0) / temperatures.length).toFixed(2);

  // median
  const mid = Math.floor(temperatures.length / 2);
  if (temperatures.length % 2 === 0) {
    median = ((temperatures[mid - 1] + temperatures[mid]) / 2).toFixed(2);
  } else {
    median = temperatures[mid].toFixed(2);
  }

  // mode
  const counts = {};
  let maxCount = 0;
  for(let i = 0; i < temperatures.length; i++) {
        const num = temperatures[i];
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mode = num.toFixed(2);
        }
    }

  // range
  range = (temperatures[temperatures.length - 1] - temperatures[0]).toFixed(2);

  // standard deviation
  const variance = temperatures.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / temperatures.length;
  stdDeviation = Math.sqrt(variance).toFixed(2);

  const meanTemp = document.getElementById("mean");
  meanTemp.innerText = `Mean: ${mean}°C`;

  const medianTemp = document.getElementById("median");
  medianTemp.innerText = `Median: ${median}°C`;

  const modeTemp = document.getElementById("mode");
  modeTemp.innerText = `Mode: ${mode}°C`;

  const rangeTemp = document.getElementById("range");
  rangeTemp.innerText = `Range: ${range}°C`;

  const stdDeviationTemp = document.getElementById("stdDeviation");
  stdDeviationTemp.innerText = `Standard Deviation: ${stdDeviation}°C`;

};

const fetchData = async () => {
    try{
        const response = await fetch(
        `http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature`);
        const data = await response.json();
        console.log(data);
        showData(data);
    } catch(error) {
        console.log(error);
    }
};

fetchData();
