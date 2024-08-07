// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let kaisuElement = document.querySelector('span#kaisu');
let answerElement = document.querySelector('span#answer');
let resultElement = document.querySelector('p#result');
let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// 入力回数（予想回数）
let kaisu = 0;


// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let YOSO = document.querySelector('#yoso')
  let yoso = parseInt(YOSO.value);
  kaisu = kaisu + 1 ;
  kaisuElement.textContent = kaisu + "回目の予想: ";
  answerElement.textContent = yoso;
  // 課題3-1: 正解判定する
  if(kotae === yoso && kaisu === 1){
    resultElement.textContent = "正解です．おめでとう!";
    kaisu += 3;
  }else if(kaisu <= 2 && yoso < kotae){
    resultElement.textContent = "まちがい．答えはもっと大きいですよ";
  }else if(kaisu <= 2 && yoso > kotae){
    resultElement.textContent = "まちがい．答えはもっと小さいですよ";
  }else if(kaisu <= 3 && yoso != kotae){
    resultElement.textContent = "まちがい．残念でした答えは"+ kotae +"です．";
  }else if(kotae == yoso || kaisu <= 4){
    resultElement.textContent = "答えは"+ kotae +"でした．すでにゲームは終わっています";
  }
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
