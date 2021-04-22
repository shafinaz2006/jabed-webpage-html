const footerTemplate = document.createElement('template');
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
        height: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .footer__text {
        color: white;
        font-size: 0.7rem;
    }
    .footer__text--2 {
        color: white;
        font-size: 0.7rem;
    }
    @media screen and (min-width: 768px) {
        .footer {
            flex-direction: row;
        }
        .footer__text--2 {
            padding-left: 0.5rem;
        }
    }
</style>
<footer class='footer'>
    <p class='footer__text'>Last updated on April 18, 2021. </p>
    <p class='footer__text--2'>For any query, please contact at jtomal@tru.ca </p>
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