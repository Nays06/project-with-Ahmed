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
                                        <span class="priceWithDiscount">${productCards[i].priceWithDiscount}</span>
                                        <span class="discount">${productCards[i].discount}</span>
                                        <span class="priceWithoutDiscount">${productCards[i].priceWithoutDiscount}</span>
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
    document.querySelector(".smallProductCardsConteiner").appendChild(productCard);

    if(productCards[i].top){
        const topBlock = document.getElementById(`topBlock${i}`);
        topBlock.style.display = "flex";
    }
  }
}

createProductCards();

const allProductCards= document.querySelectorAll(".productCard");
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

arrowImg.addEventListener("click", () => {
    if(langAndCurrenChange.style.display == "none"){
        langAndCurrenChange.style.display = "block";
        setTimeout(() => {
            langAndCurrenChange.style.opacity ="1";
        }, 100);
        arrowImg.style.rotate ="180deg";
    }else{
        langAndCurrenChange.style.opacity ="0";
        setTimeout(() => {
            langAndCurrenChange.style.display = "none";
        }, 100);
        arrowImg.style.rotate ="0deg";
    }
})

// Slider script //
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
const firstSlideImg = document.getElementById("firstSlideImg");
let index = 2;
let indent = 0;
arrowLeft.addEventListener("click", () => {
    if(index > 1){
        firstSlideImg.style.marginLeft = `${indent += 160.5}%`
        index--;
    }
});

arrowRight.addEventListener("click", () => {
    if(index < 3){
        firstSlideImg.style.marginLeft = `${indent -= 160.5}%`
        index++;
    }
})

