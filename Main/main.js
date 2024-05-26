// UserName
const userName = document.getElementById("userName");
const sessionUserName = sessionStorage.getItem("username");
userName.innerHTML = sessionUserName;
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
    productName: "A Short Hike",
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
    productName: "Shape of the World",
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
    productName: "A Short Hike",
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
    else if(i >= 4 && i < 16) document.querySelector(".smallProductCardsConteiner2").appendChild(productCard);
    else document.querySelector(".bigProductCardsConteiner").appendChild(productCard);
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


//CategoriesBtns
const categoryBtns = document.querySelectorAll(".categoryBtn");
categoryBtns.forEach(category => {
  category.addEventListener("click", () => {
    for(let i = 0; i < categoryBtns.length; i++){
      if(categoryBtns[i].style.borderBottom = "solid 1px white"){
        categoryBtns[i].style.borderBottom = "none"
      }
      category.style.borderBottom = "solid 1px white";
    }
  });
})

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

// Create comment cards
const commentCards = [
  {
    id: 0,
    estimation: 5,
    commentName: "Cheap keys exists",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat illum necessitatibus, deleniti quibusdam quo!",
    datePublication: "7 days ago",
    userName: "Amart",
  },
  {
    id: 1,
    estimation: 4,
    commentName: "Cheap keys exists",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat illum necessitatibus, deleniti quibusdam quo!",
    datePublication: "7 days ago",
    userName: "Amart",
  },
  {
    id: 2,
    estimation: 3,
    commentName: "Cheap keys exists",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat illum necessitatibus, deleniti quibusdam quo!",
    datePublication: "7 days ago",
    userName: "Amart",
  },
  {
    id: 3,
    estimation: 2,
    commentName: "Cheap keys exists",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat illum necessitatibus, deleniti quibusdam quo!",
    datePublication: "7 days ago",
    userName: "Amart",
  },
];

function createCommentCards(){
  for(let i = 0; i < commentCards.length; i++){
    const commentCard = document.createElement("div");
    commentCard.className = "commentCard";
    commentCard.id = `commentCard${i}`;
    commentCard.innerHTML =`<div class="estimationBlock" id="estimationBlock${i}"></div>
                            <span class="datePublication">${commentCards[i].datePublication}</span>
                            <p class="commentName">${commentCards[i].commentName}</p>
                            <p class="comment">${commentCards[i].comment}</p>
                            <p class="userName">${commentCards[i].userName}</p>`;
    document.querySelector(".commentCardsConteiner").appendChild(commentCard);
    for(let a = 0; a < commentCards[i].estimation; a++){
      const starBlock = document.createElement("div");
      starBlock.className = "starBlock";
      starBlock.innerHTML = `<img src="./images/star.svg">`;
      document.getElementById(`estimationBlock${i}`).appendChild(starBlock);
    }
  }
}

// createCommentCards();

// Link to the product page

const productCardsToTheLink = document.querySelectorAll(".productCard");
productCardsToTheLink.forEach(productCard => {
  productCard.addEventListener("click", () => {
    localStorage.setItem("currentProductInGames", productCard.querySelector(".productName").textContent)
    location.href = "../страница товара/index.html"
    
  })
});

// Add feedback
const addFeedbackBtn = document.getElementById("addFeedbackBtn");
const feedbackForm = document.getElementById("feedbackForm");
addFeedbackBtn.addEventListener("click", () => {
  feedbackForm.style.display = "flex";
  setTimeout(() => {
    feedbackForm.style.opacity = "1";
  }, 200)
})

const cross = document.getElementById("cross");
cross.addEventListener("click", () => {
  feedbackForm.style.opacity = "0";
  setTimeout(() => {
    feedbackForm.style.display = "none";
  }, 200)
})

const feedbackUserName = document.getElementById("feedbackUserName");
feedbackUserName.innerHTML = sessionUserName;

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
  let currentMonth = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
  let currentYear = currentDate.getFullYear();

  const feedbackCard = document.createElement("div");
  feedbackCard.className = "feedbackCard";
  feedbackCard.id = `feedbackCard${feedbackId}`;
  feedbackCard.innerHTML =`<div class="estimationBlock" id="estimationBlock${feedbackId}"></div>
                          <span class="datePublication">${currentDay}.${currentMonth}.${currentYear}</span>
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
  }, 200)
});

