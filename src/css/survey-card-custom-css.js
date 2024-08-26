import { css } from "lit";

export const surveyCardCustomCssStyles = css`
  .rating-item {
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
    border-radius: calc(12.5 * var(--base-unit, 8px));
    white-space: nowrap;
    padding: calc(0.5 * var(--base-unit, 8px)) calc(2.5 * var(--base-unit, 8px));
    height: calc(6 * var(--base-unit, 8px));
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-width: calc(6 * var(--base-unit, 8px));
    text-align: center;
    fill: var(--sjs-general-forecolor, var(--foreground, #161616));
    font-size: calc(2 * var(--base-unit, 8px));
    width: 90%;
    margin: auto;
  }
  .boolean {
    display: flex;
    width: max-content;
    position: relative;
    padding: calc(0.5 * var(--base-unit, 8px));
    background: lightgreen;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px inset;
    border-radius: calc(12.5 * var(--base-unit, 8px));
  }
  .element-with-frame {
    border-radius: calc(0.5 * var(--base-unit, 8px));
    box-sizing: border-box;
    background: var(--sjs-question-background, var(--background, #fff));
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
    padding: 10px 35px 35px 35px !important;
  }
`;
