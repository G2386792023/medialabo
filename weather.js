let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
const resultDiv = document.getElementById('result');
const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');

// Create elements and append them to resultDiv
function displayWeatherData(cityName) {
  // Clear any existing content
  resultDiv.innerHTML = '';

  // Create a heading
  let h3 = document.createElement('h3');
  h3.textContent = data.name + 'の天気';
  resultDiv.appendChild(h3);

  // Create a table
  let table = document.createElement('table');
  
  // Add table caption
  let caption = document.createElement('caption');
  caption.textContent = '天気情報';
  table.appendChild(caption);

  // Create table rows and cells for weather data
  let tbody = document.createElement('tbody');
  
  // Latitude and Longitude
  let trCoord = document.createElement('tr');
  let tdCoordLabel = document.createElement('td');
  tdCoordLabel.textContent = '緯度:';
  let tdCoordValue = document.createElement('td');
  tdCoordValue.textContent = data.coord.lon;
  trCoord.appendChild(tdCoordLabel);
  trCoord.appendChild(tdCoordValue);
  tbody.appendChild(trCoord);

  let trLon = document.createElement('tr');
  let tdLonLabel = document.createElement('td');
  tdLonLabel.textContent = '経度:';
  let tdLonValue = document.createElement('td');
  tdLonValue.textContent = data.coord.lat;
  trLon.appendChild(tdLonLabel);
  trLon.appendChild(tdLonValue);
  tbody.appendChild(trLon);

  // Weather description
  let trWeather = document.createElement('tr');
  let tdWeatherLabel = document.createElement('td');
  tdWeatherLabel.textContent = '天気:';
  let tdWeatherValue = document.createElement('td');
  tdWeatherValue.textContent = data.weather[0].description;
  trWeather.appendChild(tdWeatherLabel);
  trWeather.appendChild(tdWeatherValue);
  tbody.appendChild(trWeather);

  // Temperature
  let trTempMin = document.createElement('tr');
  let tdTempMinLabel = document.createElement('td');
  tdTempMinLabel.textContent = '最低気温:';
  let tdTempMinValue = document.createElement('td');
  tdTempMinValue.textContent = data.main.temp_min;
  trTempMin.appendChild(tdTempMinLabel);
  trTempMin.appendChild(tdTempMinValue);
  tbody.appendChild(trTempMin);

  let trTempMax = document.createElement('tr');
  let tdTempMaxLabel = document.createElement('td');
  tdTempMaxLabel.textContent = '最高気温:';
  let tdTempMaxValue = document.createElement('td');
  tdTempMaxValue.textContent = data.main.temp_max;
  trTempMax.appendChild(tdTempMaxLabel);
  trTempMax.appendChild(tdTempMaxValue);
  tbody.appendChild(trTempMax);

  // Humidity
  let trHumidity = document.createElement('tr');
  let tdHumidityLabel = document.createElement('td');
  tdHumidityLabel.textContent = '湿度:';
  let tdHumidityValue = document.createElement('td');
  tdHumidityValue.textContent = data.main.humidity;
  trHumidity.appendChild(tdHumidityLabel);
  trHumidity.appendChild(tdHumidityValue);
  tbody.appendChild(trHumidity);

  // Wind speed
  let trWindSpeed = document.createElement('tr');
  let tdWindSpeedLabel = document.createElement('td');
  tdWindSpeedLabel.textContent = '風速:';
  let tdWindSpeedValue = document.createElement('td');
  tdWindSpeedValue.textContent = data.wind.speed;
  trWindSpeed.appendChild(tdWindSpeedLabel);
  trWindSpeed.appendChild(tdWindSpeedValue);
  tbody.appendChild(trWindSpeed);

  // Append tbody to table
  table.appendChild(tbody);

  // Append table to resultDiv
  resultDiv.appendChild(table);
}

// Call displayWeatherData to show weather information
cityForm.addEventListener('submit', function(event) {
  event.preventDefault(); // フォームのデフォルトの動作を停止

  // 入力された都市名を取得
  const cityName = cityInput.value;

  // 天気データを表示する関数を呼び出す
  displayWeatherData(cityName);

  // コンソールに入力された都市名を表示
  console.log('入力された都市名:', cityName);
});