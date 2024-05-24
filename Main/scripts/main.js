// create product cards script//
const productCards = [
  {
    top: true,
    new: false,
    hit: false,
    imgSrc: "./images/topProductImg1.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL",
    categories: ["Буст", "Origin"],
  },
  {
    top: true,
    new: false,
    hit: false,
    imgSrc: "./images/topProductImg2.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Minecraft",
    categories: ["Ключ", "Аккаунт Steam"],
  },
  {
    top: true,
    new: false,
    hit: false,
    imgSrc: "./images/topProductImg3.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Minecraft",
    categories: ["Аккаунт", "Аккаунт Steam"],
  },
  {
    top: true,
    new: false,
    hit: false,
    imgSrc: "./images/topProductImg4.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Minecraft",
    categories: ["Ключ", "EpicGames"],
  },
];

function createProductCards() {
  for (let i = 0; i < productCards.length; i++) {
    const productCard = document.createElement("div");
    productCard.className = "productCard";
    productCard.id = `productCard${i}`;
    productCard.innerHTML = `<img src="${productCards[i].imgSrc}" class="productImg" id="productImg${i}"/>
                                    <div id="topBlock${i}" class="topBlock">Top <img src="./images/lightning.svg" alt=""> 4</div>
                                    <button id="addCardBtn${i}" class="addCardBtn">В корзину</button>
                                    <button id="addFavouritesBtn${i}" class="addFavouritesBtn"><img src="./images/likeImg.svg"></button>
                                    <div class="productCard_podBlock1">
                                        <span class="product_priceWithDiscount">${productCards[i].priceWithDiscount}</span>
                                        <span class="product_discount">${productCards[i].discount}</span>
                                        <span class="product_priceWithoutDiscount">${productCards[i].priceWithoutDiscount}</span>
                                    </div>
                                    <div class="productCard_podBlock2">
                                        <span class="productName">${productCards[i].productName}</span>
                                    </div>
                                    <div class="productCard_podBlock3">
                                        <div class="category">
                                            <div class="bullet"></div>
                                            <span>${productCards[i].categories[0]}</span>
                                        </div>
                                        <div class="category">
                                            <div class="bullet"></div>
                                            <span>${productCards[i].categories[1]}</span>
                                        </div>
                                    </div>`;
    document
      .querySelector(".smallProductCardsConteiner")
      .appendChild(productCard);

    if (productCards[i].top) {
      const topBlock = document.getElementById(`topBlock${i}`);
      topBlock.style.display = "flex";
    }
  }
}

createProductCards();

const allProductCards = document.querySelectorAll(".productCard");
allProductCards.forEach((productCard) => {
  productCard.addEventListener("mouseenter", (event) => {
    const addCardBtn = productCard.childNodes[4];
    const addFavouritesBtn = productCard.childNodes[6];
    addCardBtn.style.display = "flex";
    addFavouritesBtn.style.display = "flex";
    setTimeout(() => {
      addCardBtn.style.opacity = "1";
      addFavouritesBtn.style.opacity = "1";
    }, 100);
  });

  productCard.addEventListener("mouseleave", (event) => {
    const addCardBtn = productCard.childNodes[4];
    const addFavouritesBtn = productCard.childNodes[6];
    addCardBtn.style.opacity = "0";
    addFavouritesBtn.style.opacity = "0";

    setTimeout(() => {
      addCardBtn.style.display = "none";
      addFavouritesBtn.style.display = "none";
    }, 100);
  });
});

// Change language and currency script//
const arrowImg = document.querySelector(".arrowImg");
const langAndCurrenChange = document.querySelector(".langAndCurrenChange");
const langAndCurren = document.querySelector(".langAndCurren");

langAndCurren.addEventListener("click", () => {
  if (langAndCurrenChange.style.display == "none") {
    langAndCurrenChange.style.display = "block";
    setTimeout(() => {
      langAndCurrenChange.style.opacity = "1";
    }, 100);
    arrowImg.style.rotate = "180deg";
  } else {
    langAndCurrenChange.style.opacity = "0";
    setTimeout(() => {
      langAndCurrenChange.style.display = "none";
    }, 100);
    arrowImg.style.rotate = "0deg";
  }
});

// Slider script //
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
const firstSlide = document.getElementById("firstSlide");
const slideBlock = document.querySelector(".slide_block");

let index = 2;
let indent = 0;
arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    firstSlide.style.marginLeft = `${(indent += 160.6)}rem`;
    index--;
    const counter = document.getElementById(`counter${index}`);
    const previousCounter = document.getElementById(`counter${index + 1}`);
    counter.style.backgroundColor = "white";
    counter.style.height = "5px";
    previousCounter.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    previousCounter.style.height = "3px";
  }
});

arrowRight.addEventListener("click", () => {
  if (index < 3) {
    firstSlide.style.marginLeft = `${(indent -= 160.6)}rem`;
    index++;
    const counter = document.getElementById(`counter${index}`);
    const previousCounter = document.getElementById(`counter${index - 1}`);
    counter.style.backgroundColor = "white";
    counter.style.height = "5px";
    previousCounter.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    previousCounter.style.height = "3px";
  }
});
