import { LitElement, html, css } from "lit";
import { data } from "./data";

export class MyElement extends LitElement {
  static get properties() {
    return {
      active: { type: String },
      currenData: { type: Array },
      drawerOpen: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.active = "";
    this.currenData = [];
    this.drawerOpen = false;
  }

  selectOption(option) {
    if (option === this.active) {
      this.drawerOpen = false;
      this.active = "";
    } else {
      this.active = option;
      this.currenData = data[option].options;
      this.drawerOpen = true;
    }
  }

  boldText(text) {
    const primeraPalabra = text.split(" ")[0];
    const restoDelTexto = text.slice(primeraPalabra.length);
    return html`<b>${primeraPalabra}</b>${restoDelTexto}`;
  }

  handleDrawerOptionClick() {
    this.drawerOpen = false;
    this.active = "";
  }

  render() {
    return html`
      <div class="containerV1">
        ${this.drawerOpen ? html`<div class="blur-background"></div>` : ""}
        <div class=${`drawer ${this.drawerOpen ? "expanded" : "collapsed"}`}>
          ${this.currenData.map(
            (option) => html`
              <div class="drawer-option" @click=${this.handleDrawerOptionClick}>
                <span class="drawer-option-text"
                  >${this.boldText(option.text)}</span
                >
              </div>
            `
          )}
        </div>
        <div class="bottom_content">
          <div
            class=${`nav-item ${this.active === "Sell/Trade" ? "active" : ""}`}
            @click=${() => this.selectOption("Sell/Trade")}
          >
            <span>Sell/Trade</span>
          </div>
          <div
            class=${`nav-item ${this.active === "Finance" ? "active" : ""}`}
            @click=${() => this.selectOption("Finance")}
          >
            <span>Finance</span>
          </div>
          <div
            class=${`nav-item ${this.active === "Shop" ? "active" : ""}`}
            @click=${() => this.selectOption("Shop")}
          >
            <span>Shop</span>
          </div>
          <div
            class=${`nav-item ${this.active === "Chat" ? "active" : ""}`}
            @click=${() => this.selectOption("Chat")}
          >
            <span>Chat</span>
          </div>
          <div
            class=${`nav-item ${this.active === "More" ? "active" : ""}`}
            @click=${() => this.selectOption("More")}
          >
            <span>More</span>
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .containerV1 {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-weight: 400;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 0 8px 8px 8px;
        right: 0;
        box-sizing: border-box;
        
        .bottom_content {
          background-color: white;
          box-sizing: border-box;
          color: black;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: row;
          height: 70px;
          overflow: hidden;
          border-radius: 5px;
          box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.25);
        }

        .nav-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100%;
          position: relative;
          background: white;
          width: 20%;
          font-size: 12px;
          gap: 6px;

          &:first-child {
            padding-left: 8px;
          }

          &:last-child {
            padding-right: 8px;
          }

          .chatIcon {
            width: 22px;
          }
        }

        .drawer-option-circle {
          svg {
            path {
              fill: white;
            }
          }
        }

        .active {
          color: blue;

          svg {
            path {
              fill: blue;
            }
          }

          .sellIcon {
            animation: pulse 0.7s 1;
          }

          .financeIcon {
            animation: spin 0.7s 1;
          }

          .shopIcon {
            animation: pulse 0.7s 1;
          }

          .chatIcon {
            animation: float 0.7s ease-in-out 1;
          }

          .moreIcon {
            animation: pulse 0.7s 1;
          }
        }

        .active:after {
          background: linear-gradient(
            to right,
            transparent 15%,
            blue 15%,
            blue 85%,
            transparent 85%
          );

          position: absolute;
          content: "";
          height: 4px;
          right: 0;
          left: 0;
          top: 0;
        }

        .drawer {
          background-color: white;
          box-sizing: border-box;
          color: black;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          border-radius: 5px;
          box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.25);
          margin-bottom: 8px;
          overflow: hidden;
          box-sizing: border-box;
          display: none;
          transition: all 0.3s ease-in-out;
          max-height: 0;

          .drawer-option {
            height: 70px;
            display: flex;
            flex-direction: row;
            gap: 16px;
            align-items: center;
            padding: 0 16px;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
            transition: max-height 0.3s ease-out;

            .drawer-circle {
              background-color: blue;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 100%;

              .svg {
                width: 24px;
                max-height: 24px;
              }
            }

            
          }
        }

        .drawer-text {
          color: black;
        }

        .drawer.expanded {
          display: block;
          animation: slide-in-bottom 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            both;
          max-height: 100%;
        }

        .drawer.collapsed {
          display: block;
          animation: slide-out-top 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            both;
        }

        @keyframes slide-out-top {
          0% {
            transform: translateY(0);
            opacity: 1;
          }

          100% {
            transform: translateY(25px);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.2);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(180deg);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }

          25% {
            transform: translateY(-2px) rotate(10deg);
          }

          50% {
            transform: translateY(-4px) rotate(-10deg);
          }

          100% {
            transform: translateY(0) rotate(0deg);
          }
        }

        @-webkit-keyframes slide-in-bottom {
          0% {
            -webkit-transform: translateY(25px);
            transform: translateY(25px);
            opacity: 0;
          }

          100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-bottom {
          0% {
            transform: translateY(25px);
            opacity: 0;
          }

          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    `;
  }
}

window.customElements.define("my-element", MyElement);
