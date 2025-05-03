// 商品データ
const products = [
    {
      id: 1,
      name: "Product 1",
      price: 5000,
      img: ["images/work1-1.jpg", "images/work1-2.jpg", "images/work1-3.jpg"],
      description: "This is the detailed description for Product 1."
    },
    {
      id: 2,
      name: "Product 2",
      price: 7000,
      img: ["images/work2-1.jpg", "images/work2-2.jpg", "images/work2-3.jpg"],
      description: "This is the detailed description for Product 2."
    },
    {
      id: 3,
      name: "Product 3",
      price: 6000,
      img: ["images/work3-1.jpg", "images/work3-2.jpg", "images/work3-3.jpg"],
      description: "This is the detailed description for Product 3."
    },
    {
      id: 4,
      name: "Product 4",
      price: 8000,
      img: ["images/work4-1.jpg", "images/work4-2.jpg", "images/work4-3.jpg"],
      description: "This is the detailed description for Product 4."
    }
  ];
  
  // 商品ID取得
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));
  const product = products.find(p => p.id === productId);
  
  // DOM取得
  const nameEl = document.getElementById("product-name");
  const priceEl = document.getElementById("product-price");
  const descEl = document.getElementById("product-description");
  const imgEl = document.getElementById("product-img");
  
  // 商品情報を反映
  if (product) {
    nameEl.textContent = product.name;
    priceEl.textContent = `¥${product.price.toLocaleString()}`;
    descEl.textContent = product.description;
  }
  
  // ===== 画像スライダー機能 =====
  let currentIndex = 0;
  
  function updateImage() {
    imgEl.style.opacity = 0;
    setTimeout(() => {
      imgEl.src = product.img[currentIndex];
      imgEl.alt = `${product.name} image ${currentIndex + 1}`;
      imgEl.style.opacity = 1;
    }, 200);
  }
  
  document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + product.img.length) % product.img.length;
    updateImage();
  });
  
  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % product.img.length;
    updateImage();
  });
  
  updateImage();
  
  // カートに追加
  document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} をカートに追加しました！`);
  });