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
    <table>
        <caption>
          <h3>北京市の天気</h3>
        </caption>
        <tbody>
          <div class="full-img">
          </div>
          <tr>
            <th scope="row">緯度</th>
            <td>116.3972</td>
          </tr>
          <tr>
            <th scope="row">経度</th>
            <td>39.9075</td>
          </tr>
          <tr>
            <th scope="row">天気</th>
            <td>曇りがち</td>
          <tr>
            <th scope="row">最低気温</th>
            <td>9.94</td>
          </tr>
          <tr>
            <th scope="row">最高気温</th>
            <td>9.94</td>
          </tr>
          <tr>
            <th scope="row">湿度</th>
            <td>14</td>
          </tr>
          <tr>
            <th scope="row"> 風速</th>
            <td>2.65</td>
          </tr>
        </tbody>
      </table>
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