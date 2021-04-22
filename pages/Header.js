const headerTemplate = document.createElement('template');
// console.log(window.location.pathname);
let logoPath, menu_white;

if(!window.location.pathname.includes('pages')){
    logoPath = './assets/TRU_Logo.png';
    menu_white = './assets/icons/menu_white.svg';
} else{
    logoPath = '../assets/TRU_Logo.png';
    menu_white = '../assets/icons/menu_white.svg'
}
headerTemplate.innerHTML = `
  <style>
    .header{width: 100%;}
    .header__logoContainer {
        height: 6rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-right: 1rem;
    }

    .header__logo {
        width: 100%;
        height: 80%;
        object-fit: contain;
        background-color: white;
    }

    .header__info {
        padding-left: 1rem;
        background-color: #1b263b;
        color: white;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .header__name {
        font-size: 26px;
        line-height: 34px;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .header__designation {
        font-size: 13px;
        line-height: 20px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .header__menu{
        margin-right: 1rem;
    }
    @media screen and (min-width: 768px) {
        .header__logoContainer {
            justify-content: flex-start;
        }
        .header__logo {
            width: 40%;
        }
        .header__name {
            font-size: 32px;
            line-height: 40px;
            margin-top: 0.5rem;
        }
        .header__info {
            justify-content: flex-start;
            padding-left: 2rem;
        }
        .header__designation {
            font-size: 14px;
            line-height: 22px;
            margin-bottom: 0.5rem;
        }
        .header__menu{
            display: none;
        }
    }
  </style>
  <header class='header'>
    <div class='header__logoContainer'>
        <img src=${logoPath} alt='logo' class='header__logo' />
    </div>
    <div class='header__info'>
        <div class='header__nameAndDesignation'>
            <h2 class='header__name'>Jabed H. Tomal, Ph.D</h2>
            <p class='header__designation'>Assistant Professor of Statistics</p>
        </div>
        <img src=${menu_white} alt='menu' class='header__menu'/> 
    </div>
</header>`

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
        let menu = shadowRoot.querySelector('.header__menu')
        menu.addEventListener('click', () =>{
            let nav = document.querySelector('.nav');
            nav.classList.toggle('nav__display');
        })
    }
}

customElements.define('header-component', Header);