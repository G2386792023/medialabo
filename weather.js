print();

function print(){
////////// 課題3-2 ここからプログラムを書こう
const resultDiv = document.getElementById('result');
const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('searchkey');
const searchButton = document.getElementById('searchButton');

// Create elements and append them to resultDiv


let b = document.querySelector('#submit');
b.addEventListener('click', greeting);

function greeting() {
    let i = document.querySelector('Input[name="city"]');
    let city = i.value;
    console.log(city);
}


let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', sendRequest);

function sendRequest() {
    let kii = document.querySelector('Input[name="city"]').value;
    if(kii == '北京'||kii == '中華人民共和国'){
      kii = 1816670;
    }else if(kii == 'カイロ'||kii == 'エジプト'){
      kii = 360630;
    }else if(kii == 'モスクワ'||kii == 'ロシア'){
      kii = 524901;
    }else if(kii == 'ヨハネスブルク'||kii == '南アフリカ'){
      kii = 993800;
    }else if(kii == '東京'||kii == '日本'){
      kii = 1850147;
    }else if(kii == 'シンガポール'){
      kii = 1880252;
    }else if(kii == 'シドニー'||kii == 'オーストラリア'){
      kii = 2147714;
    }else if(kii == 'ロンドン'||kii == 'イギリス'){
      kii = 2643743;
    }else if(kii == 'パリ'||kii == 'フランス'){
      kii = 2968815;
    }else if(kii == 'リオデジャネイロ'||kii == 'ブラジル'){
      kii = 3451189;
    }else if(kii == 'ニューヨーク'||kii == 'アメリカ合衆国'){
      kii = 5128581;
    }else if(kii == 'ロサンゼルス'||kii == 'アメリカ合衆国'){
      kii = 5368361;
    }else{
      resultDiv.innerHTML = '検索条件に一致するデータは存在しません';
      return;
    }
    // URL を設定
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/"+kii+".json";

    // 通信開始
    axios.get(url)
        .then(displayWeatherData);   // 通信成功時の処理
}

function displayWeatherData(resp) {
  // サーバから送られてきたデータを取得
  let data = resp.data;
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

}