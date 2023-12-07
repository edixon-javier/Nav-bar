import { LitElement, html, css } from "lit";

export class sellIcon extends LitElement {
    static get properties() {
        return {
          color: { type: String }
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.3333 14.6667V4H28V14.6667H17.3333ZM20 12H25.3333V6.66667H20V12ZM4 28H14.6667V17.3333H4V28ZM6.66667 20H12V25.3333H6.66667V20ZM21.3333 17.3333H24V21.3333H28V24H24V28H21.3333V24H17.3333V21.3333H21.3333V17.3333ZM4 14.6667H14.6667V4H4V14.6667ZM6.66667 6.66667H12V12H6.66667V6.66667Z"
          fill="#FFF"
        />
        <mask
          id="mask0_150_8404"
          maskUnits="userSpaceOnUse"
          x="4"
          y="4"
          width="24"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.3333 14.6667V4H28V14.6667H17.3333ZM20 12H25.3333V6.66667H20V12ZM4 28H14.6667V17.3333H4V28ZM6.66667 20H12V25.3333H6.66667V20ZM21.3333 17.3333H24V21.3333H28V24H24V28H21.3333V24H17.3333V21.3333H21.3333V17.3333ZM4 14.6667H14.6667V4H4V14.6667ZM6.66667 6.66667H12V12H6.66667V6.66667Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_150_8404)">
          <rect width="32" height="32" fill="${this.color}" />
        </g>
      </svg>
    `;
  }
}

customElements.define("sell-icon", sellIcon);

