const question = "ゲーム市場、最も売れたゲーム機は何？";
const answers = [
  "スーパーファミコン",
  "プレイステーション2",
  "ニンテンドースイッチ",
  "ニンテンドーDS"
];

const correct = "ニンテンドーDS";

const $button = document.getElementsByTagName("button");

// 問題文と選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
};

// ボタンをクリックしたら正誤判定
$button[0].addEventListener("click", (e) => {
  clickHandler(e);
});

$button[1].addEventListener("click", (e) => {
  clickHandler(e);
});

$button[2].addEventListener("click", (e) => {
  clickHandler(e);
});

$button[3].addEventListener("click", (e) => {
  clickHandler(e);
});

