import { LitElement, html } from "lit";
import { state } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";
import $ from "jquery";
import * as Survey from "survey-jquery";
import showdown from "showdown";
import * as widgets from "surveyjs-widgets";
import "survey-jquery/defaultV2.min.css";
import "nouislider/distribute/nouislider.min.css";
import { globalStyles } from "./css/global.js";
import { noUiSliderStyles } from "./css/nouislider.js";
import { surveyCardCustomCssStyles } from "./css/survey-card-custom-css.js";

// SurveyJs Lit component
class SurveyCard extends LitElement {
  static styles = [noUiSliderStyles, globalStyles, surveyCardCustomCssStyles];

  @state() _config;
  @state() _hass;
  @state() survey;
  @state() survey_timer;

  // Config setters [Similar to general constructor]
  setConfig(config) {
    // Initializing few variables
    this._config = config;
    this.survey = null;
    this.survey_timer = null;

    setTimeout(() => {
      // Start timer or clear timer interval based on the current state of the life cycle entity
      if (
        this._hass?.states[this._config?.state_life_cycle_entity]?.state ===
          "sent" ||
        this._hass?.states[this._config?.state_life_cycle_entity]?.state ===
          "started"
      ) {
        // Timer logic
        this.startTimer(
          this._hass.states[this._config?.state_life_cycle_entity].state
        );
      } else {
        clearInterval(this.survey_timer);
      }
    }, 500);
  }

  // Hass setter
  set hass(hass: HomeAssistant) {
    this._hass = hass;
  }

  // Note: Order of initial function executions: setConfig() -> hass() -> firstUpdated()
  // First updated [the official documentation](https://lit.dev/docs/v1/components/lifecycle/#firstupdated)
  firstUpdated() {
    this.constructSurveyUI();
  }

  startTimer(state) {
    // change state to started if state is sent and sets timer to duration specified in config
    if (state == "sent") {
      this._hass.callService("input_select", "select_option", {
        entity_id: this._config?.state_life_cycle_entity,
        option: "started",
      });
      // We are utilizing a Timer helper to start the timer and also auto submitting the survey if timer expires
      this._hass.callService("timer", "start", {
        entity_id: this._config?.expiry_timer[0].name,
        duration: this._config.expiry_timer[0].duration,
      });
    }

    this.survey_timer = setInterval(() => {
      if (
        this._hass?.states[this._config?.expiry_timer[0].name].state == "idle"
      ) {
        clearInterval(this.survey_timer);
        this.survey.doComplete();
      }
    }, 1000);
  }

  // Constructing SurveyJs UI [the official documentation](https://surveyjs.io/form-library/documentation/get-started-jquery)
  constructSurveyUI() {
    widgets.nouislider(Survey);
    this.survey = new Survey.Model(this._config.surveyjs_json);

    this.survey.onUpdateQuestionCssClasses.add((_, options) => {
      this.pageCssLogic(options);
    });

    this.survey.onComplete.add((sender) => {
      setTimeout(() => {
        if (this._config?.floor_plan_location) {
          sender.data.selectedFloorPlan =
            this._hass.states[this._config?.floor_plan_location]?.state;
        }

        const results = {
          response: sender.data,
          responded_at: Date.now(),
        };

        this._hass
          .callService("input_text", "set_value", {
            entity_id: this._config?.survey_response_entity,
            value: JSON.stringify(results),
          })
          .then((_data) => {
            this._hass.callService("input_select", "select_option", {
              entity_id: this._config?.state_life_cycle_entity,
              option: "received",
            });
            this._hass.callService("timer", "cancel", {
              entity_id: this._config?.expiry_timer[0].name,
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
    // @ts-ignore
    $(this.shadowRoot.getElementById("surveyElement")).Survey({
      model: this.survey,
    });
  }

  // Custom css code logic
  pageCssLogic(options) {
    let elementsData;
    if (this._config.surveyjs_json?.elements) {
      elementsData = this._config.surveyjs_json?.elements;
    } else {
      elementsData =
        this._config.surveyjs_json?.pages[this.survey?.currentPageNo]?.elements;
    }
    for (let ele of elementsData) {
      if (
        options.question.getType() == ele.type &&
        options.question.jsonObj.title == ele.title &&
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
    // @ts-ignore
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
  }

  render() {
    // UI render
    return html`
      <link rel="stylesheet" href="/local/dist/main.css" />
      <div id="surveyElement"></div>
    `;
  }
}

customElements.define("survey-card", SurveyCard);
