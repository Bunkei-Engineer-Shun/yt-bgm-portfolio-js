// 再生ボタンの要素を取得
const playBtn = document.getElementById("playBtn");
// アイコン要素の取得
const icon = document.getElementById("icon");
// BGMを取得
const bgm = new Audio("assets/bgm/bgm.mp3");

// 再生ボタンを押すと発生するイベント
playBtn.addEventListener("click", playBgm);

// BGM再生・停止関数
function playBgm() {
  if (icon.textContent === "music_note") {
    bgm.play();
    // BGMの設定(音量MAX、ループされる)
    bgm.volume = 1;
    bgm.loop = true;
    icon.textContent = "stop_circle";
  } else if (icon.textContent === "stop_circle") {
    bgm.pause();
    icon.textContent = "music_note";
  }
}
