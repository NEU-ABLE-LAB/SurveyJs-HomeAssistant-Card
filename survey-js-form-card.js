import {
  LitElement,
  html,
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";
import "https://unpkg.com/nouislider/dist/nouislider.min.js";
import "https://unpkg.com/jquery";

class SurveyCard extends LitElement {
  static get properties() {
    return {
      config: { type: Object },
    };
  }

  setConfig(config) {

      this.config = config;
      this.survey = null;
      this.survey_timer = null;
      this.customCss = "";
      this.noUiSliderStyles = "";
      this.globalCss = "";
      this.getCustomCss();

      setTimeout(() => {
      if (
          this._hass?.states[this.config?.state_life_cycle_entity]?.state ===
          "sent" ||
          this._hass?.states[this.config?.state_life_cycle_entity]?.state ===
          "started"
      ) {
          this.startTimer(
          this._hass.states[this.config?.state_life_cycle_entity].state
          );
      } else {
          clearInterval(this.survey_timer);
      }
      }, 500);
  }

  set hass(hass) {
    this._hass = hass;
  }

  firstUpdated() {
    var thisNode = this;
    $(document).ready(function () {
      $.getScript("https://unpkg.com/survey-jquery/survey.jquery.min.js").done(
        (script, textStatus) => {
          thisNode.constructSurveyUI();
        }
      );
      $.getScript(
        "https://unpkg.com/surveyjs-widgets@1.9.90/surveyjs-widgets.min.js"
      ).done((script, textStatus) => {
      });
      $.getScript(
        "https://cdnjs.cloudflare.com/ajax/libs/showdown/1.6.4/showdown.min.js"
      ).done((script, textStatus) => {
      });
    });
  }

  async getCustomCss() {
    const customCss = this.config?.customCss;
    const noUiSliderStyles = this.config?.noUiSliderStyles;
    const globalCss = this.config?.globalCss;
    if (customCss && noUiSliderStyles && globalCss) {
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
    var countDownDate;
    // change state to started if state is sent and sets timer to duration specified in config
    if (state == "sent") {
      this._hass.callService("input_select", "select_option", {'entity_id': this.config?.state_life_cycle_entity, 'option': 'started'});
      this._hass.callService("timer", "start", { 'entity_id': this.config?.expiry_timer[0].name, 'duration': this.config.expiry_timer[0].duration });
    }
    // if state is started, gets remaining time from entity and sets timer
    else if (state == "started") {
    }

    var thisHassNode = this;

    this.survey_timer = setInterval(function () {
      if (thisHassNode._hass?.states[thisHassNode.config?.expiry_timer[0].name].state == 'idle') {
        clearInterval(thisHassNode.survey_timer);
        thisHassNode.survey.doComplete();
      }
    }, 1000);
  }

  constructSurveyUI() {
    var thisNode = this;
    window["surveyjs-widgets"].nouislider(Survey);

    this.survey = new Survey.Model(this.config.surveyjs_json);

    this.survey.onUpdateQuestionCssClasses.add(function (_, options) {
      thisNode.pageCssLogic(options);
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

        this._hass.callService("input_text", "set_value",
          {
            "entity_id": this.config?.survey_response_entity,
            "value": JSON.stringify(results)})
          .then((data) => {
            this._hass.callService("input_select", "select_option", {'entity_id': this.config?.state_life_cycle_entity, 'option': 'received'});
            this._hass.callService("timer", "cancel", {'entity_id': this.config?.expiry_timer[0].name});
            let thank_you_element =
              this.shadowRoot.querySelector(".sd-completedpage");
            thank_you_element.innerText =
              "Thank you for your response! Click here to return home.";
            thank_you_element.style.cursor = "pointer";
            thank_you_element.onclick = function () {
              window.location.href = "/";
            };
          });                                                             // : adds a thank you page,
      }, 500);
    });

    $(this.shadowRoot.getElementById("surveyElement")).Survey({
      model: this.survey,
    });

    // adds click handler
    const questions = this.survey.getAllQuestions();

    const sliders = questions.filter((q) => q.getType() === "nouislider");
  }

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

  cssClassUpdation(classes, classKey, classValue, questionType) {
    classKey.forEach((v, i) => {
      classes[v] = classValue[i];
    });

    setTimeout(() => {
      var converter = new showdown.Converter();
      this.survey.onTextMarkdown.add(function (survey, options) {
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
    return html`
      <link
        rel="stylesheet"
        href="https://unpkg.com/survey-jquery@1.9.84/defaultV2.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/nouislider/dist/nouislider.min.css"
      />
      <div id="surveyElement"></div>
    `;
  }
}

customElements.define("survey-card", SurveyCard);