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
    // BGMを再生する
    bgm.play();
    // BGMの設定(音量MAX、ループされる)
    bgm.volume = 1;
    bgm.loop = true;
    // アイコンを変更する
    icon.textContent = "stop_circle";
    // 再生中のスタイルを変更するためにクラス名を追加
    playBtn.classList.add("playing");
  } else if (icon.textContent === "stop_circle") {
    // BGMを停止する
    bgm.pause();
    // アイコンを変更する
    icon.textContent = "music_note";
    // クラス名を外す
    playBtn.classList.remove("playing");
  }
}
