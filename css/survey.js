import { css } from "lit";

export const surveyCardCssStyles = css`
/*!
* surveyjs - Survey JavaScript library v1.10.1
* Copyright (c) 2015-2024 Devsoft Baltic OÜ  - http://surveyjs.io/
* License: MIT (http://www.opensource.org/licenses/mit-license.php)
*/
/* cyrillic-ext */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 400;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSKmu1aB.woff2) format("woff2");
 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 400;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu1aB.woff2) format("woff2");
 unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 400;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSOmu1aB.woff2) format("woff2");
 unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 400;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSymu1aB.woff2) format("woff2");
 unicode-range: U+0370-03FF;
}
/* hebrew */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 400;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS2mu1aB.woff2) format("woff2");
 unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* vietnamese */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 400;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu1aB.woff2) format("woff2");
 unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 400;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format("woff2");
 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 400;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format("woff2");
 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 600;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSKmu1aB.woff2) format("woff2");
 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 600;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu1aB.woff2) format("woff2");
 unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 600;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSOmu1aB.woff2) format("woff2");
 unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 600;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSymu1aB.woff2) format("woff2");
 unicode-range: U+0370-03FF;
}
/* hebrew */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 600;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS2mu1aB.woff2) format("woff2");
 unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* vietnamese */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 600;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu1aB.woff2) format("woff2");
 unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 600;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format("woff2");
 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 600;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format("woff2");
 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 700;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSKmu1aB.woff2) format("woff2");
 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 700;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu1aB.woff2) format("woff2");
 unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 700;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSOmu1aB.woff2) format("woff2");
 unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 700;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSymu1aB.woff2) format("woff2");
 unicode-range: U+0370-03FF;
}
/* hebrew */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 700;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS2mu1aB.woff2) format("woff2");
 unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* vietnamese */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 700;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu1aB.woff2) format("woff2");
 unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 700;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format("woff2");
 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
 font-family: "Open Sans";
 font-style: normal;
 font-weight: 700;
 font-stretch: 100%;
 src: url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format("woff2");
 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
:root {
 --font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

:root {
 --sjs-transition-duration: 150ms;
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
 background-color: var(--sjs-border-default, var(--border, #d6d6d6));
}

.sv-action-bar--default-size-mode .sv-action-bar-separator {
 margin: 0 var(--sjs-base-unit, var(--base-unit, 8px));
}

.sv-action-bar--small-size-mode .sv-action-bar-separator {
 margin: 0 calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-action-bar-item {
 -webkit-appearance: none;
 -moz-appearance: none;
 appearance: none;
 display: flex;
 padding: var(--sjs-base-unit, var(--base-unit, 8px));
 box-sizing: border-box;
 border: none;
 border-radius: calc(0.5 * (var(--sjs-corner-radius, 4px)));
 background-color: transparent;
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 cursor: pointer;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 overflow-x: hidden;
 white-space: nowrap;
}

button.sv-action-bar-item {
 overflow: hidden;
}

.sv-action-bar--default-size-mode .sv-action-bar-item {
 height: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 font-size: var(--sjs-font-size, 16px);
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 margin: 0 var(--sjs-base-unit, var(--base-unit, 8px));
}

.sv-action-bar--small-size-mode .sv-action-bar-item {
 height: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 font-size: calc(0.75 * (var(--sjs-font-size, 16px)));
 line-height: var(--sjs-font-size, 16px);
 margin: 0 calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-action:first-of-type .sv-action-bar-item {
 margin-inline-start: 0;
}

.sv-action:last-of-type .sv-action-bar-item {
 margin-inline-end: 0;
}

.sv-action-bar--default-size-mode .sv-action-bar-item__title--with-icon {
 margin-inline-start: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sv-action-bar--small-size-mode .sv-action-bar-item__title--with-icon {
 margin-inline-start: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-action-bar-item__icon svg {
 display: block;
}
.sv-action-bar-item__icon use {
 fill: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sv-action-bar-item:not(.sv-action-bar-item--pressed):hover:enabled,
.sv-action-bar-item:not(.sv-action-bar-item--pressed):focus:enabled {
 outline: none;
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}

.sv-action-bar-item--active.sv-action-bar-item--pressed:focus, .sv-action-bar-item--active.sv-action-bar-item--pressed:focus-visible {
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
 fill: var(--sjs-secondary-backcolor, var(--secondary, #ff9814));
}

.sv-action-bar-item--active .sv-action-bar-item__icon use {
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sv-action-bar-item-dropdown {
 -webkit-appearance: none;
 -moz-appearance: none;
 appearance: none;
 display: flex;
 height: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding: var(--sjs-base-unit, var(--base-unit, 8px));
 box-sizing: border-box;
 border: none;
 border-radius: calc(0.5 * (var(--sjs-corner-radius, 4px)));
 background-color: transparent;
 cursor: pointer;
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 font-size: var(--sjs-font-size, 16px);
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
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
.sv-action--hidden .sv-action__content {
 min-width: fit-content;
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
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
 opacity: 50%;
}

:root {
 --sjs-transition-duration: 150ms;
}

.sv-dragged-element-shortcut {
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 min-width: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-radius: calc(4.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 cursor: grabbing;
 position: absolute;
 z-index: 10000;
 box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-size: var(--sjs-font-size, 16px);
 padding-left: calc(2.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
}

.sv-matrixdynamic__drag-icon {
 padding-top: calc(1.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-matrixdynamic__drag-icon:after {
 content: " ";
 display: block;
 height: calc(0.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(2.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border: 1px solid #e7e7e7;
 box-sizing: border-box;
 border-radius: calc(1.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 cursor: move;
 margin-top: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-matrix-row--drag-drop-ghost-mod td {
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}

.sv-matrix-row--drag-drop-ghost-mod td > * {
 visibility: hidden;
}

:root {
 --sjs-transition-duration: 150ms;
}

sv-popup {
 display: block;
 position: absolute;
}

.sv-popup {
 position: fixed;
 left: 0;
 top: 0;
 width: 100vw;
 outline: none;
 z-index: 2000;
 height: 100vh;
}

.sv-dropdown-popup {
 height: 0;
}

.sv-popup__container {
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
 box-shadow: var(--sjs-shadow-large, 0px 8px 16px 0px rgba(0, 0, 0, 0.1));
 border-radius: var(--sjs-corner-radius, 4px);
 position: absolute;
 padding: 0;
}

.sv-popup__shadow {
 width: 100%;
 height: 100%;
 border-radius: var(--sjs-corner-radius, 4px);
}

.sv-popup__body-content {
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
 border-radius: var(--sjs-corner-radius, 4px);
 width: 100%;
 height: 100%;
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 max-height: 90vh;
 max-width: 100vw;
}

.sv-popup--modal {
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: var(--background-semitransparent, rgba(144, 144, 144, 0.5));
 padding: calc(11 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(15 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 box-sizing: border-box;
}

.sv-popup--modal > .sv-popup__container {
 position: static;
 display: flex;
}

.sv-popup--modal > .sv-popup__container > .sv-popup__shadow > .sv-popup__body-content {
 box-shadow: var(--sjs-shadow-large, 0px 8px 16px 0px rgba(0, 0, 0, 0.1));
 background-color: var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9));
 padding: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: auto;
}
.sv-popup--modal > .sv-popup__container > .sv-popup__shadow > .sv-popup__body-content .sv-popup__body-footer {
 padding-bottom: 2px;
}

.sv-popup--confirm-delete .sv-popup__shadow {
 height: initial;
}
.sv-popup--confirm-delete .sv-popup__container {
 border-radius: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sv-popup--confirm-delete .sv-popup__body-content {
 border-radius: var(--sjs-base-unit, var(--base-unit, 8px));
 max-width: min-content;
 align-items: flex-end;
 min-width: 452px;
}
.sv-popup--confirm-delete .sv-popup__body-header {
 color: var(--sjs-font-editorfont-color, var(--sjs-general-forecolor, rgba(0, 0, 0, 0.91)));
 margin-bottom: 0;
 align-self: self-start;
 /* UI/Default */
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-size: var(--sjs-font-size, 16px);
 font-style: normal;
 font-weight: 400;
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 /* 150% */
}
.sv-popup--confirm-delete .sv-popup__scrolling-content {
 display: none;
}
.sv-popup--confirm-delete .sv-popup__body-footer {
 padding-bottom: 0;
 max-width: max-content;
}
.sv-popup--confirm-delete .sv-popup__body-footer .sv-action-bar {
 gap: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-popup--overlay {
 width: 100%;
 height: var(--sv-popup-overlay-height, 100vh);
}
.sv-popup--overlay .sv-popup__container {
 background: var(--background-semitransparent, rgba(144, 144, 144, 0.5));
 max-width: 100vw;
 max-height: calc(var(--sv-popup-overlay-height, 100vh) - 1 * var(--sjs-base-unit, var(--base-unit, 8px)));
 height: calc(var(--sv-popup-overlay-height, 100vh) - 1 * var(--sjs-base-unit, var(--base-unit, 8px)));
 width: 100%;
 padding-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border: unset;
}
.sv-popup--overlay .sv-popup__body-content {
 max-height: var(--sv-popup-overlay-height, 100vh);
 max-width: 100vw;
 border-radius: calc(4 * (var(--sjs-corner-radius, 4px))) calc(4 * (var(--sjs-corner-radius, 4px))) 0px 0px;
 background: var(--sjs-general-backcolor, var(--background, #fff));
 box-shadow: var(--sjs-shadow-large, 0px 8px 16px 0px rgba(0, 0, 0, 0.1));
 padding: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(100% - 1 * var(--sjs-base-unit, var(--base-unit, 8px)));
}
.sv-popup--overlay .sv-popup__scrolling-content {
 height: calc(100% - 10 * var(--base-unit, 8px));
}
.sv-popup--overlay .sv-popup__body-footer {
 margin-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-popup--overlay .sv-popup__body-footer .sv-action-bar {
 width: 100%;
}
.sv-popup--overlay .sv-popup__body-footer-item {
 width: 100%;
}
.sv-popup--overlay .sv-popup__button.sv-popup__button {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 border: 2px solid var(--sjs-primary-backcolor, var(--primary, #19b394));
 color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
}

.sv-popup--overlay .sv-popup__body-footer .sv-action {
 flex: 1 0 0;
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
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}
.sv-popup__scrolling-content::-webkit-scrollbar-thumb,
.sv-popup__scrolling-content *::-webkit-scrollbar-thumb {
 background: var(--sjs-primary-backcolor-light, var(--primary-light, rgba(25, 179, 148, 0.1)));
}

.sv-popup__content {
 min-width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 min-height: 0;
}

.sv-popup--show-pointer.sv-popup--top .sv-popup__pointer {
 transform: translate(calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px))))) rotate(180deg);
}

.sv-popup--show-pointer.sv-popup--bottom .sv-popup__pointer {
 transform: translate(calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px)))), calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px)))));
}

.sv-popup--show-pointer.sv-popup--right .sv-popup__container {
 transform: translate(var(--sjs-base-unit, var(--base-unit, 8px)));
}
.sv-popup--show-pointer.sv-popup--right .sv-popup__container .sv-popup__pointer {
 transform: translate(-12px, -4px) rotate(-90deg);
}

.sv-popup--show-pointer.sv-popup--left .sv-popup__container {
 transform: translate(calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px)))));
}
.sv-popup--show-pointer.sv-popup--left .sv-popup__container .sv-popup__pointer {
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
 border-left: var(--sjs-base-unit, var(--base-unit, 8px)) solid transparent;
 border-right: var(--sjs-base-unit, var(--base-unit, 8px)) solid transparent;
 border-bottom: var(--sjs-base-unit, var(--base-unit, 8px)) solid var(--sjs-general-backcolor, var(--background, #fff));
 align-self: center;
}

.sv-popup__body-header {
 font-family: Open Sans;
 font-size: calc(1.5 * (var(--sjs-font-size, 16px)));
 line-height: calc(2 * (var(--sjs-font-size, 16px)));
 font-style: normal;
 font-weight: 700;
 margin-bottom: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sv-popup__body-footer {
 display: flex;
 margin-top: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-popup__body-footer .sv-action-bar {
 gap: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-popup__button {
 margin: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-popup--modal .sv-list__filter,
.sv-popup--overlay .sv-list__filter {
 padding-top: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sv-popup--modal .sv-list__filter-icon,
.sv-popup--overlay .sv-list__filter-icon {
 top: calc(2.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-popup--dropdown .sv-list__filter {
 margin-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sv-popup--dropdown .sv-popup__shadow {
 box-shadow: var(--sjs-shadow-medium, 0px 2px 6px 0px rgba(0, 0, 0, 0.1));
}
.sv-popup--dropdown .sv-popup__body-content {
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) 0;
 height: 100%;
}

.sv-popup--dropdown > .sv-popup__container > .sv-popup__shadow > .sv-popup__body-content .sv-list {
 background-color: transparent;
}

.sv-dropdown-popup .sv-popup__body-content {
 padding: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
}
.sv-dropdown-popup .sv-list__filter {
 margin-bottom: 0;
}

.sv-popup--overlay .sv-popup__body-content {
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}

.sv-popup--dropdown-overlay {
 z-index: 2001;
 padding: 0;
}
.sv-popup--dropdown-overlay .sv-popup__body-content {
 padding: 0;
 border-radius: 0;
}
.sv-popup--dropdown-overlay .sv-popup__body-footer .sv-action-bar .sv-action {
 flex: 0 0 auto;
}
.sv-popup--dropdown-overlay .sv-popup__button.sv-popup__button {
 background-color: transparent;
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 border: none;
 box-shadow: none;
 padding: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-radius: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin: 0;
}
.sv-popup--dropdown-overlay .sv-popup__container {
 max-height: calc(var(--sv-popup-overlay-height, 100vh));
 height: calc(var(--sv-popup-overlay-height, 100vh));
 padding-top: 0;
}
.sv-popup--dropdown-overlay .sv-popup__body-content {
 height: calc(var(--sv-popup-overlay-height, 100vh));
}
.sv-popup--dropdown-overlay .sv-popup__body-footer {
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
 margin-top: 0;
 padding-top: var(--sjs-base-unit, var(--base-unit, 8px));
 padding-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
 border-top: 1px solid var(--sjs-border-light, var(--border-light, #eaeaea));
}
.sv-popup--dropdown-overlay .sv-popup__scrolling-content {
 height: calc(100% - 6 * var(--base-unit, 8px));
}
.sv-popup--dropdown-overlay .sv-list__filter-icon .sv-svg-icon {
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-popup--dropdown-overlay .sv-list__container {
 padding: 0;
}
.sv-popup--dropdown-overlay .sv-list {
 flex-grow: 1;
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) 0;
}
.sv-popup--dropdown-overlay .sv-list__filter {
 display: flex;
 align-items: center;
 margin-bottom: 0;
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) var(--sjs-base-unit, var(--base-unit, 8px)) calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-popup--dropdown-overlay .sv-list__filter-icon {
 position: static;
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-popup--dropdown-overlay .sv-list__empty-container {
 display: flex;
 flex-direction: column;
 justify-content: center;
 flex-grow: 1;
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
}
.sv-popup--dropdown-overlay .sv-popup__button:disabled {
 pointer-events: none;
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 opacity: 0.25;
}
.sv-popup--dropdown-overlay .sv-list__filter-clear-button {
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 appearance: none;
 border: none;
 border-radius: 100%;
 background-color: transparent;
}
.sv-popup--dropdown-overlay .sv-list__filter-clear-button svg {
 height: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-popup--dropdown-overlay .sv-list__filter-clear-button svg use {
 fill: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}
.sv-popup--dropdown-overlay .sv-list__input {
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
 font-size: max(16px, var(--sjs-font-size, 16px));
 line-height: max(24px, 1.5 * (var(--sjs-font-size, 16px)));
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 padding: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0 calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-popup--dropdown-overlay .sv-list__item:hover .sv-list__item-body,
.sv-popup--dropdown-overlay .sv-list__item:focus .sv-list__item-body,
.sv-popup--dropdown-overlay .sv-list__item--focused .sv-list__item-body {
 background: var(--sjs-general-backcolor, var(--background, #fff));
}
.sv-popup--dropdown-overlay .sv-list__item:hover.sv-list__item--selected .sv-list__item-body,
.sv-popup--dropdown-overlay .sv-list__item:focus.sv-list__item--selected .sv-list__item-body,
.sv-popup--dropdown-overlay .sv-list__item--focused.sv-list__item--selected .sv-list__item-body {
 background: var(--sjs-primary-backcolor, var(--primary, #19b394));
 color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
 font-weight: 600;
}
.sv-popup--dropdown-overlay .sv-popup__body-footer .sv-action-bar {
 justify-content: flex-start;
}

.sv-dropdown-popup.sv-popup--dropdown-overlay .sv-list__filter {
 padding: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) var(--sjs-base-unit, var(--base-unit, 8px)) calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-dropdown-popup.sv-popup--dropdown-overlay .sv-list {
 padding: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-dropdown-popup.sv-popup--dropdown-overlay .sv-popup__button.sv-popup__button {
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) calc(2.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-dropdown-popup.sv-popup--dropdown-overlay .sv-popup__body-footer {
 padding-top: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-bottom: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background-color: var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9));
}
.sv-dropdown-popup.sv-popup--dropdown-overlay .sv-list__filter-icon .sv-svg-icon {
 width: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-dropdown-popup.sv-popup--dropdown-overlay .sv-list__filter-icon {
 height: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-dropdown-popup.sv-popup--dropdown-overlay .sv-list__input {
 padding: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0 calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) var(--sjs-base-unit, var(--base-unit, 8px));
}

.sv-popup--dropdown-overlay.sv-multi-select-list .sv-list__item:hover.sv-list__item--selected .sv-list__item-body,
.sv-popup--dropdown-overlay.sv-multi-select-list .sv-list__item:focus.sv-list__item--selected .sv-list__item-body,
.sv-popup--dropdown-overlay.sv-multi-select-list .sv-list__item--focused.sv-list__item--selected .sv-list__item-body {
 background: var(--sjs-primary-backcolor-light, var(--primary-light, rgba(25, 179, 148, 0.1)));
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 font-weight: 400;
}

.sv-popup--dropdown-overlay.sv-popup--tablet .sv-popup__body-content {
 --sv-popup-overlay-max-height: calc(var(--sv-popup-overlay-height, 100vh) - var(--sjs-base-unit, var(--base-unit, 8px)) * 8);
 --sv-popup-overlay-max-width: calc(100% - var(--sjs-base-unit, var(--base-unit, 8px)) * 8);
 position: absolute;
 transform: translate(-50%, -50%);
 left: 50%;
 top: 50%;
 max-height: var(--sv-popup-overlay-max-height);
 min-height: min(var(--sv-popup-overlay-max-height), 30 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: auto;
 width: auto;
 min-width: min(40 * (var(--sjs-base-unit, var(--base-unit, 8px))), var(--sv-popup-overlay-max-width));
 max-width: var(--sv-popup-overlay-max-width);
 border-radius: var(--sjs-corner-radius, 4px);
 overflow: hidden;
 margin: 0;
}
.sv-popup--dropdown-overlay.sv-popup--tablet .sv-popup__content,
.sv-popup--dropdown-overlay.sv-popup--tablet .sv-popup__scrolling-content,
.sv-popup--dropdown-overlay.sv-popup--tablet .sv-list__container {
 flex-grow: 1;
}

.sv-popup--visible {
 opacity: 1;
}

.sv-popup--hidden {
 opacity: 0;
}

.sv-popup--animate-enter {
 animation-name: fadeIn;
 animation-fill-mode: forwards;
 animation-duration: 0.15s;
}

.sv-popup--modal.sv-popup--animate-enter {
 animation-duration: 0.25s;
}

.sv-popup--animate-leave {
 animation-direction: reverse;
 animation-name: fadeIn;
 animation-fill-mode: forwards;
 animation-duration: 0.15s;
}

.sv-popup--modal.sv-popup--animate-leave {
 animation-duration: 0.25s;
}

.sv-popup--hidden {
 opacity: 0;
}

@keyframes modalMoveDown {
 from {
   transform: translateY(0);
 }
 to {
   transform: translateY(64px);
 }
}
@keyframes modalMoveUp {
 from {
   transform: translateY(64px);
 }
 to {
   transform: translateY(0);
 }
}
.sv-popup--modal.sv-popup--animate-leave .sv-popup__container {
 animation-name: modalMoveDown;
 animation-fill-mode: forwards;
 animation-duration: 0.25s;
}

.sv-popup--modal.sv-popup--animate-enter .sv-popup__container {
 animation-name: modalMoveUp;
 animation-fill-mode: forwards;
 animation-duration: 0.25s;
}

:root {
 --sjs-transition-duration: 150ms;
}

.sv-button-group {
 display: flex;
 align-items: center;
 flex-direction: row;
 font-size: var(--sjs-font-size, 16px);
 overflow: auto;
 border: 1px solid var(--sjs-border-default, var(--border, #d6d6d6));
}

.sv-button-group:focus-within {
 box-shadow: 0 0 0 1px var(--sjs-primary-backcolor, var(--primary, #19b394));
 border-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sv-button-group__item {
 display: flex;
 box-sizing: border-box;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 appearance: none;
 width: 100%;
 padding: 11px calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 outline: none;
 font-size: var(--sjs-font-size, 16px);
 font-weight: 400;
 background: var(--sjs-general-backcolor, var(--background, #fff));
 cursor: pointer;
 overflow: hidden;
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 position: relative;
}
.sv-button-group__item:not(:last-of-type) {
 border-right: 1px solid var(--sjs-border-default, var(--border, #d6d6d6));
}

.sv-button-group__item--hover:hover {
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}

.sv-button-group__item-icon {
 display: block;
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-button-group__item-icon use {
 fill: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sv-button-group__item--selected {
 font-weight: 600;
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sv-button-group__item--selected .sv-button-group__item-icon use {
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sv-button-group__item--selected:hover {
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
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
 margin-left: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sv-button-group__item--disabled {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 cursor: default;
}
.sv-button-group__item--disabled .sv-button-group__item-decorator {
 opacity: 0.25;
 font-weight: normal;
}
.sv-button-group__item--disabled .sv-button-group__item-icon use {
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
}
.sv-button-group__item--disabled:hover {
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
}

.sv-button-group:focus-within {
 box-shadow: 0 0 0 1px var(--sjs-primary-backcolor, var(--primary, #19b394));
 border-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
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
 flex: 0 1 auto;
 max-width: unset;
 min-width: unset;
}
.sv-title-actions .sv-action-title-bar {
 flex: 1 1 auto;
 justify-content: flex-end;
 min-width: unset;
}

:root {
 --sjs-transition-duration: 150ms;
}

:root {
 --sjs-transition-duration: 150ms;
}

.sv_window {
 position: fixed;
 bottom: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 right: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-radius: var(--sjs-base-unit, var(--base-unit, 8px));
 border: 1px solid var(--sjs-border-inside, var(--border-inside, rgba(0, 0, 0, 0.16)));
 box-shadow: var(--sjs-shadow-large, 0px 8px 16px 0px rgba(0, 0, 0, 0.1)), var(--sjs-shadow-medium, 0px 2px 6px 0px rgba(0, 0, 0, 0.1));
 background-clip: padding-box;
 z-index: 100;
 max-height: 50vh;
 overflow: auto;
 box-sizing: border-box;
 background: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
 width: calc(100% - 4 * (var(--sjs-base-unit, var(--base-unit, 8px)))) !important;
}
@-moz-document url-prefix() {
 .sv_window,
 .sv_window * {
   scrollbar-width: thin;
   scrollbar-color: var(--sjs-border-default, var(--border, #d6d6d6)) transparent;
 }
}
.sv_window::-webkit-scrollbar,
.sv_window *::-webkit-scrollbar {
 width: 12px;
 height: 12px;
 background-color: transparent;
}
.sv_window::-webkit-scrollbar-thumb,
.sv_window *::-webkit-scrollbar-thumb {
 border: 4px solid rgba(0, 0, 0, 0);
 background-clip: padding-box;
 border-radius: 32px;
 background-color: var(--sjs-border-default, var(--border, #d6d6d6));
}
.sv_window::-webkit-scrollbar-track,
.sv_window *::-webkit-scrollbar-track {
 background: transparent;
}
.sv_window::-webkit-scrollbar-thumb:hover,
.sv_window *::-webkit-scrollbar-thumb:hover {
 border: 2px solid rgba(0, 0, 0, 0);
 background-color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sv_window_root-content {
 height: 100%;
}

.sv_window--full-screen {
 top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 left: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 right: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 bottom: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 max-height: 100%;
 width: initial !important;
 max-width: initial !important;
}

.sv_window_header {
 display: flex;
 justify-content: flex-end;
}

.sv_window_content {
 overflow: hidden;
}

.sv_window--collapsed {
 height: initial;
}
.sv_window--collapsed .sv_window_header {
 height: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) var(--sjs-base-unit, var(--base-unit, 8px)) var(--sjs-base-unit, var(--base-unit, 8px)) calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-radius: var(--sjs-base-unit, var(--base-unit, 8px));
 display: flex;
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}
.sv_window--collapsed .sv_window_content {
 display: none;
}
.sv_window--collapsed .sv_window_buttons_container {
 margin-top: 0;
 margin-right: 0;
}

.sv_window_header_title_collapsed {
 color: var(--sjs-general-dim-forecolor, rgba(0, 0, 0, 0.91));
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-style: normal;
 font-weight: 600;
 font-size: var(--sjs-font-size, 16px);
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 flex: 1;
 display: flex;
 justify-content: flex-start;
 align-items: center;
}

.sv_window_header_description {
 color: var(--sjs-font-questiondescription-color, var(--sjs-general-forecolor-light, rgba(0, 0, 0, 0.45)));
 font-feature-settings: "salt" on;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-style: normal;
 font-size: var(--sjs-font-size, 16px);
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
}

.sv_window_buttons_container {
 position: fixed;
 margin-top: var(--sjs-base-unit, var(--base-unit, 8px));
 margin-right: var(--sjs-base-unit, var(--base-unit, 8px));
 display: flex;
 gap: var(--sjs-base-unit, var(--base-unit, 8px));
 z-index: 10000;
}

.sv_window_button {
 display: flex;
 padding: var(--sjs-base-unit, var(--base-unit, 8px));
 justify-content: center;
 align-items: center;
 border-radius: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 cursor: pointer;
}
.sv_window_button:hover, .sv_window_button:active {
 background-color: var(--sjs-primary-backcolor-light, var(--primary-light, rgba(25, 179, 148, 0.1)));
}
.sv_window_button:hover svg use,
.sv_window_button:hover svg path, .sv_window_button:active svg use,
.sv_window_button:active svg path {
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sv_window_button:active {
 opacity: 0.5;
}
.sv_window_button svg use,
.sv_window_button svg path {
 fill: var(--sjs-general-dim-forecolor-light, rgba(0, 0, 0, 0.45));
}

sv-brand-info, .sv-brand-info {
 z-index: 1;
 position: relative;
 margin-top: 1px;
}

.sv-brand-info {
 width: 100%;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 text-align: center;
 color: #161616;
 background: white;
 padding: 32px 0;
 box-shadow: 0px -1px 0px #D6D6D6;
}
.sv-brand-info a {
 color: #161616;
 text-decoration-line: underline;
}

.sv-brand-info__text {
 font-weight: 600;
 font-size: var(--sjs-font-size, 16px);
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
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
 font-size: calc(0.75 * (var(--sjs-font-size, 16px)));
 line-height: var(--sjs-font-size, 16px);
}
.sv-brand-info__terms a {
 color: #909090;
}

:root {
 --sjs-transition-duration: 150ms;
}

:root {
 --sjs-transition-duration: 150ms;
}

.sv-ranking {
 outline: none;
 user-select: none;
 -webkit-user-select: none;
}

.sv-ranking-item {
 cursor: pointer;
 position: relative;
 height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 opacity: 1;
}

.sv-ranking-item:focus .sv-ranking-item__icon--hover {
 visibility: hidden;
}

.sv-ranking-item:hover:not(:focus) .sv-ranking-item__icon--hover {
 visibility: visible;
}

.sv-question--disabled .sv-ranking-item:hover .sv-ranking-item__icon--hover {
 visibility: hidden;
}

.sv-ranking-item:focus {
 outline: none;
}

.sv-ranking-item:focus .sv-ranking-item__icon--focus {
 visibility: visible;
 top: calc(0.6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-ranking-item:focus .sv-ranking-item__index {
 background: var(--sjs-general-backcolor, var(--background, #fff));
 outline: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sv-ranking-item__content.sv-ranking-item__content {
 display: flex;
 align-items: center;
 line-height: 1em;
 padding: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0px;
 border-radius: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-ranking-item__icon-container {
 position: relative;
 left: 0;
 top: 0;
 bottom: 0;
 flex-shrink: 0;
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-ranking-item--disabled.sv-ranking-item--disabled,
.sv-ranking-item--readonly.sv-ranking-item--readonly,
.sv-ranking-item--preview.sv-ranking-item--preview {
 cursor: initial;
 user-select: initial;
 -webkit-user-select: initial;
}
.sv-ranking-item--disabled.sv-ranking-item--disabled .sv-ranking-item__icon-container.sv-ranking-item__icon-container .sv-ranking-item__icon.sv-ranking-item__icon,
.sv-ranking-item--readonly.sv-ranking-item--readonly .sv-ranking-item__icon-container.sv-ranking-item__icon-container .sv-ranking-item__icon.sv-ranking-item__icon,
.sv-ranking-item--preview.sv-ranking-item--preview .sv-ranking-item__icon-container.sv-ranking-item__icon-container .sv-ranking-item__icon.sv-ranking-item__icon {
 visibility: hidden;
}

.sv-ranking-item__icon.sv-ranking-item__icon {
 visibility: hidden;
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
 position: absolute;
 top: var(--sjs-base-unit, var(--base-unit, 8px));
 width: calc(1.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-ranking-item__index.sv-ranking-item__index {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 display: flex;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 background-color: var(--sjs-primary-backcolor-light, var(--primary-light, rgba(25, 179, 148, 0.1)));
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 font-size: var(--sjs-internal-font-editorfont-size);
 border-radius: 100%;
 border: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid transparent;
 width: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 box-sizing: border-box;
 font-weight: 600;
 margin-left: calc(0 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 transition: outline var(--sjs-transition-duration, 150ms), background var(--sjs-transition-duration, 150ms);
 outline: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid transparent;
}
.sv-ranking-item__index.sv-ranking-item__index svg {
 fill: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 width: var(--sjs-internal-font-editorfont-size);
 height: var(--sjs-internal-font-editorfont-size);
}

.sv-ranking-item__text {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 display: inline-block;
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 font-size: var(--sjs-internal-font-editorfont-size);
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 margin: 0 calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-ranking--disabled .sv-ranking-item__text {
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 opacity: 0.25;
}

.sv-ranking-item--disabled .sv-ranking-item__text {
 color: var(--sjs-font-questiondescription-color, var(--sjs-general-forecolor-light, rgba(0, 0, 0, 0.45)));
 opacity: 0.25;
}

.sv-ranking-item--readonly .sv-ranking-item__index {
 background-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
}

.sv-ranking-item--preview .sv-ranking-item__index {
 background-color: transparent;
 border: 1px solid var(--sjs-general-forecolor, var(--foreground, #161616));
 box-sizing: border-box;
}

.sv-ranking-item__ghost.sv-ranking-item__ghost {
 display: none;
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
 border-radius: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(31 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 z-index: 1;
 position: absolute;
 left: 0;
 top: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

[dir=rtl] .sv-ranking-item__ghost {
 left: initilal;
 right: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-ranking-item--ghost .sv-ranking-item__ghost {
 display: block;
}

.sv-ranking-item--ghost .sv-ranking-item__content {
 visibility: hidden;
}

.sv-ranking-item--drag .sv-ranking-item__content {
 box-shadow: var(--sjs-shadow-large, 0px 8px 16px 0px rgba(0, 0, 0, 0.1));
 border-radius: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-ranking--drag .sv-ranking-item:hover .sv-ranking-item__icon {
 visibility: hidden;
}

.sv-ranking-item--drag .sv-ranking-item__icon--hover {
 visibility: visible;
}

.sv-ranking--mobile .sv-ranking-item__icon--hover {
 visibility: visible;
 fill: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sv-ranking--mobile.sv-ranking--drag .sv-ranking-item--ghost .sv-ranking-item__icon.sv-ranking-item__icon--hover {
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
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sv-ranking-shortcut .sv-ranking-item__text {
 margin-right: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-ranking-shortcut .sv-ranking-item__icon--hover {
 visibility: visible;
}

.sv-ranking-shortcut .sv-ranking-item__icon {
 width: calc(1.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 top: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sv-ranking-shortcut .sv-ranking-item__content {
 padding-left: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-ranking-shortcut .sv-ranking-item__icon-container {
 margin-left: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sv-ranking--select-to-rank {
 display: flex;
}

.sv-ranking--select-to-rank-vertical {
 flex-direction: column-reverse;
}
.sv-ranking--select-to-rank-vertical .sv-ranking__containers-divider {
 margin: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
 height: 1px;
}
.sv-ranking--select-to-rank-vertical .sv-ranking__container--empty {
 padding-top: var(--sjs-base-unit, var(--base-unit, 8px));
 padding-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
 display: flex;
 justify-content: center;
 align-items: center;
}

.sv-ranking-item--animate-item-removing {
 --animation-height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 animation-name: moveIn, fadeIn;
 animation-direction: reverse;
 animation-fill-mode: forwards;
 animation-timing-function: linear;
 animation-duration: var(--sjs-ranking-move-out-duration, 150ms), var(--sjs-ranking-fade-out-duration, 100ms);
 animation-delay: var(--sjs-ranking-move-out-delay, 0ms), 0s;
}

.sv-ranking-item--animate-item-adding {
 --animation-height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 animation-name: moveIn, fadeIn;
 opacity: 0;
 animation-fill-mode: forwards;
 animation-timing-function: linear;
 animation-duration: var(--sjs-ranking-move-in-duration, 150ms), var(--sjs-ranking-fade-in-duration, 100ms);
 animation-delay: 0s, var(--sjs-ranking-fade-in-delay, 150ms);
}

.sv-ranking-item--animate-item-adding-empty {
 --animation-height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 animation-name: fadeIn;
 opacity: 0;
 animation-timing-function: linear;
 animation-duration: var(--sjs-ranking-fade-in-duration, 100ms);
 animation-delay: 0;
}

.sv-ranking-item--animate-item-removing-empty {
 --animation-height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 animation-name: fadeIn;
 animation-direction: reverse;
 animation-timing-function: linear;
 animation-duration: var(--sjs-ranking-fade-out-duration, 100ms);
 animation-delay: 0;
}

@keyframes sv-animate-item-opacity-reverse-keyframes {
 0% {
   opacity: 0;
 }
 100% {
   opacity: 1;
 }
}
@keyframes sv-animate-item-opacity-keyframes {
 0% {
   opacity: 1;
 }
 100% {
   opacity: 0;
 }
}
.sv-ranking--select-to-rank-horizontal .sv-ranking__container {
 max-width: calc(50% - 1px);
}
.sv-ranking--select-to-rank-horizontal .sv-ranking__containers-divider {
 width: 1px;
}
.sv-ranking--select-to-rank-horizontal .sv-ranking__container--to .sv-ranking-item {
 left: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-ranking--select-to-rank-horizontal .sv-ranking__container--empty.sv-ranking__container--to .sv-ranking-item {
 left: initial;
}
.sv-ranking--select-to-rank-horizontal .sv-ranking__container--empty.sv-ranking__container--to .sv-ranking__container-placeholder {
 padding-left: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-ranking--select-to-rank-horizontal .sv-ranking__container--empty.sv-ranking__container--from .sv-ranking__container-placeholder {
 padding-right: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-ranking__container-placeholder {
 color: var(--sjs-font-questiondescription-color, var(--sjs-general-dim-forecolor-light, rgba(0, 0, 0, 0.45)));
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-style: normal;
 font-size: var(--sjs-font-size, 16px);
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 white-space: normal;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 padding-top: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-bottom: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 box-sizing: border-box;
}

.sv-ranking__container {
 flex: 1;
}

.sv-ranking__container--empty {
 box-sizing: border-box;
 text-align: center;
}

.sv-ranking__containers-divider {
 background: var(--sjs-border-default, var(--sjs-border-inside, var(--border-inside, rgba(0, 0, 0, 0.16))));
}

.sv-ranking__container--from .sv-ranking-item__icon--focus {
 display: none;
}

.sv-ranking--select-to-rank-horizontal .sv-ranking__container--to .sv-ranking-item {
 left: 0 !important;
 padding-left: 16px;
}
.sv-ranking--select-to-rank-horizontal .sv-ranking__container--to .sv-ranking-item .sv-ranking-item__ghost {
 left: initial;
}

:root {
 --sjs-transition-duration: 150ms;
}

.sv-list {
 padding: 0;
 margin: 0;
 overflow-y: auto;
 background: var(--sjs-general-backcolor, var(--background, #fff));
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 list-style-type: none;
}

.sv-list__empty-container {
 width: 100%;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 box-sizing: border-box;
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-list__empty-text {
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 font-size: var(--sjs-font-size, 16px);
 font-weight: 400;
 text-align: center;
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
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
 padding-block: var(--sjs-base-unit, var(--base-unit, 8px));
 padding-inline-end: calc(8 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-inline-start: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 font-weight: normal;
 font-size: var(--sjs-font-size, 16px);
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 cursor: pointer;
 overflow: hidden;
 text-align: left;
 text-overflow: ellipsis;
 white-space: nowrap;
 transition: background-color var(--sjs-transition-duration, 150ms), color var(--sjs-transition-duration, 150ms);
}

.sv-list__item.sv-list__item--focused:not(.sv-list__item--selected) {
 outline: none;
}
.sv-list__item.sv-list__item--focused:not(.sv-list__item--selected) .sv-list__item-body {
 border: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid var(--sjs-border-light, var(--border-light, #eaeaea));
 border-radius: var(--sjs-corner-radius, 4px);
 padding-block: calc(0.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-inline-end: calc(7.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-inline-start: calc(1.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-list__item.sv-list__item--focused:not(.sv-list__item--selected) .sv-string-viewer {
 margin-inline-start: calc(-0.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-list__item:hover,
.sv-list__item:focus {
 outline: none;
}
.sv-list__item:hover .sv-list__item-body,
.sv-list__item:focus .sv-list__item-body {
 background-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
}

.sv-list__item--with-icon.sv-list__item--with-icon {
 padding: 0;
}
.sv-list__item--with-icon.sv-list__item--with-icon .sv-list__item-body {
 padding-top: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-bottom: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 gap: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 display: flex;
}

.sv-list__item-icon {
 float: left;
 flex-shrink: 0;
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-list__item-icon svg {
 display: block;
}
.sv-list__item-icon use {
 fill: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

[dir=rtl] .sv-list__item-icon,
[style*="direction:rtl"] .sv-list__item-icon,
[style*="direction: rtl"] .sv-list__item-icon {
 float: right;
}

.sv-list__item-separator {
 margin: var(--sjs-base-unit, var(--base-unit, 8px)) 0;
 height: 1px;
 background-color: var(--sjs-border-default, var(--border, #d6d6d6));
}

.sv-list--filtering .sv-list__item-separator {
 display: none;
}

.sv-list__item.sv-list__item--selected .sv-list__item-body,
.sv-list__item.sv-list__item--selected:hover .sv-list__item-body,
.sv-list__item.sv-list__item--selected.sv-list__item--focused .sv-list__item-body,
.sv-multi-select-list .sv-list__item.sv-list__item--selected.sv-list__item--focused .sv-list__item-body,
li:focus .sv-list__item.sv-list__item--selected .sv-list__item-body {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
 font-weight: 600;
}
.sv-list__item.sv-list__item--selected .sv-list__item-icon use,
.sv-list__item.sv-list__item--selected:hover .sv-list__item-icon use,
.sv-list__item.sv-list__item--selected.sv-list__item--focused .sv-list__item-icon use,
.sv-multi-select-list .sv-list__item.sv-list__item--selected.sv-list__item--focused .sv-list__item-icon use,
li:focus .sv-list__item.sv-list__item--selected .sv-list__item-icon use {
 fill: var(--sjs-general-backcolor, var(--background, #fff));
}

.sv-multi-select-list .sv-list__item.sv-list__item--selected .sv-list__item-body,
.sv-multi-select-list .sv-list__item.sv-list__item--selected:hover .sv-list__item-body {
 background-color: var(--sjs-primary-backcolor-light, var(--primary-light, rgba(25, 179, 148, 0.1)));
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 font-weight: 400;
}

.sv-list__item.sv-list__item--disabled .sv-list__item-body {
 cursor: default;
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sv-list__item span {
 white-space: nowrap;
}

.sv-list__item-text--wrap span {
 white-space: normal;
 word-wrap: break-word;
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
 border-bottom: 1px solid var(--sjs-border-inside, var(--border-inside, rgba(0, 0, 0, 0.16)));
 background: var(--sjs-general-backcolor, var(--background, #fff));
 padding-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sv-list__filter-icon {
 display: block;
 position: absolute;
 top: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 inset-inline-start: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-list__filter-icon .sv-svg-icon {
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-list__filter-icon .sv-svg-icon use {
 fill: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sv-list__input {
 -webkit-appearance: none;
 -moz-appearance: none;
 appearance: none;
 display: block;
 background: var(--sjs-general-backcolor, var(--background, #fff));
 box-sizing: border-box;
 width: 100%;
 min-width: calc(30 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 outline: none;
 font-size: var(--sjs-font-size, 16px);
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-inline-start: calc(7 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 border: none;
}

.sv-list__input::placeholder {
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sv-list__input:disabled,
.sv-list__input:disabled::placeholder {
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sv-list__loading-indicator {
 pointer-events: none;
}

.sv-list__loading-indicator .sv-list__item-body {
 background-color: transparent;
}

:root {
 --sjs-transition-duration: 150ms;
}

.sv-save-data_root {
 position: fixed;
 left: 50%;
 bottom: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background: var(--sjs-general-backcolor, var(--background, #fff));
 opacity: 0;
 padding: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 box-shadow: var(--sjs-shadow-medium, 0px 2px 6px 0px rgba(0, 0, 0, 0.1));
 border-radius: calc(2 * (var(--sjs-corner-radius, 4px)));
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 min-width: calc(30 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 text-align: center;
 z-index: 1600;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-size: var(--sjs-font-size, 16px);
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 transform: translateX(-50%) translateY(calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px)))));
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

.sv-save-data_root.sv-save-data_root--with-buttons {
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-save-data_root.sv-save-data_error {
 background-color: var(--sjs-special-red, var(--red, #e60a3e));
 color: var(--sjs-general-backcolor, var(--background, #fff));
 font-weight: 600;
 gap: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-save-data_root.sv-save-data_error .sv-save-data_button {
 font-weight: 600;
 font-size: var(--sjs-font-size, 16px);
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 height: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 color: #ffffff;
 background-color: var(--sjs-special-red, var(--red, #e60a3e));
 border: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid #ffffff;
 border-radius: calc(1.5 * (var(--sjs-corner-radius, 4px)));
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 display: flex;
 align-items: center;
}

.sv-save-data_root.sv-save-data_error .sv-save-data_button:hover,
.sv-save-data_root.sv-save-data_error .sv-save-data_button:focus {
 color: var(--sjs-special-red, var(--red, #e60a3e));
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
}

.sv-save-data_root.sv-save-data_success {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 color: #ffffff;
 font-weight: 600;
}

.sv-string-viewer.sv-string-viewer--multiline {
 white-space: pre-wrap;
}

@keyframes fadeIn {
 from {
   opacity: 0;
 }
 to {
   opacity: 1;
 }
}
@keyframes changeHeight {
 from {
   height: var(--animation-height-from);
 }
 to {
   height: var(--animation-height-to);
 }
}
@keyframes moveInWithOverflow {
 from {
   overflow: hidden;
   height: 0;
 }
 99% {
   overflow: hidden;
   height: var(--animation-height);
 }
 to {
   overflow: visible;
   height: var(--animation-height);
 }
}
@keyframes moveIn {
 from {
   height: 0;
 }
 to {
   height: var(--animation-height);
 }
}
@keyframes paddingFadeIn {
 from {
   padding-top: 0;
   padding-bottom: 0;
 }
 to {
   padding-bottom: var(--animation-padding-bottom);
   padding-top: var(--animation-padding-top);
 }
}
.sd-element {
 padding-left: var(--sv-element-add-padding-left, 0px);
 padding-right: var(--sv-element-add-padding-right, 0px);
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

.sd-element--invisible {
 opacity: 0.35;
}

.sd-title.sd-element__title {
 font-family: var(--sjs-font-questiontitle-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-questiontitle-weight, 600);
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
}

.sd-element__header .sv-string-editor {
 max-width: 100%;
 white-space: normal;
}

.sd-element__title {
 font-size: 0;
 line-height: 0;
 position: static;
 margin: 0;
}
.sd-element__title .sd-element__num {
 font-size: calc(0.75 * (var(--sjs-font-size, 16px)));
 line-height: var(--sjs-font-size, 16px);
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}
.sd-element__title span {
 font-size: var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px));
 line-height: calc(1.5 * (var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px))));
}
.sd-element__title .sv-title-actions__title {
 font-size: 0;
 line-height: 0;
}
.sd-element__title .sv-title-actions__title {
 white-space: nowrap;
}
.sd-element__title .sv-string-viewer {
 white-space: normal;
}
.sd-element__title .sv-string-viewer.sv-string-viewer--multiline {
 white-space: pre-wrap;
}

.sd-element__num {
 float: left;
 padding-top: calc(0.625 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-bottom: calc(0.375 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-inline-start: 0;
 padding-inline-end: var(--sjs-base-unit, var(--base-unit, 8px));
 width: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 font-size: calc(0.75 * (var(--sjs-font-size, 16px)));
 line-height: var(--sjs-font-size, 16px);
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
 margin-inline-start: calc(-5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 text-align: end;
 box-sizing: border-box;
 white-space: nowrap;
 flex-shrink: 0;
}
.sd-element__num + span {
 float: left;
 width: 0;
}

[dir=rtl] .sd-element__num,
[style*="direction:rtl"] .sd-element__num,
[style*="direction: rtl"] .sd-element__num {
 float: right;
}
[dir=rtl] .sd-element__title--expandable:before,
[style*="direction:rtl"] .sd-element__title--expandable:before,
[style*="direction: rtl"] .sd-element__title--expandable:before {
 transform: rotate(180deg);
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
 height: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 position: absolute;
 inset-inline-start: calc(-3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 top: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 transition-property: transform;
}

.sd-element__title--expandable.sd-element__title--expanded:before {
 transform: rotate(90deg);
}

.sd-element--with-frame {
 border-radius: var(--sjs-questionpanel-cornerRadius, var(--sjs-corner-radius, 4px));
 box-sizing: border-box;
 padding-top: var(--sd-base-padding);
 padding-left: calc(var(--sd-base-padding) + var(--sv-element-add-padding-left, 0px));
 padding-right: calc(var(--sd-base-padding) + var(--sv-element-add-padding-right, 0px));
 padding-bottom: var(--sd-base-padding);
 background: var(--sjs-questionpanel-backcolor, var(--sjs-question-background, var(--sjs-general-backcolor, var(--background, #fff))));
 box-shadow: var(--sjs-shadow-small, 0px 1px 2px 0px rgba(0, 0, 0, 0.15));
}

.sd-element--with-frame.sd-element--compact {
 border: 1px solid var(--sjs-border-default, var(--border, #d6d6d6));
 border-radius: var(--sjs-questionpanel-cornerRadius, var(--sjs-corner-radius, 4px));
 box-shadow: none;
 background-color: transparent;
}

@keyframes elementMoveIn {
 from {
   flex-basis: 0;
   flex-grow: 0;
   max-width: 0;
   min-width: 0;
   width: 0;
   height: 0;
   padding-left: 0;
   overflow: hidden;
 }
 to {
   height: var(--animation-height);
   flex-basis: var(--animation-width);
   width: var(--animation-width);
   min-width: var(--animation-width);
   padding-left: var(--animation-padding-left);
   overflow: visible;
 }
}
.sd-element-wrapper--fade-in {
 animation-name: elementMoveIn, fadeIn;
 animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
 animation-fill-mode: forwards;
 animation-duration: var(--sjs-element-move-in-duration, 250ms), var(--sjs-element-fade-in-duration, 500ms);
 animation-delay: 0s, var(--sjs-element-fade-in-delay, 100ms);
 opacity: 0;
}

.sd-element-wrapper--fade-out {
 animation-name: elementMoveIn, fadeIn;
 animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
 animation-fill-mode: forwards;
 animation-direction: reverse;
 animation-duration: var(--sjs-element-move-out-duration, 250ms), var(--sjs-element-fade-out-duration, 150ms);
 animation-delay: var(--sjs-element-move-out-delay, 0ms), 0s;
}

.sd-element__content {
 box-sizing: border-box;
}

.sd-element__content--fade-in,
.sd-element__content--fade-out {
 --animation-padding-top: 0;
 --animation-padding-bottom: 0;
}

.sd-element__content--fade-in {
 animation-name: fadeIn, moveInWithOverflow, paddingFadeIn;
 min-height: 0 !important;
 opacity: 0;
 animation-fill-mode: forwards;
 animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
 animation-duration: var(--sjs-expand-fade-in-duration, 500ms), var(--sjs-expand-move-in-duration, 150ms), var(--sjs-expand-move-in-duration, 150ms);
 animation-delay: var(--sjs-expand-fade-in-delay, 150ms), 0s, 0s;
}

.sd-element__content--fade-out {
 animation-name: fadeIn, moveInWithOverflow, paddingFadeIn;
 min-height: 0 !important;
 animation-direction: reverse;
 animation-fill-mode: forwards;
 animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
 animation-duration: var(--sjs-collapse-fade-out-duration, 150ms), var(--sjs-collapse-move-out-duration, 250ms), var(--sjs-collapse-move-out-duration, 250ms);
 animation-delay: 0s, var(--sjs-collapse-move-out-delay, 100ms), var(--sjs-collapse-move-out-delay, 100ms);
}

.sd-element--expandable.sd-elemenet--expandable--animating > .sd-element__header:focus-within, .sd-element--expandable.sd-elemenet--expandable--animating > .sd-element__header:hover {
 background-color: transparent;
}

.sd-elemenet--expandable--animating.sd-element--expandable {
 transition-property: padding-top, padding-bottom;
}
.sd-elemenet--expandable--animating.sd-element--expandable > .sd-element__header {
 transition-property: padding-top, padding-bottom;
}
.sd-elemenet--expandable--animating.sd-element--expandable.sd-element--expanded {
 transition-timing-function: cubic-bezier(0, 0, 0.58, 1);
 transition-duration: var(--sjs-expand-move-in-duration, 150ms);
}
.sd-elemenet--expandable--animating.sd-element--expandable.sd-element--expanded > .sd-element__header {
 transition-timing-function: cubic-bezier(0, 0, 0.58, 1);
 transition-duration: var(--sjs-expand-move-in-duration, 150ms);
}
.sd-elemenet--expandable--animating.sd-element--expandable.sd-element--expanded > .sd-element__header .sd-element__title:before {
 transition-duration: var(--sjs-expand-move-in-duration, 150ms);
}
.sd-elemenet--expandable--animating.sd-element--expandable.sd-element--collapsed {
 transition-timing-function: cubic-bezier(0, 0, 0.58, 1);
 transition-duration: var(--sjs-collapse-move-out-duration, 250ms);
 transition-delay: var(--sjs-collapse-move-out-delay, 100ms);
}
.sd-elemenet--expandable--animating.sd-element--expandable.sd-element--collapsed > .sd-element__header {
 transition-timing-function: cubic-bezier(0, 0, 0.58, 1);
 transition-duration: var(--sjs-collapse-move-out-duration, 250ms);
 transition-delay: var(--sjs-collapse-move-out-delay, 100ms);
}
.sd-elemenet--expandable--animating.sd-element--expandable.sd-element--collapsed > .sd-element__header .sd-element__title:before {
 transition-duration: var(--sjs-collapse-move-out-duration, 250ms);
 transition-delay: var(--sjs-collapse-move-out-delay, 100ms);
}
.sd-elemenet--expandable--animating.sd-element--expandable.sd-element--complex:not(.sd-question--empty) > .sd-element__header--location-top:after {
 display: block;
 opacity: 0;
 height: 0;
 --animation-height: 1px;
 animation-name: fadeIn, moveIn;
 animation-fill-mode: forwards;
 animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
 animation-delay: var(--sjs-expand-fade-in-delay, 150ms), 0s;
 animation-duration: var(--sjs-expand-fade-in-duration, 500ms), var(--sjs-expand-move-in-duration, 150ms);
}
.sd-elemenet--expandable--animating.sd-element--expandable.sd-element--complex:not(.sd-question--empty).sd-element--collapsed .sd-element__header--location-top:after {
 animation-direction: reverse;
 opacity: 1;
 height: 1px;
 animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
 animation-delay: 0s, var(--sjs-collapse-move-out-delay, 100ms);
 animation-duration: var(--sjs-collapse-fade-out-duration, 150ms), var(--sjs-collapse-move-out-duration, 250ms);
}

.sd-question {
 position: relative;
}

.sd-element__erbox--above-element {
 margin-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-question__erbox--below-question {
 margin-top: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-question__content--support-container-queries {
 container-type: inline-size;
}

.sd-question--title-top > .sd-question__erbox--above-question {
 margin-bottom: calc(0.5 * var(--sd-base-vertical-padding));
}

.sd-question--description-under-input > .sd-question__erbox--below-question,
.sd-question--title-bottom > .sd-question__erbox--below-question {
 margin-top: calc(0.25 * var(--sd-base-vertical-padding) + 0.5 * var(--sjs-base-unit, var(--base-unit, 8px)));
}

.sd-element--with-frame > .sd-element__erbox--above-element {
 margin-bottom: var(--sd-base-padding);
 border-radius: var(--sjs-corner-radius, 4px) var(--sjs-corner-radius, 4px) 0 0;
}

.sd-question--left > .sd-element__erbox--above-element {
 margin-bottom: 0;
}

.sd-element--with-frame.sd-question--left > .sd-element__erbox--above-element {
 margin-bottom: calc(1 * var(--sd-base-vertical-padding));
}

.sd-element--with-frame > .sd-question__erbox--below-question {
 margin-top: auto;
 border-radius: 0 0 var(--sjs-corner-radius, 4px) var(--sjs-corner-radius, 4px);
}

.sd-element--with-frame.sd-question--title-top > .sd-question__erbox--above-question {
 margin-bottom: calc(0.5 * var(--sd-base-vertical-padding) + var(--sjs-base-unit, var(--base-unit, 8px)));
}

.sd-element--with-frame.sd-question--description-under-input > .sd-question__erbox--below-question,
.sd-element--with-frame.sd-question--title-bottom > .sd-question__erbox--below-question {
 margin-top: calc(0.5 * var(--sd-base-vertical-padding) + var(--sjs-base-unit, var(--base-unit, 8px)));
}

.sd-question__header {
 width: 100%;
}

.sd-question__header--location-top {
 padding-bottom: calc(0.5 * var(--sd-base-vertical-padding));
}

.sd-question__header--location--bottom {
 padding-top: calc(0.375 * var(--sd-base-vertical-padding));
}

.sd-element--with-frame.sd-question--title-top {
 padding-top: var(--sd-base-vertical-padding);
}
.sd-element--with-frame.sd-question--error-top {
 padding-top: 0;
}
.sd-element--with-frame.sd-question--error-bottom {
 padding-bottom: 0;
 display: flex;
 flex-direction: column;
}
.sd-element--with-frame.sd-question--error-bottom > .sd-question__content {
 margin-bottom: var(--sd-base-padding);
}
.sd-element--with-frame > .sd-element__erbox {
 margin-left: calc(-1 * var(--sd-base-padding));
 margin-right: calc(-1 * var(--sd-base-padding));
 width: calc(100% + 2 * var(--sd-base-padding));
}

.sd-scrollable .sd-question__content {
 overflow-x: auto;
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
}

.sd-question__header--location--left {
 display: inline-block;
 width: auto;
 vertical-align: top;
 margin-top: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-question--left {
 display: flex;
 flex-wrap: wrap;
 flex-direction: row;
 column-gap: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 row-gap: calc(0.25 * var(--sd-base-vertical-padding));
}

.sd-question__content--left {
 display: inline-block;
 flex: 1;
 margin-top: calc(0.25 * var(--sd-base-vertical-padding)) 0;
}

.sd-element--with-frame > .sd-question__content--left {
 margin: 0;
}

.sd-question__required-text {
 color: var(--sjs-special-red, var(--red, #e60a3e));
 vertical-align: top;
}

.sd-question__comment-area {
 font-size: var(--sjs-font-size, 16px);
 margin-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 display: flex;
 flex-direction: column;
 gap: var(--sjs-base-unit, var(--base-unit, 8px));
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 white-space: normal;
}

.sd-question__placeholder {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: center;
 gap: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 justify-content: center;
 min-height: calc(24 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 font-size: var(--sjs-internal-font-editorfont-size);
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 color: var(--sjs-font-questiondescription-color, var(--sjs-general-forecolor-light, rgba(0, 0, 0, 0.45)));
}
.sd-question__placeholder > div .sv-string-viewer, .sd-question__placeholder > span .sv-string-viewer {
 white-space: pre-line;
}

.sd-scrollable-container:not(.sd-scrollable-container--compact) {
 width: max-content;
 overflow: visible;
 max-width: 100%;
}

.sd-question__title--empty .sv-string-viewer {
 display: inline-block;
 height: calc(1.5 * (var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px))));
}

.sd-question__content {
 box-sizing: border-box;
}

.sd-error {
 display: block;
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-radius: var(--sjs-corner-radius, 4px);
 line-height: var(--sjs-font-size, 16px);
 font-size: calc(0.75 * (var(--sjs-font-size, 16px)));
 font-weight: 600;
 text-align: left;
 color: var(--sjs-special-red, var(--red, #e60a3e));
 white-space: normal;
 width: 100%;
 background-color: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
 box-sizing: border-box;
}

.sd-element--expanded > .sd-element__header,
.sd-element--collapsed > .sd-element__header {
 cursor: pointer;
}

.sd-element--collapsed > .sd-element__header {
 padding: calc(0 * (var(--sjs-base-unit, var(--base-unit, 8px)))) var(--sd-base-padding);
 box-sizing: border-box;
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
 margin-inline-start: calc(-1 * var(--sd-base-padding));
 width: calc(100% + 2 * var(--sd-base-padding));
}
.sd-element--collapsed.sd-element--with-frame {
 padding-top: 0;
 padding-bottom: 0;
}
.sd-element--collapsed.sd-element--with-frame > .sd-element__header {
 padding-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-bottom: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-radius: var(--sjs-questionpanel-cornerRadius, var(--sjs-corner-radius, 4px));
}
.sd-element--collapsed > .sd-element__header:focus-within, .sd-element--collapsed > .sd-element__header:hover {
 background-color: var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9));
}
.sd-element--collapsed.sd-element--nested > .sd-element__header:hover, .sd-element--collapsed.sd-element--nested > .sd-element__header:focus-within {
 box-shadow: 0 calc(-2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0 0 var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9)), 0 calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0 var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9));
}

.sd-element--complex.sd-element--with-frame {
 padding-top: 0;
}

.sd-element--complex.sd-element--nested-with-borders > .sd-element__erbox,
.sd-element--complex.sd-element--with-frame > .sd-element__erbox {
 margin-top: 0;
 margin-bottom: 0;
}

.sd-element--complex > .sd-element__header:after {
 content: " ";
 display: block;
 height: 1px;
 position: relative;
 background: var(--sjs-border-light, var(--border-light, #eaeaea));
 bottom: 0;
}

.sd-element--complex.sd-element--with-frame > .sd-element__header {
 padding-top: var(--sd-base-vertical-padding);
 padding-bottom: var(--sd-base-vertical-padding);
}

.sd-element--collapsed.sd-element--complex > .sd-element__header {
 padding-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-bottom: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-element--nested.sd-element--complex > .sd-element__header--location-top:after {
 bottom: calc(-0.5 * var(--sd-base-vertical-padding));
}

.sd-element--nested-with-borders {
 border: 1px solid var(--sjs-border-light, var(--border-light, #eaeaea));
 border-radius: calc(var(--sjs-corner-radius, 4px) - 4px);
 box-sizing: border-box;
 padding-left: var(--sd-base-padding);
 padding-right: var(--sd-base-padding);
}
.sd-element--nested-with-borders > .sd-element__header--location-top {
 padding-top: calc(0.5 * var(--sd-base-vertical-padding));
 padding-bottom: calc(0.5 * var(--sd-base-vertical-padding));
}
.sd-element--nested-with-borders > .sd-element__erbox {
 margin-left: calc(-1 * var(--sd-base-padding));
 margin-right: calc(-1 * var(--sd-base-padding));
 width: calc(100% + 2 * var(--sd-base-padding));
}
.sd-element--nested-with-borders > .sd-question__erbox--below-question {
 bottom: 0;
 margin-top: 0;
}
.sd-element--nested-with-borders.sd-element--collapsed > .sd-element__header--location-top:hover, .sd-element--nested-with-borders.sd-element--collapsed > .sd-element__header--location-top:focus-within {
 box-shadow: none;
}

.sd-element--nested-with-borders > .sd-element__header--location-top:after,
.sd-element--complex.sd-element--with-frame > .sd-element__header--location-top:after {
 bottom: calc(-1 * var(--sd-base-vertical-padding));
 inset-inline-start: calc(-1 * var(--sd-base-padding));
 width: calc(100% + 2 * var(--sd-base-padding));
}

.sd-element--collapsed.sd-element--complex > .sd-element__header--location-top:after {
 display: none;
}

.sd-question--empty.sd-question--complex > .sd-question__content {
 padding-top: 0;
 padding-bottom: 0;
}
.sd-question--empty.sd-question--complex > .sd-question__content:first-of-type {
 padding-top: var(--sd-base-padding);
}
.sd-question--empty.sd-question--complex > .sd-question__header--location-top {
 padding-bottom: calc(0.5 * var(--sd-base-vertical-padding));
}
.sd-question--empty.sd-question--complex > .sd-question__header--location-top:after {
 display: none;
}

.sd-input {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 -webkit-appearance: none;
 -moz-appearance: none;
 appearance: none;
 position: static;
 width: 100%;
 box-sizing: border-box;
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 font-family: var(--sjs-font-editorfont-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-editorfont-weight, 400);
 color: var(--sjs-font-editorfont-color, var(--sjs-general-forecolor, rgba(0, 0, 0, 0.91)));
 font-size: var(--sjs-internal-font-editorfont-size);
 background-color: var(--sjs-editorpanel-backcolor, var(--sjs-editor-background, var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9))));
 border: none;
 border-radius: var(--sjs-editorpanel-cornerRadius, var(--sjs-corner-radius, 4px));
 text-align: start;
 box-shadow: var(--sjs-shadow-inner, inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)), 0 0 0 0px var(--sjs-primary-backcolor, var(--primary, #19b394));
 transition: box-shadow var(--sjs-transition-duration, 150ms);
}

.sd-input:focus {
 box-shadow: var(--sjs-shadow-inner-reset, inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)), 0 0 0 2px var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-input.sd-input:focus {
 outline: none;
}

input.sd-input:disabled:not(.sd-input--disabled),
textarea.sd-input:disabled:not(.sd-input--disabled) {
 opacity: 1;
}

.sd-input--disabled {
 background-color: var(--sjs-editorpanel-backcolor, var(--sjs-editor-background, var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9))));
 -webkit-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
 user-select: none;
}

.sd-input--readonly {
 background-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
}

.sd-input.sd-input--preview {
 background: none;
 box-shadow: none;
 transition: none;
 border-bottom: 1px solid var(--sjs-general-forecolor, var(--foreground, #161616));
 border-radius: 0;
 padding-left: 0;
 padding-right: 0;
}

.sd-input::placeholder {
 color: var(--sjs-font-editorfont-placeholdercolor, var(--sjs-general-forecolor-light, var(--foreground-light, #909090)));
 -webkit-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
 user-select: none;
}

.sd-input.sd-input--disabled,
.sd-input.sd-input--disabled::placeholder {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 opacity: 0.25;
}

.sd-input.sd-input--readonly {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 box-shadow: none;
 transition: none;
}

.sd-input.sd-input--readonly::placeholder {
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sd-root--readonly .sd-input--disabled,
.sd-root--readonly .sd-input--disabled::placeholder {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-input--error {
 background-color: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
}

.sd-text__content {
 position: relative;
}

.sd-text__character-counter {
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
}

.sd-text__character-counter:focus-within {
 padding-inline-end: calc(8 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-text__character-counter.sd-text__character-counter--big:focus-within {
 padding-inline-end: calc(11 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-remaining-character-counter {
 display: none;
 flex-direction: row;
 justify-content: flex-end;
 align-items: flex-end;
 padding: 0px;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 font-size: var(--sjs-font-size, 16px);
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
 position: absolute;
 inset-inline-end: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 inset-block-end: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-question__content:focus-within .sd-remaining-character-counter {
 display: flex;
}

.sd-input[type=time],
.sd-input[type=date],
.sd-input[type=datetime-local],
.sd-input[type=week],
.sd-input[type=month],
.sd-input[type=tel],
.sd-input[type=password],
.sd-input[type=url],
.sd-input[type=email],
.sd-input[type=color],
.sd-input[type=range] {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 box-sizing: content-box;
 width: calc(100% - 4 * var(--sjs-base-unit, var(--base-unit, 8px)));
 height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
}

.sd-input[type=range]::-webkit-slider-runnable-track {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 border-radius: var(--sjs-base-unit, var(--base-unit, 8px));
 height: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-input[type=range]::-webkit-slider-thumb {
 -webkit-appearance: none;
 appearance: none;
 margin-top: calc(-0.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-radius: 100%;
 border: 2px solid var(--sjs-primary-backcolor, var(--primary, #19b394));
 box-shadow: inset 0 0 0 2px var(--background, #fff);
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-input[type=range]::-moz-range-track {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 border-radius: var(--sjs-base-unit, var(--base-unit, 8px));
 height: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-input[type=range]::-moz-range-thumb {
 -webkit-appearance: none;
 appearance: none;
 margin-top: calc(-0.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-radius: 100%;
 border: 2px solid var(--sjs-primary-backcolor, var(--primary, #19b394));
 box-shadow: inset 0 0 0 2px var(--background, #fff);
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-comment {
 display: block;
 height: auto;
 min-width: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 min-height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 max-width: 100%;
}

.sd-comment__content {
 position: relative;
}

.sd-panel {
 position: relative;
}

.sd-panel.sd-panel--as-page > .sd-panel__header.sd-panel__header {
 padding-top: 0;
 padding-bottom: calc(0.5 * var(--sd-base-vertical-padding) + var(--sjs-base-unit, var(--base-unit, 8px)));
}
.sd-panel.sd-panel--as-page > .sd-panel__header.sd-panel__header:after {
 content: none;
}
.sd-panel.sd-panel--as-page > .sd-panel__header.sd-panel__header .sd-panel__title {
 --page-title-font-size: var(--sjs-font-pagetitle-size, calc(1.5 * (var(--sjs-font-size, 16px))));
 font-family: var(--sjs-font-pagetitle-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-pagetitle-weight, 700);
 font-size: var(--page-title-font-size);
 color: var(--sjs-font-pagetitle-color, var(--sjs-general-dim-forecolor, rgba(0, 0, 0, 0.91)));
 position: static;
 line-height: calc(1.33 * (var(--page-title-font-size)));
 margin: 0 0 calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0px;
}
.sd-panel.sd-panel--as-page > .sd-panel__header.sd-panel__header .sd-panel__title span {
 font-family: inherit;
 font-size: inherit;
 font-weight: inherit;
 color: inherit;
 line-height: inherit;
}
.sd-panel.sd-panel--as-page > .sd-panel__header.sd-panel__header .sd-panel__description {
 font-family: var(--sjs-font-pagedescription-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-pagedescription-weight, 400);
 font-size: var(--sjs-font-pagedescription-size, var(--sjs-font-size, 16px));
 color: var(--sjs-font-pagedescription-color, var(--sjs-general-dim-forecolor-light, rgba(0, 0, 0, 0.45)));
 position: static;
 line-height: calc(1.5 * (var(--sjs-font-pagedescription-size, var(--sjs-font-size, 16px))));
 margin: 0 0 calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
}
.sd-panel.sd-panel--as-page > .sd-panel__header.sd-panel__header .sd-panel__required-text {
 display: none;
}
.sd-panel.sd-panel--as-page > .sd-panel__errbox {
 margin: 0 0 calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
 padding: calc(0.5 * var(--sd-base-vertical-padding) + var(--sjs-base-unit, var(--base-unit, 8px))) var(--sd-base-padding);
}
.sd-panel.sd-panel--as-page > .sd-panel__content {
 padding-top: 0;
}

.sd-root--compact .sd-panel--as-page > .sd-panel__errbox {
 margin: 0 0 var(--sd-base-vertical-padding) 0;
}

.sd-row ~ .sd-row .sd-panel--as-page {
 padding-top: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-panel__required-text {
 color: var(--sjs-special-red, var(--red, #e60a3e));
}

.sd-panel__footer {
 box-sizing: border-box;
 padding-left: calc(var(--sd-base-padding) - 3 * var(--sjs-base-unit, var(--base-unit, 8px)));
 margin-left: calc(-1 * var(--sd-base-padding));
 width: calc(100% + 2 * var(--sd-base-padding));
 margin-bottom: calc(-1 * var(--sd-base-padding) + 0.5 * var(--sd-base-vertical-padding));
 margin-top: calc(0.5 * var(--sd-base-vertical-padding));
 border-top: 1px solid var(--sjs-border-light, var(--border-light, #eaeaea));
 padding-top: calc(0.5 * var(--sd-base-vertical-padding));
}

.sd-panel--as-page .sd-panel__footer {
 padding: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0 0;
 margin: 0;
 border: none;
 width: initial;
}

.sd-panel__content {
 padding-top: var(--sd-base-padding);
}

.sd-panel.sd-element--nested > .sd-panel__content {
 padding-bottom: var(--sd-base-padding);
 --animation-padding-top: var(--sd-base-padding);
}

.sd-panel__content {
 --animation-padding-top: var(--sd-base-padding);
}

.sjs_sp_placeholder {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 color: var(--sjs-font-questiondescription-color, var(--sjs-general-forecolor-light, rgba(0, 0, 0, 0.45)));
 font-size: var(--sjs-internal-font-editorfont-size);
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
}

.sjs_sp_container {
 border: 1px dashed var(--sjs-border-default, var(--border, #d6d6d6));
}

.sd-question--readonly .sjs_sp_container,
.sd-question--preview .sjs_sp_container {
 border: none;
}
.sd-question--readonly .sjs_sp_placeholder,
.sd-question--preview .sjs_sp_placeholder {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sjs_sp_controls.sd-signaturepad__controls {
 right: var(--sjs-base-unit, var(--base-unit, 8px));
 top: var(--sjs-base-unit, var(--base-unit, 8px));
 left: auto;
 bottom: auto;
}

.sd-question--signature.sd-question--error .sjs_sp_placeholder {
 background-color: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
}

.sd-signaturepad__background-image {
 position: absolute;
 top: 0;
 left: 0;
 object-fit: cover;
}

.sd-signaturepad__loading-indicator {
 width: 100%;
 height: 100%;
 position: absolute;
 left: 0;
 top: 0;
}
.sd-signaturepad__loading-indicator .sd-loading-indicator {
 position: absolute;
 right: var(--sjs-base-unit, var(--base-unit, 8px));
 top: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-checkbox__decorator {
 border-radius: calc(0.5 * (var(--sjs-corner-radius, 4px)));
}

.sd-checkbox__svg {
 display: block;
 width: calc(2.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(2.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-checkbox__svg use {
 fill: transparent;
 transition: fill var(--sjs-transition-duration, 150ms);
}

.sd-checkbox--checked .sd-checkbox__svg use {
 fill: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
}

.sd-checkbox--checked.sd-checkbox--disabled .sd-checkbox__svg use {
 fill: var(--sjs-border-default, var(--border, #d6d6d6));
}

.sd-checkbox--checked .sd-checkbox__control:focus + .sd-checkbox__decorator .sd-checkbox__svg use {
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-checkbox--checked.sd-checkbox--readonly .sd-checkbox__svg use {
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-checkbox--checked.sd-checkbox--preview .sd-checkbox__svg use {
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-matrixdynamic__btn.sd-matrixdynamic__add-btn {
 position: sticky;
 left: calc(-3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-left: calc(-3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 z-index: 12;
}

.sd-matrixdynamic__footer:first-child {
 padding-bottom: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-matrixdynamic__footer {
 padding-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-action.sd-matrixdynamic__remove-btn {
 opacity: 0.5;
}

.sd-action.sd-matrixdynamic__remove-btn .sd-action__icon {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 width: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
}

.sd-matrixdynamic__btn {
 appearance: none;
 background: transparent;
 border: none;
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 font-size: var(--sjs-font-size, 16px);
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: 600;
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) 0;
}

.sd-matrixdynamic__drag-element {
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-matrixdynamic__drag-element:hover {
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
}
.sd-matrixdynamic__drag-element:after {
 content: " ";
 display: block;
 height: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border: 1px solid var(--sjs-border-default, var(--border, #d6d6d6));
 box-sizing: border-box;
 border-radius: calc(1.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-matrixdynamic__placeholder .sd-matrixdynamic__add-btn {
 margin-left: 0;
}

.sd-drag-element__svg {
 width: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 display: block;
}
.sd-drag-element__svg use {
 fill: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

@keyframes borderAnimation {
 from {
   border-width: 0px;
 }
 to {
   border-width: 8px;
 }
}
@keyframes paddingAnimation {
 from {
   padding-top: 0;
   padding-bottom: 0;
 }
 to {
   padding-top: 24px;
   padding-bottom: 32px;
 }
}
@keyframes empty {}
.sd-table__row--fade-out,
.sd-table__row--fade-in {
 animation-name: empty;
 animation-fill-mode: forwards;
 --fade-in-animation-duration: calc(var(--sjs-matrix-row-fade-in-duration, 250ms) + var(--sjs-matrix-row-fade-in-delay, 150ms));
 animation-duration: max(var(--fade-in-animation-duration), var(--sjs-matrix-row-move-in-duration, 150ms));
}
.sd-table__row--fade-out > td,
.sd-table__row--fade-in > td {
 animation-name: borderAnimation;
 animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
 animation-duration: var(--sjs-matrix-row-move-in-duration, 150ms);
 animation-fill-mode: forwards;
}
.sd-table__row--fade-out > td > div,
.sd-table__row--fade-in > td > div {
 animation-name: fadeIn, moveInWithOverflow;
 opacity: 0;
 animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
 animation-fill-mode: forwards;
 animation-duration: var(--sjs-matrix-row-fade-in-duration, 250ms), var(--sjs-matrix-row-move-in-duration, 150ms);
 animation-delay: var(--sjs-matrix-row-fade-in-delay, 150ms), 0s;
}

.sd-table__row--fade-out {
 animation-direction: reverse;
 --move-out-animation-duration: calc(var(--sjs-matrix-row-move-out-duration, 250ms) + var(--sjs-matrix-row-move-out-delay, 100ms));
 animation-duration: max(var(--move-out-animation-duration), var(--sjs-matrix-row-fade-out-duration, 100ms));
}
.sd-table__row--fade-out > td {
 animation-duration: var(--sjs-matrix-row-move-out-duration, 250ms);
 animation-delay: var(--sjs-matrix-row-move-out-delay, 100ms);
 animation-direction: reverse;
 animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
}
.sd-table__row--fade-out > td > div {
 animation-direction: reverse;
 animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
 animation-duration: var(--sjs-matrix-row-fade-out-duration, 100ms), var(--sjs-matrix-row-move-out-duration, 250ms);
 animation-delay: 0s, var(--sjs-matrix-row-move-out-delay, 100ms);
}

.sd-table__row--detail.sd-table__row--fade-in > td, .sd-table__row--detail.sd-table__row--fade-out > td {
 animation-name: borderAnimation, paddingAnimation;
 animation-duration: var(--sjs-matrix-row-move-in-duration, 150ms);
 animation-fill-mode: forwards;
}
.sd-table__row--detail.sd-table__row--fade-in {
 --fade-in-animation-duration: calc(var(--sjs--fade-in-duration, 500ms) + var(--sjs-matrix-detail-row-fade-in-delay, 150ms));
 animation-duration: max(var(--fade-in-animation-duration), var(--sjs-matrix-detail-row-move-in-duration, 150ms));
}
.sd-table__row--detail.sd-table__row--fade-in > td {
 animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
 animation-duration: var(--sjs-matrix-detail-row-move-in-duration, 150ms);
}
.sd-table__row--detail.sd-table__row--fade-in > td > div {
 animation-duration: var(--sjs--fade-in-duration, 500ms), var(--sjs-matrix-detail-row-move-in-duration, 150ms);
 animation-delay: var(--sjs-matrix-detail-row-fade-in-delay, 150ms), 0s;
}
.sd-table__row--detail.sd-table__row--fade-out {
 --move-out-animation-duration: calc(var(--sjs-matrix-detail-row-move-out-duration, 250ms) + var(--sjs-matrix-detail-row-move-out-delay, 100ms));
 animation-duration: max(var(--move-out-animation-duration), var(--sjs-matrix-detail-row-fade-out-duration, 150ms));
}
.sd-table__row--detail.sd-table__row--fade-out > td {
 animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
 animation-duration: var(--sjs-matrix-detail-row-move-out-duration, 250ms);
 animation-delay: var(--sjs-matrix-detail-row-move-out-delay, 100ms);
 animation-direction: reverse;
}
.sd-table__row--detail.sd-table__row--fade-out > td > div {
 animation-duration: var(--sjs-matrix-detail-row-fade-out-duration, 150ms), var(--sjs-matrix-detail-row-move-out-duration, 250ms);
 animation-delay: 0s, var(--sjs-matrix-detail-row-move-out-delay, 100ms);
}

.sd-table {
 width: 100%;
 background: var(--sjs-questionpanel-backcolor, var(--sjs-question-background, var(--sjs-general-backcolor, var(--background, #fff))));
 border-collapse: separate;
 border-spacing: 0;
 white-space: normal;
}
.sd-table > thead > tr > th {
 border-top: 0;
 border-bottom: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid transparent;
}

.sd-table__cell {
 border-top: var(--sjs-base-unit, var(--base-unit, 8px)) solid transparent;
 border-bottom: var(--sjs-base-unit, var(--base-unit, 8px)) solid transparent;
 background-clip: padding-box;
}

.sd-table.sd-table--columnsautowidth .sd-table__cell:not(.sd-table__cell--actions):not(.sd-table__cell--action):not(.sd-table__cell--empty.sd-table__cell--error) {
 width: 10000px;
}

.sd-table__row:first-of-type > .sd-table__cell {
 border-top: 0;
}

.sd-table__row:last-of-type > .sd-table__cell {
 border-bottom: 0;
}

.sd-table--align-top .sd-table__cell {
 vertical-align: top;
}

.sd-table--no-header {
 padding-top: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-panel:not(.sd-panel--as-page) > .sd-panel__content .sd-table--no-header {
 padding-top: 0;
}
.sd-panel:not(.sd-panel--as-page) > .sd-panel__content .sd-question--table .sd-question__content {
 padding-bottom: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-bottom: calc(-0.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-top: var(--sjs-base-unit, var(--base-unit, 8px));
 margin-top: calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-panel:not(.sd-panel--as-page) > .sd-panel__content .sd-question--table > .sd-question__header ~ .sd-question__content {
 padding-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 --animation-padding-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-panel:not(.sd-panel--as-page) > .sd-panel__content .sd-question--table > .sd-question__header ~ .sd-question__content .sd-table--no-header {
 padding-top: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-panel:not(.sd-panel--as-page) > .sd-panel__content .sd-question--table > .sd-question__content .sd-table-wrapper .sd-table:not(.sd-table--no-header) {
 margin-top: calc(-3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-panel:not(.sd-panel--as-page) > .sd-panel__content .sd-question--table.sd-question--error-top > .sd-question__content .sd-table-wrapper .sd-table:not(.sd-table--no-header) {
 margin-top: 0;
}
.sd-panel:not(.sd-panel--as-page) > .sd-panel__content > .sd-row:not(:first-of-type) .sd-question--table > .sd-question__content .sd-table-wrapper .sd-table:not(.sd-table--no-header) {
 margin-top: calc(-2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-panel:not(.sd-panel--as-page) > .sd-panel__content > .sd-row:not(:first-of-type) .sd-question--table.sd-question--error-top > .sd-question__content .sd-table-wrapper .sd-table:not(.sd-table--no-header) {
 margin-top: calc(0 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-panel:not(.sd-panel--as-page) > .sd-panel__content .sd-question--table > .sd-question__header ~ .sd-question__content .sd-table-wrapper .sd-table:not(.sd-table--no-header) {
 margin-top: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-panel:not(.sd-panel--as-page) > .sd-panel__content > .sd-row:not(:first-of-type) .sd-question--table > .sd-question__header ~ .sd-question__content .sd-table-wrapper .sd-table:not(.sd-table--no-header) {
 margin-top: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows {
 margin-left: var(--sjs-base-unit, var(--base-unit, 8px));
 margin-right: var(--sjs-base-unit, var(--base-unit, 8px));
 width: calc(100% - 2 * var(--sjs-base-unit, var(--base-unit, 8px)));
}
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__cell:not(.sd-table__cell--header):first-of-type {
 padding-left: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__cell:last-of-type {
 padding-right: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:first-of-type > .sd-table__cell {
 border-top: var(--sjs-base-unit, var(--base-unit, 8px)) solid transparent;
}
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:last-of-type > .sd-table__cell {
 border-bottom: var(--sjs-base-unit, var(--base-unit, 8px)) solid transparent;
}
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) > td.sd-table__cell:not(.sd-table__cell--actions),
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) td:first-of-type {
 border-top-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
 border-bottom-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
 background-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
}
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) > td.sd-table__cell:not(.sd-table__cell--actions).sd-matrix__text--checked,
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) td:first-of-type.sd-matrix__text--checked {
 background-color: var(--sjs-primary-backcolor-light, var(--primary-light, rgba(25, 179, 148, 0.1)));
}
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) > td.sd-table__cell:not(.sd-table__cell--actions) .sd-input,
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) td:first-of-type .sd-input {
 background-color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
}
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) > td.sd-table__cell:not(.sd-table__cell--actions) .sd-item:not(.sd-item--error) .sd-item__decorator,
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) td:first-of-type .sd-item:not(.sd-item--error) .sd-item__decorator {
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
}
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) > td.sd-table__cell:not(.sd-table__cell--actions) .sd-item:not(.sd-item--error).sd-item--checked .sd-item__decorator,
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) td:first-of-type .sd-item:not(.sd-item--error).sd-item--checked .sd-item__decorator {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) > td.sd-table__cell:not(.sd-table__cell--actions) .sd-item:not(.sd-item--error).sd-item--readonly.sd-item--checked .sd-item__decorator,
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) td:first-of-type .sd-item:not(.sd-item--error).sd-item--readonly.sd-item--checked .sd-item__decorator {
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
}
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) > td.sd-table__cell:not(.sd-table__cell--actions) .sd-item:not(.sd-item--error).sd-item--preview.sd-item--preview .sd-item__decorator,
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) td:first-of-type .sd-item:not(.sd-item--error).sd-item--preview.sd-item--preview .sd-item__decorator {
 background-color: transparent;
}
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) > td.sd-table__cell:not(.sd-table__cell--actions) .sd-item:not(.sd-item--error).sd-radio--checked .sd-radio__control:focus + .sd-radio__decorator:after,
.sd-root-modern:not(.sd-root-modern--mobile) .sd-table--alternate-rows .sd-table__row:nth-of-type(odd) td:first-of-type .sd-item:not(.sd-item--error).sd-radio--checked .sd-radio__control:focus + .sd-radio__decorator:after {
 background-color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
}

.sd-table__cell {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 font-weight: normal;
 font-size: var(--sjs-internal-font-editorfont-size);
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 padding: 0 var(--sjs-base-unit, var(--base-unit, 8px));
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 text-align: center;
}
.sd-table__cell:not(.sd-table__cell--empty):not(.sd-table__cell--actions):not(:empty) {
 min-width: calc(15 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-table__cell .sd-item {
 text-align: initial;
}

.sd-table__cell--error {
 border: none;
 padding: 0 var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-table__cell--error .sd-question__erbox {
 margin: 0;
}

.sd-table__cell--error-top {
 vertical-align: bottom;
 padding-top: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-table__cell--error-bottom {
 vertical-align: top;
 padding-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
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

.sd-table__cell--header .sv-vue-title-additional-div,
.sd-table__cell--header {
 font-size: 0;
 line-height: 0;
}

.sd-table__cell--header span {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 font-size: var(--sjs-internal-font-editorfont-size);
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 font-weight: var(--sjs-font-questiontitle-weight, 600);
}

.sd-table__cell--header {
 font-weight: 600;
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 vertical-align: top;
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-table__cell--header:not(.sd-table__cell--empty) {
 min-width: calc(15 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-matrixdropdown .sd-table__cell--header.sd-table__cell--empty {
 min-width: calc(15 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-matrixdropdown .sd-table__cell--header.sd-table__cell--action {
 min-width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-matrixdropdown .sd-table__cell--header:not(.sd-table__cell--empty) {
 min-width: calc(15 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-matrixdropdown .sd-table__cell--header:not(.sd-table__cell--empty).sd-table__cell--dropdown, .sd-matrixdropdown .sd-table__cell--header:not(.sd-table__cell--empty).sd-table__cell--rating {
 min-width: calc(22 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-matrixdropdown .sd-table__cell--header:not(.sd-table__cell--empty).sd-table__cell--boolean {
 min-width: calc(18 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-table__cell--footer {
 text-align: right;
 padding-top: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-table__cell--footer-total {
 font-weight: 600;
 text-align: left;
}

.sd-table__cell--detail-panel {
 border-top: var(--sjs-base-unit, var(--base-unit, 8px)) solid transparent;
 padding: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px)))) var(--sjs-base-unit, var(--base-unit, 8px)) calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-bottom: var(--sjs-base-unit, var(--base-unit, 8px)) solid transparent;
}

.sd-table__cell--actions .sv-action-bar,
.sd-matrixdynamic__add-btn .sv-action-bar {
 overflow: visible;
}

.sd-table__cell--actions:not(.sd-table__cell--vertical) {
 width: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-table__cell--actions:not(.sd-table__cell--vertical):not(.sd-table__cell--drag):first-of-type {
 padding-left: 0;
 width: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 min-width: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-table__cell--detail-button {
 border: none;
 background: transparent;
 border-radius: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding: var(--sjs-base-unit, var(--base-unit, 8px));
 transition: background var(--sjs-transition-duration, 150ms);
}
.sd-table__cell--detail-button svg {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 display: block;
 width: var(--sjs-internal-font-editorfont-size);
 height: var(--sjs-internal-font-editorfont-size);
 fill: var(--sjs-font-questiondescription-color, var(--sjs-general-forecolor-light, rgba(0, 0, 0, 0.45)));
 transition: fill var(--sjs-transition-duration, 150ms);
}
.sd-table__cell--detail-button:hover, .sd-table__cell--detail-button:focus {
 background: var(--sjs-primary-backcolor-light, var(--primary-light, rgba(25, 179, 148, 0.1)));
 outline: none;
}
.sd-table__cell--detail-button:hover svg, .sd-table__cell--detail-button:focus svg {
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-table__cell--actions {
 white-space: nowrap;
}
.sd-table__cell--actions.sd-table__cell--vertical .sd-action-bar {
 justify-content: center;
}

.sd-table__cell--row-text {
 font-weight: var(--sjs-font-questiontitle-weight, 600);
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 text-align: left;
 min-width: calc(12 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-matrixdynamic__content .sd-table__question-wrapper {
 position: relative;
}

.sd-table__question-wrapper:not(:focus-within):hover {
 position: relative;
}

.sd-table__cell--actions:not(.sd-table__cell--vertical),
.sd-table__cell--empty,
.sd-table__cell--row-text,
.sd-table__cell--footer-total,
.sd-matrix__cell:first-of-type,
.sd-matrix tr > td:first-of-type {
 position: sticky;
 background-color: var(--sjs-questionpanel-backcolor, var(--sjs-question-background, var(--sjs-general-backcolor, var(--background, #fff))));
 z-index: 12;
}
.sd-table__cell--actions:not(.sd-table__cell--vertical):first-of-type,
.sd-table__cell--empty:first-of-type,
.sd-table__cell--row-text:first-of-type,
.sd-table__cell--footer-total:first-of-type,
.sd-matrix__cell:first-of-type:first-of-type,
.sd-matrix tr > td:first-of-type:first-of-type {
 left: calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-table__cell--actions:not(.sd-table__cell--vertical):last-of-type,
.sd-table__cell--empty:last-of-type,
.sd-table__cell--row-text:last-of-type,
.sd-table__cell--footer-total:last-of-type,
.sd-matrix__cell:first-of-type:last-of-type,
.sd-matrix tr > td:first-of-type:last-of-type {
 right: calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-table__cell--actions:not(.sd-table__cell--vertical):last-child .sd-action-bar {
 margin-right: calc(-3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 justify-content: flex-end;
 background: var(--sjs-questionpanel-backcolor, var(--sjs-question-background, var(--sjs-general-backcolor, var(--background, #fff))));
}

.sd-question.sd-question--table {
 position: relative;
 overflow-x: auto;
}

.sd-question--table.sd-element--collapsed,
.sd-question--table.sd-element--nested {
 overflow-x: visible;
}

.sd-table-wrapper {
 display: flex;
 margin: 0 calc(-1 * var(--sd-base-padding));
 width: fit-content;
 min-width: calc(100% + 2 * var(--sd-base-padding));
}
.sd-table-wrapper:before, .sd-table-wrapper:after {
 content: "";
 display: block;
 position: sticky;
 min-height: 100%;
 width: calc(var(--sd-base-padding) - var(--sjs-base-unit, var(--base-unit, 8px)));
 flex-shrink: 0;
 background: var(--sjs-questionpanel-backcolor, var(--sjs-question-background, var(--sjs-general-backcolor, var(--background, #fff))));
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

.sd-element--with-frame.sd-element--compact .sd-table {
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}
.sd-element--with-frame.sd-element--compact .sd-table-wrapper:before, .sd-element--with-frame.sd-element--compact .sd-table-wrapper:after {
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}
.sd-element--with-frame.sd-element--compact .sd-table__cell--actions:not(.sd-table__cell--vertical):last-child .sd-action-bar {
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}
.sd-element--with-frame.sd-element--compact .sd-table__cell--actions:not(.sd-table__cell--vertical),
.sd-element--with-frame.sd-element--compact .sd-table__cell--empty,
.sd-element--with-frame.sd-element--compact .sd-table__cell--row-text,
.sd-element--with-frame.sd-element--compact .sd-table__cell--footer-total,
.sd-element--with-frame.sd-element--compact .sd-matrix__cell:first-of-type,
.sd-element--with-frame.sd-element--compact .sd-matrix tr > td:first-of-type {
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}

.sd-question--table > .sd-question__header,
.sd-question--table .sd-question__description--under-input .sv-string-viewer {
 position: sticky;
 left: 0;
}
.sd-question--table > .sd-question__content {
 padding-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 --animation-padding-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 min-width: min-content;
}
.sd-question--table.sd-element--nested > .sd-question__content {
 min-width: auto;
 overflow-x: auto;
}
.sd-question--table.sd-element--nested > .sd-question__content, .sd-question--table:not(.sd-element--with-frame):not(.sd-element--nested) {
 padding-right: var(--sd-base-padding);
 margin-right: calc(-1 * var(--sd-base-padding));
 padding-left: var(--sd-base-padding);
 margin-left: calc(-1 * var(--sd-base-padding));
 box-sizing: content-box;
}

.sd-question--scroll {
 overflow-x: scroll;
}

.sd-table__row-disabled > .sd-table__cell {
 opacity: 0.25;
}

.sd-table__cell--detail-panel .sd-panel__content {
 padding-top: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-table__question-wrapper .sd-boolean-root {
 margin: auto;
}

.sd-root-modern--mobile .sd-table__question-wrapper .sd-boolean-root {
 margin: initial;
}

.sd-table__cell--footer .sd-table__question-wrapper--expression .sd-expression {
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-bottom: 1px solid var(--sjs-border-light, var(--border-light, #eaeaea));
 font-size: var(--sjs-font-size, 16px);
 font-weight: 600;
 line-height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-table__cell--footer .sd-table__question-wrapper--left {
 text-align: start;
}
.sd-table__cell--footer .sd-table__question-wrapper--center {
 text-align: center;
}
.sd-table__cell--footer .sd-table__question-wrapper--right {
 text-align: end;
}

.sd-table.sd-matrixdynamic {
 table-layout: auto;
}

.sd-page {
 position: relative;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 padding: 0 calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: 100%;
 box-sizing: border-box;
}

.sd-root-modern--mobile .sd-page {
 padding: 0;
}

.sd-page .sd-page__title {
 --page-title-font-size: var(--sjs-font-pagetitle-size, calc(1.5 * (var(--sjs-font-size, 16px))));
 font-family: var(--sjs-font-pagetitle-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-pagetitle-weight, 700);
 font-size: var(--page-title-font-size);
 color: var(--sjs-font-pagetitle-color, var(--sjs-general-dim-forecolor, rgba(0, 0, 0, 0.91)));
 position: static;
 line-height: calc(1.33 * (var(--page-title-font-size)));
 margin: 0 0 calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0px;
}

.sd-page .sd-page__description {
 font-family: var(--sjs-font-pagedescription-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-pagedescription-weight, 400);
 font-size: var(--sjs-font-pagedescription-size, var(--sjs-font-size, 16px));
 color: var(--sjs-font-pagedescription-color, var(--sjs-general-dim-forecolor-light, rgba(0, 0, 0, 0.45)));
 position: static;
 line-height: calc(1.5 * (var(--sjs-font-pagedescription-size, var(--sjs-font-size, 16px))));
 margin: 0 0 calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
}

.sd-page__errbox {
 padding: calc(0.5 * var(--sd-base-vertical-padding) + var(--sjs-base-unit, var(--base-unit, 8px))) var(--sd-base-padding);
}

.sd-page__title ~ .sd-page__errbox,
.sd-page__description ~ .sd-page__errbox {
 margin-top: calc(0.5 * var(--sd-base-vertical-padding) + var(--sjs-base-unit, var(--base-unit, 8px)));
 margin-bottom: calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-root--compact .sd-page__title ~ .sd-page__errbox,
.sd-root--compact .sd-page__description ~ .sd-page__errbox {
 margin-bottom: 0;
}

.sd-row {
 display: flex;
 flex-direction: row;
 width: 100%;
 box-sizing: border-box;
 --animate-margin: var(--sd-base-vertical-padding);
 margin-top: var(--sd-base-vertical-padding);
}

.sd-row.sd-page__row {
 margin-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 --animate-margin: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-page__row.sd-row--compact {
 margin-top: var(--sd-base-vertical-padding);
 --animate-margin: var(--sd-base-vertical-padding);
}

.sd-row:first-of-type {
 margin-top: 0;
 --animate-margin: 0;
}

.sd-page__title ~ .sd-row.sd-page__row:not(.sd-row--compact),
.sd-page__description ~ .sd-row.sd-page__row:not(.sd-row--compact) {
 margin-top: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 --animate-margin: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-page__title ~ .sd-page__row.sd-row--compact,
.sd-page__description ~ .sd-page__row.sd-row--compact {
 margin-top: var(--sd-base-vertical-padding);
 --animate-margin: var(--sd-base-vertical-padding);
}

.sd-row.sd-page__row:not(.sd-row--compact) ~ .sd-row.sd-page__row:not(.sd-row--compact) {
 margin-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 --animate-margin: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-row--multiple {
 row-gap: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-left: calc(-1 * var(--sd-base-padding));
 width: calc(100% + var(--sd-base-padding));
 flex-wrap: wrap;
}
.sd-row--multiple > div {
 box-sizing: border-box;
 --animation-padding-left: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-left: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 display: flex;
 align-items: stretch;
}

.sd-panel.sd-panel--as-page > .sd-panel__content > .sd-row--multiple:not(.sd-row--compact) {
 margin-left: calc(-2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(100% + var(--base-unit) * 2);
}

.sd-panel:not(.sd-panel--as-page) .sd-row--multiple {
 row-gap: var(--sd-base-vertical-padding);
}
.sd-panel:not(.sd-panel--as-page) .sd-row--multiple > div {
 --animation-padding-left: var(--sd-base-padding);
 padding-left: var(--sd-base-padding);
}

.sd-row--multiple.sd-row--compact > div {
 --animation-padding-left: var(--sd-base-padding);
 padding-left: var(--sd-base-padding);
}

.sd-page__row.sd-row--multiple {
 margin-left: calc(-2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(100% + 2 * var(--sjs-base-unit, var(--base-unit, 8px)));
}
.sd-page__row.sd-row--multiple.sd-row--compact {
 padding: 0;
 row-gap: var(--sd-base-vertical-padding);
 margin-left: calc(-1 * var(--sd-base-padding));
 width: calc(100% + var(--sd-base-padding));
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

@keyframes marginFadeIn {
 from {
   margin-top: 0;
 }
 to {
   margin-top: var(--animate-margin);
 }
}
.sd-row--fade-in {
 animation-fill-mode: forwards;
 animation-name: fadeIn, moveInWithOverflow, marginFadeIn;
 min-height: 0 !important;
 opacity: 0;
 animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
 animation-delay: var(--sjs-row-fade-in-delay, 150ms), 0s, 0s;
 animation-duration: var(--sjs-row-fade-in-duration, 500ms), var(--sjs-row-move-in-duration, 150ms), var(--sjs-row-move-in-duration, 150ms);
}

.sd-row--fade-out {
 animation-name: fadeIn, moveInWithOverflow, marginFadeIn;
 animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
 animation-fill-mode: forwards;
 animation-direction: reverse;
 min-height: 0 !important;
 animation-delay: 0s, var(--sjs-row-move-out-delay, 100ms), var(--sjs-row-move-out-delay, 100ms);
 animation-duration: var(--sjs-row-fade-out-duration, 150ms), var(--sjs-row-move-out-duration, 250ms), var(--sjs-row-move-out-duration, 250ms);
}

.sd-row--fade-in .sd-element-wrapper--fade-in {
 animation: none;
}

.sd-row--fade-out .sd-element-wrapper--fade-out {
 animation: none;
}

.sd-title {
 display: block;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-style: normal;
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 flex-direction: row;
 white-space: normal;
}

.sd-title.sd-container-modern__title {
 display: flex;
 align-items: center;
 padding: var(--sd-page-vertical-padding) var(--sd-page-vertical-padding);
 overflow: auto;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 gap: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 box-shadow: 0px 2px 0px var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sd-title.sd-container-modern__title .sd-logo.sv-logo--right {
 margin-left: auto;
}
.sd-title.sd-container-modern__title .sd-logo__image {
 margin-top: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-header__text {
 display: flex;
 flex-direction: column;
 gap: var(--sjs-base-unit, var(--base-unit, 8px));
 flex-grow: 1;
}
.sd-header__text .sd-title {
 --survey-title-font-size: var(--sjs-font-surveytitle-size, calc(2 * (var(--sjs-font-size, 16px))));
 font-size: var(--survey-title-font-size);
 line-height: calc(1.25 * (var(--survey-title-font-size)));
 color: var(--sjs-font-surveytitle-color, var(--sjs-primary-backcolor, var(--primary, #19b394)));
 font-family: var(--sjs-font-surveytitle-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-surveytitle-weight, 700);
}
.sd-header__text h3 {
 line-height: calc(2.5 * (var(--sjs-font-size, 16px)));
}
.sd-header__text h5 {
 font-size: var(--sjs-font-size, 16px);
 font-weight: 400;
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
}
.sd-header__text .sd-description {
 --survey-description-font-size: var(--sjs-font-surveydescription-size, var(--sjs-font-size, 16px));
 font-size: var(--survey-description-font-size);
 line-height: calc(1.5 * (var(--survey-description-font-size)));
 color: var(--sjs-font-surveydescription-color, var(--sjs-general-forecolor-light, var(--foreground-light, #909090)));
 font-family: var(--sjs-font-surveydescription-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-surveydescription-weight, 400);
}

.sd-title .sv-title-actions {
 width: 100%;
 justify-content: space-between;
}

.sd-root-modern .sd-container-modern__title {
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
}

.sd-root-modern .sd-container-modern__title .sd-header__text h3 {
 margin: 0;
}
.sd-root-modern .sd-container-modern__title .sd-description {
 margin: 0;
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sd-title .sv-title-actions {
 align-items: flex-start;
 width: calc(100% + 3 * var(--sjs-base-unit, var(--base-unit, 8px)));
}
.sd-title .sv-title-actions .sv-title-actions__title {
 flex-wrap: wrap;
 flex: 0 1 auto;
 max-width: calc(100% - 3 * var(--sjs-base-unit, var(--base-unit, 8px)));
 white-space: initial;
 min-width: unset;
}

.sd-action-title-bar {
 flex: 1 9 auto;
 min-width: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 justify-content: flex-end;
 margin: calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
}
.sd-action-title-bar .sv-action {
 flex: 0 0 auto;
}

.sd-action-title-bar.sd-action-bar--empty {
 min-width: 0;
}

.sd-description {
 font-style: normal;
 font-family: var(--sjs-font-questiondescription-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-questiondescription-weight, 400);
 color: var(--sjs-font-questiondescription-color, var(--sjs-general-forecolor-light, rgba(0, 0, 0, 0.45)));
 font-size: var(--sjs-font-questiondescription-size, var(--sjs-font-size, 16px));
 line-height: calc(1.5 * (var(--sjs-font-questiondescription-size, var(--sjs-font-size, 16px))));
 white-space: normal;
}

.sd-description.sd-question__description--under-input {
 padding-top: calc(0.375 * var(--sd-base-vertical-padding));
}

.sd-element__header .sd-description {
 margin-top: calc(0.25 * var(--sd-base-vertical-padding) - 0.5 * var(--sjs-base-unit, var(--base-unit, 8px)));
}

.sd-item {
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
}

.sd-item--disabled.sd-item--disabled .sd-item__decorator,
.sd-item__decorator {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 display: flex;
 align-items: center;
 justify-content: center;
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 box-sizing: border-box;
 background-color: var(--sjs-editorpanel-backcolor, var(--sjs-editor-background, var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9))));
 border: none;
 flex-shrink: 0;
 margin-top: calc((1.5 * (var(--sjs-internal-font-editorfont-size)) - 3 * (var(--sjs-base-unit, var(--base-unit, 8px)))) / 2);
 box-shadow: var(--sjs-shadow-inner, inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)), 0 0 0 0px var(--sjs-primary-backcolor, var(--primary, #19b394));
 transition: box-shadow var(--sjs-transition-duration, 150ms), background var(--sjs-transition-duration, 150ms);
}

.sd-item--readonly.sd-item--readonly .sd-item__decorator {
 background-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
 box-shadow: none;
 transition: none;
}

.sd-item--preview.sd-item--preview .sd-item__decorator {
 background-color: transparent;
 box-shadow: none;
 transition: none;
}

.sd-item--checked .sd-item__decorator {
 box-shadow: none;
}

.sd-item__control:focus + .sd-item__decorator {
 background: var(--sjs-questionpanel-backcolor, var(--sjs-question-background, var(--sjs-general-backcolor, var(--background, #fff))));
 outline: none;
 box-shadow: var(--sjs-shadow-inner-reset, inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)), 0 0 0 2px var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-item--allowhover .sd-selectbase__label:hover .sd-item__decorator {
 background: var(--sjs-editorpanel-hovercolor, var(--sjs-general-backcolor-dim-dark, rgb(243, 243, 243)));
 outline: none;
}

.sd-item--checked .sd-item__decorator {
 background: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-item__control-label {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 font-family: var(--sjs-font-editorfont-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-style: normal;
 font-weight: var(--sjs-font-editorfont-weight, 400);
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 font-size: var(--sjs-internal-font-editorfont-size);
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 white-space: normal;
 width: 100%;
 text-align: left;
 min-width: 0;
}
.sd-item__control-label .sv-string-viewer {
 max-width: 100%;
 overflow: hidden;
 text-overflow: ellipsis;
 display: block;
}

.sd-item--disabled .sd-item__control-label {
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 opacity: 0.25;
}

.sd-root--readonly .sd-item--disabled .sd-item__control-label {
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
}

.sd-item--error .sd-item__decorator {
 background: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
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
 column-gap: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-selectbase--multi-column {
 display: flex;
 flex: 1 1 0px;
}

.sd-selectbase__label {
 display: inline-flex;
 position: relative;
 gap: var(--sjs-base-unit, var(--base-unit, 8px));
 vertical-align: top;
 max-width: 100%;
}

.sd-selectbase__column {
 vertical-align: top;
}

.sd-selectbase__column {
 display: block;
 box-sizing: border-box;
 flex: 1 1 0px;
 min-width: 0;
}

.sd-selectbase__column:not(:last-child) {
 padding-right: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-selectbase__column.sv-q-column-1 {
 width: 100%;
}

.sd-checkbox__decorator {
 border-radius: calc(0.5 * (var(--sjs-corner-radius, 4px)));
}

.sd-checkbox__svg {
 display: block;
 width: calc(2.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(2.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-checkbox__svg use {
 fill: transparent;
 transition: fill var(--sjs-transition-duration, 150ms);
}

.sd-checkbox--checked .sd-checkbox__svg use {
 fill: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
}

.sd-checkbox--checked.sd-checkbox--disabled .sd-checkbox__svg use {
 fill: var(--sjs-border-default, var(--border, #d6d6d6));
}

.sd-checkbox--checked .sd-checkbox__control:focus + .sd-checkbox__decorator .sd-checkbox__svg use {
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-checkbox--checked.sd-checkbox--readonly .sd-checkbox__svg use {
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-checkbox--checked.sd-checkbox--preview .sd-checkbox__svg use {
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-radio__decorator {
 border-radius: 50%;
}
.sd-radio__decorator:after {
 content: " ";
 display: block;
 width: var(--sjs-base-unit, var(--base-unit, 8px));
 height: var(--sjs-base-unit, var(--base-unit, 8px));
 border-radius: 50%;
 background-color: transparent;
 transition: background-color var(--sjs-transition-duration, 150ms);
}

.sd-radio--checked .sd-radio__decorator:after {
 content: " ";
 display: block;
 width: var(--sjs-base-unit, var(--base-unit, 8px));
 height: var(--sjs-base-unit, var(--base-unit, 8px));
 border-radius: 50%;
 background-color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
}

.sd-radio--checked.sd-radio--disabled .sd-radio__decorator:after {
 background-color: var(--sjs-border-default, var(--border, #d6d6d6));
}

.sd-radio--checked.sd-radio--readonly .sd-radio__decorator:after {
 background-color: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-radio--checked.sd-radio--preview .sd-radio__decorator:after {
 display: none;
}
.sd-radio--checked.sd-radio--preview .sd-radio__decorator .sd-radio__svg {
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
 display: block;
 width: calc(2.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(2.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-radio--checked .sd-radio__control:focus + .sd-radio__decorator:after {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-radio__svg {
 display: none;
}

.sd-visuallyhidden {
 position: absolute;
 height: 1px;
 width: 1px;
 overflow: hidden;
 clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
 clip: rect(1px, 1px, 1px, 1px);
}

.sd-matrix fieldset {
 border: none;
 padding: 0;
 margin: 0;
}

.sd-matrix__label {
 display: flex;
 position: relative;
 justify-content: center;
}

.sd-matrix__text {
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-matrix__text--checked {
 background-color: var(--sjs-primary-backcolor-light, var(--primary-light, rgba(25, 179, 148, 0.1)));
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-matrix__cell:first-of-type {
 font-weight: var(--sjs-font-questiontitle-weight, 600);
 text-align: left;
}

:root {
 --sd-rating-bad-color: var(--sjs-special-red, var(--red, #e60a3e));
 --sd-rating-normal-color: var(--sjs-special-yellow, var(--yellow, #ff9814));
 --sd-rating-good-color: var(--sjs-special-green, var(--green, #19b394));
 --sd-rating-bad-color-light: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
 --sd-rating-normal-color-light: var(--sjs-special-yellow-light, var(--yellow-light, rgba(255, 152, 20, 0.1)));
 --sd-rating-good-color-light: var(--sjs-special-green-light, var(--green-light, rgba(25, 179, 148, 0.1)));
}

.sd-rating {
 overflow-x: auto;
 min-height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-rating fieldset {
 display: flex;
 border: none;
 padding: 0 0 2px 0;
 flex-wrap: nowrap;
 gap: var(--sjs-base-unit, var(--base-unit, 8px));
 margin-inline-start: 0;
 align-items: center;
}
.sd-rating.sd-rating--wrappable fieldset {
 flex-wrap: wrap;
 min-width: 0;
}
.sd-rating.sd-rating--labels-top fieldset {
 padding-top: calc(4.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 position: relative;
}
.sd-rating.sd-rating--labels-top fieldset .sd-rating__min-text {
 position: absolute;
 margin: 0;
 left: 0;
 top: 0;
 border: 0;
}
.sd-rating.sd-rating--labels-top fieldset .sd-rating__max-text {
 position: absolute;
 margin: 0;
 right: 0;
 top: 0;
 border: 0;
}
.sd-rating.sd-rating--labels-bottom fieldset {
 padding-bottom: calc(4.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 position: relative;
}
.sd-rating.sd-rating--labels-bottom fieldset .sd-rating__min-text {
 position: absolute;
 margin: 0;
 left: 0;
 bottom: 0;
 border: 0;
}
.sd-rating.sd-rating--labels-bottom fieldset .sd-rating__max-text {
 position: absolute;
 margin: 0;
 right: 0;
 bottom: 0;
 border: 0;
}
.sd-rating.sd-rating--labels-diagonal fieldset {
 padding-top: calc(4.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-bottom: calc(4.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 position: relative;
}
.sd-rating.sd-rating--labels-diagonal fieldset .sd-rating__min-text {
 position: absolute;
 margin: 0;
 left: 0;
 top: 0;
 border: 0;
}
.sd-rating.sd-rating--labels-diagonal fieldset .sd-rating__max-text {
 position: absolute;
 margin: 0;
 right: 0;
 bottom: 0;
 border: 0;
}

.sd-rating--small {
 min-height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin: auto;
}
.sd-rating--small fieldset {
 padding: 0;
 gap: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-rating__item {
 position: relative;
 background: var(--sjs-questionpanel-backcolor, var(--sjs-question-background, var(--sjs-general-backcolor, var(--background, #fff))));
 border-radius: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 white-space: nowrap;
 padding: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 display: flex;
 justify-content: center;
 align-items: center;
 box-sizing: border-box;
 min-width: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 text-align: center;
 border: 0px solid transparent;
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
 font-size: var(--sjs-font-size, 16px);
 box-shadow: var(--sjs-shadow-small, 0px 1px 2px 0px rgba(0, 0, 0, 0.15)), inset 0 0 0 0px var(--sjs-general-backcolor, var(--background, #fff));
 transition: border var(--sjs-transition-duration, 150ms), box-shadow var(--sjs-transition-duration, 150ms), background-color var(--sjs-transition-duration, 150ms);
}

.sd-rating__item--fixed-size {
 width: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding: 0;
}

legend + .sd-rating__item,
legend + sv-ng-rating-item-smiley + .sd-rating__item-smiley,
legend + sv-ng-rating-item + .sd-rating__item {
 margin-inline-start: 2px;
}

.sd-rating__item--error {
 background-color: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
 box-shadow: 0px 1px 2px transparent;
 border: none;
}

.sd-rating__item.sd-rating__item--disabled {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-rating__item.sd-rating__item--selected.sd-rating__item--disabled {
 color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
 background-color: var(--background-semitransparent, rgba(144, 144, 144, 0.5));
 border: none;
}

.sd-rating__item.sd-rating__item--readonly {
 fill: transparent;
 background-color: transparent;
 border: 2px solid var(--sjs-border-inside, var(--border-inside, rgba(0, 0, 0, 0.16)));
 box-shadow: none;
 transform: none;
}
.sd-rating__item.sd-rating__item--readonly .sd-rating__item-text.sd-rating__item-text {
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sd-rating__item.sd-rating__item--selected.sd-rating__item--readonly {
 border-color: var(--sjs-general-forecolor, var(--foreground, #161616));
}
.sd-rating__item.sd-rating__item--selected.sd-rating__item--readonly .sd-rating__item-text.sd-rating__item-text {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-rating__item.sd-rating__item--preview {
 fill: transparent;
 background-color: transparent;
 border: 1px solid transparent;
 box-shadow: none;
 transform: none;
}
.sd-rating__item.sd-rating__item--preview .sd-rating__item-text.sd-rating__item-text {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-rating__item.sd-rating__item--selected.sd-rating__item--preview {
 border-color: var(--sjs-general-forecolor, var(--foreground, #161616));
 border-width: 1px;
}
.sd-rating__item.sd-rating__item--selected.sd-rating__item--preview .sd-rating__item-text.sd-rating__item-text {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-question--disabled .sd-rating__item-text {
 opacity: 0.25;
}

.sd-rating__item--allowhover:hover {
 background-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
}

.sd-rating__item:focus-within {
 border: 2px solid var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-rating__item--selected {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 border: 2px solid var(--sjs-primary-backcolor, var(--primary, #19b394));
 color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
 font-weight: 600;
 box-shadow: 0px 1px 2px transparent;
}

.sd-rating__item--selected:focus-within {
 box-shadow: var(--sjs-shadow-small-reset, 0px 0px 0px 0px rgba(0, 0, 0, 0.15)), inset 0 0 0 2px var(--sjs-general-backcolor, var(--background, #fff));
}

.sd-rating__item-smiley {
 position: relative;
 border-radius: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 white-space: nowrap;
 padding: calc(1.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 box-sizing: border-box;
 min-width: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 text-align: center;
 border: 2px solid var(--sjs-border-default, var(--border, #d6d6d6));
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 fill: var(--sjs-border-default, var(--border, #d6d6d6));
 box-shadow: var(--sjs-shadow-small-reset, 0px 0px 0px 0px rgba(0, 0, 0, 0.15)), inset 0 0 0 0px var(--sjs-general-backcolor, var(--background, #fff));
 transition: border var(--sjs-transition-duration, 150ms), box-shadow var(--sjs-transition-duration, 150ms), background-color var(--sjs-transition-duration, 150ms);
}
.sd-rating__item-smiley svg {
 display: block;
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-rating__item-smiley--small {
 padding: calc(0.625 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 min-width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-width: 1px;
}
.sd-rating__item-smiley--small svg {
 width: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-rating__item-smiley--small.sd-rating__item-smiley--selected:focus-within {
 box-shadow: inset 0 0 0 1px var(--sjs-general-backcolor, var(--background, #fff));
}

legend + .sd-rating__item-smiley,
legend + sv-ng-rating-item + .sd-rating__item-smiley {
 margin-inline-start: 2px;
}

.sd-rating__item-smiley--scale-colored {
 transition: border var(--sjs-transition-duration, 150ms), box-shadow var(--sjs-transition-duration, 150ms), opacity var(--sjs-transition-duration, 150ms), background-color var(--sjs-transition-duration, 150ms);
}

.sd-rating__item-smiley--error {
 background-color: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
 border-color: transparent;
 fill: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}
.sd-rating__item-smiley--error.sd-rating__item-smiley--scale-colored:not(.sd-rating__item-smiley--selected) {
 opacity: initial;
}

.sd-rating__item-smiley.sd-rating__item-smiley--disabled {
 opacity: 0.5;
}

.sd-rating__item-smiley.sd-rating__item-smiley--selected.sd-rating__item-smiley--disabled {
 opacity: initial;
 fill: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
}

.sd-rating__item-smiley.sd-rating__item-smiley--selected.sd-rating__item-smiley--readonly {
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
 border-color: var(--sjs-general-forecolor, var(--foreground, #161616));
 background-color: unset;
}

.sd-rating__item-smiley.sd-rating__item-smiley--preview {
 border-color: var(--sjs-general-forecolor, var(--foreground, #161616));
 border-width: 1px;
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
}
.sd-rating__item-smiley.sd-rating__item-smiley--preview svg {
 margin: 1px;
}

.sd-rating__item-smiley.sd-rating__item-smiley--selected.sd-rating__item-smiley--preview {
 fill: var(--sjs-general-backcolor, var(--background, #fff));
 background-color: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-rating__item-smiley--allowhover:hover {
 background-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
 border-color: var(--sjs-border-default, var(--border, #d6d6d6));
}

.sd-rating__item-smiley:focus-within {
 border-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-rating__item-smiley--selected {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 border-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 fill: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
 font-weight: 600;
}

.sd-rating__item-smiley--selected:focus-within {
 box-shadow: var(--sjs-shadow-small-reset, 0px 0px 0px 0px rgba(0, 0, 0, 0.15)), inset 0 0 0 2px var(--sjs-general-backcolor, var(--background, #fff));
}

.sd-rating__item-smiley--scale-colored:not(.sd-rating__item-smiley--selected) {
 opacity: 0.25;
}
.sd-rating__item-smiley--scale-colored:not(.sd-rating__item-smiley--selected).sd-rating__item-smiley--allowhover:hover {
 opacity: 0.5;
}

.sd-rating__item-smiley--rate-colored:not(.sd-rating__item-smiley--selected).sd-rating__item-smiley--allowhover:hover {
 opacity: 0.5;
}

.sd-rating__item-smiley--scale-colored:not(.sd-rating__item-smiley--selected):focus-within {
 opacity: 1;
}

.sd-rating__item-smiley--scale-colored.sd-rating__item-smiley--selected, .sd-rating__item-smiley--scale-colored.sd-rating__item-smiley--readonly, .sd-rating__item-smiley--scale-colored.sd-rating__item-smiley--preview {
 opacity: 1;
}

.sd-rating__item-star {
 position: relative;
 width: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-rating__item-star:not(:first-of-type) {
 padding-left: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-left: calc(-0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-rating__item-star:not(:last-of-type) {
 padding-right: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-right: calc(-0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-rating__item-star svg {
 stroke: var(--sjs-border-default, var(--border, #d6d6d6));
 stroke-width: 2px;
 fill: transparent;
 width: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 display: block;
 position: absolute;
 transition: stroke var(--sjs-transition-duration, 150ms), opacity var(--sjs-transition-duration, 150ms), fill var(--sjs-transition-duration, 150ms);
}
.sd-rating__item-star .sv-star {
 opacity: 1;
}
.sd-rating__item-star .sv-star-2 {
 opacity: 0;
}

.sd-rating__item-star--small {
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-rating__item-star--small svg {
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-rating__item-star--small.sd-rating__item-star--selected svg {
 stroke-width: 1px;
}

.sd-rating__item-star--selected svg {
 stroke: transparent;
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-rating__item-star--error svg {
 stroke: none;
 fill: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
}

.sd-rating__item-star--disabled {
 opacity: 0.5;
}
.sd-rating__item-star--disabled svg {
 stroke: var(--sjs-border-default, var(--border, #d6d6d6));
 fill: none;
}

.sd-rating__item-star--selected.sd-rating__item-star--disabled svg {
 stroke: none;
 fill: var(--sjs-border-default, var(--border, #d6d6d6));
}

.sd-rating__item-star--readonly svg {
 stroke: var(--sjs-border-default, var(--border, #d6d6d6));
 fill: none;
}

.sd-rating__item-star--selected.sd-rating__item-star--readonly svg {
 stroke: none;
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-rating__item-star--preview svg {
 stroke: var(--sjs-general-forecolor, var(--foreground, #161616));
 stroke-width: 1px;
 fill: none;
}

.sd-rating__item-star--selected.sd-rating__item-star--preview svg {
 stroke: none;
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-rating__item-star:focus-within svg {
 stroke: var(--sjs-primary-backcolor, var(--primary, #19b394));
 fill: transparent;
}

.sd-rating__item-star--unhighlighted svg {
 stroke: transparent;
 fill: var(--sjs-border-default, var(--border, #d6d6d6));
}

.sd-rating__item-star--highlighted svg {
 stroke: var(--sjs-border-default, var(--border, #d6d6d6));
 fill: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
}

.sd-rating__item-star--selected.sd-rating__item-star--unhighlighted:focus-within svg {
 stroke: var(--sjs-border-default, var(--border, #d6d6d6));
 fill: var(--sjs-border-default, var(--border, #d6d6d6));
}

.sd-rating__item-star--selected:focus-within svg {
 stroke: var(--sjs-primary-backcolor, var(--primary, #19b394));
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sd-rating__item-star--selected:focus-within .sv-star {
 opacity: 0;
}
.sd-rating__item-star--selected:focus-within .sv-star-2 {
 opacity: 1;
}

.sd-rating__item-text.sd-rating__item-text {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 font-family: var(--sjs-font-editorfont-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-editorfont-weight, 400);
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 font-size: var(--sjs-internal-font-editorfont-size);
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 display: inline-block;
 border: 2px solid transparent;
 box-sizing: border-box;
 transition: color var(--sjs-transition-duration, 150ms);
}
.sd-rating__item-text.sd-rating__item-text.sd-rating__min-text, .sd-rating__item-text.sd-rating__item-text.sd-rating__max-text {
 margin-top: calc(1.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-bottom: calc(1.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 color: var(--sjs-font-questiondescription-color, var(--sjs-general-forecolor-light, rgba(0, 0, 0, 0.45)));
}
.sd-rating__item-text.sd-rating__item-text.sd-rating__min-text {
 margin-right: var(--sjs-base-unit, var(--base-unit, 8px));
 border-left: 0px;
}
.sd-rating__item-text.sd-rating__item-text.sd-rating__max-text {
 margin-right: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-left: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-rating__item-text.sd-rating__item-text .sv-string-editor {
 white-space: nowrap;
}
.sd-rating__item-text.sd-rating__item-text.sd-rating__item--fixed-size {
 min-width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-rating--wrappable .sd-rating__item-text {
 max-width: 100%;
}
.sd-rating--wrappable .sd-rating__item-text .sv-string-viewer {
 max-width: 100%;
 text-overflow: ellipsis;
 overflow: hidden;
 display: block;
}

.sd-rating__item:focus-within .sd-rating__item-text.sd-rating__item-text {
 border: none;
}

.sd-rating__item--selected .sd-rating__item-text.sd-rating__item-text {
 color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
 font-weight: inherit;
 border: none;
}

.sd-rating-dropdown-item {
 display: flex;
 width: 100%;
 justify-content: space-between;
 align-items: center;
 gap: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-rating-dropdown-item_description {
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-style: normal;
 font-weight: normal;
 font-size: calc(0.75 * (var(--sjs-font-size, 16px)));
 line-height: var(--sjs-font-size, 16px);
}

.sv-list__item.sv-list__item--selected .sd-rating-dropdown-item_description {
 color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
}

.sv-ranking-item--error .sv-ranking-item__index {
 background-color: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
 box-shadow: 0px 1px 2px transparent;
 border-color: transparent;
}

.sd-element--with-frame .sv-ranking-item {
 left: calc(-3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-ranking.sd-ranking--readonly {
 user-select: initial;
 -webkit-user-select: initial;
}
.sv-ranking.sd-ranking--readonly.sv-ranking--select-to-rank-empty-value .sv-ranking__containers-divider {
 visibility: hidden;
}
.sv-ranking.sd-ranking--readonly .sv-ranking__container--empty {
 visibility: hidden;
}

.sv-ranking.sd-ranking--preview {
 user-select: initial;
 -webkit-user-select: initial;
}
.sv-ranking.sd-ranking--preview.sv-ranking--select-to-rank-empty-value .sv-ranking__containers-divider {
 visibility: hidden;
}
.sv-ranking.sd-ranking--preview .sv-ranking__container--empty {
 visibility: hidden;
}

@container (max-width: 496px) {
 .sv-ranking--select-to-rank-horizontal {
   flex-direction: column-reverse;
 }
 .sv-ranking--select-to-rank-horizontal .sv-ranking__containers-divider {
   margin: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
   height: 1px;
   width: initial;
 }
 .sv-ranking--select-to-rank-horizontal .sv-ranking__container--empty {
   padding-top: var(--sjs-base-unit, var(--base-unit, 8px));
   padding-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .sv-ranking--select-to-rank-horizontal .sv-ranking__container {
   max-width: initial;
 }
 .sv-ranking--select-to-rank-horizontal .sv-ranking__container--to .sv-ranking-item {
   left: initial;
 }
 .sv-ranking--select-to-rank-horizontal .sv-ranking__container--empty.sv-ranking__container--to .sv-ranking-item {
   left: initial;
 }
 .sv-ranking--select-to-rank-horizontal .sv-ranking__container--empty.sv-ranking__container--to .sv-ranking__container-placeholder {
   padding-left: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
   padding-right: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 }
 .sv-ranking--select-to-rank-horizontal .sv-ranking__container--empty.sv-ranking__container--from .sv-ranking__container-placeholder {
   padding-right: initial;
 }
}
@container (max-width: 176px) {
 .sv-ranking__container--empty.sv-ranking__container--to .sv-ranking__container-placeholder {
   margin-left: calc(-5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
   margin-right: calc(-5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 }
}
.sd-element--with-frame .sv-ranking--mobile .sv-ranking-item__icon-container {
 margin-left: 0;
 margin-right: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-element--with-frame .sv-ranking--mobile .sv-ranking-item {
 left: 0;
}

.sv-ranking-item__content.sd-ranking-item__content {
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
}

.sv-dragdrop-movedown {
 transform: translate(0, 0);
 animation: svdragdropmovedown 0.1s;
 animation-timing-function: ease-in-out;
}

@keyframes svdragdropmovedown {
 0% {
   transform: translate(0, -50px);
 }
 100% {
   transform: translate(0, 0);
 }
}
.sv-dragdrop-moveup {
 transform: translate(0, 0);
 animation: svdragdropmoveup 0.1s;
 animation-timing-function: ease-in-out;
}

@keyframes svdragdropmoveup {
 0% {
   transform: translate(0, 50px);
 }
 100% {
   transform: translate(0, 0);
 }
}
.sv-dropdown_select-wrapper {
 position: relative;
}

.sv-dropdown_select-wrapper use {
 fill: var(--sjs-font-editorfont-placeholdercolor, var(--sjs-general-forecolor-light, var(--foreground-light, #909090)));
}

.sd-dropdown {
 -webkit-appearance: none;
 -moz-appearance: none;
 appearance: none;
 padding-inline-end: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-inline-start: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 opacity: 1;
 display: flex;
 justify-content: space-between;
 word-spacing: normal;
}

.sd-dropdown[disabled] {
 pointer-events: none;
}

.sd-dropdown--empty:not(.sd-input--disabled),
.sd-dropdown--empty:not(.sd-input--disabled) .sd-dropdown__value {
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sd-dropdown__input-field-component {
 height: auto;
}

.sd-dropdown option {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-size: var(--sjs-font-size, 16px);
}

.sd-dropdown input[readonly] {
 pointer-events: none;
}

.sd-dropdown__value {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 width: 100%;
 min-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 font-family: var(--sjs-font-editorfont-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-editorfont-weight, 400);
 color: var(--sjs-font-editorfont-color, var(--sjs-general-forecolor, rgba(0, 0, 0, 0.91)));
 font-size: var(--sjs-internal-font-editorfont-size);
 position: relative;
}

.sd-dropdown_clean-button {
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 var(--sjs-base-unit, var(--base-unit, 8px));
 margin: auto 0;
}

.sd-dropdown_chevron-button {
 position: absolute;
 width: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 top: 0;
 bottom: 0;
 inset-inline-end: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 padding-inline-end: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-dropdown_chevron-button-svg,
.sd-dropdown_clean-button-svg {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 width: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
}

.sd-input.sd-dropdown:focus-within {
 box-shadow: var(--sjs-shadow-inner-reset, inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)), 0 0 0 2px var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-dropdown__filter-string-input {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: 100%;
 max-width: 100%;
 border: none;
 outline: none;
 padding: 0;
 font-family: var(--sjs-font-editorfont-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-editorfont-weight, 400);
 color: var(--sjs-font-editorfont-color, var(--sjs-general-forecolor, rgba(0, 0, 0, 0.91)));
 font-size: var(--sjs-internal-font-editorfont-size);
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 background-color: transparent;
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 display: inline-block;
 appearance: none;
}

.sd-dropdown--empty:not(.sd-input--disabled) .sd-dropdown__filter-string-input::placeholder {
 color: var(--sjs-font-editorfont-placeholdercolor, var(--sjs-general-forecolor-light, var(--foreground-light, #909090)));
}

.sd-dropdown__filter-string-input::placeholder {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 width: 100%;
 max-width: 100%;
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 display: inline-block;
 appearance: none;
}

.sd-dropdown__hint-prefix {
 color: var(--sjs-font-editorfont-placeholdercolor, var(--sjs-general-forecolor-light, var(--foreground-light, #909090)));
}
.sd-dropdown__hint-prefix span {
 white-space: pre;
}

.sd-dropdown__hint-suffix {
 display: flex;
 color: var(--sjs-font-editorfont-placeholdercolor, var(--sjs-general-forecolor-light, var(--foreground-light, #909090)));
}
.sd-dropdown__hint-suffix span {
 white-space: pre;
}

.sd-input--disabled .sv-string-viewer,
.sd-input--readonly .sv-string-viewer,
.sd-input--preview .sv-string-viewer {
 max-width: 100%;
 overflow: hidden;
 text-overflow: ellipsis;
}

.sd-question--readonly .sd-dropdown_chevron-button use {
 opacity: 0.24;
}

.sd-question--preview .sd-dropdown_chevron-button {
 display: none;
}

.sv-dropdown-popup .sd-list__item-body {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 font-size: var(--sjs-internal-font-editorfont-size);
 font-weight: var(--sjs-font-editorfont-weight, 400);
 font-family: var(--sjs-font-editorfont-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 padding-inline-end: calc(1.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-block: calc(1.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-inline-start: calc(1.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid transparent;
 border-radius: var(--sjs-corner-radius, 4px);
 transition: border-color var(--sjs-transition-duration, 150ms);
}
.sv-dropdown-popup .sv-list__item.sv-list__item--focused:not(.sv-list__item--selected) .sv-list__item-body {
 border: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid var(--sjs-border-light, var(--border-light, #eaeaea));
 padding-inline-end: calc(1.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-block: calc(1.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-inline-start: calc(1.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv-dropdown-popup .sv-list__item span {
 margin-inline-start: calc(-0.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-dropdown-popup.sv-single-select-list.sv-popup--animate-leave .sd-list__item.sv-list__item--selected .sv-list__item-body {
 font-weight: normal;
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 background-color: transparent;
}

.sv-dropdown-popup.sv-popup--dropdown.sv-popup--top .sv-popup__container {
 transform: translateY(-2px);
}

.sv-dropdown-popup.sv-popup--dropdown.sv-popup--bottom .sv-popup__container {
 transform: translateY(2px);
}

[dir=rtl] .sd-dropdown,
[style*="direction:rtl"] .sd-dropdown,
[style*="direction: rtl"] .sd-dropdown {
 background-position: left calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) top 50%, 0 0;
}

.sd-input.sd-tagbox:not(.sd-tagbox--empty).sd-input--editable {
 height: auto;
 padding: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-inline-end: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-inline-start: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-tagbox.sd-input--disabled, .sd-tagbox.sd-input--readonly, .sd-tagbox.sd-input--preview {
 white-space: normal;
}

.sd-tagbox_clean-button {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 padding: calc(0.5 * (var(--sjs-internal-font-editorfont-size)));
 margin: auto 0;
}

.sd-input.sd-tagbox:focus-within {
 box-shadow: var(--sjs-shadow-inner-reset, inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)), 0 0 0 2px var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sv-tagbox__item {
 position: relative;
 display: flex;
 align-items: center;
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 border-radius: calc(0.5 * (var(--sjs-corner-radius, 4px)));
 max-width: 100%;
 box-sizing: border-box;
}

.sv-tagbox__item-text {
 color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
 min-width: calc(5.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 text-align: center;
 font-weight: 600;
}
.sv-tagbox__item-text span {
 display: block;
 text-overflow: ellipsis;
 overflow: hidden;
}

.sv-tagbox__item:hover .sd-tagbox-item_clean-button,
.sv-tagbox__item:focus .sd-tagbox-item_clean-button,
.sv-tagbox__item:focus-within .sd-tagbox-item_clean-button {
 align-self: center;
 opacity: 1;
}

.sd-tagbox-item_clean-button {
 display: flex;
 position: absolute;
 inset-inline-end: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding: 0;
 padding-inline-start: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background: linear-gradient(270deg, var(--sjs-primary-backcolor, var(--primary, #19b394)) 53.12%, rgba(25, 179, 148, 0) 100%);
 opacity: 0;
 transition: opacity var(--sjs-transition-duration, 150ms);
}

.sd-tagbox-item_clean-button-svg {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 display: block;
 padding: calc(0.25 * (var(--sjs-internal-font-editorfont-size)));
 width: var(--sjs-internal-font-editorfont-size);
 height: var(--sjs-internal-font-editorfont-size);
}

.sd-tagbox-item_clean-button-svg:hover {
 border-radius: 100px;
 background: var(--sjs-primary-forecolor-light, var(--primary-foreground-disabled, rgba(255, 255, 255, 0.25)));
}

.sd-tagbox-item_clean-button-svg use {
 fill: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
}

.sd-tagbox__value.sd-dropdown__value {
 position: relative;
 gap: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 display: flex;
 flex-wrap: wrap;
 flex-grow: 1;
 padding-inline: unset;
 margin-inline: unset;
 margin-block: unset;
}

.sd-tagbox__filter-string-input {
 width: 100%;
 display: flex;
 flex-grow: 1;
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
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

[dir=rtl] .sd-tagbox-item_clean-button,
[style*="direction:rtl"] .sd-tagbox-item_clean-button,
[style*="direction: rtl"] .sd-tagbox-item_clean-button {
 background: linear-gradient(90deg, var(--sjs-primary-backcolor, var(--primary, #19b394)) 53.12%, rgba(25, 179, 148, 0) 100%);
}

.sd-tagbox.sd-tagbox--empty .sd-tagbox__hint,
.sd-tagbox.sd-tagbox--empty .sd-tagbox__hint-suffix-wrapper,
.sd-tagbox.sd-tagbox--empty .sd-tagbox__filter-string-input {
 width: 100%;
}

.sd-tagbox__hint {
 display: flex;
 flex-grow: 1;
}

.sd-tagbox__hint-suffix-wrapper {
 position: relative;
 width: 100%;
}

.sd-dropdown__hint-suffix.sd-tagbox__hint-suffix {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 height: 100%;
 display: flex;
 align-items: center;
}

.sd-dropdown__hint-prefix.sd-tagbox__hint-prefix {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 height: 100%;
 display: flex;
 align-items: center;
}

.sd-imagepicker {
 display: flex;
 flex-wrap: wrap;
 padding: 0;
 border: none;
 gap: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: 100%;
 margin: 0;
}

.sd-imagepicker--column {
 align-items: flex-start;
 flex-direction: column;
}

@supports not (aspect-ratio: 1/1) {
 .sd-imagepicker > div {
   margin-right: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 }
}
.sd-imagepicker__item img,
.sd-imagepicker__item .sd-imagepicker__image-container > div {
 border-radius: var(--sjs-corner-radius, 4px);
 background-color: var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9));
}

.sd-imagepicker__item-decorator {
 position: relative;
 display: flex;
 flex-direction: column;
 align-items: center;
}

.sd-imagepicker__label {
 position: relative;
}
.sd-imagepicker__label .sd-visuallyhidden {
 height: 100%;
 margin: 0;
}

.sd-imagepicker__image-container {
 position: relative;
}

.sd-imagepicker__check-decorator {
 display: block;
 opacity: 0;
 position: absolute;
 top: var(--sjs-base-unit, var(--base-unit, 8px));
 right: var(--sjs-base-unit, var(--base-unit, 8px));
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 box-sizing: border-box;
 border-radius: 100%;
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
 z-index: 1;
 transition: opacity var(--sjs-transition-duration, 150ms);
}

.sd-imagepicker__check-icon {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 display: block;
 width: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-imagepicker__item--checked .sd-imagepicker__check-decorator {
 opacity: 1;
}

.sd-imagepicker__item--error .sd-imagepicker__image-container::before {
 display: block;
 position: absolute;
 content: " ";
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 background-color: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
 border-radius: var(--sjs-corner-radius, 4px);
 background: linear-gradient(0deg, var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1))), var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1))));
}

.sd-imagepicker__item:focus-within .sd-imagepicker__image,
.sd-imagepicker__item--allowhover .sd-imagepicker__image:hover {
 opacity: 0.5;
}

.sd-imagepicker__image {
 display: block;
 box-sizing: border-box;
 max-width: 100%;
 transition: opacity var(--sjs-transition-duration, 150ms);
}

.sd-imagepicker__text {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 font-size: var(--sjs-internal-font-editorfont-size);
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 margin-top: var(--sjs-base-unit, var(--base-unit, 8px));
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
}

.sd-imagepicker__no-image {
 display: flex;
 background-color: var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9));
 inset-block-start: 0;
}

.sd-imagepicker__no-image-svg {
 height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin: auto;
}
.sd-imagepicker__no-image-svg use {
 fill: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sd-imagepicker__column {
 display: flex;
 flex-direction: column;
 gap: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 align-items: flex-start;
 padding-right: 0;
}
.sd-imagepicker__column .sd-imagepicker__item {
 width: 100%;
}
.sd-imagepicker__column .sd-imagepicker__text {
 width: 100%;
 display: inline-block;
 overflow: hidden;
 text-overflow: ellipsis;
 text-align: center;
}

.sd-selectbase__column.sd-imagepicker__column:not(:last-child) {
 padding-right: 0;
}

.sd-imagepicker__item--readonly .sd-imagepicker__check-icon {
 fill: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-imagepicker__item--preview .sd-imagepicker__check-decorator {
 display: none;
}
.sd-imagepicker__item--preview .sd-imagepicker__image {
 /* Safari 6.0 - 9.0 */
 -webkit-filter: grayscale(100%);
 filter: grayscale(100%);
 opacity: 0.25;
}
.sd-imagepicker__item--preview.sd-imagepicker__item--checked .sd-imagepicker__image {
 /* Safari 6.0 - 9.0 */
 -webkit-filter: grayscale(0%);
 filter: grayscale(0%);
 opacity: 1;
}

.sd-image__image {
 display: block;
 max-width: 100%;
 border-radius: var(--sjs-corner-radius, 4px);
}

.sd-image__image--adaptive {
 width: 100%;
 height: auto;
 max-width: calc(80 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-image__no-image {
 background: var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9));
 min-width: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 min-height: calc(27.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: 100%;
 height: 100%;
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
}

.sd-image__no-image use {
 fill: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

:root {
 --sjs-transition-duration: 150ms;
}

.sd-html {
 white-space: initial;
}

.sd-html {
 font-size: var(--sjs-article-font-default-fontSize, var(--sjs-font-size, 16px));
 text-decoration: var(--sjs-article-font-default-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-default-fontWeight, 400);
 font-style: var(--sjs-article-font-default-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-default-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-default-letterSpacing, 0);
 line-height: var(--sjs-article-font-default-lineHeight, 28px);
 text-indent: var(--sjs-article-font-default-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-default-textCase, "none");
 color: var(--sjs-font-pagetitle-color, var(--sjs-general-dim-forecolor, rgba(0, 0, 0, 0.91)));
}
.sd-html h1 {
 font-size: var(--sjs-article-font-xx-large-fontSize, calc(4 * (var(--sjs-font-size, 16px))));
 text-decoration: var(--sjs-article-font-xx-large-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-xx-large-fontWeight, 700);
 font-style: var(--sjs-article-font-xx-large-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-xx-large-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-xx-large-letterSpacing, 0);
 line-height: var(--sjs-article-font-xx-large-lineHeight, 64px);
 text-indent: var(--sjs-article-font-xx-large-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-xx-large-textCase, "none");
}
.sd-html h2 {
 font-size: var(--sjs-article-font-x-large-fontSize, calc(3 * (var(--sjs-font-size, 16px))));
 text-decoration: var(--sjs-article-font-x-large-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-x-large-fontWeight, 700);
 font-style: var(--sjs-article-font-x-large-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-x-large-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-x-large-letterSpacing, 0);
 line-height: var(--sjs-article-font-x-large-lineHeight, 56px);
 text-indent: var(--sjs-article-font-x-large-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-x-large-textCase, "none");
}
.sd-html h3 {
 font-size: var(--sjs-article-font-large-fontSize, calc(2 * (var(--sjs-font-size, 16px))));
 text-decoration: var(--sjs-article-font-large-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-large-fontWeight, 700);
 font-style: var(--sjs-article-font-large-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-large-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-large-letterSpacing, 0);
 line-height: var(--sjs-article-font-large-lineHeight, 40px);
 text-indent: var(--sjs-article-font-large-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-large-textCase, "none");
}
.sd-html h4,
.sd-html h5,
.sd-html h6 {
 font-size: var(--sjs-article-font-medium-fontSize, calc(1.5 * (var(--sjs-font-size, 16px))));
 text-decoration: var(--sjs-article-font-medium-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-medium-fontWeight, 700);
 font-style: var(--sjs-article-font-medium-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-medium-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-medium-letterSpacing, 0);
 line-height: var(--sjs-article-font-medium-lineHeight, 32px);
 text-indent: var(--sjs-article-font-medium-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-medium-textCase, "none");
}
.sd-html td,
.sd-html span,
.sd-html div,
.sd-html p {
 font-size: var(--sjs-article-font-default-fontSize, var(--sjs-font-size, 16px));
 text-decoration: var(--sjs-article-font-default-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-default-fontWeight, 400);
 font-style: var(--sjs-article-font-default-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-default-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-default-letterSpacing, 0);
 line-height: var(--sjs-article-font-default-lineHeight, 28px);
 text-indent: var(--sjs-article-font-default-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-default-textCase, "none");
}
.sd-html a {
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sd-html button {
 display: flex;
 align-items: center;
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 vertical-align: baseline;
 text-align: center;
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
 border: none;
 border-radius: var(--sjs-corner-radius, 4px);
 cursor: pointer;
 user-select: none;
 outline: solid calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px)))) transparent;
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 font-weight: 600;
 font-style: normal;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-size: var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px));
 line-height: calc(1.5 * (var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px))));
 box-shadow: var(--sjs-shadow-small, 0px 1px 2px 0px rgba(0, 0, 0, 0.15)), 0 0 0 0px var(--sjs-primary-backcolor, var(--primary, #19b394));
 transition: box-shadow var(--sjs-transition-duration, 150ms);
}
.sd-html button:hover {
 background-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
}
.sd-html button:focus {
 box-shadow: var(--sjs-shadow-small-reset, 0px 0px 0px 0px rgba(0, 0, 0, 0.15)), 0 0 0 2px var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sd-html button span {
 display: flex;
 align-items: center;
 flex-grow: 1;
 justify-content: center;
}

.sd-html--nested {
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
}

.sd-expression {
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 font-size: var(--sjs-font-size, 16px);
}

.sd-question__content--left .sd-expression {
 line-height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
}

.sd-progress {
 height: 2px;
 background-color: var(--sjs-border-light, var(--border-light, #eaeaea));
 position: relative;
}

.sd-progress__bar {
 position: relative;
 height: 100%;
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 overflow: hidden;
}

.sd-progress__text {
 position: absolute;
 margin-top: var(--sjs-base-unit, var(--base-unit, 8px));
 right: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
 font-size: calc(0.75 * (var(--sjs-font-size, 16px)));
 line-height: var(--sjs-font-size, 16px);
 font-weight: 600;
}
@media only screen and (min-width: calc(125 * (var(--sjs-base-unit, var(--base-unit, 8px))))) {
 .sd-progress__text {
   margin-left: 5%;
 }
}
@media only screen and (max-width: calc(125 * (var(--sjs-base-unit, var(--base-unit, 8px))))) {
 .sd-progress__text {
   margin-left: 10px;
 }
}

.sd-body__progress--top {
 margin-bottom: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 position: sticky;
 top: 0;
 z-index: 50;
}

.sd-body__progress--bottom .sd-progress__text {
 margin-top: calc(-3.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-boolean {
 display: flex;
 width: max-content;
 position: relative;
 gap: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background-color: var(--sjs-editorpanel-backcolor, var(--sjs-editor-background, var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9))));
 border-radius: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 box-shadow: var(--sjs-shadow-inner, inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)), 0 0 0 0px var(--sjs-primary-backcolor, var(--primary, #19b394));
 transition: box-shadow var(--sjs-transition-duration, 150ms);
}
.sd-boolean.sd-boolean--allowhover:focus-within {
 box-shadow: var(--sjs-shadow-inner-reset, inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)), 0 0 0 2px var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-boolean__thumb,
.sd-boolean__label {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 display: block;
 font-family: var(--sjs-font-editorfont-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-editorfont-weight, 400);
 font-size: var(--sjs-internal-font-editorfont-size);
 color: var(--sjs-font-editorfont-placeholdercolor, var(--sjs-general-forecolor-light, var(--foreground-light, #909090)));
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-boolean__switch {
 display: flex;
 padding: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 align-items: center;
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 box-sizing: border-box;
 border-radius: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-boolean.sd-boolean--checked .sd-boolean__label--true,
.sd-boolean:not(.sd-boolean--checked):not(sd-boolean--indeterminate) .sd-boolean__label--false {
 color: transparent;
 transition-duration: 0.15s;
 transition-property: color;
 transition-timing-function: linear;
}

.sd-boolean.sd-boolean--indeterminate .sd-boolean__switch {
 display: none;
}

.sd-boolean--indeterminate .sd-boolean__thumb {
 display: none;
}

.sd-boolean__thumb {
 background-color: var(--sjs-questionpanel-backcolor, var(--sjs-question-background, var(--sjs-general-backcolor, var(--background, #fff))));
 box-shadow: var(--sjs-shadow-small, 0px 1px 2px 0px rgba(0, 0, 0, 0.15));
 border-radius: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 transition-duration: 0.2s;
 transition-property: margin-left;
 transition-timing-function: linear;
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 font-weight: 600;
 margin-left: 0%;
 z-index: 2;
}
.sd-boolean__thumb .sv-string-viewer.sv-string-viewer--multiline {
 white-space: nowrap;
}

.sd-boolean--checked .sd-boolean__thumb {
 margin-left: 50%;
}

.sd-boolean--exchanged .sd-boolean__thumb {
 margin-left: calc(50% + 0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-boolean--exchanged.sd-boolean--checked .sd-boolean__thumb {
 margin-left: 0%;
}
.sd-boolean--exchanged.sd-boolean:not(.sd-boolean--checked):not(sd-boolean--indeterminate) .sd-boolean__label--false, .sd-boolean--exchanged.sd-boolean.sd-boolean--checked .sd-boolean__label--true {
 color: var(--sjs-font-editorfont-placeholdercolor, var(--sjs-general-forecolor-light, var(--foreground-light, #909090)));
}

.sd-boolean--disabled {
 pointer-events: none;
}
.sd-boolean--disabled .sd-boolean__thumb,
.sd-boolean--disabled .sd-boolean__label {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 opacity: 0.25;
}

.sd-boolean--readonly {
 pointer-events: none;
 box-shadow: none;
 transition: none;
 background: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
}
.sd-boolean--readonly .sd-boolean__thumb {
 box-shadow: inset 0px 0px 0px 2px var(--sjs-general-forecolor, var(--foreground, #161616));
 transition: none;
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-boolean--preview {
 pointer-events: none;
 box-shadow: none;
 transition: none;
 background: transparent;
}
.sd-boolean--preview .sd-boolean__thumb {
 border: 1px solid var(--sjs-general-forecolor, var(--foreground, #161616));
 box-shadow: none;
 transition: none;
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
}
.sd-boolean--preview.sd-boolean--checked .sd-boolean__thumb, .sd-boolean--preview.sd-boolean--indeterminate .sd-boolean__thumb {
 margin-left: auto;
}
.sd-boolean--preview .sd-checkbox__label--preview {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-boolean__thumb-ghost {
 z-index: 1;
 border-radius: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background-color: transparent;
 transition: background-color var(--sjs-transition-duration, 150ms);
}

.sd-boolean.sd-boolean--allowhover .sd-boolean__thumb-ghost:hover {
 background-color: var(--sjs-editorpanel-hovercolor, var(--sjs-general-backcolor-dim-dark, rgb(243, 243, 243)));
}

.sd-boolean--error {
 background-color: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
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
.sd-paneldynamic .sd-paneldynamic__panel-wrapper > .sd-panel > .sd-panel__header {
 padding-bottom: 0;
 padding-top: var(--sd-base-vertical-padding);
}
.sd-paneldynamic .sd-paneldynamic__panel-wrapper > .sd-panel > .sd-panel__header:after {
 display: none;
}
.sd-paneldynamic .sd-paneldynamic__panel-wrapper > .sd-panel > .sd-panel__header > .sd-panel__title {
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

.sd-question--readonly .sd-paneldynamic .sd-question__placeholder,
.sd-question--preview .sd-paneldynamic .sd-question__placeholder {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-paneldynamic__separator {
 display: none;
}

.sd-paneldynamic__panel-wrapper {
 box-sizing: border-box;
 padding-bottom: calc(1 * var(--sd-base-padding));
}

.sd-paneldynamic__panel-wrapper:after {
 display: table;
 clear: both;
 content: " ";
}

.sd-paneldynamic__footer .sd-paneldynamic__separator,
.sd-paneldynamic__panel-wrapper--list ~ .sd-paneldynamic__panel-wrapper--list:before {
 content: " ";
 display: block;
 position: absolute;
 left: 0;
 right: 0;
 margin: 0;
 border-color: var(--sjs-border-light, var(--border-light, #eaeaea));
 background: var(--sjs-border-light, var(--border-light, #eaeaea));
 height: 1px;
 border: none;
}

.sd-paneldynamic__separator:only-child {
 display: none;
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
 width: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-paneldynamic__footer .sd-paneldynamic__add-btn,
.sd-paneldynamic__footer .sd-paneldynamic__progress-text,
.sd-paneldynamic__footer .sd-paneldynamic__progress--bottom {
 display: initial;
}

.sd-paneldynamic__buttons-container {
 display: flex;
 align-items: center;
 padding: calc(var(--sd-base-vertical-padding) - var(--sjs-base-unit, var(--base-unit, 8px))) 0;
}

.sd-paneldynamic__progress-container {
 display: flex;
 align-items: center;
 margin-left: auto;
 margin-right: calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-paneldynamic__progress-text {
 font-size: var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px));
 line-height: calc(1.5 * (var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px))));
 color: var(--sjs-font-questiondescription-color, var(--sjs-general-forecolor-light, rgba(0, 0, 0, 0.45)));
 margin: 0;
 margin-right: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-paneldynamic__prev-btn,
.sd-paneldynamic__next-btn {
 width: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-paneldynamic__prev-btn .sv-svg-icon,
.sd-paneldynamic__next-btn .sv-svg-icon {
 display: block;
}

.sd-paneldynamic__prev-btn {
 margin-right: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-paneldynamic__next-btn {
 margin-left: calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-right: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 transform: rotate(180deg);
}

.sd-paneldynamic__placeholder .sd-paneldynamic__add-btn {
 display: initial;
 margin-left: 0;
}

.sd-question--empty.sd-question--paneldynamic > .sd-question__content {
 padding-bottom: var(--sd-base-padding);
 --animation-padding-bottom: var(--sd-base-padding);
}

.sd-question--paneldynamic:not(.sd-question--empty) > .sd-question__content > .sd-question__comment-area {
 padding-bottom: var(--sd-base-padding);
}

.sd-paneldynamic__buttons-container .sd-action-bar {
 width: 100%;
 margin: 0 calc(-3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(100% + 6 * var(--sjs-base-unit, var(--base-unit, 8px)));
}

.sd-paneldynamic__panel-footer {
 border-top: none;
 position: relative;
 top: calc(0.5 * var(--sd-base-vertical-padding));
 margin-right: calc(-3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 justify-content: flex-end;
}

.sd-paneldynamic__panel-footer .sv-action:not(.sv-action--hidden) {
 margin-bottom: calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-tabs-toolbar.sv-action-bar {
 align-items: flex-start;
 margin: var(--sjs-base-unit, var(--base-unit, 8px)) 0 -1px calc(-2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(100% + 4 * var(--sjs-base-unit, var(--base-unit, 8px)));
 z-index: 1;
}

.sd-tabs-toolbar.sd-tabs-toolbar--left {
 justify-content: flex-start;
}

.sd-tabs-toolbar.sd-tabs-toolbar--right {
 justify-content: flex-end;
}

.sd-tabs-toolbar.sd-tabs-toolbar--center {
 justify-content: center;
}

.sd-tab-item {
 margin: 0 calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-tab-item {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) 0 calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 display: flex;
 -webkit-appearance: none;
 -moz-appearance: none;
 appearance: none;
 display: flex;
 box-sizing: border-box;
 border: none;
 background-color: transparent;
 cursor: pointer;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-size: var(--sjs-internal-font-editorfont-size);
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 color: var(--sjs-font-questiondescription-color, var(--sjs-general-forecolor-light, rgba(0, 0, 0, 0.45)));
 overflow-x: hidden;
 white-space: nowrap;
 box-shadow: inset 0px 0px 0px var(--sjs-primary-backcolor, var(--primary, #19b394));
 transition: box-shadow var(--sjs-transition-duration, 150ms);
}
.sd-tab-item:hover, .sd-tab-item:focus-visible {
 outline: none;
 box-shadow: inset 0px -2px 0px var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-tab-item.sd-tab-item--pressed {
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 box-shadow: inset 0px -2px 0px var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-tab-item--icon {
 padding: var(--sjs-base-unit, var(--base-unit, 8px));
 width: auto;
 border-radius: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-tab-item--icon use {
 fill: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
 opacity: 0.5;
}

.sd-tab-item--icon:hover,
.sd-tab-item--icon.sd-tab-item--pressed {
 background-color: var(--sjs-primary-backcolor-light, var(--primary-light, rgba(25, 179, 148, 0.1)));
 box-shadow: none;
}
.sd-tab-item--icon:hover use,
.sd-tab-item--icon.sd-tab-item--pressed use {
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-tab-item--icon:hover use {
 opacity: 1;
}

.sd-tabs-toolbar .sv-dots {
 width: auto;
}

.sd-tabs-toolbar .sv-dots.sv-action--hidden {
 width: 0;
}

.sd-tab-item__title {
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 display: flex;
 align-items: center;
}

.sd-question__title ~ .sd-tabs-toolbar {
 margin-top: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-paneldynamic__header.sd-element__header.sd-paneldynamic__header-tab {
 padding-bottom: 0;
}

.sd-paneldynamic__header.sd-element__header.sd-paneldynamic__header-tab::after {
 bottom: 0;
}

.sd-question--paneldynamic.sd-element--with-frame {
 padding-bottom: 0;
}

.sd-paneldynamic__panels-container {
 position: relative;
 overflow: hidden;
 margin-left: calc(-1 * var(--sd-base-padding));
 padding-left: var(--sd-base-padding);
 margin-right: calc(-1 * var(--sd-base-padding));
 padding-right: var(--sd-base-padding);
}

.sd-paneldynamic__panel-wrapper {
 box-sizing: border-box;
}

@keyframes movePanel {
 from {
   transform: translateX(var(--sjs-pd-tab-move-margin));
 }
 to {
   transform: translateX(0);
 }
}
.sd-paneldynamic__panel-wrapper--fade-in-left,
.sd-paneldynamic__panel-wrapper--fade-in-right {
 animation-name: movePanel, changeHeight, paddingFadeIn, fadeIn;
 animation-duration: var(--sjs-pd-tab-move-in-duration, 250ms), var(--sjs-pd-tab-height-change-duration, 250ms), var(--sjs-pd-tab-height-change-duration, 250ms), var(--sjs-pd-tab-fade-in-duration, 250ms);
 animation-delay: var(--sjs-pd-tab-move-in-delay, 100ms), var(--sjs-pd-tab-height-change-delay, 0ms), var(--sjs-pd-tab-height-change-delay, 0ms), var(--sjs-pd-tab-fade-in-delay, 100ms);
 animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
 animation-fill-mode: forwards;
 opacity: 0;
 padding-bottom: 0;
 transform: translateX(var(--sjs-pd-tab-move-margin));
 height: var(--animation-height-from);
 --animation-padding-top: 0;
 --animation-padding-bottom: calc(1 * var(--sd-base-padding));
}

.sd-paneldynamic__panel-wrapper--fade-in-left {
 --sjs-pd-tab-move-margin: calc(1 * var(--sjs-pd-tab-move-in-margin, 50%));
}

.sd-paneldynamic__panel-wrapper--fade-in-right {
 --sjs-pd-tab-move-margin: calc(-1 * var(--sjs-pd-tab-move-in-margin, 50%));
}

.sd-paneldynamic__panel-wrapper--fade-out-left,
.sd-paneldynamic__panel-wrapper--fade-out-right {
 animation-name: fadeIn, movePanel;
 animation-duration: var(--sjs-pd-tab-fade-out-duration, 250ms), var(--sjs-pd-tab-move-out-duration, 250ms);
 animation-delay: var(--sjs-pd-tab-fade-out-delay, 0ms), var(--sjs-pd-tab-move-out-delay, 0ms);
 animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
 animation-direction: reverse;
 animation-fill-mode: forwards;
 position: absolute;
 left: var(--sd-base-padding);
 top: 0;
 width: calc(100% - 2 * var(--sd-base-padding));
}

.sd-paneldynamic__panel-wrapper--fade-out-left {
 --sjs-pd-tab-move-margin: calc(-1 * var(--sjs-pd-tab-move-out-margin, 50%));
}

.sd-paneldynamic__panel-wrapper--fade-out-right {
 --sjs-pd-tab-move-margin: calc(1 * var(--sjs-pd-tab-move-out-margin, 50%));
}

.sd-paneldynamic__panel-wrapper--fade-in,
.sd-paneldynamic__panel-wrapper--fade-out {
 animation-name: fadeIn, moveInWithOverflow, paddingFadeIn;
 animation-fill-mode: forwards;
 --animation-padding-top: 0;
 --animation-padding-bottom: calc(1 * var(--sd-base-padding));
 min-height: 0 !important;
}

.sd-paneldynamic__panel-wrapper--fade-in {
 opacity: 0;
 animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
 animation-duration: var(--sjs-pd-list-fade-in-duration, 500ms), var(--sjs-pd-list-move-in-duration, 250ms), var(--sjs-pd-list-move-in-duration, 250ms);
 animation-delay: var(--sjs-pd-list-fade-in-delay, 250ms), 0s, 0s;
}

.sd-paneldynamic__panel-wrapper--fade-out {
 animation-direction: reverse;
 animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
 animation-duration: var(--sjs-pd-list-fade-out-duration, 150ms), var(--sjs-pd-list-move-out-duration, 250ms), var(--sjs-pd-list-move-out-duration, 250ms);
 animation-delay: 0s, var(--sjs-pd-list-move-out-delay, 100ms), var(--sjs-pd-list-move-out-delay, 100ms);
 --animation-padding-bottom: calc(1 * var(--sd-base-padding));
}

:root {
 --sjs-transition-duration: 150ms;
}

.sd-file {
 position: relative;
 font-size: var(--sjs-font-size, 16px);
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 min-height: calc(36 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 box-sizing: border-box;
 padding: 0 calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-file .sv-action-bar {
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) 0;
 justify-content: center;
 position: absolute;
 width: 100%;
 left: 0;
 bottom: 0;
}
.sd-file .sv-action-bar .sv-action-bar-item {
 height: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
 border-radius: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-file .sv-action-bar #fileIndex .sv-action-bar-item {
 padding: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
 font-weight: 600;
}
.sd-file .sv-action-bar #fileIndex .sv-action-bar-item:hover {
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
}
.sd-file .sv-action-bar #fileIndex .sv-action-bar-item:disabled {
 opacity: initial;
}

.sd-file__decorator {
 display: flex;
 flex-direction: column;
 position: absolute;
 position: absolute;
 left: calc(0 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: 100%;
 height: 100%;
 box-sizing: border-box;
 justify-content: center;
 align-items: center;
 border: 1px dashed var(--sjs-border-default, var(--border, #d6d6d6));
 container-type: inline-size;
}

.sd-file--answered .sd-file__decorator {
 container-type: unset;
}

.sd-file__decorator--drag {
 z-index: 1;
 border: 1px solid var(--sjs-primary-backcolor, var(--primary, #19b394));
 background: var(--sjs-primary-backcolor-light, var(--primary-light, rgba(25, 179, 148, 0.1)));
 box-shadow: inset 0 0 0 1px var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-file__no-file-chosen {
 display: none;
}

.sd-file__drag-area-placeholder {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 text-align: center;
 white-space: normal;
 color: var(--sjs-font-questiondescription-color, var(--sjs-general-forecolor-light, rgba(0, 0, 0, 0.45)));
 font-size: var(--sjs-internal-font-editorfont-size);
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 padding: 0 calc(8 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

@container (max-width: 496px) {
 .sd-file__drag-area-placeholder {
   padding: 0 var(--sjs-base-unit, var(--base-unit, 8px));
 }
}
@container (max-width: 176px) {
 .sd-file__drag-area-placeholder {
   display: none;
 }
 .sd-file__decorator .sd-action {
   padding: var(--sjs-base-unit, var(--base-unit, 8px));
 }
 .sd-file__decorator .sd-action .sv-svg-icon {
   margin-left: 0;
 }
 .sd-file__decorator .sd-file__actions-container {
   flex-direction: column;
 }
 .sd-file__decorator .sd-file__actions-container span {
   display: none;
 }
}
.sd-root-modern--mobile .sd-file__decorator {
 padding: 0 calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-file__choose-btn--text {
 display: block;
 font-weight: 600;
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 cursor: pointer;
}
.sd-file__choose-btn--text .sv-svg-icon {
 margin-left: calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: 24px;
 height: 24px;
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-file__choose-btn--icon > span {
 display: none;
}

.sd-file__wrapper {
 width: max-content;
 max-width: 100%;
}

.sd-question--answered .sd-file__drag-area-placeholder {
 display: none;
}

.sd-file__actions-container {
 margin-top: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 flex-wrap: wrap;
 justify-content: center;
}
.sd-file__actions-container .sv-action--hidden {
 display: none;
}

.sd-file--answered .sd-file__actions-container {
 z-index: 2;
 margin-top: 0;
 gap: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-file--answered .sd-file__actions-container {
 top: var(--sjs-base-unit, var(--base-unit, 8px));
 right: var(--sjs-base-unit, var(--base-unit, 8px));
 position: absolute;
}

.sd-file--chose-btn--as .sd-file--answered .sd-file__actions-container {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 inset-inline-end: calc(1.5 * (var(--sjs-internal-font-editorfont-size)) + 5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-file__list {
 display: flex;
 gap: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 box-sizing: content-box;
 flex-direction: row;
 align-items: stretch;
 justify-content: center;
 padding: calc(10.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
 min-height: calc(15 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 max-height: calc(15 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: 100%;
}

.sd-file__preview-item {
 position: relative;
 display: flex;
 align-items: stretch;
 flex-direction: column;
 min-height: 100%;
 width: calc(12 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin: 0;
}
.sd-file__preview-item .sd-file__default-image {
 width: calc(7 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(8.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-file__preview-item img:hover + .sd-file__remove-file-button,
.sd-file__preview-item svg:hover + .sd-file__remove-file-button,
.sd-file__preview-item .sd-file__remove-file-button:hover {
 opacity: 1;
}

.sd-file__sign {
 margin-top: var(--sjs-base-unit, var(--base-unit, 8px));
 text-align: center;
 font-size: calc(0.75 * (var(--sjs-font-size, 16px)));
 line-height: var(--sjs-font-size, 16px);
}
.sd-file__sign a {
 display: block;
 text-decoration: none;
 color: var(--sjs-font-questiontitle-color, var(--sjs-general-forecolor, var(--foreground, #161616)));
 white-space: normal;
 word-break: break-all;
 width: calc(12 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 min-width: 100%;
 max-width: 100%;
 overflow: hidden;
 max-height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 text-overflow: ellipsis;
 line-height: var(--sjs-font-size, 16px);
 display: -webkit-box;
 -webkit-line-clamp: 3;
 -webkit-box-orient: vertical;
}

.sd-file__remove-file-button {
 display: block;
 opacity: 0;
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translate(-50%, -50%);
 transition: opacity var(--sjs-transition-duration, 150ms);
}

.sd-file__decorator--error {
 background-color: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
}

.sd-file__image-wrapper {
 position: relative;
 text-align: center;
 display: flex;
 align-items: center;
 justify-content: center;
 width: calc(12 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 min-height: calc(12 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(12 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}
.sd-file__image-wrapper img:not(.sd-file__default-image) {
 display: block;
 max-width: 100%;
 max-height: 100%;
 width: calc(12 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(12 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 object-fit: contain;
}

.sd-file__image-wrapper--default-image {
 background: transparent;
}

.sd-file--single img:hover + .sd-file__remove-file-button {
 display: none;
}

.sd-file--single-image {
 height: calc(36 * var(--sjs-base-unit, var(--base-unit, 8px)));
}
.sd-file--single-image .sd-file__preview-item {
 width: 100%;
 margin: 0;
}
.sd-file--single-image .sd-file__list {
 position: absolute;
 left: 0;
 padding: 0;
 height: 100%;
 max-height: 100%;
 width: 100%;
}
.sd-file--single-image .sd-file__image-wrapper {
 background-color: var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9));
}
.sd-file--single-image .sd-file__image-wrapper {
 min-height: 100%;
 min-width: 100%;
}
.sd-file--single-image .sd-file__image-wrapper img {
 width: 100%;
 height: 100%;
}
.sd-file--single-image .sd-file__sign {
 position: absolute;
 margin: 0;
 width: 100%;
 min-height: 100%;
}
.sd-file--single-image .sd-file__sign a {
 color: transparent;
 width: 100%;
 min-width: 100%;
 max-width: 100%;
 height: 100%;
 outline: none;
}

.sd-file__image-wrapper.sd-file__image-wrapper--default-image {
 background: transparent;
}

.sd-file > input:focus + .sd-file__decorator .sd-file__choose-btn.sd-file__choose-btn--icon use {
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sd-file > input:focus + .sd-file__decorator .sd-file__choose-btn:not(.sd-file__choose-btn--icon) {
 background-color: var(--sjs-primary-backcolor-light, var(--primary-light, rgba(25, 179, 148, 0.1)));
}

.sd-file__drag-area {
 position: static;
 width: 100%;
}

.sd-file__change-camera-button {
 position: absolute;
 z-index: 2;
 left: var(--sjs-base-unit, var(--base-unit, 8px));
 top: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-file__close-camera-button {
 position: absolute;
 z-index: 2;
 right: var(--sjs-base-unit, var(--base-unit, 8px));
 top: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-context-btn.sd-file__take-picture-button {
 background-color: var(--sjs-special-red, var(--red, #e60a3e));
 position: absolute;
 bottom: 16px;
 left: 50%;
 transform: translateX(-50%);
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-context-btn.sd-file__take-picture-button .sv-svg-icon {
 height: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-context-btn.sd-file__take-picture-button .sv-svg-icon use {
 fill: var(--sjs-general-backcolor, var(--background, #fff));
}
.sd-context-btn.sd-file__take-picture-button:hover, .sd-context-btn.sd-file__take-picture-button:focus {
 box-shadow: 0 0 0 2px var(--sjs-special-red, var(--red, #e60a3e));
}

.sd-file__video-container {
 background-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
}

.sd-file__loading-indicator {
 width: 100%;
 height: 100%;
 box-sizing: border-box;
 position: absolute;
 border: 1px dashed var(--sjs-border-default, var(--border, #d6d6d6));
 left: 0;
}
.sd-file__loading-indicator .sd-loading-indicator {
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translate(-50%, -50%);
}

.sd-file__choose-file-btn--disabled {
 opacity: 0.25;
 cursor: default;
}

.sd-file--readonly .sd-context-btn {
 display: none;
}
.sd-file--readonly .sd-file__decorator {
 border-color: transparent;
}
.sd-file--readonly .sd-file__actions-container {
 display: none;
}
.sd-file--readonly .sd-file__image-wrapper {
 background: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
}
.sd-file--readonly .sd-file__drag-area-placeholder {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-file--preview .sd-context-btn {
 display: none;
}
.sd-file--preview .sd-file__decorator {
 border-color: transparent;
}
.sd-file--preview .sd-file__image-wrapper {
 background: transparent;
}
.sd-file--preview .sd-file__actions-container {
 display: none;
}
.sd-file--preview .sd-file__drag-area-placeholder {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
}

.sd-hidden {
 display: none !important;
}

.sd-body__navigation .sd-btn {
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(8 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 font-size: var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px));
 line-height: calc(1.5 * (var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px))));
}

.sd-root--compact .sd-body__navigation .sd-btn:not(.sd-btn--action) {
 background-color: var(--sjs-general-backcolor-dim-light, var(--background-dim-light, #f9f9f9));
}
.sd-root--compact .sd-body__navigation .sd-btn:not(.sd-btn--action):hover {
 background-color: var(--sjs-editorpanel-hovercolor, var(--sjs-general-backcolor-dim-dark, rgb(243, 243, 243)));
}

.sd-root-modern--mobile .sd-body__navigation .sv-action:not(.sv-action--hidden),
.sd-root-modern--mobile .sd-body__navigation .sd-btn {
 flex-grow: 1;
}
.sd-root-modern--mobile .sd-body__navigation .sd-btn {
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-body__navigation .sv-action--hidden {
 display: none;
}

:root {
 --sjs-transition-duration: 150ms;
}

.sd-btn {
 appearance: none;
 -webkit-appearance: none;
 -moz-appearance: none;
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background: var(--sjs-questionpanel-backcolor, var(--sjs-question-background, var(--sjs-general-backcolor, var(--background, #fff))));
 border-radius: var(--sjs-corner-radius, 4px);
 cursor: pointer;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-style: normal;
 font-weight: 600;
 font-size: var(--sjs-font-size, 16px);
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
 text-align: center;
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 border: none;
 outline: none;
 box-shadow: var(--sjs-shadow-small, 0px 1px 2px 0px rgba(0, 0, 0, 0.15)), 0 0 0 0px var(--sjs-primary-backcolor, var(--primary, #19b394));
 transition: box-shadow var(--sjs-transition-duration, 150ms), background var(--sjs-transition-duration, 150ms);
}

.sd-btn--small {
 flex-grow: 1;
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-btn:hover {
 background-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
}

.sd-btn:focus-visible {
 box-shadow: var(--sjs-shadow-small-reset, 0px 0px 0px 0px rgba(0, 0, 0, 0.15)), 0 0 0 2px var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-btn:disabled {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 opacity: 0.25;
 pointer-events: none;
}

.sd-btn--action {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
}

.sd-btn--action:hover {
 color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
 background-color: var(--sjs-primary-backcolor-dark, rgb(20, 164, 139));
}

.sd-btn--action:disabled {
 color: var(--sjs-primary-forecolor-light, var(--primary-foreground-disabled, rgba(255, 255, 255, 0.25)));
 pointer-events: none;
}

.sd-btn--danger {
 background-color: var(--sjs-special-red, var(--red, #e60a3e));
 color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
}

.sd-btn--danger:hover {
 background-color: var(--sjs-special-red, var(--red, #e60a3e));
 color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
}

.sd-btn--danger:disabled {
 color: var(--sjs-special-red-forecolor, #ffffff);
 pointer-events: none;
}

:root {
 --sjs-transition-duration: 150ms;
}

.sd-body {
 width: 100%;
 box-sizing: border-box;
}
.sd-body .sd-body__page {
 min-width: min(100%, 300px);
}
.sd-body .sd-body__timer {
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
 box-sizing: border-box;
}
.sd-body.sd-body--static {
 max-width: calc(90 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-left: auto;
 margin-right: auto;
 padding-top: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-bottom: calc(10 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-body.sd-body--static .sd-body__timer,
.sd-body.sd-body--static .sd-body__navigation,
.sd-body.sd-body--static .sd-body__page {
 margin-left: 0;
 margin-right: 0;
}
.sd-body.sd-body--static .sd-body__navigation {
 padding-top: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-body.sd-body--static .sd-body__navigation.sd-action-bar {
 padding-left: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-right: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-body.sd-body--responsive {
 max-width: initial;
 padding: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 box-sizing: border-box;
}
.sd-body.sd-body--responsive .sd-page {
 padding: 0;
}
.sd-body.sd-body--responsive .sd-body__timer,
.sd-body.sd-body--responsive .sd-body__navigation {
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) 0;
}
.sd-body.sd-body--responsive .sd-body__navigation {
 padding-top: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-body.sd-body--responsive.sd-body--with-timer {
 max-width: calc(100% + var(--sd-timer-size) * -1.4444444444 + 6 * var(--sjs-base-unit, var(--base-unit, 8px)));
 margin-left: auto;
 margin-right: auto;
}

.sd-root-modern--mobile .sd-body.sd-body--with-timer.sd-body--responsive {
 max-width: initial;
 margin-left: 0;
 margin-right: 0;
}
.sd-root-modern--mobile .sd-body.sd-body--responsive, .sd-root-modern--mobile .sd-body.sd-body--static {
 padding: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern--mobile .sd-body.sd-body--responsive .sd-body__navigation, .sd-root-modern--mobile .sd-body.sd-body--static .sd-body__navigation {
 padding-left: 0;
 padding-right: 0;
 padding-bottom: 0;
}

.sd-root--compact .sd-body.sd-body--responsive .sd-body__navigation, .sd-root--compact .sd-body.sd-body--static .sd-body__navigation {
 padding-top: calc(7 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-body__navigation.sd-action-bar {
 box-sizing: border-box;
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 flex-wrap: wrap;
 gap: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-body--empty {
 min-height: 400px;
 text-align: center;
 padding-top: 180px;
 box-sizing: border-box;
}

.sd-body--empty,
.sd-body--loading {
 font-size: var(--sjs-article-font-default-fontSize, var(--sjs-font-size, 16px));
 text-decoration: var(--sjs-article-font-default-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-default-fontWeight, 400);
 font-style: var(--sjs-article-font-default-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-default-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-default-letterSpacing, 0);
 line-height: var(--sjs-article-font-default-lineHeight, 28px);
 text-indent: var(--sjs-article-font-default-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-default-textCase, "none");
 color: var(--sjs-font-pagetitle-color, var(--sjs-general-dim-forecolor, rgba(0, 0, 0, 0.91)));
}
.sd-body--empty h1,
.sd-body--loading h1 {
 font-size: var(--sjs-article-font-xx-large-fontSize, calc(4 * (var(--sjs-font-size, 16px))));
 text-decoration: var(--sjs-article-font-xx-large-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-xx-large-fontWeight, 700);
 font-style: var(--sjs-article-font-xx-large-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-xx-large-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-xx-large-letterSpacing, 0);
 line-height: var(--sjs-article-font-xx-large-lineHeight, 64px);
 text-indent: var(--sjs-article-font-xx-large-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-xx-large-textCase, "none");
}
.sd-body--empty h2,
.sd-body--loading h2 {
 font-size: var(--sjs-article-font-x-large-fontSize, calc(3 * (var(--sjs-font-size, 16px))));
 text-decoration: var(--sjs-article-font-x-large-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-x-large-fontWeight, 700);
 font-style: var(--sjs-article-font-x-large-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-x-large-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-x-large-letterSpacing, 0);
 line-height: var(--sjs-article-font-x-large-lineHeight, 56px);
 text-indent: var(--sjs-article-font-x-large-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-x-large-textCase, "none");
}
.sd-body--empty h3,
.sd-body--loading h3 {
 font-size: var(--sjs-article-font-large-fontSize, calc(2 * (var(--sjs-font-size, 16px))));
 text-decoration: var(--sjs-article-font-large-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-large-fontWeight, 700);
 font-style: var(--sjs-article-font-large-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-large-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-large-letterSpacing, 0);
 line-height: var(--sjs-article-font-large-lineHeight, 40px);
 text-indent: var(--sjs-article-font-large-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-large-textCase, "none");
}
.sd-body--empty h4,
.sd-body--empty h5,
.sd-body--empty h6,
.sd-body--loading h4,
.sd-body--loading h5,
.sd-body--loading h6 {
 font-size: var(--sjs-article-font-medium-fontSize, calc(1.5 * (var(--sjs-font-size, 16px))));
 text-decoration: var(--sjs-article-font-medium-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-medium-fontWeight, 700);
 font-style: var(--sjs-article-font-medium-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-medium-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-medium-letterSpacing, 0);
 line-height: var(--sjs-article-font-medium-lineHeight, 32px);
 text-indent: var(--sjs-article-font-medium-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-medium-textCase, "none");
}
.sd-body--empty td,
.sd-body--empty span,
.sd-body--empty div,
.sd-body--empty p,
.sd-body--loading td,
.sd-body--loading span,
.sd-body--loading div,
.sd-body--loading p {
 font-size: var(--sjs-article-font-default-fontSize, var(--sjs-font-size, 16px));
 text-decoration: var(--sjs-article-font-default-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-default-fontWeight, 400);
 font-style: var(--sjs-article-font-default-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-default-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-default-letterSpacing, 0);
 line-height: var(--sjs-article-font-default-lineHeight, 28px);
 text-indent: var(--sjs-article-font-default-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-default-textCase, "none");
}
.sd-body--empty a,
.sd-body--loading a {
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sd-body--empty button,
.sd-body--loading button {
 display: flex;
 align-items: center;
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 vertical-align: baseline;
 text-align: center;
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
 border: none;
 border-radius: var(--sjs-corner-radius, 4px);
 cursor: pointer;
 user-select: none;
 outline: solid calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px)))) transparent;
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 font-weight: 600;
 font-style: normal;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-size: var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px));
 line-height: calc(1.5 * (var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px))));
 box-shadow: var(--sjs-shadow-small, 0px 1px 2px 0px rgba(0, 0, 0, 0.15)), 0 0 0 0px var(--sjs-primary-backcolor, var(--primary, #19b394));
 transition: box-shadow var(--sjs-transition-duration, 150ms);
}
.sd-body--empty button:hover,
.sd-body--loading button:hover {
 background-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
}
.sd-body--empty button:focus,
.sd-body--loading button:focus {
 box-shadow: var(--sjs-shadow-small-reset, 0px 0px 0px 0px rgba(0, 0, 0, 0.15)), 0 0 0 2px var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sd-body--empty button span,
.sd-body--loading button span {
 display: flex;
 align-items: center;
 flex-grow: 1;
 justify-content: center;
}

.sd-root_background-image {
 background-position-x: center;
 position: absolute;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
}

:root {
 --sjs-transition-duration: 150ms;
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

.sd-multipletext__cell:not(:first-of-type) {
 padding-left: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-multipletext__item-container.sd-input:focus-within {
 box-shadow: var(--sjs-shadow-inner-reset, inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)), 0 0 0 2px var(--sjs-primary-backcolor, var(--primary, #19b394));
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
}

.sd-multipletext__item-container .sd-input,
.sd-multipletext__item-title {
 margin-top: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-bottom: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-multipletext__item-title {
 font-size: 0;
 line-height: 0;
}
.sd-multipletext__item-title span {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 font-size: var(--sjs-internal-font-editorfont-size);
 line-height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
}

.sd-multipletext__item-title {
 height: calc(100% - var(--sjs-base-unit, var(--base-unit, 8px)) * 3);
 max-width: 30%;
 padding-right: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-right: 1px solid var(--sjs-border-default, var(--border, #d6d6d6));
 white-space: normal;
 color: var(--sjs-font-editorfont-placeholdercolor, var(--sjs-general-forecolor-light, var(--foreground-light, #909090)));
}

.sd-question--preview .sd-multipletext__item-title {
 border: none;
}

.sd-multipletext__item {
 flex-grow: 1;
}

.sd-multipletext__content .sd-multipletext__item-container {
 position: relative;
}

.sd-multipletext__item-container--error {
 background-color: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
}
.sd-multipletext__item-container--error .sd-input--error {
 background-color: transparent;
}

.sd-multipletext-item__character-counter {
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
}

.sd-question__content:focus-within .sd-multipletext-item__character-counter {
 padding-inline-end: calc(8 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-multipletext__cell {
 padding-left: 0;
 padding-right: 0;
 padding-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
 padding-top: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-multipletext__cell--error-bottom,
.sd-multipletext__row:first-of-type .sd-multipletext__cell {
 padding-top: 0;
}

.sd-multipletext__cell--error-top,
.sd-multipletext__row:last-of-type .sd-multipletext__cell {
 padding-bottom: 0;
}

.sd-multipletext__cell--error .sd-question__erbox {
 margin: 0;
}

.sd-multipletext .sd-input .sd-input {
 background: transparent;
}

.sd-action {
 appearance: none;
 border: none;
 display: flex;
 align-items: center;
 gap: var(--sjs-base-unit, var(--base-unit, 8px));
 background: transparent;
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 border-radius: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 font-weight: 600;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-style: normal;
 font-size: var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px));
 line-height: calc(1.5 * (var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px))));
 outline: none;
 transition: background-color var(--sjs-transition-duration, 150ms);
}

.sd-action--negative {
 color: var(--sjs-special-red, var(--red, #e60a3e));
}

.sd-action--icon {
 padding: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-action__icon {
 margin-left: calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-action__icon use {
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}

.sd-action--icon .sd-action__icon {
 margin-left: 0;
}
.sd-action--icon use {
 fill: var(--sjs-font-questiondescription-color, var(--sjs-general-forecolor-light, rgba(0, 0, 0, 0.45)));
 transition: fill var(--sjs-transition-duration, 150ms);
}

svg.sd-action--icon {
 fill: var(--sjs-font-questiondescription-color, var(--sjs-general-forecolor-light, rgba(0, 0, 0, 0.45)));
}

.sd-action:disabled,
.sd-action--disabled {
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 cursor: default;
 opacity: 0.25;
 pointer-events: none;
}
.sd-action:disabled use,
.sd-action--disabled use {
 fill: var(--sjs-font-questiondescription-color, var(--sjs-general-forecolor-light, rgba(0, 0, 0, 0.45)));
}

.sd-action:not(.sd-action--pressed):hover,
.sd-action:not(.sd-action--pressed):focus {
 outline: none;
 background-color: var(--sjs-primary-backcolor-light, var(--primary-light, rgba(25, 179, 148, 0.1)));
 cursor: pointer;
 opacity: 1;
}
.sd-action:not(.sd-action--pressed):hover.sd-action--icon,
.sd-action:not(.sd-action--pressed):focus.sd-action--icon {
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}
.sd-action:not(.sd-action--pressed):hover.sd-action--negative,
.sd-action:not(.sd-action--pressed):focus.sd-action--negative {
 background-color: var(--sjs-special-red-light, var(--red-light, rgba(230, 10, 62, 0.1)));
}
.sd-action:not(.sd-action--pressed):hover.sd-action--negative.sd-action--icon use,
.sd-action:not(.sd-action--pressed):focus.sd-action--negative.sd-action--icon use {
 fill: var(--sjs-special-red, var(--red, #e60a3e));
}
.sd-action:not(.sd-action--pressed):hover:active,
.sd-action:not(.sd-action--pressed):focus:active {
 opacity: 0.5;
}

.sd-action__icon {
 display: block;
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-action--pressed:not(.sd-action--active) {
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
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
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-radius: calc(12.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border: none;
 outline: none;
 cursor: pointer;
}
.sd-context-btn .sv-svg-icon {
 margin: 0;
}
.sd-context-btn svg {
 --sjs-internal-font-editorfont-size: var(--sjs-mobile-font-editorfont-size, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
 display: block;
 width: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
 height: calc(1.5 * (var(--sjs-internal-font-editorfont-size)));
}
.sd-context-btn use {
 fill: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
 transition: fill var(--sjs-transition-duration, 150ms);
}

.sd-context-btn:hover use,
.sd-context-btn:focus use {
 fill: var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sd-context-btn:hover.sd-context-btn--negative use,
.sd-context-btn:focus.sd-context-btn--negative use {
 fill: var(--sjs-special-red, var(--red, #e60a3e));
}

.sd-context-btn:disabled {
 opacity: 0.25;
}

:root {
 --sjs-transition-duration: 150ms;
}

.sd-completedpage,
.sd-completed-before-page {
 align-items: center;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: bold;
 box-sizing: border-box;
 text-align: center;
 height: auto;
 font-size: var(--sjs-article-font-default-fontSize, var(--sjs-font-size, 16px));
 text-decoration: var(--sjs-article-font-default-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-default-fontWeight, 400);
 font-style: var(--sjs-article-font-default-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-default-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-default-letterSpacing, 0);
 line-height: var(--sjs-article-font-default-lineHeight, 28px);
 text-indent: var(--sjs-article-font-default-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-default-textCase, "none");
 color: var(--sjs-font-pagetitle-color, var(--sjs-general-dim-forecolor, rgba(0, 0, 0, 0.91)));
}
.sd-completedpage h1,
.sd-completed-before-page h1 {
 font-size: var(--sjs-article-font-xx-large-fontSize, calc(4 * (var(--sjs-font-size, 16px))));
 text-decoration: var(--sjs-article-font-xx-large-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-xx-large-fontWeight, 700);
 font-style: var(--sjs-article-font-xx-large-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-xx-large-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-xx-large-letterSpacing, 0);
 line-height: var(--sjs-article-font-xx-large-lineHeight, 64px);
 text-indent: var(--sjs-article-font-xx-large-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-xx-large-textCase, "none");
}
.sd-completedpage h2,
.sd-completed-before-page h2 {
 font-size: var(--sjs-article-font-x-large-fontSize, calc(3 * (var(--sjs-font-size, 16px))));
 text-decoration: var(--sjs-article-font-x-large-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-x-large-fontWeight, 700);
 font-style: var(--sjs-article-font-x-large-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-x-large-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-x-large-letterSpacing, 0);
 line-height: var(--sjs-article-font-x-large-lineHeight, 56px);
 text-indent: var(--sjs-article-font-x-large-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-x-large-textCase, "none");
}
.sd-completedpage h3,
.sd-completed-before-page h3 {
 font-size: var(--sjs-article-font-large-fontSize, calc(2 * (var(--sjs-font-size, 16px))));
 text-decoration: var(--sjs-article-font-large-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-large-fontWeight, 700);
 font-style: var(--sjs-article-font-large-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-large-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-large-letterSpacing, 0);
 line-height: var(--sjs-article-font-large-lineHeight, 40px);
 text-indent: var(--sjs-article-font-large-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-large-textCase, "none");
}
.sd-completedpage h4,
.sd-completedpage h5,
.sd-completedpage h6,
.sd-completed-before-page h4,
.sd-completed-before-page h5,
.sd-completed-before-page h6 {
 font-size: var(--sjs-article-font-medium-fontSize, calc(1.5 * (var(--sjs-font-size, 16px))));
 text-decoration: var(--sjs-article-font-medium-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-medium-fontWeight, 700);
 font-style: var(--sjs-article-font-medium-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-medium-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-medium-letterSpacing, 0);
 line-height: var(--sjs-article-font-medium-lineHeight, 32px);
 text-indent: var(--sjs-article-font-medium-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-medium-textCase, "none");
}
.sd-completedpage td,
.sd-completedpage span,
.sd-completedpage div,
.sd-completedpage p,
.sd-completed-before-page td,
.sd-completed-before-page span,
.sd-completed-before-page div,
.sd-completed-before-page p {
 font-size: var(--sjs-article-font-default-fontSize, var(--sjs-font-size, 16px));
 text-decoration: var(--sjs-article-font-default-textDecoration, "none");
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-weight: var(--sjs-article-font-default-fontWeight, 400);
 font-style: var(--sjs-article-font-default-fontStyle, "normal");
 font-stretch: var(--sjs-article-font-default-fontStretch, "normal");
 letter-spacing: var(--sjs-article-font-default-letterSpacing, 0);
 line-height: var(--sjs-article-font-default-lineHeight, 28px);
 text-indent: var(--sjs-article-font-default-paragraphIndent, 0px);
 text-transform: var(--sjs-article-font-default-textCase, "none");
}
.sd-completedpage a,
.sd-completed-before-page a {
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sd-completedpage button,
.sd-completed-before-page button {
 display: flex;
 align-items: center;
 padding: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 vertical-align: baseline;
 text-align: center;
 background-color: var(--sjs-general-backcolor, var(--background, #fff));
 border: none;
 border-radius: var(--sjs-corner-radius, 4px);
 cursor: pointer;
 user-select: none;
 outline: solid calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px)))) transparent;
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 font-weight: 600;
 font-style: normal;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 font-size: var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px));
 line-height: calc(1.5 * (var(--sjs-font-questiontitle-size, var(--sjs-font-size, 16px))));
 box-shadow: var(--sjs-shadow-small, 0px 1px 2px 0px rgba(0, 0, 0, 0.15)), 0 0 0 0px var(--sjs-primary-backcolor, var(--primary, #19b394));
 transition: box-shadow var(--sjs-transition-duration, 150ms);
}
.sd-completedpage button:hover,
.sd-completed-before-page button:hover {
 background-color: var(--sjs-questionpanel-hovercolor, var(--sjs-general-backcolor-dark, rgb(248, 248, 248)));
}
.sd-completedpage button:focus,
.sd-completed-before-page button:focus {
 box-shadow: var(--sjs-shadow-small-reset, 0px 0px 0px 0px rgba(0, 0, 0, 0.15)), 0 0 0 2px var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sd-completedpage button span,
.sd-completed-before-page button span {
 display: flex;
 align-items: center;
 flex-grow: 1;
 justify-content: center;
}

.sd-completedpage:before,
.sd-completedpage:after {
 display: block;
 width: calc(9 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-left: calc(50% - 4.5 * var(--sjs-base-unit, var(--base-unit, 8px)));
 content: "";
}

.sd-completedpage:before {
 height: calc(13 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-completedpage:after {
 height: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
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

.sd-progress-buttons__page-description {
 display: none;
}

.sd-progress-buttons {
 padding: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 display: flex;
 flex-direction: column;
}

.sd-progress-buttons__list-container {
 display: flex;
 overflow: hidden;
}

.sd-progress-buttons__connector {
 display: none;
}

.sd-progress-buttons__list {
 display: inline-flex;
 flex-direction: row;
 flex-grow: 1;
 margin: 0 auto;
 padding: 0;
}
.sd-progress-buttons__list li {
 display: flex;
 flex-grow: 1;
 flex-shrink: 1;
 flex-basis: 0;
 position: relative;
 flex-wrap: nowrap;
 text-align: center;
 flex-direction: column;
 cursor: pointer;
}
.sd-progress-buttons__list li:not(:first-child) > .sd-progress-buttons__connector {
 display: block;
 content: "";
 height: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background-color: var(--sjs-general-dim-forecolor-light, rgba(0, 0, 0, 0.45));
 opacity: 0.5;
 position: absolute;
 bottom: calc(1.125 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 right: calc(50% + 4px);
 width: calc(100% - 4px);
 pointer-events: none;
}
.sd-progress-buttons__list li .sd-progress-buttons__button {
 position: relative;
 display: flex;
 content: attr(data-page-number);
 width: calc(0 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(0 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin: calc(0.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid transparent;
 border-radius: 50%;
 align-self: center;
 z-index: 1;
 font-size: calc(0.75 * (var(--sjs-font-size, 16px)));
 font-weight: 600;
 line-height: var(--sjs-font-size, 16px);
 justify-content: center;
 color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}
.sd-progress-buttons__list li .sd-progress-buttons__button .sd-progress-buttons__button-background {
 position: absolute;
 width: 100%;
 height: 100%;
 top: calc(-0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 left: calc(-0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
 z-index: -2;
 border: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
 border-radius: 50%;
}
.sd-progress-buttons__list li .sd-progress-buttons__button .sd-progress-buttons__button-content {
 position: absolute;
 width: 100%;
 height: 100%;
 top: calc(-0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 left: calc(-0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background-color: var(--sjs-general-dim-forecolor-light, rgba(0, 0, 0, 0.45));
 opacity: 0.5;
 z-index: -1;
 border: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid transparent;
 border-radius: 50%;
}
.sd-progress-buttons__list li:hover .sd-progress-buttons__button {
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 padding: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border: calc(0.75 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid var(--sjs-primary-backcolor, var(--primary, #19b394));
 background-color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
}
.sd-progress-buttons__list li:hover .sd-progress-buttons__button .sd-progress-buttons__button-content {
 top: calc(-0.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 left: calc(-0.75 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border: calc(0.75 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid var(--sjs-primary-backcolor, var(--primary, #19b394));
 background-color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
 opacity: 1;
}
.sd-progress-buttons__list .sd-progress-buttons__list-element--passed:not(:first-child) > .sd-progress-buttons__connector {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 opacity: 1;
}
.sd-progress-buttons__list .sd-progress-buttons__list-element--passed .sd-progress-buttons__button {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
}
.sd-progress-buttons__list .sd-progress-buttons__list-element--passed .sd-progress-buttons__button .sd-progress-buttons__button-content {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 opacity: 1;
}
.sd-progress-buttons__list .sd-progress-buttons__list-element--current:not(:first-child) > .sd-progress-buttons__connector {
 background-color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 opacity: 1;
}
.sd-progress-buttons__list .sd-progress-buttons__list-element--current .sd-progress-buttons__button {
 border: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid var(--sjs-primary-backcolor, var(--primary, #19b394));
 background-color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 padding: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-progress-buttons__list .sd-progress-buttons__list-element--current .sd-progress-buttons__button .sd-progress-buttons__button-content {
 border: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) solid var(--sjs-primary-backcolor, var(--primary, #19b394));
 background-color: var(--sjs-primary-forecolor, var(--primary-foreground, #fff));
 opacity: 1;
}

.sd-progress-buttons__page-title {
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: calc(0.75 * (var(--sjs-font-size, 16px)));
 font-weight: 600;
 line-height: var(--sjs-font-size, 16px);
 flex-grow: 1;
 text-align: center;
 padding: 0 calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-bottom: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-progress-buttons__header .sd-progress-buttons__page-title {
 margin-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-progress-buttons__footer .sd-progress-buttons__page-title {
 margin-top: var(--sjs-base-unit, var(--base-unit, 8px));
 margin-bottom: 0;
 justify-content: flex-end;
 padding: 0;
 color: var(--sjs-general-dim-forecolor-light, rgba(0, 0, 0, 0.45));
}

.sd-progress-buttons--bottom {
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 flex-direction: column-reverse;
}
.sd-progress-buttons--bottom .sd-progress-buttons__list li {
 flex-direction: column-reverse;
}
.sd-progress-buttons--bottom .sd-progress-buttons__list li:not(:first-child) > .sd-progress-buttons__connector {
 top: calc(1.125 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-progress-buttons--bottom .sd-progress-buttons__page-title {
 margin-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-bottom: 0;
}
.sd-progress-buttons--bottom .sd-progress-buttons__header .sd-progress-buttons__page-title {
 margin-top: var(--sjs-base-unit, var(--base-unit, 8px));
 margin-bottom: 0;
}
.sd-progress-buttons--bottom .sd-progress-buttons__footer .sd-progress-buttons__page-title {
 margin-top: 0;
 margin-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sd-progress-buttons--numbered .sd-progress-buttons__list li:not(:first-child) > .sd-progress-buttons__connector {
 bottom: calc(2.175 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 right: calc(50% + 8px);
 width: calc(100% - 8px);
}
.sd-progress-buttons--numbered .sd-progress-buttons__list li .sd-progress-buttons__button {
 width: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-progress-buttons--numbered .sd-progress-buttons__list li:hover .sd-progress-buttons__button {
 padding: calc(0.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-root-modern--mobile .sd-progress-buttons__list,
.sd-progress-buttons--no-titles .sd-progress-buttons__list {
 justify-content: space-between;
 width: 100%;
}
.sd-root-modern--mobile .sd-progress-buttons__list li,
.sd-progress-buttons--no-titles .sd-progress-buttons__list li {
 flex-grow: 0;
}

.sd-progress-buttons--bottom.sd-progress-buttons--numbered .sd-progress-buttons__list li:not(:first-child) > .sd-progress-buttons__connector {
 top: calc(2.175 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-root-modern--mobile .sd-progress-buttons {
 padding: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px)))) calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-progress-buttons--fit-survey-width {
 max-width: calc(90 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 box-sizing: border-box;
 width: 100%;
 margin: auto;
}

[dir=rtl] .sd-progress-buttons__list li:not(:first-child) > .sd-progress-buttons__connector,
[style*="direction:rtl"] .sd-progress-buttons__list li:not(:first-child) > .sd-progress-buttons__connector,
[style*="direction: rtl"] .sd-progress-buttons__list li:not(:first-child) > .sd-progress-buttons__connector {
 right: unset;
 left: calc(50% + 4px);
}
[dir=rtl] .sd-progress-buttons--numbered .sd-progress-buttons__list li:not(:first-child) > .sd-progress-buttons__connector,
[style*="direction:rtl"] .sd-progress-buttons--numbered .sd-progress-buttons__list li:not(:first-child) > .sd-progress-buttons__connector,
[style*="direction: rtl"] .sd-progress-buttons--numbered .sd-progress-buttons__list li:not(:first-child) > .sd-progress-buttons__connector {
 right: unset;
 left: calc(50% + 8px);
}

.sv_progress-toc {
 padding: var(--sjs-base-unit, var(--base-unit, 8px));
 max-width: calc(42 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: 100%;
 background: var(--sjs-general-backcolor, var(--background, #fff));
 box-sizing: border-box;
 min-width: calc(32 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv_progress-toc .sv-list__item.sv-list__item--selected .sv-list__item-body {
 background: var(--sjs-primary-backcolor-light, var(--primary-light, rgba(25, 179, 148, 0.1)));
 color: var(--sjs-general-forecolor, var(--foreground, #161616));
 font-weight: 400;
}
.sv_progress-toc .sv-list__item span {
 white-space: break-spaces;
}
.sv_progress-toc .sv-list__item-body {
 padding-inline-start: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-inline-end: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-radius: var(--sjs-corner-radius, 4px);
 padding-top: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-bottom: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv_progress-toc--left {
 border-right: 1px solid var(--sjs-border-default, var(--border, #d6d6d6));
}

.sv_progress-toc--right {
 border-left: 1px solid var(--sjs-border-default, var(--border, #d6d6d6));
}

.sv_progress-toc--mobile {
 position: fixed;
 top: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 right: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: auto;
 min-width: auto;
 height: auto;
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
 z-index: 15;
 border-radius: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv_progress-toc--mobile > div {
 width: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 height: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sv_progress-toc--mobile:hover {
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
}

.sd-list {
 padding-right: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-left: calc(0.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-list__item {
 padding: 0;
}

.sd-list__item-body {
 padding-block: calc(1.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 border-radius: var(--sjs-corner-radius, 4px);
 font-size: var(--sjs-font-size, 16px);
 line-height: calc(1.5 * (var(--sjs-font-size, 16px)));
}

.sd-list__item.sd-list__item--focused:not(.sd-list__item--selected) {
 outline: none;
}
.sd-list__item.sd-list__item--focused:not(.sd-list__item--selected) .sd-list__item-body {
 padding-block: calc(1.25 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sd-timer {
 z-index: 2;
 position: fixed;
 bottom: calc(var(--sd-timer-size) / 144 * 32);
 right: var(--sjs-base-unit, var(--base-unit, 8px));
 background: white;
 width: var(--sd-timer-size);
 height: var(--sd-timer-size);
 margin-right: calc(var(--sd-timer-size) / 144 * 32);
 display: flex;
 border-radius: 100%;
 padding: calc(var(--sd-timer-size) / 144 * 8);
 box-shadow: var(--sjs-shadow-large, 0px 8px 16px 0px rgba(0, 0, 0, 0.1)), var(--sjs-shadow-medium, 0px 2px 6px 0px rgba(0, 0, 0, 0.1));
 box-sizing: border-box;
}

.sd-timer--top {
 top: calc(var(--sd-timer-size) / 144 * 32);
 margin-top: calc(4 * (var(--sjs-base-unit, var(--base-unit, 8px))));
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
 stroke: var(--sjs-primary-backcolor, var(--primary, #19b394));
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
 padding: var(--sjs-base-unit, var(--base-unit, 8px));
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 font-weight: 700;
 font-size: calc(var(--sd-timer-size) / 144 * 32);
}

.sd-timer__text--major {
 color: var(--sjs-primary-backcolor, var(--primary, #19b394));
 font-weight: 700;
 font-size: calc(var(--sd-timer-size) / 144 * 32);
}

.sd-timer__text--minor {
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
 font-weight: 600;
 font-size: calc(0.75 * (var(--sjs-font-size, 16px)));
}

.sv-header {
 position: relative;
 background-color: var(--sjs-header-backcolor, var(--sjs-primary-backcolor, var(--primary, #19b394)));
}

.sv-header__overlap {
 margin-bottom: calc(-14 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-bottom: calc(8 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-header__overlap.sv-header__without-background {
 margin-bottom: 0;
 padding-bottom: 0;
}

.sv-header__without-background .sv-header--mobile,
.sv-header__without-background .sv-header__content {
 padding-bottom: 0;
}

.sd-root-modern--mobile .sv-header__overlap {
 margin-bottom: calc(-5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-bottom: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-header__content {
 padding: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 box-sizing: border-box;
 height: 100%;
 position: relative;
 display: grid;
 gap: 0;
 grid-auto-columns: 1fr 1fr 1fr;
 grid-auto-rows: 1fr 1fr 1fr;
}

.sv-header__content--static {
 max-width: calc(88 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-left: auto;
 margin-right: auto;
}

.sv-header__background-image {
 width: 100%;
 height: 100%;
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 border: 0;
 background-position-x: center;
}

.sv-header__background-image--contain {
 background-repeat: no-repeat;
}

.sv-header__cell {
 position: relative;
}

.sv-header__cell-content {
 display: flex;
 flex-direction: column;
 position: absolute;
 width: max-content;
 top: 0;
 bottom: 0;
}

.sv-header__cell--left .sv-header__cell-content {
 left: 0;
}

.sv-header__cell--center .sv-header__cell-content {
 min-width: 100%;
 left: 50%;
 transform: translateX(-50%);
}

.sv-header__cell--right .sv-header__cell-content {
 right: 0;
}

.sv-header__logo {
 display: flex;
}
.sv-header__logo img {
 display: block;
}

.sv-header__title {
 display: flex;
}

.sv-header__title .sd-title {
 --header-title-font-size: var(--sjs-font-headertitle-size, calc(2 * (var(--sjs-font-size, 16px))));
 font-size: var(--header-title-font-size);
 line-height: calc(1.25 * (var(--header-title-font-size)));
 color: var(--sjs-font-headertitle-color, var(--sjs-primary-forecolor, var(--primary-foreground, #fff)));
 font-family: var(--sjs-font-headertitle-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-headertitle-weight, 700);
 margin: 0;
}

.sv-header__logo ~ .sv-header__title {
 margin-top: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-header__logo ~ .sv-header__description {
 margin-top: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}

.sv-header__title ~ .sv-header__description {
 margin-top: var(--sjs-base-unit, var(--base-unit, 8px));
}

.sv-header__description {
 display: flex;
}

.sv-header__description .sd-description {
 --header-description-font-size: var(--sjs-font-headerdescription-size, var(--sjs-font-size, 16px));
 font-size: var(--header-description-font-size);
 line-height: calc(1.5 * (var(--header-description-font-size)));
 color: var(--sjs-font-headerdescription-color, var(--sjs-primary-forecolor, var(--primary-foreground, #fff)));
 font-family: var(--sjs-font-headerdescription-family, var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family))));
 font-weight: var(--sjs-font-headerdescription-weight, 600);
 margin: 0;
}

.sv-header__content .sd-header__text h3 {
 margin: 0;
}

.sv-header--mobile {
 padding: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 position: relative;
 z-index: 1;
}
.sv-header--mobile .sv-header__logo img {
 max-width: 100%;
}

.sv-header__background-color--none .sv-header__title .sd-title,
.sv-header__background-color--custom .sv-header__title .sd-title {
 color: var(--sjs-font-pagetitle-color, var(--sjs-general-dim-forecolor, rgba(0, 0, 0, 0.91)));
}
.sv-header__background-color--none .sv-header__description .sd-description,
.sv-header__background-color--custom .sv-header__description .sd-description {
 --header-description-font-size: var(--sjs-font-headerdescription-size, var(--sjs-font-size, 16px));
 font-size: var(--header-description-font-size);
 line-height: calc(1.5 * (var(--header-description-font-size)));
 color: var(--sjs-font-pagedescription-color, var(--sjs-general-dim-forecolor-light, rgba(0, 0, 0, 0.45)));
}

@keyframes rotationAnimation {
 from {
   rotate: 0deg;
 }
 to {
   rotate: 360deg;
 }
}
.sd-loading-indicator {
 height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-loading-indicator .sv-svg-icon {
 height: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(6 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 animation-name: rotationAnimation;
 animation-timing-function: linear;
 animation-iteration-count: infinite;
 animation-duration: 1s;
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

.sv-components-row > .sv-components-column--expandable {
 width: 1px;
}

.sjs_sp_container {
 position: relative;
 max-width: 100%;
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
 z-index: 1;
 user-select: none;
 pointer-events: none;
 width: 100%;
 height: 100%;
}

.sjs_sp_canvas {
 position: relative;
 max-width: 100%;
 display: block;
}

.sjs_sp__background-image {
 position: absolute;
 top: 0;
 left: 0;
 object-fit: cover;
 max-width: 100%;
 width: 100%;
 height: 100%;
}

.sd-root-modern {
 --sd-base-padding: calc(5 * var(--sjs-base-unit, var(--base-unit, 8px)));
 --sd-base-vertical-padding: calc(4 * var(--sjs-base-unit, var(--base-unit, 8px)));
 --sd-page-vertical-padding: calc(3 * var(--sjs-base-unit, var(--base-unit, 8px)));
}

.sd-root-modern.sd-root-modern--mobile {
 --sd-base-padding: calc(3 * var(--sjs-base-unit, var(--base-unit, 8px)));
 --sd-base-vertical-padding: calc(2 * var(--sjs-base-unit, var(--base-unit, 8px)));
 --sd-page-vertical-padding: calc(2 * var(--sjs-base-unit, var(--base-unit, 8px)));
 --sjs-mobile-font-editorfont-size: Max(16px, var(--sjs-font-editorfont-size, var(--sjs-font-size, 16px)));
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
.sd-root-modern.sd-root-modern--mobile .sd-element__title--expandable:before {
 inset-inline-start: calc(-2.5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-title.sd-container-modern__title {
 flex-direction: column;
}
.sd-root-modern.sd-root-modern--mobile .sd-header__text {
 min-width: 100%;
}
.sd-root-modern.sd-root-modern--mobile .sd-question.sd-question--table > .sd-question__content {
 padding-top: 0;
 --animation-padding-top: 0;
}
.sd-root-modern.sd-root-modern--mobile .sd-question--table,
.sd-root-modern.sd-root-modern--mobile .sd-question--scroll {
 overflow-x: visible;
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell.sd-matrix__cell {
 display: flex;
 align-items: flex-start;
 border-top: none;
 border-bottom: none;
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell.sd-matrix__cell .sd-matrix__responsive-title {
 margin-left: var(--sjs-base-unit, var(--base-unit, 8px));
 text-align: left;
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell.sd-matrix__cell:first-of-type {
 padding-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 padding-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-root-modern.sd-root-modern--mobile .sd-table thead {
 display: none;
}
.sd-root-modern.sd-root-modern--mobile .sd-table tr {
 display: flex;
 flex-direction: column;
}
.sd-root-modern.sd-root-modern--mobile .sd-matrix__table .sd-table__row {
 padding-top: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-root-modern.sd-root-modern--mobile .sd-table__row {
 padding-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-table__row--expanded .sd-table__cell-action--show-detail-mobile {
 display: none;
}
.sd-root-modern.sd-root-modern--mobile .sd-table:not(.sd-matrix__table) .sd-table__row {
 padding-bottom: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-table:not(.sd-matrix__table) .sd-table__row.sd-table__row--has-end-actions {
 padding-bottom: calc(0 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-table:not(.sd-matrix__table) tr:not(.sd-table__row--has-end-actions) {
 padding-bottom: calc(0 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-table:not(.sd-matrix__table) tr:not(.sd-table__row--has-end-actions):not(:last-of-type) {
 padding-bottom: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-table:not(.sd-matrix__table) tr:not(.sd-table__row--has-end-actions):not(:last-of-type)::after {
 bottom: calc(-3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-table:not(.sd-matrix__table) tfoot tr::before,
.sd-root-modern.sd-root-modern--mobile .sd-table:not(.sd-matrix__table) tr:not(.sd-table__row--expanded)::after {
 z-index: 12;
 content: " ";
 display: block;
 position: relative;
 height: 1px;
 background-color: var(--sjs-border-light, var(--border-light, #eaeaea));
 left: calc(-2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 width: calc(100% + 4 * var(--sjs-base-unit, var(--base-unit, 8px)));
 z-index: 12;
}
.sd-root-modern.sd-root-modern--mobile .sd-table:not(.sd-matrix__table) tr:not(.sd-table__row--expanded)::after {
 bottom: 0;
}
.sd-root-modern.sd-root-modern--mobile .sd-table:not(.sd-matrix__table) tfoot tr {
 padding-top: calc(5 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-table:not(.sd-matrix__table) tfoot tr::before {
 top: calc(-2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-table:not(.sd-table--has-footer) .sd-table__row:last-of-type .sd-table__cell-action--show-detail-mobile,
.sd-root-modern.sd-root-modern--mobile .sd-table:not(.sd-table--has-footer) .sd-table__row:last-of-type .sd-table__cell-action--remove-row {
 margin-bottom: calc(-2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-matrix__label {
 justify-content: flex-start;
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell {
 border-top: none;
 border-bottom: none;
 display: block;
 padding-top: 0;
 padding-bottom: 0;
 text-align: left;
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell {
 margin-top: calc(2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell--error {
 margin-top: calc(0 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell--error.sd-table__cell--error-bottom .sd-question__erbox {
 margin-top: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell:first-of-type,
.sd-root-modern.sd-root-modern--mobile .sd-matrix__cell {
 margin-top: 0;
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell::before {
 padding-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
 content: attr(data-responsive-title);
 font-weight: 600;
 display: block;
 text-align: left;
}
.sd-root-modern.sd-root-modern--mobile .sd-table--no-header {
 padding-top: 0;
}
.sd-root-modern.sd-root-modern--mobile .sd-table--no-header .sd-table__cell::before {
 content: none;
}
.sd-root-modern.sd-root-modern--mobile .sd-matrix__cell::before,
.sd-root-modern.sd-root-modern--mobile .sd-table__cell--actions::before,
.sd-root-modern.sd-root-modern--mobile .sd-table__cell--row-text::before,
.sd-root-modern.sd-root-modern--mobile .sd-table__cell--footer-total::before,
.sd-root-modern.sd-root-modern--mobile .sd-table__cell--error::before {
 content: none;
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell--detail-panel {
 padding-top: 0;
 padding-bottom: 0;
 border-top: 0;
 border-bottom: 0;
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell--detail-panel .sd-panel__content {
 padding-top: 0;
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell.sd-table__cell--actions {
 width: auto;
 margin-top: var(--sjs-base-unit, var(--base-unit, 8px));
 margin-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell.sd-table__cell--actions .sd-action-bar {
 margin-right: calc(-3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-left: calc(-3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 background: var(--sjs-general-backcolor, var(--background, #fff));
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell.sd-table__cell--actions #show-detail-mobile {
 flex-grow: 1;
}
.sd-root-modern.sd-root-modern--mobile .sd-action.sd-action.sd-matrixdynamic__remove-btn {
 opacity: 1;
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-action.sd-action.sd-matrixdynamic__remove-btn .sd-action__icon {
 display: none;
}
.sd-root-modern.sd-root-modern--mobile .sd-action.sd-action.sd-matrixdynamic__remove-btn:after {
 content: attr(title);
}
.sd-root-modern.sd-root-modern--mobile .sd-matrixdynamic__footer {
 padding-top: var(--sjs-base-unit, var(--base-unit, 8px));
 margin-bottom: calc(-2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell--footer-total:not(.sd-matrix__cell),
.sd-root-modern.sd-root-modern--mobile .sd-table__cell--row-text:not(.sd-matrix__cell) {
 color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}
.sd-root-modern.sd-root-modern--mobile .sd-matrixdropdown.sd-table tr::after {
 bottom: calc(-2 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-matrixdropdown.sd-table tr:last-child:after {
 content: none;
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell.sd-table__cell--error-top {
 margin-top: 0;
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell--error-top:first-of-type ~ .sd-table__cell:nth-of-type(2) {
 margin-top: 0;
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell--error-top .sd-question__erbox {
 margin-top: calc(3 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-bottom: calc(-1 * (var(--sjs-base-unit, var(--base-unit, 8px))));
}
.sd-root-modern.sd-root-modern--mobile .sd-table__cell--error-top:first-of-type .sd-question__erbox {
 margin-top: calc(0 * (var(--sjs-base-unit, var(--base-unit, 8px))));
 margin-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-root-modern.sd-root-modern--mobile .sv-ranking-item__icon-container {
 margin-left: 0;
 margin-right: 0;
}

.sd-multipletext--mobile .sd-multipletext__cell {
 display: block;
}
.sd-multipletext--mobile .sd-multipletext__cell:not(:first-of-type) {
 padding-left: 0;
 padding-top: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-multipletext--mobile .sd-multipletext__cell :not(:last-of-type) {
 padding-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-multipletext--mobile .sd-multipletext__item-container {
 padding-top: var(--sjs-base-unit, var(--base-unit, 8px));
 padding-bottom: var(--sjs-base-unit, var(--base-unit, 8px));
}
.sd-multipletext--mobile .sd-multipletext__item-title {
 max-width: none;
 border-right: none;
 width: 100%;
 padding: var(--sjs-base-unit, var(--base-unit, 8px)) 0;
 margin: 0;
}
.sd-multipletext--mobile .sd-multipletext__item {
 flex-basis: 0;
 min-width: 0;
}
.sd-multipletext--mobile .sd-multipletext__item .sd-input {
 padding: 0;
 margin: 0;
}
.sd-multipletext--mobile .sd-multipletext__item-container--answered,
.sd-multipletext--mobile .sd-multipletext__item-container--allow-focus:focus-within {
 flex-direction: column;
}
.sd-multipletext--mobile .sd-multipletext__item-container--answered .sd-multipletext__item-title,
.sd-multipletext--mobile .sd-multipletext__item-container--allow-focus:focus-within .sd-multipletext__item-title {
 padding: 0;
}
.sd-multipletext--mobile .sd-multipletext__item-container--answered .sd-multipletext__item-title span,
.sd-multipletext--mobile .sd-multipletext__item-container--allow-focus:focus-within .sd-multipletext__item-title span {
 font-size: calc(0.75 * (var(--sjs-font-size, 16px)));
 line-height: var(--sjs-font-size, 16px);
}
.sd-multipletext--mobile .sd-multipletext__item-container--answered .sd-multipletext__item,
.sd-multipletext--mobile .sd-multipletext__item-container--allow-focus:focus-within .sd-multipletext__item {
 flex-basis: auto;
 min-width: auto;
 width: 100%;
}
.sd-multipletext--mobile .sd-multipletext__item-container--answered .sd-multipletext__item .sd-input,
.sd-multipletext--mobile .sd-multipletext__item-container--allow-focus:focus-within .sd-multipletext__item .sd-input {
 width: 100%;
}

.sd-selectbase--mobile .sd-selectbase--multi-column {
 flex-direction: column;
}
.sd-selectbase--mobile .sd-selectbase--multi-column .sd-selectbase__column:not(:last-child) {
 padding-right: 0;
}

body {
 --sv-defaultV2-mark: true;
}

.sd-root-modern {
 -webkit-font-smoothing: antialiased;
 --sd-mobile-width: 600px;
 --sd-timer-size: calc(18 * var(--sjs-base-unit, var(--base-unit, 8px)));
 width: 100%;
 font-family: var(--sjs-font-family, var(--font-family, var(--sjs-default-font-family)));
 background-color: var(--sjs-general-backcolor-dim, var(--background-dim, #f3f3f3));
 position: relative;
}
@-moz-document url-prefix() {
 .sd-root-modern,
 .sd-root-modern * {
   scrollbar-width: thin;
   scrollbar-color: var(--sjs-border-default, var(--border, #d6d6d6)) transparent;
 }
}
.sd-root-modern::-webkit-scrollbar,
.sd-root-modern *::-webkit-scrollbar {
 width: 12px;
 height: 12px;
 background-color: transparent;
}
.sd-root-modern::-webkit-scrollbar-thumb,
.sd-root-modern *::-webkit-scrollbar-thumb {
 border: 4px solid rgba(0, 0, 0, 0);
 background-clip: padding-box;
 border-radius: 32px;
 background-color: var(--sjs-border-default, var(--border, #d6d6d6));
}
.sd-root-modern::-webkit-scrollbar-track,
.sd-root-modern *::-webkit-scrollbar-track {
 background: transparent;
}
.sd-root-modern::-webkit-scrollbar-thumb:hover,
.sd-root-modern *::-webkit-scrollbar-thumb:hover {
 border: 2px solid rgba(0, 0, 0, 0);
 background-color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}
.sd-root-modern form {
 position: relative;
}

.sd-root-modern--animation-disabled * {
 -webkit-transition: none !important;
 -moz-transition: none !important;
 -o-transition: none !important;
 transition: none !important;
}

.sd-root-modern.sd-root-modern--full-container {
 width: 100%;
 height: 100%;
 overflow: auto;
 position: relative;
}

.sd-root-modern--mobile {
 --sd-timer-size: calc(9 * var(--sjs-base-unit, var(--base-unit, 8px)));
}

.sd-root-modern__wrapper {
 position: relative;
 min-height: 100%;
}

.sd-root-modern--full-container .sd-root-modern__wrapper--fixed {
 position: static;
 width: 100%;
 height: 100%;
}
.sd-root-modern--full-container .sd-root-modern__wrapper--fixed form {
 overflow: auto;
 width: 100%;
 max-height: 100%;
}

@-moz-document url-prefix() {
 .sv-popup .sv-popup__scrolling-content,
 .sv-popup .sv-popup__scrolling-content * {
   scrollbar-width: thin;
   scrollbar-color: var(--sjs-border-default, var(--border, #d6d6d6)) transparent;
 }
}
.sv-popup .sv-popup__scrolling-content::-webkit-scrollbar,
.sv-popup .sv-popup__scrolling-content *::-webkit-scrollbar {
 width: 12px;
 height: 12px;
 background-color: transparent;
}
.sv-popup .sv-popup__scrolling-content::-webkit-scrollbar-thumb,
.sv-popup .sv-popup__scrolling-content *::-webkit-scrollbar-thumb {
 border: 4px solid rgba(0, 0, 0, 0);
 background-clip: padding-box;
 border-radius: 32px;
 background-color: var(--sjs-border-default, var(--border, #d6d6d6));
}
.sv-popup .sv-popup__scrolling-content::-webkit-scrollbar-track,
.sv-popup .sv-popup__scrolling-content *::-webkit-scrollbar-track {
 background: transparent;
}
.sv-popup .sv-popup__scrolling-content::-webkit-scrollbar-thumb:hover,
.sv-popup .sv-popup__scrolling-content *::-webkit-scrollbar-thumb:hover {
 border: 2px solid rgba(0, 0, 0, 0);
 background-color: var(--sjs-general-forecolor-light, var(--foreground-light, #909090));
}

/*# sourceMappingURL=defaultV2.css.map*/
`;
