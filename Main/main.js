// UserName
const localUsers = JSON.parse(localStorage.getItem("users"));
const userId = sessionStorage.getItem("userId");
let currentUser;

function getCurrentUser(){
  for(let i = 0; i < localUsers.length; i++){
    if(localUsers[i].id == userId){
      currentUser = localUsers[i];
    }
  }
};
getCurrentUser();

const userName = document.querySelectorAll(".userName");

userName[0].innerHTML = currentUser.username;
userName[1].innerHTML = currentUser.username;

const avatarImg = document.querySelectorAll(".avatarImg");
if(currentUser.avatarSrc == null){
  avatarImg[0].src = "./images/profileImg.svg";
  avatarImg[1].src = "./images/profileImg.svg";
}else{
  avatarImg[0].src = currentUser.avatarSrc;
  avatarImg[1].src = currentUser.avatarSrc;
}

const email = document.querySelector(".email");
email.innerHTML = currentUser.email;

// Profile
const user = document.querySelector(".user");
const closeProfile = document.getElementById("closeProfile");
const profileBack = document.getElementById("profileBack");

user.addEventListener("click", () => {
  profileBack.style.display = "flex";
  setTimeout(() => {
    profileBack.style.opacity = 1;
  }, 100)
});

closeProfile.addEventListener("click", () => {
  profileBack.style.opacity = 0;
  setTimeout(() => {
    profileBack.style.display = "none";
  }, 100)
});

const changeAvatar = document.querySelector(".changeAvatar");




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
    productName: "Shape of the World",
    categories: ["Буст", "Origin"],
    search: false,
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
    search: false,
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
    search: false,
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
    productName: "A Short Hike",
    categories: ["Ключ", "EpicGames"],
    search: false,
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
    search: false,
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
    search: false,
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
    search: false,
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
    search: false,
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
    productName: "Shape of the World",
    categories: ["Буст", "Origin"],
    search: true,
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
    search: true,
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
    productName: "A Short Hike",
    categories: ["Аккаунт", "Аккаунт Steam"],
    search: true,
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
    search: false,
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
    search: false,
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
    search: false,
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
    search: false,
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
    search: true,
  },
  {
    id: 16,
    top: false,
    new: false,
    hit: false,
    imgSrc: "./images/productImg13.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Minecraft",
    categories: ["Буст", "Origin"],
    search: true,
  },
  {
    id: 17,
    top: false,
    new: false,
    hit: false,
    imgSrc: "./images/productImg14.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Seasons after Fall",
    categories: ["Ключ", "Аккаунт Steam"],
    search: true,
  },
  {
    id: 18,
    top: false,
    new: false,
    hit: false,
    imgSrc: "./images/productImg15.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "Yonder: The Cloud Catcher Chronicle",
    categories: ["Аккаунт", "Аккаунт Steam"],
    search: true,
  },
  {
    id: 19,
    top: false,
    new: false,
    hit: false,
    imgSrc: "./images/productImg16.png",
    priceWithDiscount: "3400 Р",
    discount: "-15%",
    priceWithoutDiscount: "4000 Р",
    productName: "UNRAVEL TWO",
    categories: ["Ключ", "EpicGames"],
    search: true,
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
                                    <button id="addFavouritesBtn${i}" class="addFavouritesBtn"><img class="likeImg" src="./images/likeImg.svg"></button>
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
    if(i < 4) {document.querySelector(".smallProductCardsConteiner1").appendChild(productCard)}
    else if(i >= 4 && i < 16) {document.querySelector(".smallProductCardsConteiner2").appendChild(productCard)}
    else {
      document.querySelector(".bigProductCardsConteiner").appendChild(productCard);
      productCard.style.height = "450px";
    }

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
let allProductCards = document.querySelectorAll(".productCard");
function pointingAtTheCard(){
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
};

pointingAtTheCard();
// Change language and currency script//
const arrowImg = document.querySelectorAll(".arrowImg");
const langAndCurrenChange = document.querySelector(".langAndCurrenChange");
const langAndCurrenChange2 = document.querySelector(".langAndCurrenChange2");
const langAndCurren = document.querySelectorAll(".langAndCurren");

langAndCurren[0].addEventListener("click", () => {
  if (langAndCurrenChange.style.display == "none") {
    langAndCurrenChange.style.display = "block";
    setTimeout(() => {
      langAndCurrenChange.style.opacity = "1";
    }, 100);
    arrowImg[0].style.rotate = "180deg";
  } else {
    langAndCurrenChange.style.opacity = "0";
    setTimeout(() => {
      langAndCurrenChange.style.display = "none";
    }, 100);
    arrowImg[0].style.rotate = "0deg";
  }
});

langAndCurren[1].addEventListener("click", () => {
  if (langAndCurrenChange2.style.display == "none") {
    langAndCurrenChange2.style.display = "block";
    setTimeout(() => {
      langAndCurrenChange2.style.opacity = "1";
    }, 100);
    arrowImg[1].style.rotate = "0deg";
  } else {
    langAndCurrenChange2.style.opacity = "0";
    setTimeout(() => {
      langAndCurrenChange2.style.display = "none";
    }, 100);
    arrowImg[1].style.rotate = "180deg";
  }
});

const currency = document.querySelectorAll(".currency")

const dollarBtns = document.querySelectorAll(".dollarBtn");
const euroBtns = document.querySelectorAll(".euroBtn");
const rubleBtns = document.querySelectorAll(".rubleBtn");

dollarBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    for(let i = 0; i < productCards.length; i++){
      productCards[i].priceWithDiscount = "38 $"
      productCards[i].priceWithoutDiscount = "45 $"
    }
    allProductCards.forEach(card => {
      card.remove();
    })
    currency[0].innerHTML = "$";
    currency[1].innerHTML = "$";


    dollarBtns[0].style.backgroundColor = "#77be1d";
    dollarBtns[1].style.backgroundColor = "#77be1d";

    euroBtns[0].style.background = "none";
    euroBtns[1].style.background = "none";

    rubleBtns[0].style.background = "none";
    rubleBtns[1].style.background = "none";
  
    createProductCards();
    allProductCards = document.querySelectorAll(".productCard");
    pointingAtTheCard();
    goToTheProductPage();
  });
})

euroBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    for(let i = 0; i < productCards.length; i++){
      productCards[i].priceWithDiscount = "35 €"
      productCards[i].priceWithoutDiscount = "42 €"
    }
    allProductCards.forEach(card => {
      card.remove();
    })
    currency[0].innerHTML = "€";
    currency[1].innerHTML = "€";

    euroBtns[0].style.backgroundColor = "#77be1d";
    euroBtns[1].style.backgroundColor = "#77be1d";

    dollarBtns[0].style.background = "none";
    dollarBtns[1].style.background = "none";

    rubleBtns[0].style.background = "none";
    rubleBtns[1].style.background = "none";

    createProductCards();
    allProductCards = document.querySelectorAll(".productCard");
    pointingAtTheCard();
    goToTheProductPage();
  });
})

rubleBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    for(let i = 0; i < productCards.length; i++){
      productCards[i].priceWithDiscount = "3400 ₽"
      productCards[i].priceWithoutDiscount = "4000 ₽"
    }
    allProductCards.forEach(card => {
      card.remove();
    })
    currency[0].innerHTML = "₽";
    currency[1].innerHTML = "₽";

    rubleBtns[0].style.backgroundColor = "#77be1d";
    rubleBtns[1].style.backgroundColor = "#77be1d";

    euroBtns[0].style.background = "none";
    euroBtns[1].style.background = "none";

    dollarBtns[0].style.background = "none";
    dollarBtns[1].style.background = "none";
  
    createProductCards();
    allProductCards = document.querySelectorAll(".productCard");
    pointingAtTheCard();
    goToTheProductPage();
  });
})

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


//Create Blog cards
const blogCards = [
  {
    id: 0,
    imgSrc: "./images/blogCardImg.png",
    newsName: "Да как так-то борются с пиратством?",
    news: "Скримеры - только верхушка айсберга ужаса",
    datePublication: "14 Октября 2023"
  },
  {
    id: 0,
    imgSrc: "./images/blogCardImg.png",
    newsName: "Да как так-то борются с пиратством?",
    news: "Скримеры - только верхушка айсберга ужаса",
    datePublication: "14 Октября 2023"
  },
  {
    id: 0,
    imgSrc: "./images/blogCardImg.png",
    newsName: "Да как так-то борются с пиратством?",
    news: "Скримеры - только верхушка айсберга ужаса",
    datePublication: "14 Октября 2023"
  },
];

function createBlogCards(){
  for(let i = 0; i < blogCards.length; i++){
    const blogCard = document.createElement("div");
    blogCard.className = "blogCard";
    blogCard.id = `blogCard${i}`;
    blogCard.innerHTML = `<img class="blogCardImg" src="${blogCards[i].imgSrc}">
                          <h3 class="newsName">${blogCards[i].newsName}<h3>
                          <span class="news">${blogCards[i].news}<span>
                          <p class="date">${blogCards[i].datePublication}<p>`;
    document.querySelector(".theBlogConteiner").appendChild(blogCard);
  }
}

createBlogCards();

// Link to the product page

function goToTheProductPage(){
    const productCardsToTheLink = document.querySelectorAll(".productCard");
    productCardsToTheLink.forEach(productCard => {
    productCard.addEventListener("click", (event) => {
      if(
        !event.target.classList.contains("addFavouritesBtn") && !event.target.classList.contains("likeImg") &&
        !event.target.classList.contains("addCardBtn")
      ){
        localStorage.setItem("currentProductInGames", productCard.querySelector(".productName").textContent)
        location.href = "../страница товара/index.html";
      }
      
    });
    const searchProductCards = document.querySelectorAll(".searchProductCard");
    searchProductCards.forEach(searchProductCard => {
      searchProductCard.addEventListener("click", (event) => {
        if(
          !event.target.classList.contains("addBasketSearchBtn") && !event.target.classList.contains("searchBasketImg") &&
          !event.target.classList.contains("addFavouritesSearchBtn") && !event.target.classList.contains("searchFavoritesImg")
        ){
          localStorage.setItem("currentProductInGames", searchProductCard.querySelector(".searchCardName").textContent)
          location.href = "../страница товара/index.html";
        }
      })
    });
  });
}
goToTheProductPage();
// Add feedback
const addFeedbackBtn = document.getElementById("addFeedbackBtn");
const feedbackForm = document.getElementById("feedbackForm");
addFeedbackBtn.addEventListener("click", () => {
  feedbackForm.style.display = "flex";
  setTimeout(() => {
    feedbackForm.style.opacity = "1";
  }, 100)
})

const closeFeedbackFrom = document.getElementById("closeFeedbackFrom");
closeFeedbackFrom.addEventListener("click", () => {
  feedbackForm.style.opacity = "0";
  setTimeout(() => {
    feedbackForm.style.display = "none";
  }, 100)
})

const feedbackUserName = document.getElementById("feedbackUserName");
feedbackUserName.innerHTML = currentUser.username;

const estimationInp = document.getElementById("estimationInp");
const feedbackInp = document.getElementById("feedbackInp");
const publishBtn = document.getElementById("publishBtn");

estimationInp.addEventListener("input", () => {
  estimationInp.value = estimationInp.value.replace(/[^0-5]/, "");
});

let feedbackId = 1
publishBtn.addEventListener("click", () => {
  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1; 
  let currentYear = currentDate.getFullYear();

  const feedbackCard = document.createElement("div");
  feedbackCard.className = "feedbackCard";
  feedbackCard.id = `feedbackCard${feedbackId}`;
  feedbackCard.innerHTML =`<div class="estimationBlock" id="estimationBlock${feedbackId}"></div>
                          <span class="datePublication">${currentDay}.0${currentMonth}.${currentYear}</span>
                          <p class="feedback">${feedbackInp.value}</p>
                          <p class="userName">${sessionUserName}</p>`;
  document.querySelector(".feedbackCardsConteiner").appendChild(feedbackCard);
  for(let a = 0; a < estimationInp.value; a++){
    const estimationBlock = document.getElementById(`estimationBlock${feedbackId}`);
    estimationBlock.innerHTML += `<div class="starBlock"><img src="./images/star.svg"></div>`
  }
  feedbackId++;
  feedbackForm.style.opacity = "0";
  setTimeout(() => {
    feedbackForm.style.display = "none";
  }, 100)
});

// Search
const searchBlock = document.querySelector(".searchBlock")
const searchInp = document.getElementById("searchInp");
let inpLength;

searchInp.addEventListener("input", () => {
  if(searchInp.value.length < inpLength){
    searchBlock.style.padding = 0;
    searchBlock.innerHTML = "";
  }else{
    
  }
})

document.addEventListener("keypress", (event) => {
  switch (event.key){
    case "Enter":
    inpLength = searchInp.value.length;

    if(inpLength != 0){
      const check = new RegExp(searchInp.value, "i");
      let nothingCheck  = false;
      searchBlock.innerHTML = "";

      for(let i = 0; i < productCards.length; i++){
        if (check.test(productCards[i].productName) && !productCards[i].search){
          searchBlock.style.padding = "10px"; 
          const searchProductCard = document.createElement("div");
          searchProductCard.className = "searchProductCard";
          searchProductCard.id = `searchProductCard${i}`;
          searchProductCard.innerHTML =  `<img class="searchCardImg" src="${productCards[i].imgSrc}">
                                          <div class="searchCardAddBtns">
                                            <button id="addBasketSearchBtn${i}" class="addBasketSearchBtn"><img class="searchBasketImg" src="./images/searchBasketImg.svg"></button>
                                            <button id="addFavouritesSearchBtn${i}" class="addFavouritesSearchBtn"><img class="searchFavoritesImg" src="./images/searchFavoritesImg.svg"></button>
                                          </div>
                                          <div class="seardchCardInfo">
                                            <p class="searchCardName">${productCards[i].productName}</p>
                                            <div class="searchCardPrice">
                                              <span class="product_priceWithDiscount">${productCards[i].priceWithDiscount}</span>
                                              <span class="product_discount">${productCards[i].discount}</span>
                                              <span class="product_priceWithoutDiscount">${productCards[i].priceWithoutDiscount}</span>
                                            </div>
                                            <div class="searchCardCategories">
                                              <div class="category">
                                                <div class="bullet"></div>
                                                <span>${productCards[i].categories[0]}</span>
                                              </div>
                                              <div class="category">
                                                <div class="bullet"></div>
                                                <span>${productCards[i].categories[1]}</span>
                                              </div>
                                            </div>
                                          </div>
                                        `;
          searchBlock.appendChild(searchProductCard);
          nothingCheck = true;
          goToTheProductPage();
        }
      }
      if(!nothingCheck){
        searchBlock.style.padding = "10px"; 
        searchBlock.innerHTML = "<h2>По вашему запросу ничего не найдено</h2>";
      }
    }

    break;
  }
});



