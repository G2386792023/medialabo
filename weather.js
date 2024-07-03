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
let result = document.querySelector('div#result');
function displayWeatherData() {
  result.innerHTML = `
    <h2>北京市の天気情報</h2>
    <p>緯度: ${data.coord.lat}</p>
    <p>経度: ${data.coord.lon}</p>
    <p>天気: ${data.weather[0].description}</p>
    <p>最低気温: ${data.main.temp_min} ℃</p>
    <p>最高気温: ${data.main.temp_max} ℃</p>
    <p>湿度: ${data.main.humidity} %</p>
    <p>風速: ${data.wind.speed} m/s</p>
  `;
}

// ページが読み込まれた時に呼び出す
document.addEventListener('DOMContentLoaded', displayWeatherData);
console.log("世界の天気");
console.log("北京市の天気");
console.log("緯度:116.3972");
console.log("軽度:39.9075");
console.log("天気:曇りがち");
console.log("最低気温:9.94");
console.log("最高気温:9.94");
console.log("湿度:14");
console.log("風速:2.65");