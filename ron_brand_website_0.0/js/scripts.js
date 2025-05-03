document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector('.intro-grid');

  // 🔹 グリッド自動生成（216マス）
  for (let i = 0; i < 216; i++) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';
    cell.style.animationDelay = `${i * 0.01}s`;
    grid.insertBefore(cell, document.querySelector('.logo'));
  }

  // 🔹 ロゴ → ブラックアウト → メイン表示
  setTimeout(() => {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach((cell, i) => {
      const delay = Math.random() * 1000;
      setTimeout(() => {
        cell.classList.add('black-out');
      }, delay);
    });

    // ロゴ消して、main-content表示
    setTimeout(() => {
      document.querySelector('.intro-grid').style.display = 'none';
      const main = document.querySelector('.main-content');
      main.style.display = 'block';
      main.classList.add('fade-in');
    }, 2000);
  }, 3500);

    // 🔹 Swiper（スライドショー）の設定
    var swiper = new Swiper(".swiper-container", {
      loop: true, // 無限ループ
      autoplay: {
          delay: 3000, // 3秒ごとにスライド
          disableOnInteraction: false, // ユーザーが操作してもオートプレイを継続
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true, // ページネーション（ドット）をクリック可能に
      },
  });
});

