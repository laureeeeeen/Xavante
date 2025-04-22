let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

// Configuração inicial: apenas o primeiro item aparece
items.forEach((item, index) => {
    if (index !== 0) {
        item.style.opacity = "0";
        item.style.transform = "translateX(100vw)";
    } else {
        item.classList.add('active');
    }
    dots[index].classList.toggle('active', index === 0);
});

// Atualiza o slider e os indicadores
function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    let dotsOld = indicator.querySelector('ul li.active');

    if (itemOld) itemOld.classList.remove('active');
    if (dotsOld) dotsOld.classList.remove('active');

    items[active].classList.add('active');
    items.forEach((item, index) => {
        if (index === active) {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
        } else {
            item.style.opacity = "0";
            item.style.transform = "translateX(100vw)";
        }
    });

    dots[active].classList.add('active');
    indicator.querySelector('.number').innerHTML = '0' + (active + 1);
}

// Avançar slide
nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
};

// Voltar slide
prevButton.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSlider();
};

