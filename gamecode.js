// значения
let balancedisplay = document.getElementById('coins')
let clickdisplay = document.getElementById('clicks')
//кнопки
let clickarea = document.getElementById('clickarea')
// переменные
let balance = 0
let clicks = 0
let delay = 2000
// функция обновления
function update() {
        balancedisplay.textContent = balance;
        clickdisplay.textContent = clicks;
        ccursedisplay.textContent = coincurse
        csdisplay.textContent = "Скорость - " + cscost
        dcdisplay.textContent = "Двойной клик -" + dccost
        save()
}
//обработка клика
let activedelay = false

clickarea.onclick =function () {
    if (activedelay==false) {
        clicks = clicks + 1 + dclevel
    clickdisplay.textContent=clicks
    activedelay=true
    update()
    setTimeout(() => {
        activedelay=false
    },delay)
    }
}

// обмен кликов на деньги
let tradebutton = document.getElementById('tradebutton')
let ccursedisplay = document.getElementById('coincurse')
let coincurse = 1
tradebutton.onclick = function () {
    if (clicks != 0) {
        balance += clicks * coincurse;
        clicks = 0;
        balancedisplay.textContent = balance;
        clickdisplay.textContent = clicks;
        ccursedisplay.textContent = coincurse;
        update()
        
    }
}


// уменьшение задержки 
let csdisplay = document.getElementById('csdisplay')
let csupgrade = document.getElementById('clickspeed')
let cscost = 25
csupgrade.onclick = function () {
    if (balance >=  cscost) {
        balance -= cscost
        cscost = cscost*2
        delay = (delay * 10) / 100
        update()
        
    }
}

// двойные клики
let doublclick = document.getElementById('doblclick')
let dcdisplay = document.getElementById('dcdisplay')
let dclevel = 0
let dccost = 1000

doublclick.onclick = function () {
    if (balance >= dccost) {
        balance -= dccost;
        dccost = dccost *2
        dclevel++;
        update();
    }
}
// joker
let buyday = 0
let buydaybutton = document.getElementById('buyday')
buydaybutton.onclick = function () {
    if (balance >= 10000 && buyday == 0) {
        reset();
        window.location="cupon.html"
        buyday = 1
    }
}
// сохранение
function save() {
    localStorage.balance = balance;
    localStorage.clicks = clicks;
    localStorage.delay = delay;
    localStorage.cscost = cscost;
    localStorage.dccost = dccost;
    localStorage.dclevel = dclevel;
    localStorage.data = "true";
    localStorage.buyday = buyday;
}
// загрузка
function load() {
    if (localStorage.data == "true") {
        balance = Number(localStorage.balance);
        clicks = Number(localStorage.clicks);
        delay = Number(localStorage.delay);
        cscost = Number(localStorage.cscost);
        dccost = Number(localStorage.dccost);
        dclevel = Number(localStorage.dclevel);
        buyday = Number(localStorage.buyday)        
    }        
}
load()
// minecraft
let buinecraft = document.getElementById("buyminecraft")
buinecraft.onclick = function () {
    if (balance >= 1000) {
     window.location="https://mcpehub.org/engine/getfile.php?id=10456"
    }
} 
function reset() {
    localStorage.balance = 0;
    localStorage.clicks = 0;
    localStorage.delay = 2000;
    localStorage.cscost = 25;
    localStorage.dccost = 1000;
    localStorage.dclevel = 0;
    localStorage.data = "true";
    balance = 0;
    clicks = 0;
    delay = 2000;
    cscost = 25;
    dccost = 1000;
    dclevel = 0;
    update()
}
