const topProductCards = [
  {
    imgSrc: "./images/topProductImg1.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL",
    category1: "Буст",
    category2: "Origin",
  },
  {
    imgSrc: "./images/topProductImg2.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Minecraft",
    category1: "Ключ",
    category2: "Аккаунт Steam",
  },
  {
    imgSrc: "./images/topProductImg3.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Minecraft",
    category1: "Аккаунт",
    category2: "Аккаунт Steam",
  },
  {
    imgSrc: "./images/topProductImg4.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Minecraft",
    category1: "Ключ",
    category2: "EpicGames",
  },
];

function createTopProductCards() {
  for (let i = 0; i < topProductCards.length; i++) {
    const topProductCard = document.createElement("div");
    topProductCard.className = "topProductCard";
    topProductCard.id = `topProductCard${i}`;
    topProductCard.innerHTML = `<img src="${topProductCards[i].imgSrc}" class="productImg" id="productImg${i}"/>
                                    <div class="topBlock">Top <img src="./images/lightning.svg" alt="">4</div>
                                    <button id="addCardBtn${i}" class="addCardBtn">В корзину</button>
                                    <button id="addFavouritesBtn${i}" class="addFavouritesBtn"><img src="./images/likeImg.svg"></button>
                                    <div class="productCard_podBlock1">
                                        <span class="priceWithDiscount">${topProductCards[i].priceWithDiscount}</span>
                                        <span class="discount">${topProductCards[i].discount}</span>
                                        <span class="priceWithoutDiscount">${topProductCards[i].priceWithoutDiscount}</span>
                                    </div>
                                    <div class="productCard_podBlock2">
                                        <span class="productName">${topProductCards[i].productName}</span>
                                    </div>
                                    <div class="productCard_podBlock3">
                                        <div class="category">
                                            <div class="bullet"></div>
                                            <span>${topProductCards[i].category1}</span>
                                        </div>
                                        <div class="category">
                                            <div class="bullet"></div>
                                            <span>${topProductCards[i].category2}</span>
                                        </div>
                                    </div>`;
    document.querySelector(".smallProductCardsConteiner").appendChild(topProductCard);
  }
}

createTopProductCards();

const allProductImg = document.querySelectorAll(".productImg");
allProductImg.forEach((productImg) => {
  productImg.addEventListener("mouseover", (event) => {
    const cardId = event.target.id.substring(10, 12);
    const addCardBtn = document.getElementById(`addCardBtn${cardId}`);
    const addFavouritesBtn = document.getElementById(`addFavouritesBtn${cardId}`);
    addCardBtn.style.display = "flex";
    addFavouritesBtn.style.display = "flex";
    setTimeout(() => {
      addCardBtn.style.opacity = "1";
      addFavouritesBtn.style.opacity = "1";
    }, 100);

   
  });

  productImg.addEventListener("mouseout", (event) => {
    const cardId = event.target.id.substring(10, 12);
    const addCardBtn = document.getElementById(`addCardBtn${cardId}`);
    const addFavouritesBtn = document.getElementById(`addFavouritesBtn${cardId}`);
    addCardBtn.style.opacity = "0";
    addFavouritesBtn.style.opacity = "0";

    setTimeout(() => {
      addCardBtn.style.display = "none";
      addFavouritesBtn.style.display = "none";
    }, 100);
  });
});
