document.title = `Playnchill | ${localStorage.getItem("currentProductInGames")}`

function toMain(){
    window.location = "../Main/main.html"
}

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
    },
    {
        title: "Flower",
        price: "350",
        skidka: "10",
        janr: "Приключения",
        categories: ["Буст", "Origin"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    В игре Flower природа, обычно служащая лишь фоном для развития сюжета, выступает на первый план, становясь, в некотором роде, главным героем игры. Игроку дается возможность уйти от стрессов и волнений повседневной жизни и отправиться в странствия по красочному и живописному миру, любоваться его красотами и разгадывать тайны.Вам предлагается роль... ветра. Управляя потоком воздуха, вы сможете играть лепестками цветов. Цели и маршрут путешествия меняются с каждым этапом, но все они связаны с полетом и взаимодействием с природой. Используя беспроводной контроллер SIXAXIS, игрок направляет полет лепестков и изменяет окружающий мир.Flower позволяет игрокам испытать неповторимые чувства и выбрать свой ритм жизни. Порой спокойная и пасторальная, а временами и хаотическая игра Flower для системы PS3 перенесет вас в невероятный интерактивный мир, равного которому вы еще не видели.
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "64-разрядная Windows 10",
            "Процессор": "Intel Core i7-3770",
            "Оперативная память": "4 GB ОЗУ",
            "Видеокарта": "GeForce GTX 750 Ti",
            "DirectX": "11.0"
        },
        main_img: "img-main-Flower.jpg",
        img_video: "https://www.dropbox.com/scl/fi/wn3pdj4nkia0mez33qc7m/SnapSave.io-Flower-Trailer.mp4?rlkey=dkaxfjks7s5w9g5fv6smwikx7&st=prn1vqt4&raw=1",
    },
    {
        title: "Hohokum",
        price: "499",
        skidka: "15",
        janr: "Аркада",
        categories: ["Ключ", "Steam"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    Необычная и красочная игра, в которой игрок управляет летающим существом, похожим на змею. Геймплей игры не имеет четких целей или заданий, а скорее предлагает игроку свободно исследовать разнообразные миры, взаимодействуя с окружающей средой и другими персонажами. Игра отличается своим художественным стилем, музыкальным сопровождением и атмосферой, которые создают ощущение расслабленности.
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "64-разрядная Windows 10",
            "Процессор": "Intel Core i7-3770",
            "Оперативная память": "4 GB ОЗУ",
            "Видеокарта": "GeForce GTX 750 Ti",
            "DirectX": "11.0"
        },
        main_img: "img-main-Hohokum.jpg",
        img_video: "https://www.dropbox.com/scl/fi/0v598upavf8vqlseu0brg/SnapSave.io-HOHOKUM-Steam-Trailer-1080p60.mp4?rlkey=7mn0q73tql4gd4fapouaql89z&st=mivwquu3&raw=1",
    },
    {
        title: "The Witness",
        price: "699",
        skidka: "15",
        janr: "Приключения",
        categories: ["Ключ", "Steam"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    Геймплей The Witness сосредоточен на решении многочисленных головоломок, основанных на принципах лабиринтов и сеток. Игроки должны исследовать остров и находить различные панели, на которых представлены головоломки. Решение каждой головоломки открывает новые участки острова, предоставляя доступ к дополнительным задачам и секретам. Головоломки становятся всё более сложными по мере продвижения игрока, добавляя различные правила и усложнения.
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "Windows 7",
            "Процессор": "2,4 ГГц",
            "Оперативная память": "8 GB ОЗУ",
            "Видеокарта": "GeForce 780",
            "Место на диске": "5 ГБ",
            "DirectX": "10.0"
        },
        main_img: "img-main-TheWitness.jpg",
        img_video: "https://www.dropbox.com/scl/fi/a8m3phre9thsmvkyx5mku/SnapSave.io-The-Witness-Trailer-1080p.mp4?rlkey=nfy6r0q9u1yj3chgrltggrx8b&st=njqsursg&raw=1",
    },
    {
        title: "Eastshade",
        price: "999",
        skidka: "10",
        janr: "Головоломка",
        categories: ["Ключ", "EpicGames"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    Красочная адвенчура в открытом мире, в который вы берете на себя роль художника, путешествующего по острову Ист-Шейд. Вам предстоит знакомиться с местными жителями, заводить друзей и помогать тем, кто в этом нуждается, решать загадки и исследовать остров. Ваши действия могут повлиять на мир вокруг вас.
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "64-разрядные Windows 10",
            "Процессор": "Intel i5-750",
            "Оперативная память": "6 GB ОЗУ",
            "Видеокарта": "Nvidia GTX 560 Ti",
            "Место на диске": "2 ГБ",
            "DirectX": "11.0"
        },
        main_img: "img-main-Eastshade.jpg",
        img_video: "https://www.dropbox.com/scl/fi/2jvitlwggiabp3f8j3n5t/SnapSave.io-Eastshade-Official-Trailer-2-1080p.mp4?rlkey=wh7u6pqt9nnneml3wjrbfhznv&st=50v0uox2&raw=1",
    },
    {
        title: "Little Big Planet",
        price: "149",
        skidka: "25",
        janr: "Головоломка",
        categories: ["Ключ", "EpicGames"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    LittleBigPlanet представляет собой приключение главного героя — маленького существа из ткани по прозвищу Sackboy или Sackgirl, которое должно преодолевать различные уровни, а также решать всевозможные головоломки. Игроки могут настраивать внешность своих персонажей, используя различные аксессуары и наряды, которые можно найти во время прохождения игры.
                    <br>
                    Однако, самое главное в LittleBigPlanet — это возможность игроков создавать свои собственные уровни и контент. Игра предлагает мощный и гибкий инструмент для создания уровней, который позволяет пользователям разрабатывать разнообразные головоломки, препятствия и даже мини-игры. Созданные уровни могут быть опубликованы в сети для других игроков.
                    <br>
                    LittleBigPlanet также предлагает совместный режим игры, в котором до четырёх игроков могут объединиться, чтобы вместе проходить уровни, решать головоломки и соревноваться в мини-играх. Режим совместной игры доступен как локально, так и через интернет.
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "64-разрядные Windows 10",
            "Процессор": "Intel i5-750",
            "Оперативная память": "4 GB ОЗУ",
            "Видеокарта": "Nvidia GTX 560 Ti",
            "Место на диске": "2 ГБ",
            "DirectX": "11.0"
        },
        main_img: "img-main-LittleBigPlanet.jpg",
        img_video: "https://www.dropbox.com/scl/fi/72udk4qvgaqxbep9l5dur/SnapSave.io-LittleBigPlanet-Trailer-2008.mp4?rlkey=x6jn7nk7ozvo34nqq6xosi68o&st=26eoa70s&raw=1",
    },
    {
        title: "Unravel",
        price: "2300",
        skidka: "15",
        janr: "Пазл-платформер",
        categories: ["Буст", "Origins"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    Умилительный платформер о вязаном котенке по имени Ярни от шведской студии Coldwood Interactive.
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "64-разрядные Windows 10",
            "Процессор": "Intel Core 2 Quad 2,7 ГГц",
            "Оперативная память": "8 GB ОЗУ",
            "Видеокарта": "NVIDIA GeForce 9600",
            "Звук": "DirectX-совместимая",
            "Место на диске": "2,5 ГБ",
            "DirectX": "11.0"
        },
        main_img: "img-main-Unravel.jpg",
        img_video: "https://www.dropbox.com/scl/fi/bboqez7hvyu1bm9vjfva5/SnapSave.io-Unravel_-Official-Story-Trailer-1080p60.mp4?rlkey=1iwxz8i39g75f5ketzghxkouu&st=tqupdqub&raw=1",
    },
    {
        title: "Seasons after Fall",
        price: "799",
        skidka: "15",
        janr: "Приключения",
        categories: ["Ключ", "Steam"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    Seasons After Fall - это 2D-платформер-головоломка, которая позволит вам погрузиться в увлекательную вселенную и исследовать землю, управляемую магией и природой.
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "64-разрядные Windows 10",
            "Процессор": "Intel Core 2 Duo E4500 2,2 ГГц",
            "Оперативная память": "4 GB ОЗУ",
            "Видеокарта": "NVIDIA GeForce GT 640",
            "Место на диске": "4 ГБ",
            "DirectX": "11.0"
        },
        main_img: "img-main-SeasonsafterFall.jpg",
        img_video: "https://www.dropbox.com/scl/fi/nszxuxqiwld9i5jrgiyrz/SnapSave.io-Seasons-After-Fall-Teaser-Trailer.mp4?rlkey=8ssjpbd3jujn9qfhflo41zfbf&st=uih24p6z&raw=1",
    },
    {
        title: "Yonder: The Cloud Catcher Chronicle",
        price: "599",
        skidka: "10",
        janr: "Приключения",
        categories: ["Ключ", "Steam"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    Один остров, 8 климатических зон, каждая из которых отличается собственными обитателями и неповторимым ландшафтом. Но на весь этот райский уголок надвигается тьма и придется сильно поторопиться, иначе этот райский уголок навсегда исчезнет. 
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "64-разрядные Windows 10",
            "Процессор": "Intel Core i7- 3770 3.5 ГГц",
            "Оперативная память": "8 GB ОЗУ",
            "Видеокарта": "NVIDIA GeForce GTX 1060",
            "Место на диске": "4 ГБ",
            "DirectX": "11.0"
        },
        main_img: "img-main-YonderTheCloudCatcherChronicle.jpg",
        img_video: "https://www.dropbox.com/scl/fi/9omfx6851ngg6d2z8rzoz/SnapSave.io-Yonder_-The-Cloud-Catcher-Chronicles-Announcement-Trailer-1080p.mp4?rlkey=z7q3don41cp1gf2omzp2rlxbe&st=tqb40n72&raw=1",
    },
    {
        title: "Ori and the Blind Forest",
        price: "999",
        skidka: "50",
        janr: "Приключения",
        categories: ["Аккаунт", "Steam"],
        opisanie: `<div class="product-opisanie">
                    <div class="product-opisanie-title">
                        Полное погружение в }}}]
                    </div>
    
                    <div class="product-opisanie-txt">
                    Атмосферный платформер с бесшовным миром, рассказывающий о маленьком существе по имени Ори, пытающемся спасти свой сказочный мир от абсолютного зла. Проект представляет собой эмоциональную историю о любви и самопожертвовании, а также о надежде, которая кроется в каждом из нас.
                    </div>
                   </div>`,
        harakteristiki: {
            "ОС": "64-разрядные Windows 10",
            "Процессор": "Intel Core i5 2300",
            "Оперативная память": "4 GB ОЗУ",
            "Видеокарта": "GeForce GTX 550 Ti",
            "Место на диске": "4 ГБ",
            "DirectX": "11.0"
        },
        main_img: "img-main-OriandtheBlindForest.jpg",
        img_video: "https://www.dropbox.com/scl/fi/04folg9kaayhgwjrgsydr/SnapSave.io-Ori-and-the-Blind-Forest-Trailer-1080p.mp4?rlkey=iozmia5gd874y2bmhxh5q1mgv&st=opl2wxw0&raw=1",
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
document.body.style.backgroundImage = `url(img/bg-${currentProduct[0].title.trim().replaceAll(" ", "").replaceAll(":", "")}.jpg)`

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
    elem.querySelector("img").src = `img/${currentProduct[0].title.trim().replaceAll(" ", "").replaceAll(":", "")}-dop${c}.jpg`
    c++
})

c = 1

document.querySelectorAll(".product-gallery-img").forEach((elem) => {
    elem.src = `img/${currentProduct[0].title.trim().replaceAll(" ", "").replaceAll(":", "")}-dop${c}.jpg`
    c++
})

let ads = [];
products.forEach((el) => {
    if(el.title != localStorage.getItem("currentProductInGames")){
        ads.push(el);
    }
})

function randomArr(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

ads = randomArr(ads)

function createProductCards() {
    for (let i = 0; i < 4; i++) {
      const result = parseInt(ads[i].price.replace(/\s/g, ''), 10);
      const discount = (result * Number(ads[i].skidka)) / 100;
      const priceWithDiscount = result - discount;
      const roundedToHundreds = Math.round(priceWithDiscount / 100) * 100;
    const productCard = document.createElement("div");
    productCard.className = "productCard";
    productCard.id = `productCard${i}`;
    productCard.innerHTML = `<img src="./img/${ads[i].main_img}" class="productImg" id="productImg${i}"/>
                                    <div class="cardCategoriesBlock">
                                      <div class="hitBlock" id="hitBlock${i}">Хит продаж</div>
                                      <div class="newBlock" id="newBlock${i}">Новинка</div>
                                      <div class="topBlock" id="topBlock${i}">Top <img src="./images/lightning.svg" alt=""> 4</div>
                                    </div>
                                    <button id="addCardBtn${i}" class="addCardBtn">В корзину</button>
                                    <button id="addFavouritesBtn${i}" class="addFavouritesBtn"><img src="./img/likeImg.svg"></button>
                                    <div class="productCard_podBlock1">
                                        <span class="product_priceWithDiscount">${(roundedToHundreds - 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Р</span>
                                        <span class="product_discount">-${ads[i].skidka}%</span>
                                        <span class="product_priceWithoutDiscount">${ads[i].price} Р</span>
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

// document.querySelector(".addCardBtn").addEventListener("click", () => {
//     window.location = "../Main/main.html"
// })

document.querySelectorAll(".productCard").forEach((el) => {
    el.addEventListener("click", (e) => {
        if(e.target.className != "addCardBtn"){
          localStorage.setItem("currentProductInGames", el.querySelector(".productName").textContent)
          location.href = "index.html"
        } else{
          // console.log(el.closest(".productCard"));
          const productImgContainer = el.closest(".productCard");
          const saveBlock = document.querySelector(".saveBlock");
          const productImg = e.currentTarget.querySelector(".productImg");
          if (!productImg || !saveBlock) {
              console.error('One of the elements were not found.');
              return;
          }
          let cloned = productImg.cloneNode();
          cloned.style.position = "absolute";
          cloned.style.width = "30px";
          cloned.style.height = "50px";
          cloned.style.zIndex = "20";
          cloned.style.borderRadius = "0";
          // cloned.style.opacity = 0;
          // cloned.style.left = `${productImg.getBoundingClientRect().left + window.scrollX}px`;
          // cloned.style.top = `${productImg.getBoundingClientRect().top + window.scrollY}px`;
          const targetX = (saveBlock.getBoundingClientRect().left + window.scrollX - (productImg.getBoundingClientRect().left + window.scrollX)) + 95;
          const targetY = (saveBlock.getBoundingClientRect().top + window.scrollY - (productImg.getBoundingClientRect().top + window.scrollY))
          const keyframes = `
            @keyframes moveDownRightAndFlyToSaveBlock {
              0% {
                transform: translate(0, 0);
                opacity: 0;
              }
              50% {
                transform: translate(220px, 500px);
                opacity: 1;
              }
              100% {
                transform: translate(${targetX}px, ${targetY}px);
                opacity: 1;
              }
            }
          `;
          const styleSheet = document.createElement("style");
          styleSheet.type = "text/css";
          styleSheet.innerText = keyframes;
          document.head.appendChild(styleSheet);
          productImgContainer.appendChild(cloned);
          requestAnimationFrame(() => {
              cloned.style.animation = 'moveDownRightAndFlyToSaveBlock 2s forwards';
          });
          cloned.addEventListener('animationend', function() {
              cloned.remove();
              document.head.removeChild(styleSheet);
          });
        
        
          if (localStorage.getItem("productsInBasketInGames") == null) {
            localStorage.setItem("productsInBasketInGames", JSON.stringify([
                {
                    title: e.currentTarget.querySelector(".productName").textContent,
                    price: e.currentTarget.querySelector(".product_priceWithDiscount").textContent,
                    skidka: e.currentTarget.querySelector(".product_discount").textContent,
                    oldPrice: e.currentTarget.querySelector(".product_priceWithoutDiscount").textContent,
                    count: 1
                }
            ]));
          } else {
            let products = JSON.parse(localStorage.getItem("productsInBasketInGames"));
              let existingProduct = products.find(item => item.title === e.currentTarget.querySelector(".productName").textContent);
              if (existingProduct === undefined) {
                  products.push({
                    title: e.currentTarget.querySelector(".productName").textContent,
                    price: e.currentTarget.querySelector(".product_priceWithDiscount").textContent,
                    skidka: e.currentTarget.querySelector(".product_discount").textContent,
                    oldPrice: e.currentTarget.querySelector(".product_priceWithoutDiscount").textContent,
                    count: 1
                  });
              } else {
                  existingProduct.count += 1;
              }
              localStorage.setItem("productsInBasketInGames", JSON.stringify(products));
          }
        
          setTimeout(() => {
            document.querySelector(".uveda").style.display = "block"
            document.querySelector(".uveda").textContent = JSON.parse(localStorage.getItem("productsInBasketInGames")).length
          }, 2000);
        }
        // console.log(e.target.className);
    })    
})

document.querySelector(".product-to-back").addEventListener("click", () => {
  const productImgContainer = document.querySelector(".product-img");
  const saveBlock = document.querySelector(".saveBlock");
  const productImg = productImgContainer.querySelector("img");
  if (!productImg || !saveBlock) {
      console.error('One of the elements were not found.');
      return;
  }
  let cloned = productImg.cloneNode(true);
  cloned.style.position = "absolute";
  cloned.style.width = "30px";
  cloned.style.opacity = 0;
  cloned.style.left = `${productImg.getBoundingClientRect().left + window.scrollX}px`;
  cloned.style.top = `${productImg.getBoundingClientRect().top + window.scrollY}px`;
  const targetX = (saveBlock.getBoundingClientRect().left + window.scrollX - (productImg.getBoundingClientRect().left + window.scrollX)) + 95;
  const targetY = (saveBlock.getBoundingClientRect().top + window.scrollY - (productImg.getBoundingClientRect().top + window.scrollY))
  const keyframes = `
    @keyframes moveDownRightAndFlyToSaveBlock {
      0% {
        transform: translate(0, 0);
        opacity: 0;
      }
      50% {
        transform: translate(220px, 500px);
        opacity: 1;
      }
      100% {
        transform: translate(${targetX}px, ${targetY}px);
        opacity: 1;
      }
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = keyframes;
  document.head.appendChild(styleSheet);
  productImgContainer.appendChild(cloned);
  requestAnimationFrame(() => {
      cloned.style.animation = 'moveDownRightAndFlyToSaveBlock 2s forwards';
  });
  cloned.addEventListener('animationend', function() {
      cloned.remove();
      document.head.removeChild(styleSheet);
  });


  if (localStorage.getItem("productsInBasketInGames") == null) {
    localStorage.setItem("productsInBasketInGames", JSON.stringify([
        {
            title: document.querySelector(".product-title").textContent,
            price: document.querySelector(".product-now-price").textContent,
            skidka: document.querySelector(".product-skidka").textContent,
            oldPrice: document.querySelector(".product-old-price").textContent,
            count: 1
        }
    ]));
  } else {
    let products = JSON.parse(localStorage.getItem("productsInBasketInGames"));
      let existingProduct = products.find(item => item.title === document.querySelector(".product-title").textContent);
      if (existingProduct === undefined) {
          products.push({
              title: document.querySelector(".product-title").textContent,
              price: document.querySelector(".product-now-price").textContent,
              skidka: document.querySelector(".product-skidka").textContent,
              oldPrice: document.querySelector(".product-old-price").textContent,
              count: 1
          });
      } else {
          existingProduct.count += 1;
      }
      localStorage.setItem("productsInBasketInGames", JSON.stringify(products));
  }

  setTimeout(() => {
    document.querySelector(".uveda").style.display = "block"
    document.querySelector(".uveda").textContent = JSON.parse(localStorage.getItem("productsInBasketInGames")).length
  }, 2000);
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