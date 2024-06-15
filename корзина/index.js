let a = JSON.parse(localStorage.getItem("productsInBasketInGames"))
a.forEach(element => {
    let card = document.createElement("div")
    card.classList.add("basket-card")
    card.innerHTML = `
     <div class="basket-card-img">
         <img src="../страница товара/img/img-main-${(element.title).replaceAll(" ", "").replaceAll(":", "")}.jpg" alt="">
     </div>

     <div class="basket-card-cont">
         <div class="basket-card-title">${element.title}</div>

         <div class="basket-card-prices">
             <div class="basket-card-new-price">${element.price}</div>

             <div class="basket-card-skidka">${element.skidka}</div>

             <div class="basket-card-old-price">${element.oldPrice}</div>
         </div>
         
         <div class="basket-card-dop-info">
             <span>Регион активации</span> Россия и страны СНГ
             <br><br>
             <span>Сервис активации</span> Steam
         </div>
     </div>

     <div class="basket-card-cont-2">
         <div class="basket-card-close">
             <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58377 6.99662L0 12.583L1.41388 13.9976L6.99765 8.41116L12.5814 13.9976L13.9953 12.583L8.41153 6.99662L13.9917 1.41382L12.5778 -0.000732422L6.99765 5.58207L1.41748 -0.000730515L0.00360323 1.41382L5.58377 6.99662Z" fill="white" fill-opacity="0.2"/>
                 </svg>
                 
         </div>

         <div class="basket-card-count">
             <div class="basket-card-count-minus">
                 <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M15 1.5L0 1.5" stroke="#36373C" stroke-width="2"/>
                     </svg>
                     
             </div>

             <div class="basket-card-count-znach">${element.count}</div>

             <div class="basket-card-count-plus">
                 <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M7.5 15V0" stroke="#36373C" stroke-width="2"/>
                     <path d="M15 7.5L0 7.5" stroke="#36373C" stroke-width="2"/>
                     </svg>                                
             </div>
         </div>

         <div class="basket-card-like">
             <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17875 2.47059C4.48377 2.47059 2.47619 4.45541 2.47619 6.69457C2.47619 7.78053 2.9447 8.84477 3.81685 9.64625L13 18.0853L22.1831 9.64625C23.0553 8.84478 23.5238 7.78053 23.5238 6.69457C23.5238 4.45541 21.5162 2.47059 18.8212 2.47059C17.5427 2.47059 16.3349 2.93827 15.4593 3.74289L13.8388 5.23214C13.3648 5.66772 12.6352 5.66772 12.1612 5.23214L10.5407 3.7429C9.66509 2.93828 8.45731 2.47059 7.17875 2.47059ZM0 6.69457C0 2.90358 3.31187 0 7.17875 0C9.05132 0 10.8656 0.682659 12.2182 1.92567L13 2.6441L13.7818 1.92566C15.1344 0.682658 16.9487 0 18.8212 0C22.6881 0 26 2.90358 26 6.69457C26 8.5044 25.2167 10.2173 23.8607 11.4635L13.8388 20.6733C13.3648 21.1089 12.6352 21.1089 12.1612 20.6733L2.13929 11.4635C0.783262 10.2173 0 8.5044 0 6.69457Z" fill="#1E1C27"/>
                 </svg>
                 
         </div>
     </div>`   

 document.querySelector(".basket-cards").appendChild(card)
});

document.querySelector("#userName").innerHTML = JSON.parse(localStorage.getItem("users")).find(us => us.id == Number(sessionStorage.getItem("userId"))).username

document.querySelector(".avatar img").src = "../node/media/profileImg.jpg"

if(localStorage.getItem("productsInBasketInGames") != null && JSON.parse(localStorage.getItem("productsInBasketInGames")).length != 0){
    document.querySelector(".uveda").style.display = "block"
    document.querySelector(".uveda").textContent = JSON.parse(localStorage.getItem("productsInBasketInGames")).length
    console.log(3234);
  }
  
  document.querySelectorAll(".saveBlock img")[1].addEventListener("click", () => {
    window.location.href = `../корзина/index.html`
  })

let total_price = 0

document.querySelectorAll(".basket-card-count-minus").forEach(el => {
    el.addEventListener("click", () => {
        const countElement = el.closest(".basket-card").querySelector(".basket-card-count-znach");
        if (countElement && Number(countElement.textContent) > 1) {
            countElement.textContent = Number(countElement.textContent) - 1;
            let q = JSON.parse(localStorage.getItem("productsInBasketInGames"))
            q.find(item => item.title === el.closest(".basket-card").querySelector(".basket-card-title").textContent).count = q.find(item => item.title === el.closest(".basket-card").querySelector(".basket-card-title").textContent).count - 1
            localStorage.setItem("productsInBasketInGames", JSON.stringify(q))
        }
        priceTovarov()
    });
});

document.querySelectorAll(".basket-card-count-plus").forEach(el => {
    el.addEventListener("click", () => {
        const countElement = el.closest(".basket-card").querySelector(".basket-card-count-znach");
        if (countElement) {
            countElement.textContent = Number(countElement.textContent) + 1;
            let q = JSON.parse(localStorage.getItem("productsInBasketInGames"))
            q.find(item => item.title === el.closest(".basket-card").querySelector(".basket-card-title").textContent).count = q.find(item => item.title === el.closest(".basket-card").querySelector(".basket-card-title").textContent).count + 1
            localStorage.setItem("productsInBasketInGames", JSON.stringify(q))
        }
        priceTovarov()
    });
});

document.querySelectorAll(".basket-card-close").forEach(el => {
    el.addEventListener("click", () => {
        let card = el.closest(".basket-card")
        card.remove()
        let qwerty = JSON.parse(localStorage.getItem("productsInBasketInGames"))
        qwerty = qwerty.filter(obj => obj["title"] !== el.closest(".basket-card").querySelector(".basket-card-title").textContent)
        localStorage.setItem("productsInBasketInGames", JSON.stringify(qwerty))
        document.querySelector(".uveda").textContent = JSON.parse(localStorage.getItem("productsInBasketInGames")).length
        skokTovarov()
        priceTovarov()
        // document.querySelector(".basket-title span").textContent = JSON.parse(localStorage.getItem("productsInBasketInGames")).length
    })
})

document.querySelectorAll(".basket-so-card").forEach(e => {
    e.addEventListener("click", () => {
        document.querySelectorAll(".basket-so-card").forEach(e => {
            e.closest(".basket-so-card").style.border = "2px solid #FFFFFF1A"
            e.querySelector("input").checked = false
        })
        e.closest(".basket-so-card").style.border = "2px solid #77BE1D"
        e.querySelector("input").checked = true
        // console.log(324);

        document.querySelector(".basket-oformit-zakaz").style.border = "2px solid #77BE1D"
        document.querySelector(".basket-oformit-zakaz-but").style.background = "#77BE1D"
        document.querySelector(".basket-oformit-zakaz-but").style.color = "#FFFFFF"
        document.querySelector(".basket-oformit-zakaz-but").style.cursor = "pointer"
    })
})

document.querySelector(".basket-oformit-zakaz-but").addEventListener("click", () => {
    if(document.querySelector(".basket-oformit-zakaz-but").style.cursor == ""){
        alert("Выберите способ оплаты")
    } else{
        alert("Заказ успешно оформлен")
        localStorage.setItem("productsInBasketInGames", JSON.stringify([]))
        skokTovarov()
        window.scrollTo(0, 0);
    }
})

// document.querySelector(".basket-title span").textContent = JSON.parse(localStorage.getItem("productsInBasketInGames")).length

function parseFormattedNumber(formattedNumber) {
    // Удаляем все пробелы и букву "Р"
    const cleanedNumber = formattedNumber.replace(/\s/g, '').replace('Р', '');
    // Преобразуем строку в число
    return Number(cleanedNumber);
}

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function priceTovarov(){
    let a = 0
    document.querySelectorAll(".basket-card").forEach(e => {
        a += parseFormattedNumber(e.querySelector(".basket-card-new-price").textContent) * Number(e.querySelector(".basket-card-count-znach").textContent)
        // console.log(e.querySelector(".basket-card-count-znach").textContent);
        // console.log(e.querySelector(".basket-card-new-price").textContent);
        // console.log(document.querySelector(".basket-card-count-znach").textContent);
        // console.log(a);
    })
    total_price = a
    document.querySelector(".basket-oformit-zakaz-total_price").textContent = formatNumber(total_price) + " Р"
}

priceTovarov()

function skokTovarov(){
    if(JSON.parse(localStorage.getItem("productsInBasketInGames")).length == 1){
        document.querySelector(".basket-oformit-zakaz-items_count").textContent = "1 товар"
        document.querySelector(".basket-cont").classList.remove("none")
    } else if(JSON.parse(localStorage.getItem("productsInBasketInGames")).length == 0){
        document.querySelector(".basket-oformit-zakaz-items_count").textContent = `0 товаров`
        document.querySelector(".basket-title span").textContent = "пуста"
        document.querySelector(".basket-cont").classList.add("none")
        document.querySelector("main").style.height = "700px"
        let abc = document.createElement("div")
        abc.classList.add("abcstyle")
        abc.innerHTML = `<h1>Добавьте игры в свою корзину и возвращайтесь!🙂</h1>`
        document.querySelector("body").appendChild(abc)
    } else if(JSON.parse(localStorage.getItem("productsInBasketInGames")).length < 5){
        document.querySelector(".basket-oformit-zakaz-items_count").textContent = `${JSON.parse(localStorage.getItem("productsInBasketInGames")).length} товара`
        document.querySelector(".basket-cont").classList.remove("none")
    } else{
        document.querySelector(".basket-oformit-zakaz-items_count").textContent = `${JSON.parse(localStorage.getItem("productsInBasketInGames")).length} товаров`
        document.querySelector(".basket-cont").classList.remove("none")
    }
}

skokTovarov()

function toMain(){
    window.location.href = "../Main/main.html"
}