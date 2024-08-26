import { css } from "lit";

export const noUiSliderStyles = css`
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
    height: 7px;
  }
  .noUi-handle {
    border-radius: 50%;
    background: green;
    box-shadow: none;
    width: 20px !important;
    height: 20px !important;
    right: -8px !important;
  }
  .noUi-handle:after,
  .noUi-handle:before {
    background: none;
  }
  .noUi-tooltip {
    display: none;
  }
  .noUi-active .noUi-tooltip {
    display: block;
    left: -200%;
    bottom: -35%;
  }
`;
