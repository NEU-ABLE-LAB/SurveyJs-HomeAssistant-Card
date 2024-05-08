// We need import below mentioned packages [Lit & JQuery] initially.
import {
  LitElement,
  html,
  css
} from "lit-element";
import $ from "jquery";

// SurveyJs Lit component
class SurveyCard extends LitElement {
static styles = [
  css`
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
  `,
  css`
    .sd-element__num {
      display: none;
    }
    .sd-root-modern {
      background: none !important;
    }
    .sd-element--with-frame {
      padding: 5px !important;
    }
    .sv-string-viewer {
      position: relative;
      font-size: 18px !important;
    }
    img {
      position: absolute;
      left: -23px;
      top: 2px;
    }
  `,
  css`
    .rating-item {
      position: relative;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
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
  `,
];

// Initialize variables
static get properties() {
  return {
    config: { type: Object },
  };
}

// Config setters [Similar to general constructor]
setConfig(config) {
  // Initializing few variables
  this.config = config;
  this.survey = null;
  this.survey_timer = null;
  this.customCss = "";
  this.noUiSliderStyles = "";
  this.globalCss = "";
  // this.getCustomCss();

  setTimeout(() => {
    // Start timer or clear timer interval based on the current state of the life cycle entity
    if (
      this._hass?.states[this.config?.state_life_cycle_entity]?.state ===
        "sent" ||
      this._hass?.states[this.config?.state_life_cycle_entity]?.state ===
        "started"
    ) {
      // Timer logic
      this.startTimer(
        this._hass.states[this.config?.state_life_cycle_entity].state
      );
    } else {
      clearInterval(this.survey_timer);
    }
  }, 500);
}

// Hass setter
set hass(hass) {
  this._hass = hass;
}

// Note: Order of initial function executions: setConfig() -> hass() -> firstUpdated()
// First updated [the official documentation](https://lit.dev/docs/v1/components/lifecycle/#firstupdated)
// firstUpdated() {
//   var thisNode = this;
//   $(document).ready(function () {
//     thisNode.constructSurveyUI();
//   });
// }

firstUpdated() {
  var thisNode = this;
  $(document).ready(function () {
    // We are importing the survey jquery, widgets and showdown package here rather than at the beginning since these cdn packages are asynchronous and we need to ensure that jquery is loaded first before importing surveyjs jquery, widgets and showdown.
    $.getScript(
      "https://unpkg.com/nouislider/dist/nouislider.min.js"
    );
    $.getScript("https://unpkg.com/survey-jquery/survey.jquery.min.js").done(
      (_script, _textStatus) => {
        thisNode.constructSurveyUI();
      }
    );
    $.getScript(
      "https://unpkg.com/surveyjs-widgets@1.9.90/surveyjs-widgets.min.js"
    );
    $.getScript(
      "https://cdnjs.cloudflare.com/ajax/libs/showdown/1.6.4/showdown.min.js"
    );
  });
}

// Use the custom imported nouislider and global variables to load css and using getCustomCss function, custom css can be applied to the DOM.
async getCustomCss() {
  const customCss = this.config?.customCss;
  const noUiSliderStyles = this.config?.noUiSliderStyles;
  const globalCss = this.config?.globalCss;
  if (customCss && noUiSliderStyles && globalCss) {
    // Dynamically importing custom css files and appending them to the shadow root
    this.customCss = await import(
      this.config?.customCss + "?" + Math.random()
    );
    this.noUiSliderStyles = await import(
      this.config?.noUiSliderStyles + "?" + Math.random()
    );
    this.globalCss = await import(
      this.config?.globalCss + "?" + Math.random()
    );

    let prependStyle = this.shadowRoot.createElement("style");

    let appendStyle = this.shadowRoot.createElement("style");

    prependStyle.innerHTML = this.customCss?.default;

    this.shadowRoot.prepend(prependStyle);

    appendStyle.innerHTML =
      this.noUiSliderStyles?.default + " " + this.globalCss?.default;

    this.shadowRoot.append(appendStyle);
  }
}

startTimer(state) {
  // change state to started if state is sent and sets timer to duration specified in config
  if (state == "sent") {
    this._hass.callService("input_select", "select_option", {
      entity_id: this.config?.state_life_cycle_entity,
      option: "started",
    });
    // We are utilizing a Timer helper to start the timer and also auto submitting the survey if timer expires
    this._hass.callService("timer", "start", {
      entity_id: this.config?.expiry_timer[0].name,
      duration: this.config.expiry_timer[0].duration,
    });
  }

  this.survey_timer = setInterval(() => {
    if (
      this._hass?.states[this.config?.expiry_timer[0].name].state == "idle"
    ) {
      clearInterval(this.survey_timer);
      this.survey.doComplete();
    }
  }, 1000);
}

// Constructing SurveyJs UI [the official documentation](https://surveyjs.io/form-library/documentation/get-started-jquery)
constructSurveyUI() {
  window["surveyjs-widgets"].nouislider(Survey);

  this.survey = new Survey.Model(this.config.surveyjs_json);

  this.survey.onUpdateQuestionCssClasses.add((_, options) => {
    this.pageCssLogic(options);
  });

  this.survey.onComplete.add((sender) => {
    setTimeout(() => {
      if (this.config?.floor_plan_location) {
        sender.data.selectedFloorPlan =
          this._hass.states[this.config?.floor_plan_location]?.state;
      }

      const results = {
        response: sender.data,
        responded_at: Date.now(),
      };

      this._hass
        .callService("input_text", "set_value", {
          entity_id: this.config?.survey_response_entity,
          value: JSON.stringify(results),
        })
        .then((_data) => {
          this._hass.callService("input_select", "select_option", {
            entity_id: this.config?.state_life_cycle_entity,
            option: "received",
          });
          this._hass.callService("timer", "cancel", {
            entity_id: this.config?.expiry_timer[0].name,
          });

          // Currently below code is not required since we are hiding the UI under the 'received' survey life cycle state

          // let thank_you_element =
          //   this.shadowRoot.querySelector(".sd-completedpage");
          // thank_you_element.innerText =
          //   "Thank you for your response! Click here to return home.";
          // thank_you_element.style.cursor = "pointer";
          // thank_you_element.onclick = function () {
          //   window.location.href = "/";
          // };
        }); // : adds a thank you page,
    }, 500);
  });

  $(this.shadowRoot.getElementById("surveyElement")).Survey({
    model: this.survey,
  });
}

// Custom css code logic
pageCssLogic(options) {
  let elementsData;
  if (this.config.surveyjs_json?.elements) {
    elementsData = this.config.surveyjs_json?.elements;
  } else {
    elementsData =
      this.config.surveyjs_json?.pages[this.survey?.currentPageNo]?.elements;
  }
  for (let ele of elementsData) {
    if (
      options.question.getType() == ele.type &&
      options.question.fullTitle == ele.title &&
      ele?.customCssClassDetails
    ) {
      const classes = options.cssClasses;
      const classKey = Object.keys(
        Object.values(ele?.customCssClassDetails)[0]
      );
      const classValue = Object.values(
        Object.values(ele?.customCssClassDetails)[0]
      );

      this.cssClassUpdation(classes, classKey, classValue, ele.type);
      break;
    }
  }
}

cssClassUpdation(classes, classKey, classValue, _questionType) {
  classKey.forEach((v, i) => {
    classes[v] = classValue[i];
  });

  setTimeout(() => {
    var converter = new showdown.Converter();
    this.survey.onTextMarkdown.add(function (_survey, options) {
      //convert the markdown text to html
      var str = converter.makeHtml(options.text);
      //remove root paragraphs <p></p>
      str = str.substring(3);
      str = str.substring(0, str.length - 4);
      //set html
      options.html = str;
    });
  }, 1);
}

render() {
  // UI render
  return html`
    <link
      rel="stylesheet"
      href="https://unpkg.com/survey-jquery@1.10.1/defaultV2.min.css"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/nouislider@14.6.0/distribute/nouislider.css"
    />
    <div id="surveyElement"></div>
  `;
}
}

customElements.define("survey-card", SurveyCard);
