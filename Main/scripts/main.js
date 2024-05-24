// create product cards script//
const productCards = [
  {
    id: 0,
    top: true,
    new: false,
    hit: false,
    imgSrc: "./images/productImg1.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Shape of the world",
    categories: ["Буст", "Origin"],
  },
  {
    id: 1,
    top: true,
    new: false,
    hit: false,
    imgSrc: "./images/productImg2.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Journey",
    categories: ["Ключ", "Аккаунт Steam"],
  },
  {
    id: 2,
    top: true,
    new: false,
    hit: false,
    imgSrc: "./images/productImg3.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Minecraft",
    categories: ["Аккаунт", "Аккаунт Steam"],
  },
  {
    id: 3,
    top: true,
    new: false,
    hit: false,
    imgSrc: "./images/productImg4.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Shord Hike",
    categories: ["Ключ", "EpicGames"],
  },
  {
    id: 4,
    top: false,
    new: true,
    hit: false,
    imgSrc: "./images/productImg5.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Flower",
    categories: ["Буст", "Origin"],
  },
  {
    id: 5,
    top: false,
    new: true,
    hit: true,
    imgSrc: "./images/productImg6.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Hohokum",
    categories: ["Ключ", "Аккаунт Steam"],
  },
  {
    id: 6,
    top: false,
    new: true,
    hit: false,
    imgSrc: "./images/productImg7.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "THE WITNESS",
    categories: ["Ключ", "Аккаунт Steam"],
  },
  {
    id: 7,
    top: false,
    new: true,
    hit: true,
    imgSrc: "./images/productImg8.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Eastshade",
    categories: ["Ключ", "EpicGames"],
  },
  {
    id: 8,
    top: false,
    new: true,
    hit: false,
    imgSrc: "./images/productImg1.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Shape of the world",
    categories: ["Буст", "Origin"],
  },
  {
    id: 9,
    top: false,
    new: false,
    hit: true,
    imgSrc: "./images/productImg2.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Journey",
    categories: ["Ключ", "Аккаунт Steam"],
  },
  {
    id: 10,
    top: false,
    new: false,
    hit: true,
    imgSrc: "./images/productImg4.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Short Hike",
    categories: ["Аккаунт", "Аккаунт Steam"],
  },
  {
    id: 11,
    top: false,
    new: false,
    hit: false,
    imgSrc: "./images/productImg9.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Little Big Planet",
    categories: ["Ключ", "EpicGames"],
  },
  {
    id: 12,
    top: false,
    new: false,
    hit: false,
    imgSrc: "./images/productImg10.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "UNRAVEL",
    categories: ["Буст", "Origin"],
  },
  {
    id: 13,
    top: false,
    new: false,
    hit: false,
    imgSrc: "./images/productImg11.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Seasons after Fall",
    categories: ["Ключ", "Аккаунт Steam"],
  },
  {
    id: 14,
    top: false,
    new: false,
    hit: false,
    imgSrc: "./images/productImg12.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Yonder: The Cloud Catcher Chronicle",
    categories: ["Аккаунт", "Аккаунт Steam"],
  },
  {
    id: 15,
    top: false,
    new: false,
    hit: false,
    imgSrc: "./images/productImg3.png",
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
                                    <div class="cardCategoriesBlock">
                                      <div class="hitBlock" id="hitBlock${i}">Хит продаж</div>
                                      <div class="newBlock" id="newBlock${i}">Новинка</div>
                                      <div class="topBlock" id="topBlock${i}">Top <img src="./images/lightning.svg" alt=""> 4</div>
                                    </div>
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
    if(i < 4) document.querySelector(".smallProductCardsConteiner1").appendChild(productCard);
    else document.querySelector(".smallProductCardsConteiner2").appendChild(productCard);

    if (productCards[i].hit) {
      const hitBlock = document.getElementById(`hitBlock${i}`);
      hitBlock.style.display = "flex";
    }
    if (productCards[i].new) {
      const newBlock = document.getElementById(`newBlock${i}`);
      newBlock.style.display = "flex";
    }
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
