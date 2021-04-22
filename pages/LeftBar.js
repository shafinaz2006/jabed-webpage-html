const divTemplate = document.createElement('template');
let profilePicPath, mapPath, phonePath, envelopePath;
if(!window.location.pathname.includes('pages')){
    profilePicPath = './assets/profilePic.JPG';
    mapPath = './assets/icons/map.svg';
    phonePath = './assets/icons/phone.svg';
    envelopePath = './assets/icons/envelope.svg';

} else{
    profilePicPath = '../assets/profilePic.JPG';
    mapPath = '../assets/icons/map.svg';
    phonePath = '../assets/icons/phone.svg';
    envelopePath = '../assets/icons/envelope.svg';
}
divTemplate.innerHTML = `
<style>
p{
    margin-top: 0px;
    margin-bottom: 0px;
}
.leftBar {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1rem;
    padding-bottom: 3rem;
    color: black;
    padding-left: 1rem;
    padding-right: 1rem;
}

.leftBar__imgDiv {
    width: 100%;
    height: 18rem;
    margin-bottom: 2rem;
}

.leftBar__img {
    text-align: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.leftBar__heading {
    padding-bottom: 0.5rem;
    margin-top: 0px;
    margin-bottom: 0px;
}

.leftBar__address {
    font-size: 1rem;
    padding-top: 0.25rem;
    
}

.leftBar__address--dept {
    font-weight: bold;
}

.leftBar__address--uni {
    font-size: 1.1rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
}

.leftBar__address--small {
    font-size: 0.9rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 0.25rem;
}

.leftBar__icon {
    height: 1rem;
    width: 1rem;
    opacity: 0.8;
    margin-right: 0.5rem;
}

@media screen and (min-width: 768px) {
    .leftBar {
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        // width: 28%;
    }
    .leftBar__imgDiv {
        height: 50vh;
    }
    .leftBar__img {
        width: 100%;
    }
}

@media screen and (min-width: 1280px) {
    .leftBar__imgDiv {
        height: 60vh;
    }
    .leftBar__img {
        width: 90%
    }
}
</style>
<div class='leftBar'>
    <div class='leftBar__imgDiv'>
        <img class='leftBar__img' src=${profilePicPath} alt='profile' />
    </div>
    <div class='leftBar__contact'>
        <h2 class='leftBar__heading'>Contact:</h2>
        <p class='leftBar__address leftBar__address--dept'>Department of Mathematics and Statistics</p>
        <p class='leftBar__address leftBar__address--uni'>Thompson Rivers University</p>
        <div class='leftBar__address--small'>
            <img src=${mapPath} alt='map' class='leftBar__icon' />
            <p>805 TRU Way, Kamloops, BC</p>
        </div>
        <div class='leftBar__address--small'>
            <img src=${phonePath} alt='phone' class='leftBar__icon' />
            <p>1.250.828.5210</p>
        </div>
        <div class='leftBar__address--small'>
            <img src=${envelopePath} alt='envelope' class='leftBar__icon' />
            <p>jtomal@tru.ca</p>
        </div>
    </div>
</div>`

class Div extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'closed' });
      shadowRoot.appendChild(divTemplate.content);
    }
  }
  
customElements.define('div-component', Div);