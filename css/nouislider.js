import { css } from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

export const nouisliderStyles = css`
  .noUi-target {
    margin-bottom: 20px !important;
    margin-top: -40px;
  }
  .noUi-connects {
    background: lightgray;
  }
  .noUi-connect {
    background: none;
  }
  .noUi-marker-normal {
    display: none;
  }
  .noUi-horizontal {
    height: 10px;
  }
  .noUi-handle {
    border-radius: 50%;
    background: var(--app-header-background-color);
    box-shadow: none;
    width: 20px !important;
    height: 20px !important;
    right: -8px !important;
  }
  .noUi-handle:after,
  .noUi-handle:before {
    background: none;
  }
`;