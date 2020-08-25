console.log ('Hello!');
const name='Zbyszek Pniok';
const time=12;
const age=39;

console.log (`My name is ${name} and I have ${time} weeks to complete`);
console.log (`My name is ` +name+ ' and I am ' +age+ ` years old`);

const aboutHeader=document.querySelector('.about__header--js');
console.log (aboutHeader);

const articles = document.querySelectorAll('.article__paragraph');
console.log (articles);

const paragraphs = document.querySelectorAll('p');
console.log (paragraphs[2]);

const JS = document.querySelector('.JS__Excercise');
console.log (JS.innerHTML);
JS.innerHTML = 'Java Script != Java'

const about = document.querySelector('.about__header');
console.log (about.innerHTML);
about.innerHTML = `My name is ${name} and I have ${time} weeks to complete this training`

const welcome=(name, age) => {
    console.log (`Hello ${name} masz ${age} lat`)
}
welcome(`Zbyszek Pniok`, 39);

function calculate(x) {
    x=x+6;
    console.log(x);
    return x + 7;
}

console.log (calculate(5));

const myCalculation = calculate(10);
console.log(myCalculation);

const button = document.querySelector('.header__button--js');
console.log(button);

function handleClick() {
console.log('halo')
};

button.addEventListener ('click', (e) => {
const heading = document.querySelector('.heading');
heading.innerHTML = 'Click Click';
})
const navigationSwitcher=document.querySelector('.navigation__switcher');

navigationSwitcher.addEventListener('click',(e) =>{
const navigationList=document.querySelector('.navigation__list--js');
navigationList.classList.toggle ('navigation__list--visible')
navigationSwitcher.classList.toggle ('navigationX');
console.log(navigationList);
})







