const footerTemplate = document.createElement('template');
// let mapPath, phonePath, envelopePath;
// if(!window.location.pathname.includes('pages')){
    
//     mapPath = './assets/icons/map.svg';
//     phonePath = './assets/icons/phone.svg';
//     envelopePath = './assets/icons/envelope.svg';

// } else{
    
//     mapPath = '../assets/icons/map.svg';
//     phonePath = '../assets/icons/phone.svg';
//     envelopePath = '../assets/icons/envelope.svg';
// }
footerTemplate.innerHTML = `
<style>
    p{
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .footer {
        width: 100%;
        display: block;
        background-color: #1b263b;
        // height: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    }
    .footer__text {
        color: white;
        font-size: 0.7rem;
    }
    .footer__text--2 {
        color: white;
        font-size: 0.7rem;
    }
    .footer__contact{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }  
    .footer__address {
        font-size: 1rem;
        padding-top: 0.25rem;
        
    }
    
    .footer__address--dept {
        font-size: 1rem;
        // font-weight: bold;
    }
    
    .footer__address--uni {
        font-size: 1.1rem;
        font-weight: bold;
        padding-bottom: 0.5rem;
    }
    
    .footer__address--small {
        font-size: 0.8rem;
        padding-top: 0.25rem;
    }
    .footer__copyright{
        padding-bottom: 0.5rem;
    }

    @media screen and (min-width: 768px) {
        .footer {
            flex-direction: row;
            height: 3rem;
        }
        .footer__text--2 {
            padding-left: 0.5rem;
        }
        .footer__contact{
            display: none;
        }
        .footer__copyright{
            padding-bottom: 0rem;
        }
    }
</style>
<footer class='footer'>
    <div class='footer__contact'>
        <p class='footer__address leftBar__address--dept'>Department of Mathematics and Statistics</p>
        <p class='footer__address leftBar__address--uni'>Thompson Rivers University</p>
        <p class='footer__address--small'>805 TRU Way, Kamloops, BC</p>
        <p class='footer__address--small'>Phone: 1.250.828.5210, Email: jtomal@tru.ca</p>
    </div>
    <p class='footer__text'>Last updated on May 09, 2021.</p>
    <p class='footer__text footer__copyright'>&copy Jabed Hossain Tomal. </p>
</footer>
`;

class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'closed' });
      shadowRoot.appendChild(footerTemplate.content);
    }
}
  
customElements.define('footer-component', Footer);