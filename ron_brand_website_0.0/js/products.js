   // カート配列（最初は空）
   let cart = [];

   // ローカルストレージからカートを復元
   if (localStorage.getItem('cart')) {
     cart = JSON.parse(localStorage.getItem('cart'));
   }
   // 商品データ
const products = [
    { id: 1, name: "Product 1", price: 5000, img: "images/work1-1.jpg" },
    { id: 2, name: "Product 2", price: 7000, img: "images/work2-1.jpg" },
    { id: 3, name: "Product 3", price: 6000, img: "images/work3-1.jpg" },
    { id: 4, name: "Product 4", price: 8000, img: "images/work4-1.jpg" }
  ];
  
  // 商品を自動生成して表示
const productGrid = document.getElementById('product-grid');

products.forEach(product => {
  const productItem = document.createElement('div');
  productItem.classList.add('product-item');
  productItem.innerHTML = `
    <a href="products-detail.html?id=${product.id}">
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
    </a>
    <p>¥${product.price.toLocaleString()}</p>
    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
  `;
  productGrid.appendChild(productItem);
});
  
  // カートボタンにイベントをつける
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-cart')) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // カートを保存
    alert(`${product.name} をカートに追加しました！`);
  }
});

