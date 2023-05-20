const showData = (data) => {
    const humidity = [];
    const time = [];

    data.forEach((reading) => {
        humidity.push(reading.humidity_in);
        time.push(reading.date_time);
    });

    console.log(humidity);
    console.log(time);

    // taulukko
    const tableBody = document.getElementById("table");
    
    data.forEach((reading) => {
    const row = document.createElement("tr");

    const dateCell = document.createElement("td");
    dateCell.textContent = reading.date_time;
    row.appendChild(dateCell);

    const humidityCell = document.createElement("td");
    humidityCell.textContent = reading.humidity_in;
    row.appendChild(humidityCell);

    tableBody.appendChild(row);
    });

    // kaavio
    const context = document.getElementById("humidity").getContext("2d");
    const humidityChart = new Chart(context, {
        type: "line",
        data: {
            labels: time,
        datasets: [{
            label: "Percent (%)",
            data: humidity, 
            backgroundColor: 'violet',
            borderColor: 'purple',
            borderWidth: 4, 
        }
    ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    // Statistiikka alkaa tästä
    let median, mode, range, stdDeviation;

    // mean
    const humidityIn = data.map((item) => parseFloat(item.humidity_in));
    humidityIn.sort((a, b) => a - b);
    const mean = (humidityIn.reduce((a, b) => a + b, 0) / humidityIn.length).toFixed(2);
  

    // median
    const mid = Math.floor(humidityIn.length / 2);
    if (humidityIn.length % 2 === 0) {
        median = ((humidityIn[mid - 1] + humidityIn[mid]) / 2).toFixed(2);
    } else {
        median = humidityIn[mid].toFixed(2);
    }

    // mode
    const counts = {};
    let maxCount = 0;
    for(let i = 0; i < humidityIn.length; i++) {
        const num = humidityIn[i];
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mode = num.toFixed(2);
        }
    } 

    // range
    range = (humidityIn[humidityIn.length - 1] - humidityIn[0]).toFixed(2);

    // standard deviation
    const variance = humidityIn.reduce((a, b) => a +  Math.pow(b - mean, 2), 0) / humidityIn.length;
    stdDeviation = Math.sqrt(variance).toFixed(2);


    const meanHumidity = document.getElementById("mean");
    meanHumidity.innerText = `Mean: ${mean}%`;

    const medianHumidity = document.getElementById("median");
    medianHumidity.innerText = `Median: ${median}%`;

    const modeHumidity = document.getElementById("mode");
    modeHumidity.innerText = `Mode: ${mode}%`;

    const rangeHumidity = document.getElementById("range");
    rangeHumidity.innerText = `Range: ${range}%`;

    const stdDeviationHumidity = document.getElementById("stdDeviation");
    stdDeviationHumidity.innerText = `Standard Deviation: ${stdDeviation}%`;
        
};

const fetchData = async () => {
    try{
        const response = await fetch(
        `http://webapi19sa-1.course.tamk.cloud/v1/weather/humidity_in`);
        const data = await response.json();
        console.log(data);
        showData(data);
    } catch(error) {
        console.log(error);
    }
};

fetchData(); 
