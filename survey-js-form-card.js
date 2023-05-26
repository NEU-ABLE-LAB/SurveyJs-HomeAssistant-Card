import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";
import "https://unpkg.com/jquery";

function loadCSS(url) {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

loadCSS("https://unpkg.com/survey-jquery@1.9.84/defaultV2.min.css");

class SurveyCard extends LitElement {
  static get properties() {
    return {
      config: { type: Object },
    };
  }

  setConfig(config) {
    console.log("Config", this, config);
    this.config = config;
    this.survey = null;
    this.survey_timer = null;
    this.survey_state = "";

    setTimeout(() => {
      this._hass.callApi("GET", "states/" + this.config.entity).then((data) => {
        console.log("Get Entity Data", data);
        if (data.state === "survey sent" || data.state === "survey started") {
          this.startTimer(data.state);
        } else {
          clearInterval(this.survey_timer);
          console.log("Interval Cleared");
        }
        console.log(this.survey_timer);
      });
    }, 500);
  }

  set hass(hass) {
    console.log("Hass", hass);
    this._hass = hass;
  }

  firstUpdated() {
    console.log("Hi");
    var thisNode = this;
    $(document).ready(function () {
      console.log("Jquery working");
      $.getScript("https://unpkg.com/survey-jquery/survey.jquery.min.js").done(
        (script, textStatus) => {
          console.log(thisNode);
          thisNode.constructSurveyUI();
        }
      );
    });
  }

  startTimer(state) {
    var countDownDate;
    if (state == "") {
      countDownDate = new Date();
      countDownDate.setMinutes(
        countDownDate.getMinutes() + this.config.expiry_time_min
      );
      this._hass.callApi("POST", "states/" + this.config.entity, {
        state: "survey started",
        attributes: {
          start_timer_date: countDownDate.getTime(),
        },
      });
    } else if (state == "survey started") {
      this._hass.callApi("GET", "states/" + this.config.entity).then((data) => {
        console.log("Get Entity Data", data);
        countDownDate = new Date(data.attributes.start_timer_date);
      });
    }

    var thisHassNode = this;

    this.survey_timer = setInterval(function () {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      console.log(
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ",
        thisHassNode.survey_timer
      );

      if (distance < 0) {
        clearInterval(thisHassNode.survey_timer);
        thisHassNode.survey_state = "partial survey received";
        thisHassNode.survey.doComplete();
      }
    }, 1000);
  }

  constructSurveyUI() {
    console.log("Script accesed", Survey, "Config", this.config);
    this.survey = new Survey.Model(this.config.surveyjs_json);
    console.log("Survey Model", this.survey);

    this.survey_state = "survey received";

    this.survey.onComplete.add((sender) => {
      const results = {
        user_name: this._hass.user.name,
        survey_trigger: "Temp Change",
        survey_response: sender.data,
      };

      this._hass
        .callApi("POST", "states/" + this.config.entity, {
          state: sender.data ? this.survey_state : "survey not received",
          attributes: results,
        })
        .then((data) => {
          console.log("Post Entity Data", data);
          clearInterval(this.survey_timer);
          let thank_you_element =
            this.shadowRoot.querySelector(".sd-completedpage");
          thank_you_element.innerText =
            "Thank you for your response! Click here to return home.";
          thank_you_element.style.cursor = "pointer";
          thank_you_element.onclick = function () {
            window.location.href = "/";
          };
        });
    });

    $(this.shadowRoot.getElementById("surveyElement")).Survey({
      model: this.survey,
    });
  }

  render() {
    return html` <div id="surveyElement"></div> `;
  }

  static get styles() {
    return css`
      /*!
    * surveyjs - Survey JavaScript library v1.9.83
    * Copyright (c) 2015-2023 Devsoft Baltic OÜ  - http://surveyjs.io/
    * License: MIT (http://www.opensource.org/licenses/mit-license.php)
    */
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        src: local("Open Sans Regular"), local("OpenSans-Regular"),
          url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWJ0bbck.woff2)
            format("woff2");
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }

      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        src: local("Open Sans Regular"), local("OpenSans-Regular"),
          url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFUZ0bbck.woff2)
            format("woff2");
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }

      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        src: local("Open Sans Regular"), local("OpenSans-Regular"),
          url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWZ0bbck.woff2)
            format("woff2");
        unicode-range: U+1F00-1FFF;
      }

      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 600;
        src: local("Open Sans Semibold"), local("OpenSans-Semibold"),
          url(https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNShampu5_7CjHW5spxoeN3Vs.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC,
          U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
      }

      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 700;
        src: local("Open Sans Bold"), local("OpenSans-Bold"),
          url(https://fonts.gstatic.com/s/opensans/v13/k3k702ZOKiLJc3WVjuplzBampu5_7CjHW5spxoeN3Vs.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC,
          U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
      }

      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        src: local("Open Sans Regular"), local("OpenSans-Regular"),
          url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVp0bbck.woff2)
            format("woff2");
        unicode-range: U+0370-03FF;
      }

      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        src: local("Open Sans Regular"), local("OpenSans-Regular"),
          url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWp0bbck.woff2)
            format("woff2");
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }

      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        src: local("Open Sans Regular"), local("OpenSans-Regular"),
          url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFW50bbck.woff2)
            format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }

      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        src: local("Open Sans Regular"), local("OpenSans-Regular"),
          url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0b.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }

      :root {
        --font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial,
          sans-serif;
      }

      .sv-action-bar {
        display: flex;
        box-sizing: content-box;
        position: relative;
        align-items: center;
        margin-left: auto;
        overflow: hidden;
        white-space: nowrap;
      }

      .sv-action-bar-separator {
        display: inline-block;
        width: 1px;
        height: 24px;
        vertical-align: middle;
        margin-right: 16px;
        background-color: var(--border, #d6d6d6);
      }

      .sv-action-bar--default-size-mode .sv-action-bar-separator {
        margin: 0 calc(1 * var(--base-unit, 8px));
      }

      .sv-action-bar--small-size-mode .sv-action-bar-separator {
        margin: 0 calc(0.5 * var(--base-unit, 8px));
      }

      .sv-action-bar-item {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        display: flex;
        padding: calc(1 * var(--base-unit, 8px));
        box-sizing: border-box;
        border: none;
        border-radius: 2px;
        background-color: rgba(0, 0, 0, 0);
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        cursor: pointer;
        font-family: var(--font-family, var(--font-family));
        overflow-x: hidden;
        white-space: nowrap;
      }

      button.sv-action-bar-item {
        overflow: hidden;
      }

      .sv-action-bar--default-size-mode .sv-action-bar-item {
        height: calc(5 * var(--base-unit, 8px));
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        margin: 0 calc(1 * var(--base-unit, 8px));
      }

      .sv-action-bar--small-size-mode .sv-action-bar-item {
        height: calc(4 * var(--base-unit, 8px));
        font-size: calc(1.5 * var(--base-unit, 8px));
        line-height: calc(2 * var(--base-unit, 8px));
        margin: 0 calc(0.5 * var(--base-unit, 8px));
      }

      .sv-action:first-of-type .sv-action-bar-item {
        margin-inline-start: 0;
      }

      .sv-action:last-of-type .sv-action-bar-item {
        margin-inline-end: 0;
      }

      .sv-action-bar--default-size-mode .sv-action-bar-item__title--with-icon {
        margin-inline-start: calc(1 * var(--base-unit, 8px));
      }

      .sv-action-bar--small-size-mode .sv-action-bar-item__title--with-icon {
        margin-inline-start: calc(0.5 * var(--base-unit, 8px));
      }

      .sv-action-bar-item__icon svg {
        display: block;
      }

      .sv-action-bar-item__icon use {
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sv-action-bar-item:not(.sv-action-bar-item--pressed):hover:enabled,
      .sv-action-bar-item:not(.sv-action-bar-item--pressed):focus:enabled {
        outline: none;
        background-color: var(--background-dim, #f3f3f3);
      }

      .sv-action-bar-item--active.sv-action-bar-item--pressed:focus,
      .sv-action-bar-item--active.sv-action-bar-item--pressed:focus-visible {
        outline: none;
      }

      .sv-action-bar-item:not(.sv-action-bar-item--pressed):active:enabled {
        opacity: 0.5;
      }

      .sv-action-bar-item:disabled {
        opacity: 0.25;
        cursor: default;
      }

      .sv-action-bar-item__title {
        color: inherit;
        vertical-align: middle;
        white-space: nowrap;
      }

      .sv-action-bar-item--secondary .sv-action-bar-item__icon use {
        fill: var(--secondary, #ff9814);
      }

      .sv-action-bar-item--active .sv-action-bar-item__icon use {
        fill: var(--primary, #19b394);
      }

      .sv-action-bar-item-dropdown {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        display: flex;
        height: calc(5 * var(--base-unit, 8px));
        padding: calc(1 * var(--base-unit, 8px));
        box-sizing: border-box;
        border: none;
        border-radius: 2px;
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
        line-height: calc(3 * var(--base-unit, 8px));
        font-size: calc(2 * var(--base-unit, 8px));
        font-family: var(--font-family, var(--font-family));
      }

      .sv-expand-action:before {
        content: "";
        display: inline-block;
        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 10 10' style='enable-background:new 0 0 10 10;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23404040;%7D%0A%3C/style%3E%3Cpolygon class='st0' points='2,2 0,4 5,9 10,4 8,2 5,5 '/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center center;
        height: 10px;
        width: 12px;
        margin: auto 8px;
      }

      .sv-expand-action--expanded:before {
        transform: rotate(180deg);
      }

      .sv-dots {
        width: 48px;
      }

      .sv-dots__item {
        width: 100%;
      }

      .sv-dots__item .sv-action-bar-item__icon {
        margin: auto;
      }

      .sv-action--hidden {
        width: 0px;
        height: 0px;
        overflow: hidden;
        visibility: hidden;
      }

      .sv-action__content {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .sv-action__content > * {
        flex: 0 0 auto;
      }

      .sv-action--space {
        margin-left: auto;
      }

      .sv-action-bar-item--pressed:not(.sv-action-bar-item--active) {
        background-color: var(--background-dim, #f3f3f3);
        opacity: 50%;
      }

      .sv-dragged-element-shortcut {
        height: calc(3 * var(--base-unit, 8px));
        min-width: calc(12.5 * var(--base-unit, 8px));
        border-radius: calc(4.5 * var(--base-unit, 8px));
        background-color: var(--background, #fff);
        padding: calc(2 * var(--base-unit, 8px));
        cursor: grabbing;
        position: absolute;
        z-index: 1000;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
        font-family: var(--font-family, var(--font-family));
        font-size: calc(2 * var(--base-unit, 8px));
        padding-left: calc(2.5 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
      }

      .sv-matrixdynamic__drag-icon {
        padding-top: calc(1.75 * var(--base-unit, 8px));
      }

      .sv-matrixdynamic__drag-icon:after {
        content: " ";
        display: block;
        height: calc(0.75 * var(--base-unit, 8px));
        width: calc(2.5 * var(--base-unit, 8px));
        border: 1px solid #e7e7e7;
        box-sizing: border-box;
        border-radius: calc(1.25 * var(--base-unit, 8px));
        cursor: move;
        margin-top: calc(1.5 * var(--base-unit, 8px));
      }

      .sv-matrix-row--drag-drop-ghost-mod td {
        background-color: var(--background-dim, #f3f3f3);
      }

      .sv-matrix-row--drag-drop-ghost-mod td > * {
        visibility: hidden;
      }

      sv-popup {
        display: block;
        position: absolute;
        z-index: -1;
      }

      .sv-popup {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        outline: none;
        height: 100vh;
        z-index: 1500;
      }

      .sv-dropdown-popup {
        height: 0;
      }

      .sv-popup__container {
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        position: absolute;
        padding: 0;
      }

      .sv-popup__shadow {
        width: 100%;
        height: 100%;
        border-radius: calc(1 * var(--base-unit, 8px));
      }

      .sv-popup__body-content {
        background-color: var(--background, #fff);
        border-radius: calc(0.5 * var(--base-unit, 8px));
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        max-height: 90vh;
        max-width: 90vw;
      }

      .sv-popup--modal {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(
          --background-semitransparent,
          rgba(144, 144, 144, 0.5)
        );
        padding: calc(11 * var(--base-unit, 8px))
          calc(15 * var(--base-unit, 8px));
        box-sizing: border-box;
      }

      .sv-popup--modal .sv-popup__container {
        position: static;
      }

      .sv-popup--modal .sv-popup__body-content {
        padding: calc(4 * var(--base-unit, 8px));
      }

      .sv-popup--overlay.sv-popup--overlay {
        width: 100%;
        height: var(--sv-popup-overlay-height, 100vh);
      }

      .sv-popup--overlay.sv-popup--overlay .sv-popup__container {
        background: var(--background-semitransparent, rgba(144, 144, 144, 0.5));
        max-width: 100vw;
        max-height: calc(
          var(--sv-popup-overlay-height, 100vh) - 1 * var(--base-unit, 8px)
        );
        height: calc(
          var(--sv-popup-overlay-height, 100vh) - 1 * var(--base-unit, 8px)
        );
        width: 100%;
        padding-top: calc(2 * var(--base-unit, 8px));
        border: unset;
      }

      .sv-popup--overlay.sv-popup--overlay .sv-popup__body-content {
        max-height: var(--sv-popup-overlay-height, 100vh);
        max-width: 100vw;
        border-radius: calc(2 * var(--base-unit, 8px))
          calc(2 * var(--base-unit, 8px)) 0px 0px;
        background: var(--background, #fff);
        box-shadow: 0px calc(1 * var(--base-unit, 8px))
          calc(2 * var(--base-unit, 8px)) rgba(0, 0, 0, 0.1);
        padding: calc(3 * var(--base-unit, 8px)) calc(2 * var(--base-unit, 8px))
          calc(2 * var(--base-unit, 8px));
        height: calc(100% - (1 * var(--base-unit, 8px)));
      }

      .sv-popup--overlay.sv-popup--overlay .sv-popup__scrolling-content {
        height: calc(100% - 10 * var(--base-unit, 8px));
      }

      .sv-popup--overlay.sv-popup--overlay .sv-popup__body-footer {
        margin-top: calc(2 * var(--base-unit, 8px));
      }

      .sv-popup--overlay.sv-popup--overlay
        .sv-popup__body-footer
        .sv-action-bar {
        width: 100%;
      }

      .sv-popup--overlay.sv-popup--overlay .sv-popup__body-footer .sv-action {
        width: 100%;
      }

      .sv-popup--overlay.sv-popup--overlay .sv-popup__body-footer-item {
        width: 100%;
      }

      .sv-popup--overlay.sv-popup--overlay .sv-popup__button {
        background-color: var(--primary, #19b394);
        border: 2px solid var(--primary, #19b394);
        color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
      }

      .sv-popup--modal .sv-popup__scrolling-content {
        padding: 2px;
        margin: -2px;
      }

      .sv-popup__scrolling-content {
        height: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
      }

      .sv-popup__scrolling-content::-webkit-scrollbar,
      .sv-popup__scrolling-content *::-webkit-scrollbar {
        height: 6px;
        width: 6px;
        background-color: var(--background-dim, #f3f3f3);
      }

      .sv-popup__scrolling-content::-webkit-scrollbar-thumb,
      .sv-popup__scrolling-content *::-webkit-scrollbar-thumb {
        background: var(--primary-light, rgba(25, 179, 148, 0.1));
      }

      .sv-popup__content {
        min-width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        min-height: 0;
      }

      .sv-popup--show-pointer.sv-popup--top .sv-popup__pointer {
        transform: translate(calc(-1 * var(--base-unit, 8px))) rotate(180deg);
      }

      .sv-popup--show-pointer.sv-popup--bottom .sv-popup__pointer {
        transform: translate(
          calc(-1 * var(--base-unit, 8px)),
          calc(-1 * var(--base-unit, 8px))
        );
      }

      .sv-popup--show-pointer.sv-popup--right {
        transform: translate(calc(1 * var(--base-unit, 8px)));
      }

      .sv-popup--show-pointer.sv-popup--right .sv-popup__pointer {
        transform: translate(-12px, -4px) rotate(-90deg);
      }

      .sv-popup--show-pointer.sv-popup--left {
        transform: translate(calc(-1 * var(--base-unit, 8px)));
      }

      .sv-popup--show-pointer.sv-popup--left .sv-popup__pointer {
        transform: translate(-4px, -4px) rotate(90deg);
      }

      .sv-popup__pointer {
        display: block;
        position: absolute;
      }

      .sv-popup__pointer:after {
        content: " ";
        display: block;
        width: 0;
        height: 0;
        border-left: calc(1 * var(--base-unit, 8px)) solid rgba(0, 0, 0, 0);
        border-right: calc(1 * var(--base-unit, 8px)) solid rgba(0, 0, 0, 0);
        border-bottom: calc(1 * var(--base-unit, 8px)) solid
          var(--background, #fff);
        align-self: center;
      }

      .sv-popup__body-header {
        font-family: Open Sans;
        font-size: calc(3 * var(--base-unit, 8px));
        line-height: calc(4 * var(--base-unit, 8px));
        font-style: normal;
        font-weight: 700;
        margin-bottom: calc(2 * var(--base-unit, 8px));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
      }

      .sv-popup__body-footer {
        display: flex;
        margin-top: calc(4 * var(--base-unit, 8px));
      }

      .sv-popup__body-footer .sv-action-bar {
        gap: calc(1.5 * var(--base-unit, 8px));
      }

      .sv-popup__button {
        padding: calc(2 * var(--base-unit, 8px)) calc(6 * var(--base-unit, 8px));
        background: var(--background, #fff);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        margin: 2px;
        cursor: pointer;
        font-family: var(--font-family, var(--font-family));
        font-style: normal;
        font-weight: 600;
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        text-align: center;
        color: var(--primary, #19b394);
        border: none;
        outline: none;
      }

      .sv-popup__button:hover {
        box-shadow: 0 0 0 2px var(--primary, #19b394);
      }

      .sv-popup__button:disabled {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        opacity: 0.25;
        cursor: default;
      }

      .sv-popup__button:disabled:hover {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
      }

      .sv-popup__button--apply {
        background-color: var(--primary, #19b394);
        color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
      }

      .sv-popup__button--apply:disabled {
        background-color: var(--background-dim, #f3f3f3);
      }

      .sv-popup--modal .sv-list__filter,
      .sv-popup--overlay .sv-list__filter {
        padding-top: calc(1 * var(--base-unit, 8px));
      }

      .sv-popup--modal .sv-list__filter-icon,
      .sv-popup--overlay .sv-list__filter-icon {
        top: calc(2.5 * var(--base-unit, 8px));
      }

      .sv-dropdown-popup.sv-popup--overlay {
        z-index: 2001;
        padding: 0;
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-popup__body-content {
        padding: 0;
        border-radius: 0;
      }

      .sv-dropdown-popup.sv-popup--overlay
        .sv-popup__body-footer
        .sv-action-bar
        .sv-action {
        width: auto;
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-popup__button {
        background-color: rgba(0, 0, 0, 0);
        color: var(--primary, #19b394);
        border: none;
        box-shadow: none;
        padding: calc(1 * var(--base-unit, 8px)) calc(2 * var(--base-unit, 8px));
        border-radius: calc(12.5 * var(--base-unit, 8px));
        margin: 0;
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-popup__container {
        max-height: calc(var(--sv-popup-overlay-height, 100vh));
        height: calc(var(--sv-popup-overlay-height, 100vh));
        padding-top: 0;
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-popup__body-content {
        height: calc(var(--sv-popup-overlay-height, 100vh));
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-popup__body-footer {
        background-color: var(--background-dim-light, #f9f9f9);
        margin-top: 0;
        padding-top: calc(0.5 * var(--base-unit, 8px));
        padding-bottom: calc(0.5 * var(--base-unit, 8px));
        border-top: 1px solid var(--border-light, #eaeaea);
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-popup__scrolling-content {
        height: calc(100% - 6 * var(--base-unit, 8px));
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-list__filter-icon .sv-svg-icon {
        width: calc(2 * var(--base-unit, 8px));
        height: calc(2 * var(--base-unit, 8px));
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-list__container {
        padding: 0;
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-list {
        flex-grow: 1;
        padding: calc(0.5 * var(--base-unit, 8px));
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-list__filter {
        display: flex;
        align-items: center;
        padding: calc(0.5 * var(--base-unit, 8px))
          calc(1 * var(--base-unit, 8px)) calc(0.5 * var(--base-unit, 8px))
          calc(2.5 * var(--base-unit, 8px));
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-list__filter-icon {
        position: static;
        top: calc(1.5 * var(--base-unit, 8px));
        height: calc(2 * var(--base-unit, 8px));
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-list__empty-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
        padding: calc(1 * var(--base-unit, 8px))
          calc(0.5 * var(--base-unit, 8px));
        background-color: var(--background, #fff);
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-popup__button:disabled {
        pointer-events: none;
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        opacity: 0.25;
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-list__filter-clear-button {
        height: calc(3 * var(--base-unit, 8px));
        width: calc(3 * var(--base-unit, 8px));
        padding: calc(0.5 * var(--base-unit, 8px));
        appearance: none;
        border: none;
        border-radius: 100%;
        background-color: rgba(0, 0, 0, 0);
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-list__filter-clear-button svg {
        height: calc(2 * var(--base-unit, 8px));
        width: calc(2 * var(--base-unit, 8px));
      }

      .sv-dropdown-popup.sv-popup--overlay
        .sv-list__filter-clear-button
        svg
        use {
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sv-dropdown-popup.sv-popup--overlay .sv-list__input {
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        font-family: var(--font-family);
        padding: calc(0.5 * var(--base-unit, 8px)) 0
          calc(0.5 * var(--base-unit, 8px)) calc(1 * var(--base-unit, 8px));
      }

      .sv-dropdown-popup.sv-popup--overlay
        .sv-list__item:hover
        .sv-list__item-body,
      .sv-dropdown-popup.sv-popup--overlay
        .sv-list__item:focus
        .sv-list__item-body,
      .sv-dropdown-popup.sv-popup--overlay
        .sv-list__item--focused
        .sv-list__item-body {
        background: var(--background, #fff);
      }

      .sv-dropdown-popup.sv-popup--overlay
        .sv-list__item:hover.sv-list__item--selected
        .sv-list__item-body,
      .sv-dropdown-popup.sv-popup--overlay
        .sv-list__item:focus.sv-list__item--selected
        .sv-list__item-body,
      .sv-dropdown-popup.sv-popup--overlay
        .sv-list__item--focused.sv-list__item--selected
        .sv-list__item-body {
        background: var(--primary, #19b394);
        color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
        font-weight: 600;
      }

      .sv-dropdown-popup.sv-popup--overlay
        .sv-list__item:hover.sv-list__item--selected
        .sd-list__item-body,
      .sv-dropdown-popup.sv-popup--overlay
        .sv-list__item:focus.sv-list__item--selected
        .sd-list__item-body,
      .sv-dropdown-popup.sv-popup--overlay
        .sv-list__item--focused.sv-list__item--selected
        .sd-list__item-body {
        background: var(--primary-light, rgba(25, 179, 148, 0.1));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
      }

      .sv-dropdown-popup.sv-popup--overlay.sv-popup--tablet
        .sv-popup__body-content {
        --sv-popup-overlay-max-height: calc(
          var(--sv-popup-overlay-height, 100vh) - var(--base-unit, 8px) * 8
        );
        --sv-popup-overlay-max-width: calc(100% - var(--base-unit, 8px) * 8);
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        max-height: var(--sv-popup-overlay-max-height);
        min-height: min(
          var(--sv-popup-overlay-max-height),
          31 * var(--base-unit, 8px)
        );
        height: auto;
        width: auto;
        min-width: min(
          40 * var(--base-unit, 8px),
          var(--sv-popup-overlay-max-width)
        );
        max-width: var(--sv-popup-overlay-max-width);
        border-radius: calc(0.5 * var(--base-unit, 8px));
        overflow: hidden;
        margin: 0;
        border-radius: 4px;
      }

      .sv-dropdown-popup.sv-popup--overlay.sv-popup--tablet .sv-popup__content,
      .sv-dropdown-popup.sv-popup--overlay.sv-popup--tablet
        .sv-popup__scrolling-content,
      .sv-dropdown-popup.sv-popup--overlay.sv-popup--tablet
        .sv-list__container {
        flex-grow: 1;
      }

      .sv-button-group {
        display: flex;
        align-items: center;
        flex-direction: row;
        font-size: calc(2 * var(--base-unit, 8px));
        overflow: auto;
        border: 1px solid var(--border, #d6d6d6);
      }

      .sv-button-group:focus-within {
        box-shadow: 0 0 0 1px var(--primary, #19b394);
        border-color: var(--primary, #19b394);
      }

      .sv-button-group__item {
        display: flex;
        box-sizing: border-box;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        appearance: none;
        width: 100%;
        padding: 11px calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        outline: none;
        font-size: calc(2 * var(--base-unit, 8px));
        font-weight: 400;
        background: var(--background, #fff);
        cursor: pointer;
        overflow: hidden;
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        position: relative;
      }

      .sv-button-group__item:not(:last-of-type) {
        border-right: 1px solid var(--border, #d6d6d6);
      }

      .sv-button-group__item--hover:hover {
        background-color: var(--background-dim, #f3f3f3);
      }

      .sv-button-group__item-icon {
        display: block;
        height: calc(3 * var(--base-unit, 8px));
      }

      .sv-button-group__item-icon use {
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sv-button-group__item--selected {
        font-weight: 600;
        color: var(--primary, #19b394);
      }

      .sv-button-group__item--selected .sv-button-group__item-icon use {
        fill: var(--primary, #19b394);
      }

      .sv-button-group__item--selected:hover {
        background-color: var(--background, #fff);
      }

      .sv-button-group__item-decorator {
        display: flex;
        align-items: center;
        max-width: 100%;
      }

      .sv-button-group__item-caption {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sv-button-group__item-icon + .sv-button-group__item-caption {
        margin-left: calc(1 * var(--base-unit, 8px));
      }

      .sv-button-group__item--disabled {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        opacity: 0.25;
        cursor: default;
      }

      .sv-button-group__item--disabled .sv-button-group__item-icon use {
        fill: var(--sjs-general-forecolor, var(--foreground, #161616));
      }

      .sv-button-group__item--disabled:hover {
        background-color: var(--background, #fff);
      }

      .sv-button-group:focus-within {
        box-shadow: 0 0 0 1px var(--primary, #19b394);
        border-color: var(--primary, #19b394);
      }

      .sv-visuallyhidden {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
      }

      .sv-hidden {
        display: none !important;
      }

      .sv-title-actions {
        display: flex;
        align-items: center;
        width: 100%;
      }

      .sv-title-actions__title {
        flex-wrap: wrap;
        max-width: 90%;
        min-width: 50%;
        white-space: initial;
      }

      .sv-action-title-bar {
        min-width: 56px;
      }

      .sv-title-actions .sv-title-actions__title {
        flex-wrap: wrap;
        flex: 0 0 auto;
        max-width: unset;
        min-width: unset;
      }

      .sv-title-actions .sv-action-title-bar {
        flex: 1 1 auto;
        justify-content: flex-end;
        min-width: unset;
      }

      .sv_window {
        position: fixed;
        bottom: 3px;
        right: 10px;
        background-color: #5f9ea0;
        padding: 1px;
        font-family: var(--font-family, var(--font-family));
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: left;
        text-align: start;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-break: normal;
        word-spacing: normal;
        word-wrap: normal;
        white-space: normal;
        background-color: #fff;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 1px solid #ccc;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 6px;
        -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        line-break: auto;
        z-index: 100;
      }

      .sv_window_title {
        padding: 8px 14px;
        margin: 0;
        font-size: 14px;
        background-color: #f7f7f7;
        border-bottom: 1px solid #ebebeb;
        border-radius: 5px 5px 0 0;
      }

      .sv_window_content {
        padding: 0;
        margin: 0;
        max-height: 80vh;
        overflow-y: auto;
      }

      .sv_window_title a,
      .sv_window_title a:link,
      .sv_window_title a:visited {
        text-decoration: none;
        font-size: 14px;
        font-style: normal;
        color: #000;
      }

      .sv-brand-info {
        width: 100%;
        font-family: var(--font-family, var(--font-family));
        text-align: center;
        color: #161616;
        background: #fff;
        padding: 32px 0;
        box-shadow: 0px -1px 0px #d6d6d6;
      }

      .sv-brand-info a {
        color: #161616;
        text-decoration-line: underline;
      }

      .sv-brand-info__text {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #161616;
      }

      .sv-brand-info__logo {
        display: inline-block;
      }

      .sv-brand-info__logo img {
        width: 118px;
      }

      .sv-brand-info__terms {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
      }

      .sv-brand-info__terms a {
        color: #909090;
      }

      .sv-ranking {
        outline: none;
        user-select: none;
        -webkit-user-select: none;
      }

      .sv-ranking-item {
        cursor: pointer;
        position: relative;
      }

      .sv-ranking-item:focus .sv-ranking-item__icon--hover {
        visibility: hidden;
      }

      .sv-ranking-item:hover:not(:focus) .sv-ranking-item__icon--hover {
        visibility: visible;
      }

      .sv-question--disabled
        .sv-ranking-item:hover
        .sv-ranking-item__icon--hover {
        visibility: hidden;
      }

      .sv-ranking-item:focus {
        outline: none;
      }

      .sv-ranking-item:focus .sv-ranking-item__icon--focus {
        visibility: visible;
        top: calc(0.6 * var(--base-unit, 8px));
        height: calc(3 * var(--base-unit, 8px));
      }

      .sv-ranking-item:focus .sv-ranking-item__index {
        background: var(--background, #fff);
        outline: calc(0.25 * var(--base-unit, 8px)) solid
          var(--primary, #19b394);
      }

      .sv-ranking-item__content.sv-ranking-item__content {
        display: flex;
        align-items: center;
        line-height: 1em;
        padding: calc(0.5 * var(--base-unit, 8px)) 0px;
        border-radius: calc(12.5 * var(--base-unit, 8px));
      }

      .sv-ranking-item__icon-container {
        position: relative;
        left: 0;
        top: 0;
        bottom: 0;
        flex-shrink: 0;
        width: calc(3 * var(--base-unit, 8px));
        height: calc(4 * var(--base-unit, 8px));
      }

      .sv-ranking-item__icon.sv-ranking-item__icon {
        visibility: hidden;
        fill: var(--primary, #19b394);
        position: absolute;
        top: calc(1 * var(--base-unit, 8px));
        width: calc(1.75 * var(--base-unit, 8px));
        height: calc(2 * var(--base-unit, 8px));
      }

      .sv-ranking-item__index.sv-ranking-item__index {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-light, rgba(25, 179, 148, 0.1));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        font-size: calc(2 * var(--base-unit, 8px));
        border-radius: 100%;
        border: calc(0.25 * var(--base-unit, 8px)) solid rgba(0, 0, 0, 0);
        width: calc(5 * var(--base-unit, 8px));
        height: calc(5 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        box-sizing: border-box;
        font-weight: 600;
        margin-left: calc(0 * var(--base-unit, 8px));
      }

      .sv-ranking-item__index.sv-ranking-item__index.sv-ranking-item__index--empty:empty {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAArSURBVHgB7cuhEQAwDMNAtUN4//m8RMtygcE5PxMQxAKnh6Q3mWzXd4mAD4cJBAQCqfbUAAAAAElFTkSuQmCC");
        background-position: center;
        background-repeat: no-repeat;
      }

      .sv-ranking-item__text {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        margin: 0 calc(2 * var(--base-unit, 8px));
      }

      .sd-ranking--disabled .sv-ranking-item__text {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        opacity: 0.25;
      }

      .sv-ranking-item__ghost.sv-ranking-item__ghost {
        display: none;
        background-color: var(--background-dim, #f3f3f3);
        border-radius: calc(12.5 * var(--base-unit, 8px));
        padding: calc(0.5 * var(--base-unit, 8px)) 0px;
        width: calc(25 * var(--base-unit, 8px));
        height: calc(5 * var(--base-unit, 8px));
        z-index: 1;
        position: absolute;
        left: calc(5 * var(--base-unit, 8px));
      }

      [dir="rtl"] .sv-ranking-item__ghost {
        left: initilal;
        right: calc(5 * var(--base-unit, 8px));
      }

      .sv-ranking-item--ghost .sv-ranking-item__ghost {
        display: block;
      }

      .sv-ranking-item--ghost .sv-ranking-item__content {
        visibility: hidden;
      }

      .sv-ranking-item--drag .sv-ranking-item__content {
        box-shadow: 0px calc(1 * var(--base-unit, 8px))
          calc(2 * var(--base-unit, 8px)) rgba(0, 0, 0, 0.1);
        border-radius: calc(12.5 * var(--base-unit, 8px));
      }

      .sv-ranking--drag .sv-ranking-item:hover .sv-ranking-item__icon {
        visibility: hidden;
      }

      .sv-ranking-item--drag .sv-ranking-item__icon--hover {
        visibility: visible;
      }

      .sv-ranking--mobile .sv-ranking-item__icon--hover {
        visibility: visible;
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sv-ranking--mobile.sv-ranking--drag
        .sv-ranking-item--ghost
        .sv-ranking-item__icon.sv-ranking-item__icon--hover {
        visibility: hidden;
      }

      .sv-ranking--mobile.sv-ranking-shortcut {
        max-width: 80%;
      }

      .sv-ranking--mobile .sv-ranking-item__index.sv-ranking-item__index {
        margin-left: 0;
      }

      .sv-ranking--mobile .sd-element--with-frame .sv-ranking-item__icon {
        margin-left: 0;
      }

      .sv-ranking--design-mode .sv-ranking-item:hover .sv-ranking-item__icon {
        visibility: hidden;
      }

      .sv-ranking--disabled {
        opacity: 0.8;
      }

      .sv-ranking-shortcut[hidden] {
        display: none;
      }

      .sv-ranking-shortcut .sv-ranking-item__icon {
        fill: var(--primary, #19b394);
      }

      .sv-ranking-shortcut .sv-ranking-item__text {
        margin-right: calc(4 * var(--base-unit, 8px));
      }

      .sv-ranking-shortcut .sv-ranking-item__icon--hover {
        visibility: visible;
      }

      .sv-ranking-shortcut .sv-ranking-item__icon {
        width: calc(1.75 * var(--base-unit, 8px));
        height: calc(2 * var(--base-unit, 8px));
        top: calc(1 * var(--base-unit, 8px));
      }

      .sv-ranking-shortcut .sv-ranking-item__icon-container {
        margin-left: calc(1 * var(--base-unit, 8px));
      }

      .sv-list {
        padding: 0;
        margin: 0;
        overflow-y: auto;
        background: var(--background, #fff);
        font-family: var(--font-family, var(--font-family));
        list-style-type: none;
      }

      .sv-list__empty-container {
        width: 100%;
        font-family: var(--font-family, var(--font-family));
        box-sizing: border-box;
        padding: calc(1.5 * var(--base-unit, 8px))
          calc(8 * var(--base-unit, 8px));
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sv-list__empty-text {
        line-height: calc(3 * var(--base-unit, 8px));
        font-size: calc(2 * var(--base-unit, 8px));
        font-weight: 400;
        text-align: center;
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sv-list__item {
        width: 100%;
        align-items: center;
        box-sizing: border-box;
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sv-list__item-body {
        width: 100%;
        align-items: center;
        box-sizing: border-box;
        padding-block: calc(1 * var(--base-unit, 8px));
        padding-inline-end: calc(8 * var(--base-unit, 8px));
        padding-inline-start: calc(2 * var(--base-unit, 8px));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .sv-list__item.sv-list__item--focused,
      .sv-list__item:hover,
      .sv-list__item:focus {
        outline: none;
      }

      .sv-list__item.sv-list__item--focused .sv-list__item-body,
      .sv-list__item:hover .sv-list__item-body,
      .sv-list__item:focus .sv-list__item-body {
        background-color: var(--background-dim, #f3f3f3);
      }

      .sv-list__item--with-icon.sv-list__item--with-icon {
        padding: 0;
      }

      .sv-list__item--with-icon.sv-list__item--with-icon .sv-list__item-body {
        padding-top: calc(1.5 * var(--base-unit, 8px));
        padding-bottom: calc(1.5 * var(--base-unit, 8px));
        gap: calc(2 * var(--base-unit, 8px));
        display: flex;
      }

      .sv-list__item-icon {
        float: left;
        width: calc(3 * var(--base-unit, 8px));
        height: calc(3 * var(--base-unit, 8px));
      }

      .sv-list__item-icon svg {
        display: block;
      }

      .sv-list__item-icon use {
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      [dir="rtl"] .sv-list__item-icon,
      [style*="direction:rtl"] .sv-list__item-icon,
      [style*="direction: rtl"] .sv-list__item-icon {
        float: right;
      }

      .sv-list__item-separator {
        margin: calc(1 * var(--base-unit, 8px)) 0;
        height: 1px;
        background-color: var(--border, #d6d6d6);
      }

      .sv-list__item.sv-list__item--selected .sv-list__item-body,
      .sv-list__item.sv-list__item--selected:hover .sv-list__item-body,
      .sv-list__item.sv-list__item--selected.sv-list__item--focused
        .sv-list__item-body,
      .sv-multi-select-list
        .sv-list__item.sv-list__item--selected.sv-list__item--focused
        .sv-list__item-body,
      li:focus .sv-list__item.sv-list__item--selected .sv-list__item-body {
        background-color: var(--primary, #19b394);
        color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
        font-weight: 600;
      }

      .sv-list__item.sv-list__item--selected .sv-list__item-icon use,
      .sv-list__item.sv-list__item--selected:hover .sv-list__item-icon use,
      .sv-list__item.sv-list__item--selected.sv-list__item--focused
        .sv-list__item-icon
        use,
      .sv-multi-select-list
        .sv-list__item.sv-list__item--selected.sv-list__item--focused
        .sv-list__item-icon
        use,
      li:focus .sv-list__item.sv-list__item--selected .sv-list__item-icon use {
        fill: var(--background, #fff);
      }

      .sv-multi-select-list
        .sv-list__item.sv-list__item--selected
        .sv-list__item-body,
      .sv-multi-select-list
        .sv-list__item.sv-list__item--selected:hover
        .sv-list__item-body {
        background-color: var(--primary-light, rgba(25, 179, 148, 0.1));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        font-weight: 400;
      }

      .sv-list__item.sv-list__item--disabled .sv-list__item-body {
        cursor: default;
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sv-list__item span {
        white-space: nowrap;
      }

      .sv-list__container {
        position: relative;
        display: flex;
        height: 100%;
        flex-direction: column;
        display: flex;
        min-height: 0;
      }

      .sv-list__filter {
        border-bottom: 1px solid var(--border-inside, rgba(0, 0, 0, 0.16));
        background: var(--background, #fff);
        padding-bottom: calc(1 * var(--base-unit, 8px));
      }

      .sv-list__filter-icon {
        display: block;
        position: absolute;
        top: calc(1.5 * var(--base-unit, 8px));
        inset-inline-start: calc(2 * var(--base-unit, 8px));
      }

      .sv-list__filter-icon .sv-svg-icon {
        width: calc(3 * var(--base-unit, 8px));
        height: calc(3 * var(--base-unit, 8px));
      }

      .sv-list__filter-icon .sv-svg-icon use {
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sv-list__input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        display: block;
        background: var(--background, #fff);
        box-sizing: border-box;
        width: 100%;
        outline: none;
        font-size: 1em;
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        padding: calc(1.5 * var(--base-unit, 8px))
          calc(3 * var(--base-unit, 8px));
        padding-inline-start: calc(7 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        border: none;
      }

      .sv-list__input::placeholder {
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sv-list__input:disabled,
      .sv-list__input:disabled::placeholder {
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sv-list__loading-indicator {
        pointer-events: none;
      }

      .sv-list__loading-indicator .sv-list__item-body {
        background-color: rgba(0, 0, 0, 0);
      }

      .sv-save-data_root {
        position: absolute;
        left: 50%;
        bottom: calc(3 * var(--base-unit, 8px));
        background: var(--background, #fff);
        opacity: 0;
        padding: calc(3 * var(--base-unit, 8px)) calc(6 * var(--base-unit, 8px));
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        border-radius: calc(1 * var(--base-unit, 8px));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        min-width: calc(30 * var(--base-unit, 8px));
        text-align: center;
        z-index: 1600;
        font-family: var(--font-family, var(--font-family));
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        transform: translateX(-50%) translateY(calc(3 * var(--base-unit, 8px)));
        transition-timing-function: ease-in;
        transition-property: transform, opacity;
        transition-delay: 0.25s;
        transition: 0.5s;
      }

      .sv-save-data_root.sv-save-data_root--shown {
        transition-timing-function: ease-out;
        transition-property: transform, opacity;
        transform: translateX(-50%) translateY(0);
        transition-delay: 0.25s;
        opacity: 0.75;
      }

      .sv-save-data_root span {
        display: flex;
        flex-grow: 1;
      }

      .sv-save-data_root .sv-action-bar {
        display: flex;
        flex-grow: 0;
        flex-shrink: 0;
      }

      .sv-save-data_root--shown.sv-save-data_success,
      .sv-save-data_root--shown.sv-save-data_error {
        opacity: 1;
      }

      .sv-save-data_root.sv-save-data_error {
        background-color: var(--red, #e60a3e);
        color: var(--background, #fff);
        font-weight: 600;
        padding: calc(2 * var(--base-unit, 8px)) calc(2 * var(--base-unit, 8px))
          calc(2 * var(--base-unit, 8px)) calc(6 * var(--base-unit, 8px));
        gap: calc(6 * var(--base-unit, 8px));
      }

      .sv-save-data_root.sv-save-data_error .sv-save-data_button {
        font-weight: 600;
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        height: calc(5 * var(--base-unit, 8px));
        color: #fff;
        background-color: var(--red, #e60a3e);
        border: calc(0.25 * var(--base-unit, 8px)) solid #fff;
        border-radius: calc(0.75 * var(--base-unit, 8px));
        padding: calc(1 * var(--base-unit, 8px)) calc(3 * var(--base-unit, 8px));
        display: flex;
        align-items: center;
      }

      .sv-save-data_root.sv-save-data_error .sv-save-data_button:hover,
      .sv-save-data_root.sv-save-data_error .sv-save-data_button:focus {
        color: var(--red, #e60a3e);
        background-color: var(--background, #fff);
      }

      .sv-save-data_root.sv-save-data_success {
        background-color: var(--primary, #19b394);
        color: #fff;
        font-weight: 600;
      }

      .sd-element {
        padding-left: var(--sv-element-add-padding-left, 0px);
        padding-right: var(--sv-element-add-padding-right, 0px);
      }

      .svc-logic-question-value,
      .sd-element--with-frame:not(.sd-element--collapsed) {
        border-radius: calc(0.5 * var(--base-unit, 8px));
        box-sizing: border-box;
        padding-left: calc(
          var(--sd-base-padding) + var(--sv-element-add-padding-left, 0px)
        );
        padding-right: calc(
          var(--sd-base-padding) + var(--sv-element-add-padding-right, 0px)
        );
        padding-bottom: var(--sd-base-padding);
        background: var(--sjs-question-background, var(--background, #fff));
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
      }

      .svc-logic-question-value > .sd-question__erbox--outside-question,
      .sd-element--with-frame:not(.sd-element--collapsed)
        > .sd-question__erbox--outside-question {
        margin-left: calc(-1 * var(--sd-base-padding));
        margin-right: calc(-1 * var(--sd-base-padding));
        width: calc(100% + 2 * var(--sd-base-padding));
      }

      .svc-logic-question-value.sd-question--paneldynamic,
      .sd-element--with-frame:not(
          .sd-element--collapsed
        ).sd-question--paneldynamic {
        padding-bottom: 0;
      }

      .svc-logic-question-value.sd-question--paneldynamic
        > .sd-question__erbox--below-question,
      .sd-element--with-frame:not(
          .sd-element--collapsed
        ).sd-question--paneldynamic
        > .sd-question__erbox--below-question {
        bottom: 0;
        margin-top: 0;
      }

      .sd-element--with-frame > .sd-question__erbox--above-question {
        margin-top: calc(-1 * var(--sd-base-vertical-padding));
      }

      .svc-logic-question-value,
      .sd-element:not(.sd-element--collapsed) {
        padding-top: var(--sd-base-vertical-padding);
      }

      .sd-table__cell--detail-panel .sd-element:not(.sd-element--collapsed) {
        padding-top: calc(0.5 * var(--base-unit, 8px));
      }

      .sd-element.sd-element--complex {
        padding-top: 0;
      }

      .sd-element--expanded > .sd-element__header,
      .sd-element--collapsed > .sd-element__header {
        cursor: pointer;
      }

      .sd-element--collapsed > .sd-element__header {
        padding: calc(2 * var(--base-unit, 8px)) var(--sd-base-padding);
        box-sizing: border-box;
        background-color: var(--background, #fff);
      }

      .sd-element--collapsed.sd-element--with-frame > .sd-element__header {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
        border-radius: calc(0.5 * var(--base-unit, 8px));
      }

      .sd-element--collapsed > .sd-element__header:focus-within,
      .sd-element--collapsed > .sd-element__header:hover {
        background-color: var(--background-dim-light, #f9f9f9);
      }

      .sd-element__title {
        outline: none;
      }

      .sd-element__title.sd-element__title--disabled {
        opacity: 0.25;
      }

      .sd-root--readonly .sd-element__title.sd-element__title--disabled {
        opacity: 1;
      }

      .sd-element--collapsed:not(.sd-element--with-frame)
        > .sd-element__header {
        margin-left: calc(-1 * var(--sd-base-padding));
        width: calc(100% + 2 * var(--sd-base-padding));
      }

      .sd-element--complex:not(.sd-element--collapsed)
        > .sd-element__header--location-top {
        padding-top: var(--sd-base-vertical-padding);
        padding-bottom: var(--sd-base-vertical-padding);
      }

      .sd-element--complex:not(.sd-element--collapsed)
        > .sd-element__header--location-top:after {
        content: " ";
        display: block;
        position: relative;
        bottom: calc(-1 * var(--sd-base-vertical-padding));
        height: 1px;
        background: var(--border-light, #eaeaea);
      }

      .sd-element--complex.sd-element--with-frame
        > .sd-element__header--location-top:after {
        content: " ";
        left: calc(-1 * var(--sd-base-padding));
        width: calc(100% + 2 * var(--sd-base-padding));
      }

      .sd-element--nested.sd-element--complex
        > .sd-element__header--location-top {
        padding-bottom: calc(0.5 * var(--sd-base-vertical-padding));
      }

      .sd-element--nested.sd-element--complex
        > .sd-element__header--location-top:after {
        bottom: calc(-0.5 * var(--sd-base-vertical-padding));
      }

      .sd-element--nested.sd-question--image {
        padding-top: var(--sd-base-vertical-padding);
      }

      .sd-element--nested.sd-panel,
      .sd-element--nested.sd-question--paneldynamic {
        border: 1px solid var(--border-light, #eaeaea);
        box-sizing: border-box;
        padding-left: var(--sd-base-padding);
        padding-right: var(--sd-base-padding);
        margin-top: var(--sd-base-vertical-padding);
      }

      .sd-element--nested.sd-panel > .sd-element__header--location-top,
      .sd-element--nested.sd-question--paneldynamic
        > .sd-element__header--location-top {
        padding-top: calc(0.5 * var(--sd-base-vertical-padding));
        padding-bottom: calc(0.5 * var(--sd-base-vertical-padding));
      }

      .sd-element--nested.sd-panel > .sd-element__header--location-top:after,
      .sd-element--nested.sd-question--paneldynamic
        > .sd-element__header--location-top:after {
        left: calc(-1 * var(--sd-base-padding));
        width: calc(100% + 2 * var(--sd-base-padding));
        bottom: calc(-0.5 * var(--sd-base-vertical-padding));
      }

      .sd-element--nested.sd-panel > .sd-question__erbox--outside-question,
      .sd-element--nested.sd-question--paneldynamic
        > .sd-question__erbox--outside-question {
        margin-left: calc(-1 * var(--sd-base-padding));
        margin-right: calc(-1 * var(--sd-base-padding));
        width: calc(100% + 2 * var(--sd-base-padding));
      }

      .sd-element--nested.sd-panel > .sd-question__erbox--below-question,
      .sd-element--nested.sd-question--paneldynamic
        > .sd-question__erbox--below-question {
        bottom: 0;
        margin-top: 0;
      }

      .sd-element--nested.sd-panel:not(.sd-element--collapsed) {
        padding-bottom: var(--sd-base-padding);
      }

      .svc-question__content .sd-element {
        padding-top: 0;
      }

      .svc-question__content
        .sd-element--complex
        > .sd-element__header--location-top {
        padding-bottom: calc(0.5 * var(--sd-base-vertical-padding));
        padding-top: 0;
      }

      .svc-question__content
        .sd-element--complex
        > .sd-element__header--location-top:after {
        display: none;
      }

      .sd-element--invisible {
        opacity: 0.35;
      }

      .sd-element__title {
        font-size: 0;
        line-height: 0;
        position: static;
        font-weight: 600;
        margin: 0;
      }

      .sd-element__title .sd-element__num {
        font-size: calc(1.5 * var(--base-unit, 8px));
        line-height: calc(2 * var(--base-unit, 8px));
      }

      .sd-element__title span {
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
      }

      .sd-element__title .sv-title-actions__title {
        font-size: 0;
        line-height: 0;
      }

      .sd-element__title .svc-string-editor {
        display: inline-block;
        max-width: 100%;
      }

      .sd-element__title .sv-string-editor {
        max-width: 100%;
        white-space: normal;
      }

      .sd-element__title .sv-title-actions__title {
        white-space: nowrap;
      }

      .sd-element__title .sv-string-viewer {
        white-space: normal;
      }

      .sd-element__num {
        float: left;
        padding-top: calc(0.625 * var(--base-unit, 8px));
        padding-bottom: calc(0.375 * var(--base-unit, 8px));
        padding-inline-start: 0;
        padding-inline-end: calc(1 * var(--base-unit, 8px));
        width: calc(5 * var(--base-unit, 8px));
        font-size: calc(1.5 * var(--base-unit, 8px));
        line-height: calc(2 * var(--base-unit, 8px));
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
        margin-inline-start: calc(-5 * var(--base-unit, 8px));
        text-align: end;
        box-sizing: border-box;
        white-space: nowrap;
        flex-shrink: 0;
      }

      .sd-element__num + span {
        float: left;
        width: 0;
      }

      [dir="rtl"] .sd-element__num,
      [style*="direction:rtl"] .sd-element__num,
      [style*="direction: rtl"] .sd-element__num {
        float: right;
      }

      .sd-element__title--num-inline .sd-element__num {
        float: none;
        margin-inline-start: 0;
        width: auto;
        padding-inline-start: 0;
        padding-inline-end: 0;
      }

      .sd-element__title--num-inline .sd-element__num + span {
        float: none;
        width: auto;
      }

      .sd-element__title--expandable.sd-element__title--expandable {
        position: relative;
        display: block;
      }

      .sd-element__title--expandable:before {
        content: "";
        display: inline-block;
        background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 14L5 13L10 8L5 3L6 2L12 8L6 14Z' fill='%23909090'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center center;
        height: calc(2 * var(--base-unit, 8px));
        width: calc(2 * var(--base-unit, 8px));
        position: absolute;
        left: calc(-3 * var(--base-unit, 8px));
        top: calc(0.5 * var(--base-unit, 8px));
      }

      .sd-element__title--expandable.sd-element__title--expanded:before {
        transform: rotate(90deg);
      }

      .sd-question {
        position: relative;
      }

      .sd-question__description {
        font-size: calc(2 * var(--base-unit, 8px));
      }

      .sd-question__erbox {
        padding: calc(1 * var(--base-unit, 8px))
          calc(1.5 * var(--base-unit, 8px));
        border-radius: calc(0.5 * var(--base-unit, 8px));
        font-weight: 600;
        line-height: calc(2 * var(--base-unit, 8px));
        font-size: calc(1.5 * var(--base-unit, 8px));
        white-space: normal;
        text-align: left;
      }

      .sd-question__erbox--outside-question {
        width: 100%;
        color: var(--red, #e60a3e);
        background-color: var(--red-light, rgba(230, 10, 62, 0.1));
        box-sizing: border-box;
      }

      .sd-question__erbox--above-question {
        border-radius: calc(0.5 * var(--base-unit, 8px))
          calc(0.5 * var(--base-unit, 8px)) 0 0;
        margin-bottom: calc(
          var(--sd-base-vertical-padding) - var(--base-unit, 8px)
        );
      }

      .sd-question__erbox--below-question {
        margin-top: calc(1 * var(--base-unit, 8px));
      }

      .sd-element--with-frame > .sd-question__erbox--below-question {
        position: relative;
        margin-top: 0;
        bottom: calc(-1 * var(--sd-base-padding));
        border-radius: 0 0 calc(0.5 * var(--base-unit, 8px))
          calc(0.5 * var(--base-unit, 8px));
      }

      .sd-root-modern--mobile .sd-question__erbox--below-question {
        margin-top: calc(1 * var(--base-unit, 8px));
      }

      .sd-question__header {
        width: 100%;
      }

      .sd-question__header--location-top {
        padding-bottom: calc(0.5 * var(--sd-base-vertical-padding));
      }

      .sd-scrollable .sd-question__content {
        overflow-x: auto;
        padding: calc(2 * var(--base-unit, 8px)) 0;
      }

      .sd-question__header--location--left {
        display: inline-block;
        width: auto;
        max-width: 50%;
        vertical-align: top;
        margin-top: calc(1.5 * var(--base-unit, 8px));
      }

      .sd-question--left {
        display: flex;
        flex-wrap: wrap;
      }

      .sd-question__content--left {
        display: inline-block;
        padding-left: calc(3 * var(--base-unit, 8px));
        flex: 1;
      }

      .sd-question__required-text {
        color: var(--red, #e60a3e);
        vertical-align: top;
      }

      .sd-question__comment-area {
        font-size: calc(2 * var(--base-unit, 8px));
        margin-top: calc(2 * var(--base-unit, 8px));
        display: flex;
        flex-direction: column;
        gap: calc(1 * var(--base-unit, 8px));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        white-space: normal;
      }

      .sd-question__erbox--tooltip {
        display: none;
        position: fixed;
        height: auto;
        width: auto;
        max-width: calc(29 * var(--base-unit, 8px));
        background-color: var(--background, #fff);
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        opacity: 0.75;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
      }

      .sd-question__content:hover:not(:focus-within)
        > .sd-question__erbox--tooltip {
        display: block;
      }

      .sd-question__erbox--location--top,
      .sd-question__erbox--location--bottom {
        display: block;
        color: var(--red, #e60a3e);
        padding-left: 0;
        padding-right: 0;
        text-align: left;
      }

      .sd-question--complex .sd-question__erbox--above-question {
        margin-top: 0;
      }

      .sd-question--complex
        .sd-question__erbox--above-question
        ~ .sd-question__header--location-top {
        padding-top: calc(1 * var(--base-unit, 8px));
      }

      .sd-question--empty.sd-question--complex
        > .sd-question__header--location-top {
        padding-bottom: calc(0.5 * var(--sd-base-vertical-padding));
      }

      .sd-question--empty.sd-question--complex
        > .sd-question__header--location-top:after {
        display: none;
      }

      .sd-question__placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: calc(0.5 * var(--base-unit, 8px));
        justify-content: center;
        min-height: calc(24 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        font-size: calc(2 * var(--base-unit, 8px));
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-question__placeholder > div .sv-string-viewer,
      .sd-question__placeholder > span .sv-string-viewer {
        white-space: pre-line;
      }

      .sd-question--empty.sd-question--complex > .sd-question__content {
        padding-top: 0;
        padding-bottom: 0;
      }

      .sd-question--empty.sd-question--complex
        > .sd-question__content:first-child {
        padding-top: var(--sd-base-padding);
      }

      .sd-scrollable-container:not(.sd-scrollable-container--compact) {
        width: max-content;
        overflow-x: hidden;
        max-width: 100%;
      }

      .sd-input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        position: static;
        width: 100%;
        height: calc(6 * var(--base-unit, 8px));
        box-sizing: border-box;
        padding: calc(1.5 * var(--base-unit, 8px))
          calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        font-family: var(--font-family, var(--font-family));
        font-size: calc(2 * var(--base-unit, 8px));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        background-color: var(
          --sjs-editor-background,
          var(--background-dim-light, #f9f9f9)
        );
        box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.15);
        border: none;
        border-radius: 3px;
        text-align: start;
      }

      .sd-input.sd-input:focus {
        outline: none;
      }

      .sd-input--disabled {
        background-color: var(
          --sjs-editor-background,
          var(--background-dim-light, #f9f9f9)
        );
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .sd-input::placeholder {
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .sd-input--disabled,
      .sd-input--disabled::placeholder {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        opacity: 0.25;
      }

      .sd-root--readonly .sd-input--disabled,
      .sd-root--readonly .sd-input--disabled::placeholder {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
      }

      .sd-input:focus {
        box-shadow: 0 0 0 2px var(--primary, #19b394);
      }

      .sd-input--error {
        background-color: var(--red-light, rgba(230, 10, 62, 0.1));
      }

      .sd-text__content {
        position: relative;
      }

      .sd-remaining-character-counter {
        display: none;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
        padding: 0px;
        font-family: var(--font-family);
        line-height: calc(3 * var(--base-unit, 8px));
        font-size: calc(2 * var(--base-unit, 8px));
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
        position: absolute;
        inset-inline-end: calc(2 * var(--base-unit, 8px));
        inset-block-end: calc(1.5 * var(--base-unit, 8px));
      }

      .sd-question__content:focus-within .sd-remaining-character-counter {
        display: flex;
      }

      .sd-input[type="range"]::-webkit-slider-runnable-track {
        background-color: var(--primary, #19b394);
        border-radius: calc(1 * var(--base-unit, 8px));
        height: calc(1.5 * var(--base-unit, 8px));
      }

      .sd-input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: calc(-0.75 * var(--base-unit, 8px));
        border-radius: 100%;
        border: 2px solid var(--primary, #19b394);
        box-shadow: inset 0 0 0 2px var(--background, #fff);
        background-color: var(--primary, #19b394);
        height: calc(3 * var(--base-unit, 8px));
        width: calc(3 * var(--base-unit, 8px));
      }

      .sd-input[type="range"]::-moz-range-track {
        background-color: var(--primary, #19b394);
        border-radius: calc(1 * var(--base-unit, 8px));
        height: calc(1.5 * var(--base-unit, 8px));
      }

      .sd-input[type="range"]::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: calc(-0.75 * var(--base-unit, 8px));
        border-radius: 100%;
        border: 2px solid var(--primary, #19b394);
        box-shadow: inset 0 0 0 2px var(--background, #fff);
        background-color: var(--primary, #19b394);
        height: calc(3 * var(--base-unit, 8px));
        width: calc(3 * var(--base-unit, 8px));
      }

      .sd-comment {
        display: block;
        height: auto;
        min-width: calc(6 * var(--base-unit, 8px));
        min-height: calc(6 * var(--base-unit, 8px));
        max-width: 100%;
      }

      .sd-comment__content {
        position: relative;
      }

      .sd-panel {
        position: relative;
      }

      .sd-panel .sd-row {
        margin-top: 0;
      }

      .sd-panel :not(.svc-row) > .sd-row--multiple {
        row-gap: 0;
      }

      .sd-panel.sd-panel--as-page > .sd-panel__header.sd-panel__header {
        padding-top: 0;
        padding-bottom: 0;
      }

      .sd-panel.sd-panel--as-page > .sd-panel__header.sd-panel__header:after {
        content: none;
      }

      .sd-panel.sd-panel--as-page
        > .sd-panel__header.sd-panel__header
        .sd-panel__title {
        position: static;
        font-size: calc(3 * var(--base-unit, 8px));
        line-height: calc(4 * var(--base-unit, 8px));
        margin: calc(0.5 * var(--base-unit, 8px)) 0px;
        font-weight: 700;
      }

      .sd-panel.sd-panel--as-page
        > .sd-panel__header.sd-panel__header
        .sd-panel__title
        span {
        font-size: inherit;
        line-height: inherit;
      }

      .sd-panel.sd-panel--as-page
        > .sd-panel__header.sd-panel__header
        .sd-panel__description {
        position: static;
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        margin: calc(0.5 * var(--base-unit, 8px)) 0px;
        font-weight: 400;
      }

      .sd-panel__required-text {
        color: var(--red, #e60a3e);
      }

      .sd-panel__footer {
        box-sizing: border-box;
        padding-left: calc(var(--sd-base-padding) - 3 * var(--base-unit, 8px));
        margin-left: calc(-1 * var(--sd-base-padding));
        width: calc(100% + 2 * var(--sd-base-padding));
        margin-bottom: calc(
          -1 * var(--sd-base-padding) + 0.5 * var(--sd-base-vertical-padding)
        );
        margin-top: calc(0.5 * var(--sd-base-vertical-padding));
        border-top: 1px solid var(--border-light, #eaeaea);
        padding-top: calc(0.5 * var(--sd-base-vertical-padding));
      }

      .sjs_sp_placeholder {
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sjs_sp_container {
        border: 1px dashed var(--border, #d6d6d6);
      }

      .sjs_sp_controls.sd-signaturepad__controls {
        right: calc(1 * var(--base-unit, 8px));
        top: calc(1 * var(--base-unit, 8px));
        left: auto;
        bottom: auto;
      }

      .sd-question--signature:not(.sd-question--answered)
        .sd-signaturepad__controls {
        display: none;
      }

      .sd-question--signature.sd-question--error .sjs_sp_placeholder {
        background-color: var(--red-light, rgba(230, 10, 62, 0.1));
      }

      .sd-checkbox__decorator {
        border-radius: 3px;
      }

      .sd-checkbox__svg {
        display: none;
        width: calc(2.5 * var(--base-unit, 8px));
        height: calc(2.5 * var(--base-unit, 8px));
      }

      .sd-checkbox--checked .sd-checkbox__svg {
        display: block;
      }

      .sd-checkbox--checked .sd-checkbox__svg use {
        fill: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
      }

      .sd-checkbox--checked.sd-checkbox--disabled .sd-checkbox__svg use {
        fill: var(--border, #d6d6d6);
      }

      .sd-checkbox--checked
        .sd-checkbox__control:focus
        + .sd-checkbox__decorator
        .sd-checkbox__svg
        use {
        fill: var(--primary, #19b394);
      }

      .sd-matrixdynamic__btn.sd-matrixdynamic__add-btn {
        position: sticky;
        left: calc(-3 * var(--base-unit, 8px));
        margin-left: calc(-3 * var(--base-unit, 8px));
        z-index: 12;
      }

      .sd-matrixdynamic__footer:first-child {
        padding-bottom: calc(2 * var(--base-unit, 8px));
      }

      .sd-matrixdynamic__footer {
        padding-top: calc(1 * var(--base-unit, 8px));
      }

      .sd-action.sd-matrixdynamic__remove-btn {
        opacity: 0.5;
      }

      .sd-matrixdynamic__btn {
        appearance: none;
        background: rgba(0, 0, 0, 0);
        border: none;
        line-height: calc(3 * var(--base-unit, 8px));
        font-size: calc(2 * var(--base-unit, 8px));
        font-family: var(--font-family, var(--font-family));
        font-weight: 600;
        padding: calc(1 * var(--base-unit, 8px)) 0;
      }

      .sd-matrixdynamic__drag-element {
        padding: calc(2 * var(--base-unit, 8px));
      }

      .sd-matrixdynamic__drag-element:hover {
        background-color: var(--background, #fff);
      }

      .sd-matrixdynamic__drag-element:after {
        content: " ";
        display: block;
        height: calc(0.5 * var(--base-unit, 8px));
        width: calc(2 * var(--base-unit, 8px));
        border: 1px solid var(--border, #d6d6d6);
        box-sizing: border-box;
        border-radius: 10px;
      }

      .sd-matrixdynamic__placeholder .sd-matrixdynamic__add-btn {
        margin-left: 0;
      }

      .sd-drag-element__svg {
        width: calc(2 * var(--base-unit, 8px));
        height: calc(2 * var(--base-unit, 8px));
        display: block;
      }

      .sd-drag-element__svg use {
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-table {
        width: 100%;
        background: var(--sjs-question-background, var(--background, #fff));
        border-collapse: collapse;
        white-space: normal;
      }

      .sd-table--align-top .sd-table__cell {
        vertical-align: top;
      }

      .sd-table--alternate-rows {
        margin: 0 8px;
        width: calc(100% - 2 * var(--base-unit, 8px));
      }

      .sd-table--alternate-rows .sd-table__cell:first-of-type {
        padding-left: calc(2 * var(--base-unit, 8px));
      }

      .sd-table--alternate-rows .sd-table__cell:last-of-type {
        padding-right: calc(2 * var(--base-unit, 8px));
      }

      .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) > td,
      .sd-table--alternate-rows
        .sd-table__row:nth-of-type(odd)
        td:first-of-type {
        background-color: var(--background-dim-light, #f9f9f9);
      }

      .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) > td .sd-input,
      .sd-table--alternate-rows
        .sd-table__row:nth-of-type(odd)
        td:first-of-type
        .sd-input {
        background-color: var(
          --sjs-primary-forecolor,
          var(--primary-foreground, #fff)
        );
      }

      .sd-table--alternate-rows
        .sd-table__row:nth-of-type(odd)
        > td
        .sd-item__decorator,
      .sd-table--alternate-rows
        .sd-table__row:nth-of-type(odd)
        td:first-of-type
        .sd-item__decorator {
        --sd-item-default-background: var(--primary-foreground, #fff);
      }

      .sd-table__cell {
        font-weight: normal;
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        padding: calc(1 * var(--base-unit, 8px));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        text-align: center;
      }

      .sd-table__cell--item .sd-selectbase__item {
        text-align: center;
      }

      .sd-table__cell--item .sd-selectbase__label {
        justify-content: center;
      }

      .sd-question--disabled .sd-table__cell {
        opacity: 0.25;
      }

      .sd-root--readonly .sd-question--disabled .sd-table__cell {
        opacity: 1;
      }

      .sd-table__cell--header {
        font-weight: 600;
        vertical-align: top;
        padding: calc(1.5 * var(--base-unit, 8px))
          calc(1 * var(--base-unit, 8px)) calc(2.5 * var(--base-unit, 8px));
      }

      .sd-table__cell--header:not(.sd-table__cell--empty) {
        min-width: calc(14 * var(--base-unit, 8px));
      }

      .sd-matrixdropdown .sd-table__cell--header.sd-table__cell--empty {
        min-width: calc(14 * var(--base-unit, 8px));
        width: calc(14 * var(--base-unit, 8px));
      }

      .sd-matrixdropdown .sd-table__cell--header:not(.sd-table__cell--empty) {
        min-width: calc(14 * var(--base-unit, 8px));
        width: calc(14 * var(--base-unit, 8px));
      }

      .sd-matrixdropdown
        .sd-table__cell--header:not(
          .sd-table__cell--empty
        ).sd-table__cell--dropdown,
      .sd-matrixdropdown
        .sd-table__cell--header:not(
          .sd-table__cell--empty
        ).sd-table__cell--rating {
        min-width: calc(22 * var(--base-unit, 8px));
        width: calc(22 * var(--base-unit, 8px));
      }

      .sd-matrixdropdown
        .sd-table__cell--header:not(
          .sd-table__cell--empty
        ).sd-table__cell--boolean {
        min-width: calc(18 * var(--base-unit, 8px));
        width: calc(18 * var(--base-unit, 8px));
      }

      .sd-table__cell--detail-panel {
        padding: 0 calc(1 * var(--base-unit, 8px))
          calc(1 * var(--base-unit, 8px));
      }

      .sd-table__cell--actions .sv-action-bar,
      .sd-matrixdynamic__add-btn .sv-action-bar {
        overflow: visible;
      }

      .sd-table__cell--actions .svc-string-editor__button--done,
      .sd-matrixdynamic__add-btn .svc-string-editor__button--done {
        width: calc(2 * var(--base-unit, 8px));
      }

      .svc-question__content
        .sd-table__cell--actions
        .sv-action-bar-item:disabled {
        background: var(--background, #fff);
        opacity: 1;
      }

      .svc-question__content
        .sd-table__cell--actions
        .sv-action-bar-item:disabled
        use {
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-table__cell--actions:not(.sd-table__cell--vertical) {
        width: 0;
      }

      .sd-table__cell--detail-button {
        border: none;
        background: rgba(0, 0, 0, 0);
        border-radius: calc(2 * var(--base-unit, 8px));
        width: calc(4 * var(--base-unit, 8px));
        height: calc(4 * var(--base-unit, 8px));
        padding: calc(1 * var(--base-unit, 8px));
      }

      .sd-table__cell--detail-button svg {
        width: calc(2 * var(--base-unit, 8px));
        height: calc(2 * var(--base-unit, 8px));
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-table__cell--detail-button:hover {
        background: var(--green-light, rgba(25, 179, 148, 0.1));
      }

      .sd-table__cell--detail-button:hover svg {
        fill: var(--primary, #19b394);
      }

      .sd-table__cell--actions {
        white-space: nowrap;
      }

      .sd-table__cell--actions.sd-table__cell--vertical .sd-action-bar {
        justify-content: center;
      }

      .sd-table__cell--row-text {
        font-weight: 600;
        text-align: left;
        min-width: calc(12 * var(--base-unit, 8px));
        padding: calc(2.5 * var(--base-unit, 8px))
          calc(1 * var(--base-unit, 8px));
      }

      .sd-matrixdynamic__content .sd-table__question-wrapper {
        position: relative;
      }

      .sd-table__question-wrapper:not(:focus-within):hover {
        position: relative;
      }

      .sd-table__question-wrapper:not(:focus-within):hover
        .sd-question__erbox--tooltip {
        display: inline-block;
      }

      .sd-table__cell--actions:not(.sd-table__cell--vertical),
      .sd-table__cell--empty,
      .sd-table__cell--row-text,
      .sd-matrix__cell:first-of-type,
      .sd-matrix tr > td:first-of-type {
        position: sticky;
        background: var(--sjs-question-background, var(--background, #fff));
        z-index: 12;
      }

      .sd-table__cell--actions:not(.sd-table__cell--vertical):first-of-type,
      .sd-table__cell--empty:first-of-type,
      .sd-table__cell--row-text:first-of-type,
      .sd-matrix__cell:first-of-type:first-of-type,
      .sd-matrix tr > td:first-of-type:first-of-type {
        left: calc(-1 * var(--base-unit, 8px));
      }

      .sd-table__cell--actions:not(.sd-table__cell--vertical):last-of-type,
      .sd-table__cell--empty:last-of-type,
      .sd-table__cell--row-text:last-of-type,
      .sd-matrix__cell:first-of-type:last-of-type,
      .sd-matrix tr > td:first-of-type:last-of-type {
        right: calc(-1 * var(--base-unit, 8px));
      }

      .sd-table__cell--actions:not(.sd-table__cell--vertical):last-child
        .sd-action-bar {
        margin-right: calc(-3 * var(--base-unit, 8px));
        justify-content: flex-end;
        background: var(--sjs-question-background, var(--background, #fff));
      }

      .sd-question.sd-question--table {
        position: relative;
        overflow-x: auto;
      }

      .sd-table-wrapper {
        display: flex;
        margin: 0 calc(-1 * var(--sd-base-padding));
        width: fit-content;
        min-width: calc(100% + 2 * var(--sd-base-padding));
      }

      .sd-table-wrapper:before,
      .sd-table-wrapper:after {
        content: "";
        display: block;
        position: sticky;
        min-height: 100%;
        width: calc(var(--sd-base-padding) - var(--base-unit, 8px));
        flex-shrink: 0;
        background: var(--sjs-question-background, var(--background, #fff));
        z-index: 11;
      }

      .sd-table-wrapper::before {
        left: calc(-1 * var(--sd-base-padding));
      }

      .sd-table-wrapper:after {
        right: calc(-1 * var(--sd-base-padding));
      }

      .sd-table-wrapper > * {
        flex-basis: 100%;
      }

      .sd-question--table > .sd-question__header,
      .sd-question--table
        .sd-question__description--under-input
        .sv-string-viewer {
        position: sticky;
        left: 0;
      }

      .sd-question--table > .sd-question__content {
        padding-top: calc(2.5 * var(--base-unit, 8px));
        min-width: min-content;
      }

      .sd-question--table:not(.sd-element--with-frame) {
        padding-right: var(--sd-base-padding);
        margin-right: calc(-1 * var(--sd-base-padding));
        padding-left: var(--sd-base-padding);
        margin-left: calc(-1 * var(--sd-base-padding));
        box-sizing: content-box;
      }

      .sd-question--scroll {
        overflow-x: scroll;
      }

      .sd-matrixdropdown.sd-table {
        table-layout: fixed;
      }

      .sd-body--responsive .sd-page {
        padding: calc(5 * var(--base-unit, 8px)) var(--sd-page-vertical-padding)
          calc(2 * var(--base-unit, 8px));
      }

      .sd-body--responsive .sd-page.sd-page__empty-header {
        padding-top: calc(3 * var(--base-unit, 8px));
      }

      .sd-root-modern--mobile .sd-page {
        padding-top: calc(2 * var(--base-unit, 8px));
      }

      .sd-page {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: calc(5 * var(--base-unit, 8px)) calc(2 * var(--base-unit, 8px))
          calc(2 * var(--base-unit, 8px));
        width: 100%;
        box-sizing: border-box;
      }

      .sd-page .sd-page__title {
        position: static;
        font-size: calc(3 * var(--base-unit, 8px));
        line-height: calc(4 * var(--base-unit, 8px));
        margin: calc(0.5 * var(--base-unit, 8px)) 0px;
        font-weight: 700;
        color: var(--sjs-general-dim-forecolor, rgba(0, 0, 0, 0.91));
      }

      .sd-page .sd-page__description {
        position: static;
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        margin: calc(0.5 * var(--base-unit, 8px)) 0px;
        font-weight: 400;
        color: var(--sjs-general-dim-forecolor-light, rgba(0, 0, 0, 0.45));
      }

      .sd-row {
        display: flex;
        flex-direction: row;
        width: 100%;
        box-sizing: border-box;
        margin-top: calc(2 * var(--base-unit, 8px));
      }

      .sd-page__row.sd-row {
        margin-top: calc(2 * var(--base-unit, 8px));
      }

      .sd-page__row.sd-row--multiple,
      .svc-row > .sd-row--multiple {
        background: var(--sjs-question-background, var(--background, #fff));
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
        border-radius: calc(0.5 * var(--base-unit, 8px));
      }

      :not(.svc-row) > .sd-row--multiple {
        row-gap: calc(1 * var(--base-unit, 8px));
        margin-left: calc(-1 * var(--sd-base-padding));
        width: calc(100% + var(--sd-base-padding));
        flex-wrap: wrap;
      }

      :not(.svc-row) > .sd-row--multiple > div {
        box-sizing: border-box;
        padding-left: var(--sd-base-padding);
      }

      :not(.svc-row) > .sd-page__row.sd-row--multiple {
        padding: 0 var(--sd-base-padding) var(--sd-base-padding) 0;
        margin-left: 0;
        width: 100%;
      }

      .svc-row .sd-row--multiple {
        overflow: auto;
        margin-top: calc(2 * var(--base-unit, 8px));
      }

      .svc-row--multiple .sd-row--multiple {
        gap: calc(1 * var(--base-unit, 8px));
      }

      :not(.svc-row--ghost) > .sd-row {
        min-height: 50px;
      }

      .sd-row__panel {
        box-sizing: border-box;
        width: 100%;
      }

      .sd-row__question {
        box-sizing: border-box;
        width: 100%;
        white-space: nowrap;
      }

      .svc-tab-designer .sd-title {
        display: flex;
      }

      .sd-title {
        display: block;
        font-family: var(--font-family, var(--font-family));
        font-style: normal;
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        flex-direction: row;
        white-space: normal;
        word-break: break-word;
      }

      .sd-title.sd-container-modern__title {
        display: flex;
        align-items: center;
        padding: var(--sd-page-vertical-padding) var(--sd-page-vertical-padding);
        overflow: auto;
        font-family: var(--font-family, var(--font-family));
        gap: calc(4 * var(--base-unit, 8px));
        box-shadow: 0px 2px 0px var(--primary, #19b394);
        margin-bottom: 2px;
      }

      .sd-title.sd-container-modern__title .sd-logo__image {
        margin-top: calc(1 * var(--base-unit, 8px));
      }

      .sd-header__text {
        display: flex;
        flex-direction: column;
        gap: calc(1 * var(--base-unit, 8px));
        flex-grow: 1;
      }

      .sd-header__text h3 {
        font-size: calc(4 * var(--base-unit, 8px));
        font-weight: 700;
        line-height: calc(5 * var(--base-unit, 8px));
        color: var(--primary, #19b394);
      }

      .sd-header__text h5 {
        font-size: calc(2 * var(--base-unit, 8px));
        font-weight: 400;
        line-height: calc(3 * var(--base-unit, 8px));
      }

      .sd-title .sv-title-actions {
        width: 100%;
        justify-content: space-between;
      }

      .sd-root-modern:not(.svc-tab-designer) .sd-container-modern__title {
        background-color: var(--background, #fff);
      }

      .sd-root-modern .sd-container-modern__title .sd-header__text h3 {
        margin: 0;
      }

      .sd-root-modern .sd-container-modern__title .sd-description {
        margin: 0;
      }

      .sd-title .sv-title-actions {
        align-items: flex-start;
        width: calc(100% + 3 * var(--base-unit, 8px));
      }

      .sd-title .sv-title-actions .sv-title-actions__title {
        flex-wrap: wrap;
        flex: 0 1 auto;
        max-width: calc(100% - 3 * var(--base-unit, 8px));
        white-space: initial;
        min-width: unset;
      }

      .sd-action-title-bar {
        flex: 1 9 auto;
        min-width: calc(6 * var(--base-unit, 8px));
        justify-content: flex-end;
        margin: calc(-1 * var(--base-unit, 8px)) 0;
      }

      .sd-action-title-bar .sv-action {
        flex: 0 0 auto;
      }

      .sd-action-title-bar.sd-action-bar--empty {
        min-width: 0;
      }

      .sd-description {
        font-family: var(--font-family, var(--font-family));
        font-style: normal;
        font-weight: normal;
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
        white-space: normal;
        word-break: break-word;
      }

      .sd-item {
        padding: calc(1.5 * var(--base-unit, 8px)) 0;
      }

      .sd-item--disabled.sd-item--disabled .sd-item__decorator,
      .sd-item__decorator {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(3 * var(--base-unit, 8px));
        height: calc(3 * var(--base-unit, 8px));
        box-sizing: border-box;
        background: var(
          --sd-item-default-background,
          var(--sjs-editor-background, var(--background-dim-light, #f9f9f9))
        );
        box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.15);
        border: none;
        flex-shrink: 0;
      }

      .sd-item--checked .sd-item__decorator {
        box-shadow: none;
      }

      .sd-item__control:focus + .sd-item__decorator,
      .sd-item--allowhover .sd-selectbase__label:hover .sd-item__decorator {
        box-shadow: 0 0 0 2px var(--primary, #19b394);
        outline: none;
      }

      .sd-item__control:focus + .sd-item__decorator,
      .sd-item--allowhover .sd-selectbase__label:hover .sd-item__decorator {
        background: var(--background, #fff);
      }

      .sd-item--checked .sd-item__decorator {
        background: var(--primary, #19b394);
      }

      .sd-item__control-label {
        font-family: var(--font-family, var(--font-family));
        font-style: normal;
        font-weight: normal;
        line-height: calc(3 * var(--base-unit, 8px));
        font-size: calc(2 * var(--base-unit, 8px));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        white-space: normal;
        word-break: break-word;
        width: 100%;
        text-align: left;
      }

      .sd-item--disabled .sd-item__control-label {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        opacity: 0.25;
      }

      .sd-root--readonly .sd-item--disabled .sd-item__control-label {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
      }

      .sd-item--error .sd-item__decorator {
        background: var(--red-light, rgba(230, 10, 62, 0.1));
      }

      .sd-selectbase {
        border: none;
        margin: 0;
        padding: 0;
        min-inline-size: 0;
        min-width: 0;
      }

      .sd-selectbase--row {
        border: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        column-gap: calc(4 * var(--base-unit, 8px));
      }

      .sd-selectbase--multi-column {
        display: flex;
        flex: 1 1 0px;
      }

      .sd-selectbase__label {
        display: inline-flex;
        position: relative;
        gap: calc(1 * var(--base-unit, 8px));
        vertical-align: top;
      }

      .sd-selectbase__column {
        vertical-align: top;
      }

      .sd-selectbase__column {
        display: block;
        box-sizing: border-box;
        word-break: break-word;
        flex: 1 1 0px;
      }

      .sd-selectbase__column:not(:last-child) {
        padding-right: calc(2 * var(--base-unit, 8px));
      }

      .sd-selectbase__column.sv-q-column-1 {
        width: 100%;
      }

      .sd-checkbox__decorator {
        border-radius: 3px;
      }

      .sd-checkbox__svg {
        display: none;
        width: calc(2.5 * var(--base-unit, 8px));
        height: calc(2.5 * var(--base-unit, 8px));
      }

      .sd-checkbox--checked .sd-checkbox__svg {
        display: block;
      }

      .sd-checkbox--checked .sd-checkbox__svg use {
        fill: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
      }

      .sd-checkbox--checked.sd-checkbox--disabled .sd-checkbox__svg use {
        fill: var(--border, #d6d6d6);
      }

      .sd-checkbox--checked
        .sd-checkbox__control:focus
        + .sd-checkbox__decorator
        .sd-checkbox__svg
        use {
        fill: var(--primary, #19b394);
      }

      .sd-radio__decorator {
        border-radius: 50%;
      }

      .sd-radio--checked .sd-radio__decorator:after {
        content: " ";
        display: block;
        width: calc(1 * var(--base-unit, 8px));
        height: calc(1 * var(--base-unit, 8px));
        border-radius: 50%;
        background-color: var(
          --sjs-primary-forecolor,
          var(--primary-foreground, #fff)
        );
      }

      .sd-radio--checked.sd-radio--disabled .sd-radio__decorator:after {
        background-color: var(--border, #d6d6d6);
      }

      .sd-radio--checked .sd-radio__control:focus + .sd-radio__decorator:after {
        background-color: var(--primary, #19b394);
      }

      .sd-radio__svg {
        display: none;
      }

      .sd-visuallyhidden {
        position: absolute;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px, 1px, 1px, 1px);
      }

      .sd-matrix fieldset {
        border: none;
        padding: 0;
        margin: 0;
      }

      .sd-matrix__label {
        display: flex;
        justify-content: center;
      }

      .sd-matrix__text {
        padding: calc(2 * var(--base-unit, 8px));
      }

      .sd-matrix__text--checked {
        background-color: var(--primary-light, rgba(25, 179, 148, 0.1));
        padding: calc(2 * var(--base-unit, 8px));
      }

      .sd-matrix__cell:first-of-type {
        font-weight: 600;
        text-align: left;
      }

      .sd-rating {
        overflow-x: auto;
        min-height: calc(8 * var(--base-unit, 8px));
      }

      .sd-rating fieldset {
        display: flex;
        border: none;
        padding: 0 0 calc(2 * var(--base-unit, 8px)) 0;
        flex-wrap: nowrap;
        gap: calc(1 * var(--base-unit, 8px));
        margin-inline-start: 0;
        align-items: center;
      }

      .sd-rating.sd-rating--wrappable fieldset {
        flex-wrap: wrap;
      }

      .sd-rating__item {
        position: relative;
        background: var(--background, #fff);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
        border-radius: calc(12.5 * var(--base-unit, 8px));
        white-space: nowrap;
        padding: calc(0.5 * var(--base-unit, 8px))
          calc(2.5 * var(--base-unit, 8px));
        height: calc(6 * var(--base-unit, 8px));
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        min-width: calc(6 * var(--base-unit, 8px));
        text-align: center;
        border: 2px solid var(--background, #fff);
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        fill: var(--sjs-general-forecolor, var(--foreground, #161616));
        font-size: calc(2 * var(--base-unit, 8px));
      }

      .sd-rating__item--fixed-size {
        width: calc(6 * var(--base-unit, 8px));
        padding: 0;
      }

      legend + .sd-rating__item,
      legend + sv-ng-rating-item + .sd-rating__item {
        margin-inline-start: 2px;
      }

      .sd-rating__item--error {
        background-color: var(--red-light, rgba(230, 10, 62, 0.1));
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0);
        border-color: rgba(0, 0, 0, 0);
      }

      .sd-rating__item.sd-rating__item--disabled {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        fill: var(--sjs-general-forecolor, var(--foreground, #161616));
      }

      .sd-rating__item.sd-rating__item--selected.sd-rating__item--disabled {
        color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
        fill: var(--sjs-general-forecolor, var(--foreground, #161616));
      }

      .sd-question--disabled .sd-rating__item-text {
        opacity: 0.25;
      }

      .sd-rating__item--allowhover:hover,
      .sd-rating__item:focus-within {
        border-color: var(--primary, #19b394);
      }

      .sd-rating__item--selected {
        background-color: var(--primary, #19b394);
        border-color: var(--primary, #19b394);
        color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
        font-weight: 600;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0);
      }

      .sd-rating__item--selected:focus-within {
        box-shadow: inset 0 0 0 2px var(--background, #fff);
      }

      .sd-rating__item-smiley {
        position: relative;
        background: var(--background, #fff);
        border-radius: calc(12.5 * var(--base-unit, 8px));
        white-space: nowrap;
        padding: calc(1.25 * var(--base-unit, 8px));
        box-sizing: border-box;
        min-width: calc(6 * var(--base-unit, 8px));
        text-align: center;
        border: 2px solid var(--border, #d6d6d6);
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        fill: var(--border, #d6d6d6);
      }

      .sd-rating__item-smiley svg {
        display: block;
        width: calc(3 * var(--base-unit, 8px));
        height: calc(3 * var(--base-unit, 8px));
      }

      legend + .sd-rating__item-smiley,
      legend + sv-ng-rating-item + .sd-rating__item-smiley {
        margin-inline-start: 2px;
      }

      .sd-rating__item-smiley--error {
        background-color: var(--red-light, rgba(230, 10, 62, 0.1));
        border-color: rgba(0, 0, 0, 0);
      }

      .sd-rating__item-smiley.sd-rating__item-smiley--disabled {
        opacity: 0.5;
      }

      .sd-rating__item-smiley.sd-rating__item-smiley--selected.sd-rating__item-smiley--disabled {
        opacity: initial;
        fill: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
      }

      .sd-rating__item-smiley--allowhover:hover,
      .sd-rating__item-smiley:focus-within {
        border-color: var(--primary, #19b394);
      }

      .sd-rating__item-smiley--selected {
        background-color: var(--primary, #19b394);
        border-color: var(--primary, #19b394);
        fill: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
        font-weight: 600;
      }

      .sd-rating__item-smiley--selected:focus-within {
        box-shadow: inset 0 0 0 2px var(--background, #fff);
      }

      .sd-rating__item-star {
        position: relative;
        background: var(--background, #fff);
        width: calc(6 * var(--base-unit, 8px));
        height: calc(6 * var(--base-unit, 8px));
      }

      .sd-rating__item-star:not(:first-of-type) {
        padding-left: calc(0.5 * var(--base-unit, 8px));
        margin-left: calc(-0.5 * var(--base-unit, 8px));
      }

      .sd-rating__item-star:not(:last-of-type) {
        padding-right: calc(0.5 * var(--base-unit, 8px));
        margin-right: calc(-0.5 * var(--base-unit, 8px));
      }

      .sd-rating__item-star svg {
        stroke: var(--border, #d6d6d6);
        fill: none;
        width: calc(6 * var(--base-unit, 8px));
        height: calc(6 * var(--base-unit, 8px));
        display: block;
      }

      .sd-rating__item-star .sv-star-2 {
        display: none;
      }

      .sd-rating__item-star--selected svg {
        stroke: none;
        fill: var(--primary, #19b394);
      }

      .sd-rating__item-star--error svg {
        stroke: none;
        fill: var(--red-light, rgba(230, 10, 62, 0.1));
      }

      .sd-rating__item-star--disabled {
        opacity: 0.5;
      }

      .sd-rating__item-star--disabled svg {
        stroke: var(--border, #d6d6d6);
        fill: none;
      }

      .sd-rating__item-star--selected.sd-rating__item-star--disabled svg {
        stroke: none;
        fill: var(--border, #d6d6d6);
      }

      .sd-rating__item-star:focus-within svg {
        stroke: var(--primary, #19b394);
        fill: none;
      }

      .sd-rating__item-star--unhighlighted svg {
        stroke: none;
        fill: var(--border, #d6d6d6);
      }

      .sd-rating__item-star--highlighted svg {
        stroke: var(--primary, #19b394);
        fill: none;
      }

      .sd-rating__item-star--selected.sd-rating__item-star--unhighlighted:focus-within
        svg {
        stroke: var(--border, #d6d6d6);
        fill: var(--border, #d6d6d6);
      }

      .sd-rating__item-star--selected:focus-within svg {
        stroke: var(--primary, #19b394);
        fill: var(--primary, #19b394);
      }

      .sd-rating__item-star--selected:focus-within .sv-star {
        display: none;
      }

      .sd-rating__item-star--selected:focus-within .sv-star-2 {
        display: block;
      }

      .sd-rating__item-text.sd-rating__item-text {
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        display: inline-block;
      }

      .sd-rating__item-text.sd-rating__item-text.sd-rating__min-text,
      .sd-rating__item-text.sd-rating__item-text.sd-rating__max-text {
        margin-top: calc(1.25 * var(--base-unit, 8px));
        margin-bottom: calc(1.25 * var(--base-unit, 8px));
        border: 2px solid var(--background, #fff);
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-rating__item-text.sd-rating__item-text.sd-rating__min-text {
        margin-right: calc(1 * var(--base-unit, 8px));
        border-left: 0px;
      }

      .sd-rating__item-text.sd-rating__item-text.sd-rating__max-text {
        margin-right: calc(2 * var(--base-unit, 8px));
        margin-left: calc(1 * var(--base-unit, 8px));
      }

      .sd-rating__item-text.sd-rating__item-text .sv-string-editor {
        white-space: nowrap;
      }

      .sd-rating__item-text.sd-rating__item-text.sd-rating__item--fixed-size {
        min-width: calc(3 * var(--base-unit, 8px));
      }

      .sv-ranking-item--error .sv-ranking-item__index {
        background-color: var(--red-light, rgba(230, 10, 62, 0.1));
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0);
        border-color: rgba(0, 0, 0, 0);
      }

      .sd-element--with-frame .sv-ranking-item {
        left: calc(-3 * var(--base-unit, 8px));
      }

      .sd-element--with-frame
        .sv-ranking--mobile
        .sv-ranking-item__icon-container {
        margin-left: 0;
        margin-right: calc(1 * var(--base-unit, 8px));
      }

      .sd-element--with-frame .sv-ranking--mobile .sv-ranking-item {
        left: 0;
      }

      .sv-ranking-item__content.sd-ranking-item__content {
        line-height: calc(3 * var(--base-unit, 8px));
      }

      .sd-dropdown {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding-inline-end: calc(6 * var(--base-unit, 8px));
        padding-inline-start: calc(2 * var(--base-unit, 8px));
        background-position: right calc(1.5 * var(--base-unit, 8px)) top 50%,
          0 0;
        background-repeat: no-repeat;
        background-size: calc(3 * var(--base-unit, 8px))
          calc(3 * var(--base-unit, 8px));
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 15L17 10H7L12 15Z' fill='%23909090'/%3E%3C/svg%3E%0A");
        opacity: 1;
        display: flex;
        justify-content: space-between;
      }

      .sd-dropdown[disabled] {
        pointer-events: none;
      }

      .sd-dropdown--empty:not(.sd-input--disabled),
      .sd-dropdown--empty:not(.sd-input--disabled) .sd-dropdown__value {
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-dropdown__input-field-component {
        height: auto;
      }

      .sd-dropdown option {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        font-family: var(--font-family, var(--font-family));
        font-size: calc(2 * var(--base-unit, 8px));
      }

      .sd-dropdown__value {
        width: 100%;
        min-height: calc(3 * var(--base-unit, 8px));
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: var(--font-family, var(--font-family));
        font-size: calc(2 * var(--base-unit, 8px));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        position: relative;
      }

      .sd-dropdown_clean-button {
        padding: 0 calc(1 * var(--base-unit, 8px));
        margin: auto 0;
      }

      .sd-dropdown_clean-button-svg {
        width: calc(3 * var(--base-unit, 8px));
        height: calc(3 * var(--base-unit, 8px));
      }

      .sd-dropdown use {
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-input.sd-dropdown:focus-within {
        box-shadow: 0 0 0 2px var(--primary, #19b394);
      }

      .sd-input.sd-dropdown:focus-within .sd-dropdown__filter-string-input {
        z-index: 2000;
      }

      .sd-dropdown__filter-string-input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        max-width: 100%;
        border: none;
        outline: none;
        padding: 0;
        font-family: var(--font-family, var(--font-family));
        font-size: calc(2 * var(--base-unit, 8px));
        background-color: rgba(0, 0, 0, 0);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
        line-height: calc(3 * var(--base-unit, 8px));
        appearance: none;
      }

      .sd-dropdown--empty:not(.sd-input--disabled)
        .sd-dropdown__filter-string-input::placeholder {
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-dropdown__filter-string-input::placeholder {
        font-family: var(--font-family, var(--font-family));
        font-size: calc(2 * var(--base-unit, 8px));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
        line-height: calc(3 * var(--base-unit, 8px));
        appearance: none;
      }

      .sd-dropdown__hint-prefix {
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-dropdown__hint-prefix span {
        white-space: pre;
      }

      .sd-dropdown__hint-suffix {
        display: flex;
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-dropdown__hint-suffix span {
        white-space: pre;
      }

      [dir="rtl"] .sd-dropdown,
      [style*="direction:rtl"] .sd-dropdown,
      [style*="direction: rtl"] .sd-dropdown {
        background-position: left calc(1.5 * var(--base-unit, 8px)) top 50%, 0 0;
      }

      .sd-input.sd-tagbox:not(.sd-tagbox--empty):not(.sd-input--disabled) {
        height: auto;
        padding: calc(0.5 * var(--base-unit, 8px));
        padding-inline-end: calc(6 * var(--base-unit, 8px));
        padding-inline-start: calc(0.5 * var(--base-unit, 8px));
      }

      .sd-tagbox.sd-tagbox--empty {
        padding-block: calc(0.5 * var(--base-unit, 8px));
        padding-inline-end: calc(6 * var(--base-unit, 8px));
        padding-inline-start: calc(2 * var(--base-unit, 8px));
      }

      .sd-tagbox_clean-button {
        height: calc(3 * var(--base-unit, 8px));
        padding: calc(1 * var(--base-unit, 8px));
        margin: auto 0;
      }

      .sd-input.sd-tagbox:focus-within {
        box-shadow: 0 0 0 2px var(--primary, #19b394);
      }

      .sv-tagbox__item {
        position: relative;
        display: flex;
        height: calc(3 * var(--base-unit, 8px));
        padding: calc(1 * var(--base-unit, 8px))
          calc(1.5 * var(--base-unit, 8px));
        background-color: var(--primary, #19b394);
        border-radius: calc(0.25 * var(--base-unit, 8px));
      }

      .sv-tagbox__item-text {
        color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
        min-width: calc(5.5 * var(--base-unit, 8px));
        text-align: center;
        font-weight: 600;
      }

      .sv-tagbox__item:hover .sd-tagbox-item_clean-button,
      .sv-tagbox__item:focus .sd-tagbox-item_clean-button,
      .sv-tagbox__item:focus-within .sd-tagbox-item_clean-button {
        display: block;
      }

      .sd-tagbox-item_clean-button {
        display: none;
        position: absolute;
        inset-inline-end: calc(1.5 * var(--base-unit, 8px));
        height: calc(3 * var(--base-unit, 8px));
        padding: 0;
        padding-inline-start: calc(4 * var(--base-unit, 8px));
        background: linear-gradient(
          270deg,
          var(--primary, #19b394) 53.12%,
          rgba(25, 179, 148, 0) 100%
        );
      }

      .sd-tagbox-item_clean-button-svg {
        padding: calc(0.5 * var(--base-unit, 8px));
        width: calc(2 * var(--base-unit, 8px));
        height: calc(2 * var(--base-unit, 8px));
      }

      .sd-tagbox-item_clean-button-svg:hover {
        border-radius: 100px;
        background: var(
          --sjs-primary-forecolor-light,
          var(--primary-foreground-disabled, rgba(255, 255, 255, 0.25))
        );
      }

      .sd-tagbox-item_clean-button-svg use {
        fill: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
      }

      .sd-tagbox__value.sd-dropdown__value {
        position: relative;
        gap: calc(0.5 * var(--base-unit, 8px));
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        padding-inline: unset;
        margin-inline: unset;
        margin-block: unset;
      }

      .sd-tagbox__filter-string-input {
        width: auto;
        display: flex;
        flex-grow: 1;
        height: calc(5 * var(--base-unit, 8px));
        position: initial;
      }

      .sd-tagbox__placeholder {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 100%;
        width: auto;
        height: 100%;
        text-align: left;
        cursor: text;
        pointer-events: none;
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      [dir="rtl"] .sd-tagbox-item_clean-button,
      [style*="direction:rtl"] .sd-tagbox-item_clean-button,
      [style*="direction: rtl"] .sd-tagbox-item_clean-button {
        background: linear-gradient(
          90deg,
          var(--primary, #19b394) 53.12%,
          rgba(25, 179, 148, 0) 100%
        );
      }

      .sd-imagepicker {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        border: none;
        gap: calc(2 * var(--base-unit, 8px));
        width: 100%;
        margin: 0;
      }

      .sd-imagepicker--column {
        align-items: flex-start;
        flex-direction: column;
      }

      @supports not (aspect-ratio: 1/1) {
        .sd-imagepicker > div {
          margin-right: calc(2 * var(--base-unit, 8px));
        }
      }

      .sd-imagepicker__item img,
      .sd-imagepicker__item .sd-imagepicker__image-container > div {
        border-radius: calc(0.5 * var(--base-unit, 8px));
        background-color: var(--background-dim-light, #f9f9f9);
      }

      .sd-imagepicker__item-decorator {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .sd-imagepicker__image-container {
        position: relative;
      }

      .sd-imagepicker__check-decorator {
        display: none;
        position: absolute;
        top: calc(1 * var(--base-unit, 8px));
        right: calc(1 * var(--base-unit, 8px));
        width: calc(6 * var(--base-unit, 8px));
        height: calc(6 * var(--base-unit, 8px));
        padding: calc(1.5 * var(--base-unit, 8px));
        box-sizing: border-box;
        border-radius: 100%;
        background-color: var(--background, #fff);
        z-index: 1;
      }

      .sd-imagepicker__check-icon {
        width: calc(3 * var(--base-unit, 8px));
        height: calc(3 * var(--base-unit, 8px));
        fill: var(--primary, #19b394);
      }

      .sd-imagepicker__item--checked .sd-imagepicker__check-decorator {
        display: block;
      }

      .sd-imagepicker__item--error .sd-imagepicker__image-container::before {
        display: block;
        position: absolute;
        content: " ";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--red-light, rgba(230, 10, 62, 0.1));
        border-radius: calc(0.5 * var(--base-unit, 8px));
        background: linear-gradient(
          0deg,
          var(--red-light, rgba(230, 10, 62, 0.1)),
          var(--red-light, rgba(230, 10, 62, 0.1))
        );
      }

      .sd-imagepicker__item:focus-within .sd-imagepicker__image,
      .sd-imagepicker__item--allowhover .sd-imagepicker__image:hover {
        opacity: 0.5;
      }

      .sd-imagepicker__image {
        display: block;
        box-sizing: border-box;
        max-width: 100%;
      }

      .sd-imagepicker__text {
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        margin-top: calc(1 * var(--base-unit, 8px));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
      }

      .sd-imagepicker__no-image {
        display: flex;
        background-color: var(--background-dim-light, #f9f9f9);
        inset-block-start: 0;
      }

      .sd-imagepicker__no-image-svg {
        height: calc(6 * var(--base-unit, 8px));
        width: calc(6 * var(--base-unit, 8px));
        margin: auto;
      }

      .sd-imagepicker__no-image-svg use {
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-imagepicker__column {
        display: flex;
        flex-direction: column;
        gap: calc(2 * var(--base-unit, 8px));
        align-items: flex-start;
        padding-right: 0;
      }

      .sd-selectbase__column.sd-imagepicker__column:not(:last-child) {
        padding-right: 0;
      }

      .sd-image__image {
        display: block;
        max-width: 100%;
        border-radius: calc(0.5 * var(--base-unit, 8px));
      }

      .sd-image__image--adaptive {
        width: 100%;
        height: auto;
        max-width: calc(80 * var(--base-unit, 8px));
      }

      .sd-image__no-image {
        background: var(--background-dim-light, #f9f9f9);
        min-width: calc(5 * var(--base-unit, 8px));
        min-height: calc(5 * var(--base-unit, 8px));
        width: 100%;
        height: 100%;
        position: absolute;
        inset-block-start: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .sd-image__no-image use {
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-html {
        white-space: initial;
      }

      .sd-expression {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        font-size: calc(2 * var(--base-unit, 8px));
      }

      .sd-progress {
        height: 2px;
        background-color: var(--border-light, #eaeaea);
        position: relative;
      }

      .sd-progress__bar {
        position: relative;
        height: 100%;
        background-color: var(--primary, #19b394);
        overflow: hidden;
      }

      .sd-progress__text {
        position: absolute;
        margin-top: calc(1 * var(--base-unit, 8px));
        right: calc(3 * var(--base-unit, 8px));
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
        font-size: calc(1.5 * var(--base-unit, 8px));
        line-height: calc(2 * var(--base-unit, 8px));
        font-weight: 600;
      }

      @media only screen and (min-width: calc(125 * var(--base-unit, 8px))) {
        .sd-progress__text {
          margin-left: 5%;
        }
      }

      @media only screen and (max-width: calc(125 * var(--base-unit, 8px))) {
        .sd-progress__text {
          margin-left: 10px;
        }
      }

      .sd-boolean {
        display: flex;
        width: max-content;
        position: relative;
        padding: calc(0.5 * var(--base-unit, 8px));
        background: var(
          --sjs-editor-background,
          var(--background-dim-light, #f9f9f9)
        );
        box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.15);
        border-radius: calc(12.5 * var(--base-unit, 8px));
      }

      .sd-boolean__thumb,
      .sd-boolean__label {
        display: block;
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
        font-family: var(--font-family, var(--font-family));
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        padding: calc(1 * var(--base-unit, 8px)) calc(3 * var(--base-unit, 8px));
      }

      .sd-boolean__switch {
        display: flex;
        padding: calc(0.5 * var(--base-unit, 8px));
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-radius: calc(12.5 * var(--base-unit, 8px));
      }

      .sd-boolean__control:focus ~ .sd-boolean__switch {
        box-shadow: inset 0 0 0 2px var(--primary, #19b394);
      }

      .sd-boolean--indeterminate .sd-boolean__thumb {
        display: none;
      }

      .sd-boolean__thumb {
        background: var(--background, #fff);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
        border-radius: calc(12.5 * var(--base-unit, 8px));
        transition-duration: 0.2s;
        transition-property: margin-left, transform;
        transition-timing-function: linear;
        color: var(--primary, #19b394);
        font-weight: 600;
        margin-left: 0%;
        transform: translateX(0);
      }

      .sd-boolean--checked .sd-boolean__thumb {
        margin-left: 100%;
        transform: translateX(-100%);
      }

      .sd-boolean--disabled .sd-boolean__thumb,
      .sd-boolean--disabled .sd-boolean__label {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        opacity: 0.25;
      }

      .svc-question__content
        .sd-boolean:not(.sd-boolean--checked):not(.sd-boolean--indeterminate)
        .sd-boolean__label:nth-of-type(1),
      .svc-question__content
        .sd-boolean--checked
        .sd-boolean__label:nth-of-type(2) {
        color: var(--primary, #19b394);
        font-weight: 600;
        background: var(--background, #fff);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
        border-radius: calc(12.5 * var(--base-unit, 8px));
      }

      .svc-question__content .sd-boolean__switch {
        display: none;
      }

      .sd-boolean--error {
        background-color: var(--red-light, rgba(230, 10, 62, 0.1));
      }

      .sd-paneldynamic .sd-progress {
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        z-index: 2;
        transform: translateY(-1px);
      }

      .sd-paneldynamic > .sd-panel {
        padding-top: 1px;
        padding-bottom: calc(0.5 * var(--sd-base-vertical-padding));
      }

      .sd-paneldynamic
        .sd-paneldynamic__panel-wrapper
        > .sd-panel
        > .sd-panel__header {
        padding-bottom: 0;
        padding-top: calc(
          0.5 * var(--sd-base-vertical-padding) + var(--base-unit, 8px)
        );
      }

      .sd-paneldynamic
        .sd-paneldynamic__panel-wrapper
        > .sd-panel
        > .sd-panel__header:after {
        display: none;
      }

      .sd-paneldynamic
        .sd-paneldynamic__panel-wrapper
        > .sd-panel
        > .sd-panel__header
        > .sd-panel__title {
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-question__content:first-child
        > .sd-paneldynamic
        > .sd-paneldynamic__panel-wrapper
        > .sd-panel
        > .sd-panel__header {
        padding-top: var(--sd-base-vertical-padding);
      }

      .sd-paneldynamic__separator {
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0;
        border-color: var(--border-light, #eaeaea);
        background: var(--border-light, #eaeaea);
        height: 1px;
        border: none;
      }

      .sd-paneldynamic__panel-wrapper {
        padding-bottom: calc(1 * var(--sd-base-padding));
      }

      .sd-paneldynamic__panel-wrapper:after {
        display: table;
        clear: both;
        content: " ";
      }

      .sd-paneldynamic__panel-wrapper--in-row {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .sd-paneldynamic__footer {
        clear: both;
      }

      .sd-paneldynamic__footer .sd-paneldynamic__prev-btn,
      .sd-paneldynamic__footer .sd-paneldynamic__next-btn {
        display: block;
      }

      .sd-paneldynamic__footer .sd-paneldynamic__prev-btn svg,
      .sd-paneldynamic__footer .sd-paneldynamic__next-btn svg {
        width: calc(2 * var(--base-unit, 8px));
        height: calc(2 * var(--base-unit, 8px));
      }

      .sd-paneldynamic__footer .sd-paneldynamic__add-btn,
      .sd-paneldynamic__footer .sd-paneldynamic__progress-text,
      .sd-paneldynamic__footer .sd-paneldynamic__progress--bottom {
        display: initial;
      }

      .sd-paneldynamic__buttons-container {
        display: flex;
        align-items: center;
        padding: calc(var(--sd-base-vertical-padding) - var(--base-unit, 8px)) 0;
      }

      .sd-paneldynamic__progress-container {
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: calc(-1 * var(--base-unit, 8px));
      }

      .sd-paneldynamic__progress-text {
        font-size: calc(2 * var(--base-unit, 8px));
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
        margin: 0;
        margin-right: calc(3 * var(--base-unit, 8px));
      }

      .sd-paneldynamic__prev-btn,
      .sd-paneldynamic__next-btn {
        width: calc(2 * var(--base-unit, 8px));
        height: calc(2 * var(--base-unit, 8px));
      }

      .sd-paneldynamic__prev-btn .sv-svg-icon,
      .sd-paneldynamic__next-btn .sv-svg-icon {
        display: block;
      }

      .sd-paneldynamic__prev-btn {
        margin-right: calc(2 * var(--base-unit, 8px));
      }

      .sd-paneldynamic__next-btn {
        margin-left: calc(-1 * var(--base-unit, 8px));
        margin-right: calc(2 * var(--base-unit, 8px));
        transform: rotate(180deg);
      }

      .sd-paneldynamic__placeholder .sd-paneldynamic__add-btn {
        display: initial;
        margin-left: 0;
      }

      .sd-question--empty.sd-question--paneldynamic > .sd-question__content {
        padding-bottom: var(--sd-base-padding);
      }

      .svc-question__content .sd-paneldynamic__panel-wrapper {
        padding: 0;
      }

      .sd-paneldynamic__buttons-container .sd-action-bar {
        width: 100%;
        margin: 0 calc(-3 * var(--base-unit, 8px));
        width: calc(100% + 6 * var(--base-unit, 8px));
      }

      .sd-paneldynamic__panel-footer {
        border-top: none;
        position: relative;
        top: calc(0.5 * var(--sd-base-vertical-padding));
        margin-right: calc(-3 * var(--base-unit, 8px));
        justify-content: flex-end;
      }

      .sd-paneldynamic__panel-footer .sv-action:not(.sv-action--hidden) {
        margin-bottom: calc(-1 * var(--base-unit, 8px));
      }

      .sv-tabs-toolbar.sv-action-bar {
        gap: calc(4 * var(--base-unit, 8px));
      }

      .sv-tabs-toolbar.sv-tabs-toolbar--left {
        justify-content: flex-start;
      }

      .sv-tabs-toolbar.sv-tabs-toolbar--right {
        justify-content: flex-end;
      }

      .sv-tabs-toolbar.sv-tabs-toolbar--center {
        justify-content: center;
      }

      .sv-tab-item__root {
        display: flex;
      }

      .sv-tab-item {
        padding: calc(1 * var(--base-unit, 8px)) 0
          calc(2 * var(--base-unit, 8px)) 0;
        display: flex;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        display: flex;
        padding: calc(1 * var(--base-unit, 8px));
        box-sizing: border-box;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
        font-family: var(--font-family, var(--font-family));
        font-size: calc(2 * var(--base-unit, 8px));
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
        overflow-x: hidden;
        white-space: nowrap;
      }

      .sv-tab-item.sv-tab-item--pressed {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        box-shadow: inset 0px -2px 0px var(--primary, #19b394);
      }

      .sv-tab-item__title {
        line-height: calc(3 * var(--base-unit, 8px));
        height: calc(3 * var(--base-unit, 8px));
        display: flex;
        align-items: center;
      }

      .sd-paneldynamic__header.sd-element__header.sd-paneldynamic__header-tab {
        padding-bottom: 0;
      }

      .sd-paneldynamic__header.sd-element__header.sd-paneldynamic__header-tab::after {
        bottom: 0;
      }

      .sd-file {
        min-height: calc(36 * var(--base-unit, 8px));
        position: relative;
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
      }

      .sd-file .sv-action-bar {
        padding: calc(1 * var(--base-unit, 8px)) 0;
        justify-content: center;
        position: absolute;
        width: 100%;
        bottom: 0;
      }

      .sd-file .sv-action-bar .sv-action-bar-item {
        height: calc(4 * var(--base-unit, 8px));
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
        border-radius: calc(2 * var(--base-unit, 8px));
      }

      .sd-file .sv-action-bar #fileIndex .sv-action-bar-item {
        padding: calc(0.5 * var(--base-unit, 8px)) 0;
      }

      .sd-file .sv-action-bar #fileIndex .sv-action-bar-item:hover {
        background-color: var(--background, #fff);
      }

      .sd-file .sv-action-bar #fileIndex .sv-action-bar-item:disabled {
        opacity: initial;
      }

      .sd-file__decorator {
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 1px dashed var(--border, #d6d6d6);
        justify-content: center;
        align-items: center;
      }

      .sd-file__decorator--drag {
        border: 1px solid var(--primary, #19b394);
        box-shadow: inset 0 0 0 1px var(--primary, #19b394);
        background: var(--primary-light, rgba(25, 179, 148, 0.1));
        z-index: 1;
      }

      .sd-file__no-file-chosen {
        display: none;
      }

      .sd-file__drag-area-placeholder {
        padding: 0 calc(8 * var(--base-unit, 8px));
        text-align: center;
        word-break: break-word;
        white-space: normal;
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-file__choose-btn--text {
        display: block;
        margin-top: calc(1 * var(--base-unit, 8px));
        font-weight: 600;
        color: var(--primary, #19b394);
        cursor: pointer;
      }

      .sd-question--answered .sd-file__drag-area-placeholder {
        display: none;
      }

      .sd-file__choose-btn--text svg {
        display: none;
      }

      .sd-file__choose-btn--icon {
        z-index: 2;
      }

      .sd-file__choose-btn--icon span:first-child {
        display: none;
      }

      .sd-file__choose-btn--icon,
      .sd-file__clean-btn {
        top: calc(1 * var(--base-unit, 8px));
        position: absolute;
      }

      .sd-file__clean-btn {
        z-index: 2;
        right: calc(1 * var(--base-unit, 8px));
      }

      .sd-file__clean-btn span:first-child {
        display: none;
      }

      .sd-file__choose-btn--icon {
        right: calc(8 * var(--base-unit, 8px));
      }

      .sd-file__list {
        overflow: auto;
        display: flex;
        box-sizing: content-box;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
        padding: calc(10.5 * var(--base-unit, 8px)) 0;
        min-height: calc(15 * var(--base-unit, 8px));
        max-height: calc(15 * var(--base-unit, 8px));
        position: absolute;
        width: 100%;
      }

      .sd-file__preview {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        min-height: 100%;
        margin: 0 auto;
      }

      .sd-file__preview .sd-file__default-image {
        width: calc(7 * var(--base-unit, 8px));
        height: 90px;
      }

      .sd-file__preview img:hover + .sd-file__remove-file-button,
      .sd-file__preview svg:hover + .sd-file__remove-file-button,
      .sd-file__preview .sd-file__remove-file-button:hover {
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .sd-file__sign {
        margin-top: calc(1 * var(--base-unit, 8px));
        text-align: center;
        font-size: calc(1.5 * var(--base-unit, 8px));
        line-height: calc(2 * var(--base-unit, 8px));
      }

      .sd-file__sign a {
        display: block;
        text-decoration: none;
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        white-space: normal;
        word-break: break-all;
        width: calc(12 * var(--base-unit, 8px));
        overflow: hidden;
        max-height: calc(6 * var(--base-unit, 8px));
        text-overflow: ellipsis;
        line-height: calc(2 * var(--base-unit, 8px));
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .sd-file__remove-file-button {
        display: none;
      }

      .sd-file__decorator--error {
        background-color: var(--red-light, rgba(230, 10, 62, 0.1));
      }

      .sd-file__image-wrapper {
        position: relative;
        text-align: center;
        min-width: calc(12 * var(--base-unit, 8px));
        min-height: calc(12 * var(--base-unit, 8px));
      }

      .sd-file__image-wrapper img:not(.sd-file__default-image) {
        display: block;
        width: calc(12 * var(--base-unit, 8px));
        height: calc(12 * var(--base-unit, 8px));
        object-fit: contain;
        background: var(--background-dim, #f3f3f3);
      }

      .sd-file--single img:hover + .sd-file__remove-file-button {
        display: none;
      }

      .sd-file--mobile .sd-file__list {
        height: calc(100% - 4 * var(--base-unit, 8px));
      }

      .sd-file--single-image {
        height: calc(36 * var(--base-unit, 8px));
      }

      .sd-file--single-image .sd-file__preview {
        width: 100%;
        margin: 0;
      }

      .sd-file--single-image .sd-file__list {
        padding: 0;
        height: 100%;
        max-height: 100%;
        width: 100%;
      }

      .sd-file--single-image .sd-file__image-wrapper {
        min-height: 100%;
        min-width: 100%;
      }

      .sd-file--single-image .sd-file__image-wrapper img {
        width: 100%;
        height: 100%;
        background-color: var(--background-dim-light, #f9f9f9);
      }

      .sd-file--single-image .sd-file__sign {
        position: absolute;
        margin: 0;
        width: 100%;
        min-height: 100%;
      }

      .sd-file--single-image .sd-file__sign a {
        color: rgba(0, 0, 0, 0);
        width: 100%;
        height: 100%;
        outline: none;
      }

      .sd-file
        > input:focus
        + .sd-file__decorator
        .sd-file__choose-btn.sd-file__choose-btn--icon
        use {
        fill: var(--primary, #19b394);
      }

      .sd-file
        > input:focus
        + .sd-file__decorator
        .sd-file__choose-btn:not(.sd-file__choose-btn--icon) {
        background-color: var(--primary-light, rgba(25, 179, 148, 0.1));
      }

      .sd-file__drag-area {
        position: absolute;
        width: 100%;
        height: 100%;
      }

      .sd-hidden {
        display: none !important;
      }

      .sd-body__navigation .sd-btn {
        padding: calc(2 * var(--base-unit, 8px)) calc(8 * var(--base-unit, 8px));
      }

      .sd-root-modern--mobile
        .sd-body__navigation
        .sv-action:not(.sv-action--hidden),
      .sd-root-modern--mobile .sd-body__navigation .sd-btn {
        flex-grow: 1;
      }

      .sd-root-modern--mobile .sd-body__navigation .sd-btn {
        padding: calc(2 * var(--base-unit, 8px)) calc(4 * var(--base-unit, 8px));
      }

      .sd-body__navigation .sv-action--hidden {
        display: none;
      }

      .sd-btn {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        padding: calc(2 * var(--base-unit, 8px)) calc(6 * var(--base-unit, 8px));
        background: var(--background, #fff);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
        border-radius: calc(0.5 * var(--base-unit, 8px));
        cursor: pointer;
        font-family: var(--font-family, var(--font-family));
        font-style: normal;
        font-weight: 600;
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        text-align: center;
        color: var(--primary, #19b394);
        border: 2px solid rgba(0, 0, 0, 0);
        outline: none;
      }

      .sd-btn:not(:disabled):hover,
      .sd-btn:not(:disabled):focus {
        box-shadow: 0 0 0 2px var(--primary, #19b394);
      }

      .sd-btn:disabled {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        opacity: 0.25;
        cursor: default;
      }

      .sd-btn--action {
        background-color: var(--primary, #19b394);
        color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
      }

      .sd-btn--action:not(:disabled):hover,
      .sd-btn--action:not(:disabled):focus {
        color: var(--primary, #19b394);
        background-color: var(--background, #fff);
      }

      .sd-btn--action:disabled {
        color: var(
          --sjs-primary-forecolor-light,
          var(--primary-foreground-disabled, rgba(255, 255, 255, 0.25))
        );
      }

      .sd-body {
        width: 100%;
      }

      .sd-body .sd-body__page {
        min-width: calc(300px + 6 * var(--base-unit, 8px));
      }

      .sd-body .sd-body__timer {
        padding: calc(2 * var(--base-unit, 8px)) calc(2 * var(--base-unit, 8px))
          0;
        box-sizing: border-box;
      }

      .sd-body.sd-body--static {
        max-width: calc(84 * var(--base-unit, 8px));
        margin-left: auto;
        margin-right: auto;
      }

      .sd-body.sd-body--static .sd-body__timer,
      .sd-body.sd-body--static .sd-body__navigation,
      .sd-body.sd-body--static .sd-body__page {
        margin-left: 0;
        margin-right: 0;
      }

      .sd-body.sd-body--responsive {
        max-width: initial;
      }

      .sd-body.sd-body--responsive .sd-body__timer,
      .sd-body.sd-body--responsive .sd-body__navigation {
        padding: calc(2 * var(--base-unit, 8px)) var(--sd-page-vertical-padding);
      }

      .sd-body.sd-body--responsive.sd-body--with-timer {
        max-width: calc(
          100% + var(--sd-timer-size) * (-1 - 64 / 144) + 6 *
            var(--base-unit, 8px)
        );
        margin-left: auto;
        margin-right: auto;
      }

      .sd-root-modern--mobile .sd-body.sd-body--with-timer.sd-body--responsive {
        max-width: initial;
        margin-left: 0;
        margin-right: 0;
      }

      .sd-body__navigation.sd-action-bar {
        box-sizing: border-box;
        padding: calc(2 * var(--base-unit, 8px)) calc(2 * var(--base-unit, 8px));
        flex-wrap: wrap;
        gap: calc(2 * var(--base-unit, 8px));
      }

      .sd-body__progress {
        margin-bottom: calc(4 * var(--base-unit, 8px));
      }

      .sd-body__progress--top {
        position: sticky;
        top: 0;
        z-index: 50;
      }

      .sd-body--empty {
        min-height: 400px;
        text-align: center;
        padding-top: 180px;
        box-sizing: border-box;
      }

      .sd-multipletext {
        width: 100%;
        table-layout: fixed;
        border-spacing: 0;
        height: 1px;
      }

      .sd-multipletext__cell {
        height: 100%;
      }

      .sd-multipletext__cell:not(:last-child) {
        padding-right: calc(2 * var(--base-unit, 8px));
      }

      .sd-multipletext__item-container.sd-input:focus-within {
        box-shadow: inset 0 0 0 2px var(--primary, #19b394);
      }

      .sd-multipletext__item-container {
        display: flex;
        align-items: flex-start;
        height: 100%;
        padding-top: 0;
        padding-bottom: 0;
      }

      .sd-multipletext__item-container .sd-input {
        padding-top: 0;
        padding-right: 0;
        padding-bottom: 0;
        border: none;
        box-shadow: none;
        height: calc(3 * var(--base-unit, 8px));
      }

      .sd-multipletext__item-container .sd-input,
      .sd-multipletext__item-title {
        margin-top: calc(1.5 * var(--base-unit, 8px));
        margin-bottom: calc(1.5 * var(--base-unit, 8px));
      }

      .sd-multipletext__item-title {
        height: calc(100% - var(--base-unit, 8px) * 3);
        max-width: 30%;
        padding-right: calc(2 * var(--base-unit, 8px));
        border-right: 1px solid var(--border, #d6d6d6);
        word-break: break-word;
        white-space: normal;
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-multipletext__item {
        flex-grow: 1;
      }

      .sd-multipletext__content .sd-multipletext__item-container {
        position: relative;
      }

      .sd-multipletext__item-container--error {
        background-color: var(--red-light, rgba(230, 10, 62, 0.1));
      }

      .sd-multipletext__item-container--error .sd-input--error {
        background-color: rgba(0, 0, 0, 0);
      }

      .sd-multipletext__item-container:hover:not(:focus-within)
        > .sd-question__erbox--tooltip {
        display: inline-block;
      }

      .sd-multipletext tr:not(:last-child) .sd-multipletext__cell {
        padding-bottom: calc(2 * var(--base-unit, 8px));
      }

      .sd-action {
        appearance: none;
        border: none;
        background: rgba(0, 0, 0, 0);
        padding: calc(1 * var(--base-unit, 8px)) calc(3 * var(--base-unit, 8px));
        color: var(--primary, #19b394);
        border-radius: calc(12.5 * var(--base-unit, 8px));
        font-weight: 600;
        font-family: var(--font-family, var(--font-family));
        font-style: normal;
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        outline: none;
      }

      .sd-action--negative {
        color: var(--red, #e60a3e);
      }

      .sd-action--icon {
        padding: calc(1 * var(--base-unit, 8px));
      }

      .sd-action--icon use {
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      svg.sd-action--icon {
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-action:disabled,
      .sd-action--disabled {
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        cursor: default;
        opacity: 0.25;
        pointer-events: none;
      }

      .sd-action:not(.sd-action--pressed):hover,
      .sd-action:not(.sd-action--pressed):focus {
        outline: none;
        background-color: var(--primary-light, rgba(25, 179, 148, 0.1));
        cursor: pointer;
        opacity: 1;
      }

      .sd-action:not(.sd-action--pressed):hover.sd-action--icon,
      .sd-action:not(.sd-action--pressed):focus.sd-action--icon {
        background-color: var(--background-dim, #f3f3f3);
      }

      .sd-action:not(.sd-action--pressed):hover.sd-action--negative,
      .sd-action:not(.sd-action--pressed):focus.sd-action--negative {
        background-color: var(--red-light, rgba(230, 10, 62, 0.1));
      }

      .sd-action:not(
          .sd-action--pressed
        ):hover.sd-action--negative.sd-action--icon
        use,
      .sd-action:not(
          .sd-action--pressed
        ):focus.sd-action--negative.sd-action--icon
        use {
        fill: var(--red, #e60a3e);
      }

      .sd-action:not(.sd-action--pressed):hover:active,
      .sd-action:not(.sd-action--pressed):focus:active {
        opacity: 0.5;
      }

      .sd-action__icon {
        display: block;
        width: calc(3 * var(--base-unit, 8px));
        height: calc(3 * var(--base-unit, 8px));
      }

      .sd-action--pressed:not(.sd-action--active) {
        background-color: var(--background-dim, #f3f3f3);
        opacity: 0.5;
      }

      .sd-action-bar {
        display: flex;
        align-items: center;
      }

      .sd-action-bar .sv-action:not(:last-child) .sv-action__content {
        padding-right: 0;
      }

      .sd-context-btn {
        background-color: var(--background, #fff);
        padding: calc(1.5 * var(--base-unit, 8px));
        border-radius: calc(12.5 * var(--base-unit, 8px));
        border: none;
        outline: none;
        cursor: pointer;
      }

      .sd-context-btn svg {
        display: block;
        width: calc(3 * var(--base-unit, 8px));
        height: calc(3 * var(--base-unit, 8px));
      }

      .sd-context-btn use {
        fill: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-context-btn:hover use,
      .sd-context-btn:focus use {
        fill: var(--primary, #19b394);
      }

      .sd-context-btn:hover.sd-context-btn--negative use,
      .sd-context-btn:focus.sd-context-btn--negative use {
        fill: var(--red, #e60a3e);
      }

      .sd-context-btn:disabled {
        opacity: 0.25;
      }

      .sd-completedpage {
        font-family: var(--font-family, var(--font-family));
        font-weight: bold;
        box-sizing: border-box;
        text-align: center;
        height: auto;
      }

      .sd-completedpage h3 {
        font-size: calc(3 * var(--base-unit, 8px));
      }

      .sd-completedpage:before,
      .sd-completedpage:after {
        display: block;
        width: calc(9 * var(--base-unit, 8px));
        margin-left: calc(50% - 4.5 * var(--base-unit, 8px));
        content: "";
      }

      .sd-completedpage:before {
        height: calc(13 * var(--base-unit, 8px));
      }

      .sd-completedpage:after {
        height: calc(2 * var(--base-unit, 8px));
      }

      .sd-progress-buttons__image-button-left {
        display: none;
      }

      .sd-progress-buttons__image-button-right {
        display: none;
      }

      .sd-progress-buttons__image-button--hidden {
        visibility: hidden;
      }

      .sd-progress-buttons__list {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      .sd-progress-buttons__list li {
        text-align: center;
        flex-grow: 1;
        text-decoration: none;
        border-top: 2px solid var(--border-light, #eaeaea);
        padding-top: calc(2 * var(--base-unit, 8px));
        padding-bottom: calc(4 * var(--base-unit, 8px));
        cursor: pointer;
      }

      .sd-progress-buttons__list li:hover .sd-progress-buttons__page-title {
        text-decoration-line: underline;
      }

      .sd-progress-buttons__list .sd-progress-buttons__list-element--current,
      .sd-progress-buttons__list .sd-progress-buttons__list-element--passed {
        border-top: 2px solid var(--primary, #19b394);
      }

      .sd-progress-buttons__list-element--nonclickable
        .sd-progress-buttons__page-title {
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-progress-buttons__list-element--current
        .sd-progress-buttons__page-title,
      .sd-progress-buttons__list-element--current
        .sd-progress-buttons__page-description {
        color: var(--primary, #19b394);
      }

      .sd-progress-buttons__page-title {
        width: 100%;
        font-size: calc(2 * var(--base-unit, 8px));
        font-weight: 600;
        line-height: calc(3 * var(--base-unit, 8px));
      }

      .sd-progress-buttons__page-description {
        width: 100%;
        font-size: calc(1.5 * var(--base-unit, 8px));
        line-height: calc(2 * var(--base-unit, 8px));
        font-weight: 600;
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sv_progress-toc {
        padding: calc(1 * var(--base-unit, 8px));
        max-width: calc(42 * var(--base-unit, 8px));
        height: 100%;
        background: var(--background, #fff);
        box-sizing: border-box;
        min-width: calc(32 * var(--base-unit, 8px));
      }

      .sv_progress-toc
        .sv-list__item.sv-list__item--selected
        .sv-list__item-body {
        background: var(--primary-light, rgba(25, 179, 148, 0.1));
        color: var(--sjs-general-forecolor, var(--foreground, #161616));
        font-weight: 400;
      }

      .sv_progress-toc .sv-list__item span {
        white-space: break-spaces;
      }

      .sv_progress-toc .sv-list__item-body {
        padding-inline-start: calc(2 * var(--base-unit, 8px));
        padding-inline-end: calc(2 * var(--base-unit, 8px));
        border-radius: 3px;
        padding-top: calc(1.5 * var(--base-unit, 8px));
        padding-bottom: calc(1.5 * var(--base-unit, 8px));
      }

      .sv_progress-toc--left {
        border-right: 1px solid var(--border, #d6d6d6);
      }

      .sv_progress-toc--right {
        border-left: 1px solid var(--border, #d6d6d6);
      }

      .sd-list {
        padding-right: calc(0.5 * var(--base-unit, 8px));
        padding-left: calc(0.5 * var(--base-unit, 8px));
      }

      .sd-list__item.sd-list__item {
        padding: 0;
      }

      .sd-list__item.sd-list__item .sd-list__item-body {
        padding-top: calc(1.5 * var(--base-unit, 8px));
        padding-bottom: calc(1.5 * var(--base-unit, 8px));
        border-radius: 3px;
        font-size: calc(2 * var(--base-unit, 8px));
        line-height: calc(3 * var(--base-unit, 8px));
        padding-inline: calc(2 * var(--base-unit, 8px))
          calc(8 * var(--base-unit, 8px));
      }

      .sd-timer {
        z-index: 2;
        position: fixed;
        bottom: calc(var(--sd-timer-size) / 144 * 32);
        right: calc(1 * var(--base-unit, 8px));
        background: #fff;
        width: var(--sd-timer-size);
        height: var(--sd-timer-size);
        margin-right: calc(var(--sd-timer-size) / 144 * 32);
        display: flex;
        border-radius: 100%;
        padding: calc(var(--sd-timer-size) / 144 * 8);
        filter: drop-shadow(
          0px calc(1 * var(--base-unit, 8px)) calc(2 * var(--base-unit, 8px))
            rgba(0, 0, 0, 0.1)
        );
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1019607843);
        box-sizing: border-box;
      }

      .sd-timer--top {
        top: calc(var(--sd-timer-size) / 144 * 32);
        margin-top: calc(4 * var(--base-unit, 8px));
        margin-bottom: calc(-1 * var(--sd-timer-size));
      }

      .sd-timer--bottom {
        bottom: calc(var(--sd-timer-size) / 144 * 32);
        margin-top: calc(var(--sd-timer-size) * -1.2222222222);
      }

      .sd-timer__progress {
        --sd-timer-stroke-background-color: var(--background-dim, #f3f3f3);
        --sd-timer-stroke-background-width: 2px;
        stroke-linecap: round;
        height: 100%;
        width: 100%;
        transform: rotate(-90deg);
        stroke: var(--primary, #19b394);
        stroke-dashoffset: 0;
        fill: none;
        stroke-width: 4px;
      }

      .sd-timer__progress--animation {
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 1s linear;
      }

      .sd-timer__text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: calc(1 * var(--base-unit, 8px));
        color: var(--primary, #19b394);
        font-weight: 700;
        font-size: calc(var(--sd-timer-size) / 144 * 32);
      }

      .sd-timer__text--major {
        color: var(--primary, #19b394);
        font-weight: 700;
        font-size: calc(var(--sd-timer-size) / 144 * 32);
      }

      .sd-timer__text--minor {
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
        font-weight: 600;
        font-size: calc(1.5 * var(--base-unit, 8px));
      }

      sv-components-container,
      .sd-components-container {
        display: flex;
      }

      .sv-components-row {
        display: flex;
        flex-direction: row;
        width: 100%;
      }

      .sv-components-column {
        display: flex;
        flex-direction: column;
      }

      .sv-components-column--expandable {
        flex-grow: 1;
      }

      .sjs_sp_container {
        position: relative;
      }

      .sjs_sp_controls {
        position: absolute;
        left: 0;
        bottom: 0;
      }

      .sjs_sp_controls > button {
        user-select: none;
      }

      .sjs_sp_container > div > canvas:focus {
        outline: none;
      }

      .sjs_sp_placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        z-index: 0;
        user-select: none;
        pointer-events: none;
        width: 100%;
        height: 100%;
      }

      .sd-root-modern,
      .svc-logic-question-value {
        --sd-base-padding: calc(5 * var(--base-unit, 8px));
        --sd-base-vertical-padding: calc(4 * var(--base-unit, 8px));
        --sd-page-vertical-padding: calc(3 * var(--base-unit, 8px));
      }

      .svc-creator--mobile .sd-root-modern,
      .sd-root-modern.sd-root-modern--mobile {
        --sd-base-padding: calc(3 * var(--base-unit, 8px));
        --sd-base-vertical-padding: calc(2 * var(--base-unit, 8px));
        --sd-page-vertical-padding: calc(2 * var(--base-unit, 8px));
      }

      .sd-root-modern.sd-root-modern--mobile .sd-element__num {
        float: none;
        margin-inline-start: 0;
        width: auto;
        padding-inline-start: 0;
        padding-inline-end: 0;
      }

      .sd-root-modern.sd-root-modern--mobile .sd-element__num + span {
        float: none;
        width: auto;
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-element__title--expandable:before {
        left: calc(-2.5 * var(--base-unit, 8px));
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-title.sd-container-modern__title {
        flex-direction: column;
      }

      .sd-root-modern.sd-root-modern--mobile .sd-header__text {
        min-width: 100%;
      }

      .sd-root-modern.sd-root-modern--mobile .sd-multipletext__cell {
        display: block;
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-multipletext__cell:not(:last-child) {
        padding-right: 0;
        padding-bottom: calc(2 * var(--base-unit, 8px));
      }

      .sd-root-modern.sd-root-modern--mobile .sd-multipletext__item-container {
        flex-direction: column;
      }

      .sd-root-modern.sd-root-modern--mobile .sd-multipletext__item-title {
        font-size: 12px;
        line-height: 16px;
        height: 16px;
        padding-right: 0;
        border-right: none;
        margin-bottom: 0;
        margin-top: calc(1 * var(--base-unit, 8px));
        width: 100%;
        max-width: none;
      }

      .sd-root-modern.sd-root-modern--mobile .sd-multipletext__item {
        width: 100%;
      }

      .sd-root-modern.sd-root-modern--mobile .sd-multipletext__item .sd-input {
        padding-right: 0;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: calc(1 * var(--base-unit, 8px));
      }

      .sd-root-modern.sd-root-modern--mobile .sd-selectbase--multi-column {
        flex-direction: column;
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-selectbase--multi-column
        .sd-selectbase__column:not(:last-child) {
        padding-right: 0;
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-question.sd-question--table
        > .sd-question__content {
        padding-top: 0;
      }

      .sd-root-modern.sd-root-modern--mobile .sd-question--table,
      .sd-root-modern.sd-root-modern--mobile .sd-question--scroll {
        overflow-x: visible;
      }

      .sd-root-modern.sd-root-modern--mobile .sd-table__cell.sd-matrix__cell {
        display: flex;
        align-items: flex-start;
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-table__cell.sd-matrix__cell
        .sd-matrix__responsive-title {
        margin-left: calc(1 * var(--base-unit, 8px));
        text-align: left;
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-table__cell.sd-matrix__cell:first-of-type {
        padding-top: calc(2 * var(--base-unit, 8px));
        padding-bottom: calc(1 * var(--base-unit, 8px));
      }

      .sd-root-modern.sd-root-modern--mobile .sd-table thead {
        display: none;
      }

      .sd-root-modern.sd-root-modern--mobile .sd-table tr {
        display: block;
      }

      .sd-root-modern.sd-root-modern--mobile .sd-matrix__table tr + tr {
        margin-top: calc(1 * var(--base-unit, 8px));
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-table:not(.sd-matrix__table)
        tr {
        padding-bottom: calc(1 * var(--base-unit, 8px));
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-table:not(.sd-matrix__table)
        tr::after {
        z-index: 12;
        content: " ";
        display: block;
        position: relative;
        height: 1px;
        background-color: var(--border-light, #eaeaea);
        left: calc(-2 * var(--base-unit, 8px));
        bottom: calc(-1 * var(--base-unit, 8px));
        width: calc(100% + 4 * var(--base-unit, 8px));
        z-index: 12;
      }

      .sd-root-modern.sd-root-modern--mobile .sd-matrix__label {
        justify-content: start;
      }

      .sd-root-modern.sd-root-modern--mobile .sd-table__cell {
        display: block;
        padding-top: 0;
        padding-bottom: 0;
        text-align: left;
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-table__cell:not(.sd-matrix__cell):not(:first-of-type) {
        margin-top: calc(1 * var(--base-unit, 8px));
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-table__cell:not(.sd-matrix__cell):not(.sd-table__cell--actions):not(
          .sd-table__cell--row-text
        )::before {
        padding-top: calc(2 * var(--base-unit, 8px));
        padding-bottom: calc(1 * var(--base-unit, 8px));
        content: attr(data-responsive-title);
        font-weight: 600;
        display: block;
        text-align: left;
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-table__cell.sd-table__cell--actions {
        width: auto;
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-table__cell.sd-table__cell--actions
        .sd-action-bar {
        margin-right: calc(-3 * var(--base-unit, 8px));
        justify-content: flex-end;
        background: var(--background, #fff);
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-action.sd-action.sd-matrixdynamic__remove-btn {
        opacity: 1;
        padding: calc(1 * var(--base-unit, 8px)) calc(3 * var(--base-unit, 8px));
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-action.sd-action.sd-matrixdynamic__remove-btn
        .sd-action__icon {
        display: none;
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-action.sd-action.sd-matrixdynamic__remove-btn:after {
        content: attr(title);
      }

      .sd-root-modern.sd-root-modern--mobile .sd-matrixdynamic__footer {
        padding-top: calc(1 * var(--base-unit, 8px));
        margin-bottom: calc(-2 * var(--base-unit, 8px));
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-table__cell--row-text:not(.sd-matrix__cell) {
        color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
        padding-top: calc(2 * var(--base-unit, 8px));
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-matrixdropdown.sd-table
        tr:not(:last-child) {
        padding-bottom: calc(2 * var(--base-unit, 8px));
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-matrixdropdown.sd-table
        tr::after {
        bottom: calc(-2 * var(--base-unit, 8px));
      }

      .sd-root-modern.sd-root-modern--mobile
        .sd-matrixdropdown.sd-table
        tr:last-child:after {
        content: none;
      }

      .sd-root-modern.sd-root-modern--mobile .sv-ranking-item__icon-container {
        margin-left: 0;
        margin-right: 0;
      }

      body {
        --sv-defaultV2-mark: true;
      }

      .sd-root-modern {
        -webkit-font-smoothing: antialiased;
        --sd-mobile-width: 600px;
        --sd-imagepicker-gap: 16px;
        --sd-timer-size: calc(18 * var(--base-unit, 8px));
        width: 100%;
        font-family: var(--font-family, var(--font-family));
        background-color: var(--background-dim, #f3f3f3);
      }

      .sd-root-modern * {
        scrollbar-width: thin;
        scrollbar-color: var(--border, #d6d6d6) rgba(0, 0, 0, 0);
      }

      .sd-root-modern ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
        background-color: rgba(0, 0, 0, 0);
      }

      .sd-root-modern ::-webkit-scrollbar-thumb {
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 32px;
        background-color: var(--border, #d6d6d6);
      }

      .sd-root-modern ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
      }

      .sd-root-modern ::-webkit-scrollbar-thumb:hover {
        border: 2px solid rgba(0, 0, 0, 0);
        background-color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sd-container-modern {
        margin-bottom: calc(10 * var(--base-unit, 8px));
      }

      .sd-root-modern--mobile {
        --sd-timer-size: calc(9 * var(--base-unit, 8px));
      }

      .sv-popup .sv-popup__scrolling-content {
        scrollbar-width: thin;
        scrollbar-color: var(--border, #d6d6d6) rgba(0, 0, 0, 0);
      }

      .sv-popup .sv-popup__scrolling-content *::-webkit-scrollbar,
      .sv-popup .sv-popup__scrolling-content::-webkit-scrollbar {
        width: 12px;
        height: 12px;
        background-color: var(--background, #fff);
      }

      .sv-popup .sv-popup__scrolling-content *::-webkit-scrollbar-thumb,
      .sv-popup .sv-popup__scrolling-content::-webkit-scrollbar-thumb {
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 32px;
        background-color: var(--border, #d6d6d6);
      }

      .sv-popup .sv-popup__scrolling-content *::-webkit-scrollbar-track,
      .sv-popup .sv-popup__scrolling-content::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
      }

      .sv-popup .sv-popup__scrolling-content *::-webkit-scrollbar-thumb:hover,
      .sv-popup .sv-popup__scrolling-content::-webkit-scrollbar-thumb:hover {
        border: 2px solid rgba(0, 0, 0, 0);
        background-color: var(
          --sjs-general-forecolor-light,
          var(--foreground-light, #909090)
        );
      }

      .sv-popup.sv-popup--dropdown .sv-popup__shadow {
        box-shadow: 0px calc(1 * var(--base-unit, 8px))
          calc(2 * var(--base-unit, 8px)) rgba(0, 0, 0, 0.1);
      }

      .sv-popup.sv-popup--dropdown .sv-popup__body-content {
        background-color: var(--background, #fff);
        padding: calc(1 * var(--base-unit, 8px)) 0;
      }

      .sv-popup.sv-popup--modal .sv-popup__body-content {
        box-shadow: 0px calc(1 * var(--base-unit, 8px))
          calc(2 * var(--base-unit, 8px)) rgba(0, 0, 0, 0.1);
        background-color: var(--background-dim-light, #f9f9f9);
      }

      .sv-popup.sv-popup--modal .sv-popup__body-footer {
        padding-bottom: 2px;
      }

      .sv-popup.sv-popup--overlay .sv-popup__body-content {
        background-color: var(--background-dim, #f3f3f3);
      }
    `;
  }
}

customElements.define("survey-card", SurveyCard);