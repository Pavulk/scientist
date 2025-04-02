let mdl = document.getElementById("testModal");
let btn = document.getElementById("openTest");
let qTxt = document.getElementById("question");
let btns = document.querySelectorAll(".answer");

let qst = [
    { qw: "Найзаповітніший ресурс України?", answ: ["Гроші", "Вугілля", "Розум"], cor: "Розум" },
    { qw: "Чи плавали козаки на підводних човнах?", answ: ["так", "ні", "шо?"], cor: "так"},
    { qw: "Хто є автором  «Повісті минулих літ»?", answ: ["Н.Волочай", "М.Грушевський", "Н.Літописець"], cor: "Н.Літописець" },
    { qw: "Як називався найбільший в світі літак?", answ: ["Ан-225", "Міг-2", "Карлсон"], cor: "Ан-225" },
    { qw: "Як називалася перша друкована в східній європі книга?", answ: ["Кобзар", "Апостол", "Остромирове Євангеліє"], cor: "Апостол" }
];

btn.addEventListener("click", function () {
    mdl.style.display = "block";
    loadQ();
});

btns.forEach(b => {
    b.addEventListener("click", function () {
        let answer = this.getAttribute("data-a");
        let coranswer = qst[i].cor;

        if (answer == coranswer) {
            s++;
            alert("Правильно!");
        } else {
            alert("Неправильно!");
        }

        i++;
        loadQ();
    });
});

let i = 0;
let s = 0;

function loadQ() {
    if (i < qst.length) {
        let qw = qst[i];
        qTxt.textContent = qw.qw;
        btns.forEach((b, j) => {
            b.textContent = qw.answ[j];
            b.setAttribute("data-a", qw.answ[j]);
        });
    } else {
        alert(`Ви набрали: ${s} із ${qst.length}`);
        mdl.style.display = "none";
        i = 0;
        s = 0;
    }
}
