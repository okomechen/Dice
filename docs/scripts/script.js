let ctx;
var nextOrder = document.getElementById("nextOrder");
var img = document.getElementById("diceImage"); //サイコロ画像用のid取得
var idx = 0; //サイコロの目の変数
var previdx = 0; //ひとつ前のサイコロの目
var rouletteCount = 0; //何回サイコロを回したか
var expectedNumber = 0;

function append(dice) {
  // 数字表示
  document.querySelector("input").value = dice;
  console.log(document.querySelector("input").value);
  nextOrder.innerHTML = "ルーレットを回してね";
  expectedNumber = dice;
  document.getElementById("diceRoll").disabled = false;
}

function diceEnd() {
  ctx.clearRect(0, 0, 500, 500);
}

function diceRoll() {
buttonFalse();//ルーレット中はボタンが押せない

  const intervalId = setInterval(() => {
    diceChange();

    if (rouletteCount > 15) {
      clearInterval(intervalId);
      rouletteCount = 0;
      buttonTrue();

      if (expectedNumber == idx) {
        //予想したサイコロの目が一致していたら
        nextOrder.innerHTML = "あたりだよ";
      } else nextOrder.innerHTML = "はずれ";
    }
  }, 200); //15回実行して止める
}

function diceChange() {
  idx = Math.floor(Math.random() * 6) + 1; //次のサイコロの目
  while (previdx == idx) {
    idx = Math.floor(Math.random() * 6) + 1; //被ったら再抽選
  }
  previdx = idx;

  img.src = "images/dice" + idx + ".png"; //画像の指定
  console.log(idx);
  rouletteCount++;
}

function buttonTrue(){
  document.getElementById("diceRoll").disabled = false;
  document.getElementById("one").disabled = false;
  document.getElementById("two").disabled = false;
  document.getElementById("three").disabled = false;
  document.getElementById("four").disabled = false;
  document.getElementById("five").disabled = false;
  document.getElementById("six").disabled = false;
}

function buttonFalse(){
  document.getElementById("diceRoll").disabled = true; 
  document.getElementById("one").disabled = true;
  document.getElementById("two").disabled = true;
  document.getElementById("three").disabled = true;
  document.getElementById("four").disabled = true;
  document.getElementById("five").disabled = true;
  document.getElementById("six").disabled = true;

}
