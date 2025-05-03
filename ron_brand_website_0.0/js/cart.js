// cart.js

// カート情報をlocalStorageから取得
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// カートを表示する要素を取得
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// カートを描画する関数
function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");

    itemElement.innerHTML = `
      <img src="${item.img[0]}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>Price: ¥${item.price.toLocaleString()}</p>
      </div>
      <button class="remove-item" data-index="${index}">🗑️</button>
    `;
    cartItemsContainer.appendChild(itemElement);
    total += item.price;
  });

  cartTotal.textContent = `Total ¥${total.toLocaleString()}`;
}

// 商品を削除する関数
function removeItem(index) {
  cart.splice(index, 1); // 指定された商品をカート配列から削除
  localStorage.setItem("cart", JSON.stringify(cart)); // 保存
  renderCart(); // 再描画
}

// 「Checkout」ボタンを押した時の処理（仮でアラートを表示）
function checkout() {
  if (cart.length === 0) {
    alert("カートに商品がありません。");
    return;
  }
  alert("Thank you for choosing us");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// ページ読み込み時にカートを表示
renderCart();

// 商品削除ボタンのイベントリスナー
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-item")) {
    const index = parseInt(e.target.dataset.index);
    removeItem(index);
  }
});

// Checkoutボタンのイベントリスナー
document.getElementById("checkout-button").addEventListener("click", checkout);