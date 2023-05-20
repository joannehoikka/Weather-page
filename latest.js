const showData = (data) => {
    
    const weatherdata = [];
    const time = [];

    console.log(weatherdata);
    console.log(time);

    // taulukko
    const tableBody = document.getElementById("table");
    
    data.forEach((reading) => {
    const row = document.createElement("tr");

    const dateCell = document.createElement("td");
    dateCell.textContent = reading.date_time;
    row.appendChild(dateCell);

    const dataType = Object.keys(reading.data)[0];
    const propertyCell = document.createElement("td");
    propertyCell.textContent = dataType;
    row.appendChild(propertyCell);

    const dataCell = document.createElement("td");
    dataCell.textContent = reading.data[Object.keys(reading.data)[0]];
    row.appendChild(dataCell);

    tableBody.appendChild(row);
});
}

const fetchData = async () => {
    try{
        const response = await fetch(`http://webapi19sa-1.course.tamk.cloud/v1/weather/limit/50`);
        const data = await response.json();
        console.log(data);
        showData(data);
    } catch(error) {
        console.log(error);
    }
};

fetchData(); 
