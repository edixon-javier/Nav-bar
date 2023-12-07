import { LitElement, html, css } from "lit";

export class attachMoneyIcon extends LitElement {
  static get properties() {
    return {
      color: { type: String },
    };
  }

  constructor() {
    super();
    this.color = "#000000";
  }
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.33335 11.3334H2.66669V8.66671H9.33335V11.3334ZM9.33335 15.3334H2.66669V18H9.33335V15.3334ZM27.4534 24.6667L22.3467 19.56C21.28 20.2534 20.0267 20.6667 18.6667 20.6667C14.9867 20.6667 12 17.68 12 14C12 10.32 14.9867 7.33337 18.6667 7.33337C22.3467 7.33337 25.3334 10.32 25.3334 14C25.3334 15.36 24.92 16.6134 24.2267 17.6667L29.3334 22.7867L27.4534 24.6667ZM22.6667 14C22.6667 11.8 20.8667 10 18.6667 10C16.4667 10 14.6667 11.8 14.6667 14C14.6667 16.2 16.4667 18 18.6667 18C20.8667 18 22.6667 16.2 22.6667 14ZM2.66669 24.6667H16V22H2.66669V24.6667Z"
          fill="${this.color}"
        />
      </svg>
    `;
  }
}

customElements.define("attach-icon", attachMoneyIcon);
