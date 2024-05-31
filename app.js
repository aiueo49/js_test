const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は何？',
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS"
    ],
    correct: "ニンテンドーDS"
  }, {
    question: '任天堂が発売した家庭用ゲーム機は次のうちどれ？',
    answers: [
      "Xbox",
      "プレイステーション",
      "スーパーファミコン",
      "メガドライブ"
    ],
    correct: "スーパーファミコン"
  }, {
    question: 'ファイナルファンタジーⅦの主人公の名前は？',
    answers: [
      "クラウド",
      "セフィロス",
      "ティーダ",
      "ユウナ"],
    correct: "クラウド"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// 問題文と選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
  }
};

// ボタンをクリックしたら正誤判定

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
