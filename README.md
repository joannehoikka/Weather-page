# Weather-page
Final frontend project for the "Iot and Web development"- course (May 2023)

Toteutin projektin niin, että tein jokaiselle HTML sivulle oman Javascript tiedoston. Eli
- index.html + latest.js + style.css = 50 latest readings- sivu.
- temperature.html + temperature.js + style.css = Temperature 20 latest readings- sivu.
- humidity.html + humidity.js + style.css = Humidity In 20 latest readings- sivu.
      
 Sivujen ylälaidassa on navigointi toisille sivuille.
 Ensimmäisellä sivulla näkyy taulukko 50 viimeisimmästä mittauksesta.
 Toisella sivulla on 20 viimeisintä mittausta lämpötilasta, niistä tehty kaavio, sekä statistiikka laskut.
 Kolmannella sivulla näkyy samat kuin toisella, mutta mittaukset ovat ilmankosteudesta sisätiloissa.


Project requirements:

1. You will need to retrieve weather station data from a backend API that provides data for temperature, humidity, wind speed, and other weather parameters.
2. Develop a responsive user interface to display the weather data in table and in a graph or chart format. The user interface should be easy to use and provide a clear view of the data.
3. Use HTML, CSS and JavaScript to develop the frontend application. 
4. CSS frameworks like Bootstrap 5 and JavaScript libraries like Chart.js can be used.
5. Test your application thoroughly to ensure that it is reliable, functional, and user-friendly.

PHASE 1
Implement at 3 views with navigation between each view. Each view should fetch weather data from the Backend API and display it in the following ways:
- View 1 - Fetch and display the last 50 readings on a table
- View 2 - Fetch and display only the last 20 readings of a specific measurement on a table. e.g wind speed
- View 3 - Fetch and display only the last 20 readings of a specific measurement on a table. e.g humidity

PHASE 2
Using a 3rd party library like Chart.js, visualize the data of the specific measurement chosen for view 2 and view 3

PHASE 3
On view 2 and view 3 display the following statistical information for the last 20 values:
1. Mean: The mean is the average of all the data points. It provides an overall picture of the data and can be useful in identifying trends over time.
2. Median: The median is the middle value of the data set. It is useful in identifying outliers or extreme values that may skew the mean.
3. Mode: The mode is the value that occurs most frequently in the data set. It can be useful in identifying the most common weather condition for the measurement.
4. Range: The range is the difference between the maximum and minimum values in the data set. It provides an idea of the variability of the data.
5. Standard deviation: The standard deviation measures the spread of the data around the mean. It provides an idea of the variability of the data and how closely the data points cluster around the mean.
