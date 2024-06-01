const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
const answers = [
  'スーパーファミコン',
  'プレイステーション2',
  'ニンテンドースイッチ',
  'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 問題文と選択肢を定義
const setuoQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
setuoQuiz();

// ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});
$button[1].addEventListener('click', (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});
$button[2].addEventListener('click', (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});
$button[3].addEventListener('click', (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});
