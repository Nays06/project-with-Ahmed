document.title = `Playnchill | ${localStorage.getItem("currentProductInGames")}`

function toMain(){
    window.location = "../Main/main.html"
}


let products = [
    {
        title: "Need for Speed",
        price: "6 999",
        skidka: "25",
        janr: "Гонки",
        categories: ["Ключ", "Аккаунт Steam"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    Продолжение знаменитой серии аркадных гонок, обещающие перевернуть представление о данной гоночной серии. К вашим услугам несколько направлений тюнинга и обилие возможностей для кастомизации собственного авто. Иными словами, при желании, игрок всегда сможет выделиться на общем фоне, на что и делается особый упор. Сами же покатушки отличаются большой динамичностью, ни о какой точной симуляции вождения речи не идет, наслаждайтесь безумными тачками и головокружительными заездами.
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "64-битная Windows 7",
            "Процессор": "Intel Core i5-4690",
            "Оперативная память": "8 GB ОЗУ",
            "Видеокарта": "NVIDIA GeForce GTX 970 4 Гб",
            "DirectX": "11.0",
            "Место на диске": "30 GB"
        },
        main_img: "img-main-NeedforSpeed.jpg",
        img_video: "https://www.dropbox.com/scl/fi/wu7rg9o11o8xkcz681nkq/SnapSave.io-Need-for-Speed-Heat-Official-Reveal-Trailer-1080p.mp4?rlkey=53yitfk996uewtabkgga9n8se&st=nsphehvj&raw=1",
    },
    {
        title: "Minecraft",
        price: "1 899",
        skidka: "15",
        janr: "Песочница",
        categories: ["Аккаунт", "Аккаунт Steam"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    Песочница с практически бесконечным открытым процедурно генерируемым миром, состоящим из блоков-кубиков. Их можно добывать, возводить из них различные конструкции и крафтить новые предметы.
                    <br>
                    В Minecraft имеется элемент выживания: с наступлением ночи в игровом мире начинают появляться враждебные монстры, которые принесут вам погибель, если вы не успели построить себе жилище в первый день.
                    <br>
                    С течением времени вы будете обзаводиться все более продвинутой экипировкой, посетите самый настоящий Ад, займетесь алхимией, построите собственную сеть железных дорог, разработаете полноценный компьютер и, в конечном итоге, сразитесь с могущественным Драконом Края.
                    <br>
                    Игровой мир Minecraft делится на так называемые биомы, отличающиеся климатом, растительностью, живыми существами и даже распространением ценных ресурсов. Кроме того, в своих странствиях вы сможете найти и сгенерированные структуры: пирамиды, сокровищницы, подземелья, деревни NPC и многое другое.
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "64-разрядная Windows 10",
            "Процессор": "Intel Core i5-4690 3,5 ГГц",
            "Оперативная память": "4 GB ОЗУ",
            "Видеокарта": "GeForce 700 series",
            "Место на диске": "4 GB"
        },
        main_img: "img-main-Minecraft.jpg",
        img_video: "https://www.dropbox.com/scl/fi/o05cnyh9z6gl2o528prpk/Minecraft-video.mp4?rlkey=c8j4kgys469lfq67k8o7la8yg&st=qjblagie&raw=1",
    },
    {
        title: "Shape of the World",
        price: "399",
        skidka: "25",
        janr: "Приключение",
        categories: ["Буст", "Origin"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    Медитативная бродилка в сюрреалистичном мире, который реагирует на присутствие игрока.
                    <br>
                    Shape of the World — это «симулятор ходьбы», визуальное приключение в психоделичном окружении, которое поражает ярко и красочной экосистемой, радующей взор цветущей флорой, грациозными созданиями, шумящими водопадами, переливающимися горами и светящимися монолитами.
                    <br>
                    Вы можете взаимодействовать со всем, что вас окружает, и от ваших действий мир будет неожиданным и непредсказуемым образом изменяться. Вы можете брести, плавать летать — в мире Shape of the World возможно все, и своими действиями вы придаете ему новую форму.
                    <br>
                    Декорации в игре постоянно меняются путем процедурной генерации, и вернувшись на знакомое место, вы его уже не узнаете. Дополняет визуальное разнообразие игры динамический саундтрек, который тоже реагирует на ваши действия.
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "64-разрядная Windows 7",
            "Процессор": "Четырехъядерный с тактовой частотой 2,4 ГГц",
            "Оперативная память": "8 GB ОЗУ",
            "Видеокарта": "Geforce GTX 780",
            "DirectX": "версии 11",
            "Место на диске": "2 GB",
            "Звук": "DirectX-совместимая"
        },
        main_img: "img-main-ShapeoftheWorld.jpg",
        img_video: "https://www.dropbox.com/scl/fi/is28np87odidins6468cf/SnapSave.io-Shape-of-the-World-Teaser-trailer_-A-first-person-exploration-game.-1080p60.mp4?rlkey=q0ajgoqzkwib0stcvvizadecp&st=k4wpa6fy&raw=1",
    },
    {
        title: "Journey",
        price: "800",
        skidka: "10",
        janr: "Приключение",
        categories: ["Ключ", "Аккаунт Steam"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    Journey погружает игрока в путешествие по загадочному миру в роли безымянного странника. Главная цель — достичь вершины далекой горы, маячащей на горизонте. Путь до цели будет нелёгок — предстоит преодолеть множество препятствий, решить непростые головоломки и разгадать тайны этого мира.
                    <br>
                    Интерфейс игры предельно минималистичен и не содержит подсказок, карт или указателей. Игрок должен полагаться лишь на свою сообразительность и наблюдательность. Зато разработчики предусмотрели уникальный кооперативный режим, позволяющий объединить усилия с другими игроками в режиме онлайн. Встречи происходят анонимно — у персонажей нет имён или каких-либо отличительных черт. Единственное средство коммуникации — бессловесный крик.
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "Windows 10",
            "Процессор": "Intel Core i3-2120",
            "Оперативная память": "4 GB ОЗУ",
            "Видеокарта": "Nvidia GTS 450",
        },
        main_img: "img-main-Journey.jpg",
        img_video: "https://www.dropbox.com/scl/fi/dx50i8c9m23s1jhnh3vy2/SnapSave.io-JOURNEY-_-10-Year-Anniversary-Trailer-1080p60.mp4?rlkey=4vxeqxoaujj9bwiqxnvget9jj&st=7u8mvtiq&raw=1",
    },
    {
        title: "A Short Hike",
        price: "200",
        skidka: "50",
        janr: "Исследование",
        categories: ["Ключ", "EpicGames"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    Путешествуйте в мирные горные ландшафты провинциального парка Хок-Пик. Следуйте по отмеченным тропам или исследуйте бэккантри, пока вы добираетесь до вершины. По пути познакомьтесь с другими путешественниками, откройте для себя скрытые сокровища и окунитесь в мир вокруг вас.
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "Windows 7",
            "Процессор": "AMD Dual Core с тактовой частотой 2 ГГц",
            "Оперативная память": "2 GB ОЗУ",
            "Видеокарта": "Intel Graphics 4400",
            "Место на диске": "400 МБ",
            "DirectX": "11.0"
        },
        main_img: "img-main-AShortHike.jpg",
        img_video: "https://www.dropbox.com/scl/fi/9iil2ojcy5ecljlmtk372/SnapSave.io-A-Short-Hike-Trailer-1080p60.mp4?rlkey=myazh5spxgf3ircosjf3tuuuh&st=jgvj27n7&raw=1",
    }
]

// localStorage.setItem("currentProductInGames", "Minecraft")\

let currentProduct = products.filter(elem => elem.title === localStorage.getItem("currentProductInGames"))


document.querySelector(".product-title").textContent = currentProduct[0].title
document.querySelector(".product-old-price").textContent = `${currentProduct[0].price} Р`
document.querySelector(".product-skidka").textContent = `-${currentProduct[0].skidka}%`

const result = parseInt(currentProduct[0].price.replace(/\s/g, ''), 10);
const discount = (result * Number(currentProduct[0].skidka)) / 100;
const priceWithDiscount = result - discount;
const roundedToHundreds = Math.round(priceWithDiscount / 100) * 100;
document.querySelector(".product-now-price").textContent = `${(roundedToHundreds - 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Р`

document.querySelector(".product-tr2").getElementsByTagName("td")[0].textContent = currentProduct[0].janr
document.querySelector(".product-ostas-container").innerHTML = currentProduct[0].opisanie.replace("}}}]", currentProduct[0].title)

document.querySelector(".product-img").querySelector("img").src = `img/${currentProduct[0].main_img}`
document.body.style.backgroundImage = `url(img/bg-${currentProduct[0].title.trim().replaceAll(" ", "")}.jpg)`

window.onload = function() {
document.querySelector("#videooo1").innerHTML = `<source src="${currentProduct[0].img_video}" class="product-video-source">
Ваш браузер не поддерживает видео.`
};





document.querySelectorAll(".product-osta").forEach((elem) => {
    elem.addEventListener("click", () => {
        document.querySelectorAll(".product-osta").forEach((e) => {
            if (e !== elem) {
                e.children[0].classList.remove("active")
            }
        })
        elem.children[0].classList.add("active")

        if(elem.children[0].textContent.trim() == "Описание товара"){
            document.querySelector(".product-ostas-container").innerHTML = `
            <div class="product-opisanie">

                    <div class="product-opisanie-txt">
                    ${document.querySelector(".product-ostas-container").innerHTML = currentProduct[0].opisanie.replace("}}}]", currentProduct[0].title)}
                    </div>
                </div>
            `
        } else if(elem.children[0].textContent.trim() == "Системные требования"){
            document.querySelector(".product-ostas-container").innerHTML = `
            <div class="product-sisTreb">
                    <div class="product-sisTreb-title">Рекомендованные системные требования</div>

                    <div class="product-sisTreb-table">
                        
                    </div>
                </div>
            `

            document.querySelector(".product-sisTreb-table").appendChild(objectToTable(currentProduct[0].harakteristiki));

            let table = document.querySelector(".table-tr-colors");

            for (let i = 0; i < table.rows.length; i = i + 2) {
              table.rows[i].style.backgroundColor = "#250541";
            }
            for (let i = 1; i < table.rows.length; i = i + 2) {
                table.rows[i].style.backgroundColor = "transparent";
              }
        } else{
            document.querySelector(".product-ostas-container").innerHTML = `
            <div class="product-activate">
                    <div class="product-activate-title">Введите цифровой ключ продукта, чтобы добавить его в вашу библиотеку.</div>

                    <div class="product-activate-input">
                        <label>
                            Ключ продукта
                            <br>
                            <input type="text">
                        </label>
                    </div>
                </div>
            `
        }
    })
})

const scrollContainer = document.querySelector('.product-photo-videos');
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}
const throttledScroll = throttle(function(deltaY) {
    scrollContainer.scrollLeft += deltaY < 0 ? -50 : 50;
}, 20);
scrollContainer.addEventListener('wheel', function(e) {
    e.preventDefault();
    throttledScroll(e.deltaY);
}, { passive: false });



let slideIndex = 1;
showSlides(slideIndex);
function openModal() {
  document.getElementById('myModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  document.body.style.overflow = 'auto';
  document.querySelector("#videooo1").pause()
  document.querySelector("#videooo1").currentTime = 0;

}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  
  document.querySelector("#videooo1").pause()
  document.querySelector("#videooo1").currentTime = 0;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) { 
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  slides[slideIndex - 1].style.display = 'block';
}

document.querySelectorAll(".product-photo-video").forEach((elem) => {
    elem.addEventListener("click", () => {
        openModal()
    })
})

document.querySelector("#videooo").addEventListener("click", () => {
    document.querySelector("#videooo1").play()
})

document.querySelector(".modal").addEventListener('wheel', function(event) {
    // console.log(event.deltaY)
    if(event.deltaY>0){
        plusSlides(1)
    } else{
        plusSlides(-1)
    }
  })
  
document.body.addEventListener("keydown", (e) => {
    if(e.key == "Escape"){
        closeModal()
    } else if(e.key == "ArrowLeft"){
        plusSlides(-1)
    } else if(e.key == "ArrowRight"){
        plusSlides(1)
    }
})


function objectToTable(harakteristiki) {
    const table = document.createElement('table');
    table.setAttribute('cellspacing', '0');
    table.setAttribute('cellpadding', '0');
    table.setAttribute('class', 'table-tr-colors');
    Object.entries(harakteristiki).forEach(([key, value], index) => {
      const row = table.insertRow();
      if (index % 2 === 1) {
        row.style.backgroundColor = '#250541';
      }
      const cellKey = row.insertCell();
      const cellValue = row.insertCell();
      cellKey.textContent = key;
      cellValue.textContent = value;
    });
    return table;
}

let c = 1
document.querySelectorAll(".product-photo-video").forEach((elem) => {
    elem.querySelector("img").src = `img/${currentProduct[0].title.trim().replaceAll(" ", "")}-dop${c}.jpg`
    c++
})

c = 1

document.querySelectorAll(".product-gallery-img").forEach((elem) => {
    elem.src = `img/${currentProduct[0].title.trim().replaceAll(" ", "")}-dop${c}.jpg`
    c++
})

let ads = []
products.forEach((el) => {
    if(el.title != localStorage.getItem("currentProductInGames")){
        ads.push(el)
    }
})


function createProductCards() {
    for (let i = 0; i < ads.length; i++) {
      const result = parseInt(ads[i].price.replace(/\s/g, ''), 10);
      const discount = (result * Number(ads[i].skidka)) / 100;
      const priceWithDiscount = result - discount;
      const roundedToHundreds = Math.round(priceWithDiscount / 100) * 100;
      const productCard = document.createElement("div");
      productCard.className = "productCard";
      productCard.id = `productCard${i}`;
      productCard.innerHTML = `<div class="product-img2"><img src="img/${ads[i].main_img}" style="height: auto; width: 100%; object-fit: contain;" id="productImg${i}"/></div>
                                      <div id="topBlock${i}" class="topBlock">Top <img src="img/lightning.svg" alt=""> 4</div>
                                      <button id="addCardBtn${i}" class="addCardBtn">В корзину</button>
                                      <button id="addFavouritesBtn${i}" class="addFavouritesBtn"><img src="./img/likeImg.svg"></button>
                                      <div class="productCard_podBlock1">
                                          <span class="priceWithDiscount">${(roundedToHundreds - 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Р</span>
                                          <span class="discount">-${ads[i].skidka}%</span>
                                          <span class="priceWithoutDiscount">${ads[i].price} Р</span>
                                      </div>
                                      <div class="productCard_podBlock2">
                                          <span class="productName">${ads[i].title}</span>
                                      </div>
                                      <div class="productCard_podBlock3">
                                          <div class="category">
                                              <div class="bullet"></div>
                                              <span>${ads[i].categories[0]}</span>
                                          </div>
                                          <div class="category">
                                              <div class="bullet"></div>
                                              <span>${ads[i].categories[1]}</span>
                                          </div>
                                      </div>`;
      document.querySelector(".vam-budet-interesno-cont").appendChild(productCard);
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

document.querySelector(".addCardBtn").addEventListener("click", () => {
    window.location = "../Main/main.html"
})

document.querySelectorAll(".productCard").forEach((el) => {
    el.addEventListener("click", () => {
        localStorage.setItem("currentProductInGames", el.querySelector(".productName").textContent)
        location.href = "index.html"
    })    
})