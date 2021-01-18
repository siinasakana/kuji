// ランダムな整数を作成（1-6）
let randomNumber = Math.floor(Math.random() * 6 + 1);


// ボタンクリック時にくじを引く
function drawKuji() {
  // ランダムな整数を作成（1-6の例）
  let randomNumber = Math.floor(Math.random() * 6 + 1);

  // くじの結果画像を表示させる
  document.getElementsByClassName("kuji")[0].setAttribute('src', `img/kuji${randomNumber}.jpg`);　// バックティック文字で囲む事に注意(` `)

  // ボタンの文字を変更する
  document.querySelectorAll("button")[0].innerHTML = "ウイスキーおかわり！";
}



window.onload = function() {
  Particles.init({
    selector: '.background',
    sizeVariations: 30,
    color: [
      'rgb(238, 24, 238, 0.2)', 'rgba(0,287,251,.2)', 'rgba(0,187,221,.2)'
    ]
  });
};

console.log(randomNumber);