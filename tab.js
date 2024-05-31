(()=>{

  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');

  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  // クリックイベント
  const handleClick = (e) => {
    e.preventDefault();

    // クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    // 対象コンテンツをアクティブ化する
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';


  };

  let index = 0;
  while(index < $nav.length) {
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
  }






})();

