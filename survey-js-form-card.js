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
      // console.log("Config", this.config);
      this.survey = null;
      this.survey_timer = null;
      this.survey_state = "";
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
      //  console.log("Interval Cleared");        // : Comment in production
      }
      // console.log(this.survey_timer);           // : Comment in production
      }, 500);
  }

  set hass(hass) {
    // console.log("Hass", hass);                  // : Comment in production
    this._hass = hass;
  }

  firstUpdated() {
    // console.log("Hi", this.config);             // : Comment in production
    var thisNode = this;
    $(document).ready(function () {
      // console.log("Jquery working");            // : Comment in production
      $.getScript("https://unpkg.com/survey-jquery/survey.jquery.min.js").done(
        (script, textStatus) => {
          // console.log(thisNode);                // : Comment in production
          thisNode.constructSurveyUI();
        }
      );
      $.getScript(
        "https://unpkg.com/surveyjs-widgets@1.9.90/surveyjs-widgets.min.js"
      ).done((script, textStatus) => {
        // console.log("Survey JS Widgets loaded");  // : Comment in production
      });
      $.getScript(
        "https://cdnjs.cloudflare.com/ajax/libs/showdown/1.6.4/showdown.min.js"
        // "https://unpkg.com/browse/showdown@1.9.1/dist/showdown.min.js"
      ).done((script, textStatus) => {
        // console.log("Showdown loaded");         // : Comment in production
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

      // console.log(
      //   this.customCss?.default,
      //   this.noUiSliderStyles?.default,
      //   this.globalCss?.default
      // );                                        // : Comment in production

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
      // countDownDate = new Date();
      // countDownDate.setMinutes(
      //   countDownDate.getMinutes() + this.config.expiry_time_min
      // );
      // this._hass.callService("input_select.select_option", "started", {
      //   entity_id: this.config?.state_life_cycle_entity,
      // });

      // this._hass.callApi(
      //   "POST",
      //   "states/" + this.config?.state_life_cycle_entity,
      //   {
      //     state: "started",
      //   }
      // );                                                                              // : Replaced with callService

      this._hass.callService("input_select", "select_option", {'entity_id': this.config?.state_life_cycle_entity, 'option': 'started'});
      // console.log(this._hass?.states[this.config?.state_life_cycle_entity] )
      this._hass.callService("timer", "start", { 'entity_id': this.config?.expiry_timer[0].name, 'duration': this.config.expiry_timer[0].duration });
      // console.log(this._hass?.states[this.config?.expiry_timer.name] )

      // setTimeout(() => {
      //   this._hass.callApi("POST", "states/" + this.config.entity, {
      //     state: "started",
      //     attributes: {
      //       start_timer_date: countDownDate.getTime(),
      //     },
      //   });

      // }, 500);                                                                        // TODO: Replace with Hass timer and init w/callService
    }
    // if state is started, gets remaining time from entity and sets timer
    else if (state == "started") {
      // CONSIDER: Add a check for timer state and remaining time
      // check the timer state;
      // if timer is idle, set state to received and clear timer
      // if timer is active, get remaining time and set timer

      // OLD CODE
      // this._hass.callApi("GET", "states/" + this.config.entity).then((data) => {
      //   // console.log("Get Entity Data", data);                                      // : Comment in production
      //   countDownDate = new Date(data.attributes.start_timer_date);                   // TODO: check with Hass.state(timer) active and remaining time
      // });
    }

    var thisHassNode = this;

    this.survey_timer = setInterval(function () {
      // var now = new Date().getTime();

      // var distance = countDownDate - now;

      // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      // var hours = Math.floor(
      //   (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      // );
      // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // console.log(
      //   // days + "d " + hours + "h " + minutes + "m " + seconds + "s ",
      //   thisHassNode.survey_timer
      // );                                                                      // : Comment in production
      // when timer expires, sets state to received and clears timer
      // if (distance < 0) {
      //   clearInterval(thisHassNode.survey_timer);
      //   thisHassNode.survey_state = "received";
      //   thisHassNode.survey.doComplete();
      // }

      if (this._hass?.states[this.config?.expiry_timer[0].name] == 'idle') {
        clearInterval(thisHassNode.survey_timer);
        thisHassNode.survey_state = "received";
        thisHassNode.survey.doComplete();
      }
    }, 1000);
  }

  constructSurveyUI() {
    var thisNode = this;
    window["surveyjs-widgets"].nouislider(Survey);
    // console.log("Script accesed", Survey, "Config", this.config, noUiSlider); // : Comment in production

    this.survey = new Survey.Model(this.config.surveyjs_json);
    // console.log(
    //   "Survey Model",
    //   this.survey,
    //   this.survey.visiblePages,
    //   this.survey.currentPageNo
    // );                                                                         //  Comment in production

    // console.log(this.config.surveyjs_json);                                   //   Comment in production

    this.survey.onUpdateQuestionCssClasses.add(function (_, options) {
      thisNode.pageCssLogic(options);
    });

  //   this.survey_state = "received";

    this.survey.onComplete.add((sender) => {
      // this._hass.callApi(
      //   "POST",
      //   "states/" + this.config?.state_life_cycle_entity,
      //   {
      //     state: this.survey_state,
      //   }
      // )                                                                         // : Replace with callService

      // console.log("Survey Completed", sender.data);                            // : Comment in production

      // setter for received state; uses call service instead of call api
      this.survey.onComplete.add((sender) => {
        this._hass.callService("input_select", "select_option", {'entity_id': this.config?.state_life_cycle_entity, 'option': 'received'});
      });

      setTimeout(() => {
        if (this.config?.floor_plan_location) {
          sender.data.selectedFloorPlan =
            this._hass.states[this.config?.floor_plan_location]?.state;
        }

        const results = {
          response: sender.data,
          responded_at: Date.now(),
        };

        // this._hass
        //   .callService("notify", "update_sjs_reponse", {
        //     message: JSON.stringify({
        //       survey_lifecycle: "started",
        //       survey_response: results,
        //     }),
        //   }) // Replace with callService
        this._hass.callService("input_text", "set_value",
          {
            "entity_id": this.config?.survey_response_entity,
            "value": JSON.stringify(results)})
          .then((data) => {
            // console.log("Post Entity Data", data);                          // : Comment in production
              // clearInterval(this.survey_timer);
              // console.log(this.config?.expiry_timer[0].name)
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

    // sliders.forEach(function(slider) {
    //   sliderElem = slider.noUislider
    //   sliderElem.on('start', (values, handle, unencoded, tap, positions, noUiSlider) => {
    //     let handleElem = document.querySelectorAll("div.noUi-handle[data-handle='" + handle + "']")[0];
    //     let currentClass = handleElem.className;
    //     let updateClass = currentClass + '-color-change'
    //     handleElem.classList.add(updateClass);
    //   });

    // });
  }

  pageCssLogic(options) {
    // console.log(options, "Custom CSS", options.question.getType());                 // : Comment in production

    let elementsData;
    if (this.config.surveyjs_json?.elements) {
      // console.log("Only one element");                                              // : Comment in production
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
        // this.survey.css = ele?.customCssClassDetails;

        const classes = options.cssClasses;
        const classKey = Object.keys(
          Object.values(ele?.customCssClassDetails)[0]
        );
        const classValue = Object.values(
          Object.values(ele?.customCssClassDetails)[0]
        );

        this.cssClassUpdation(classes, classKey, classValue, ele.type);

        // classes[classKey] = classValue;

        // console.log(
        //   "Available",
        //   ele.type,
        //   this.survey.css,
        //   ele?.customCssClassDetails
        // );                                                                       // : Comment in production
        break;
      }
    }
  }

  cssClassUpdation(classes, classKey, classValue, questionType) {
    // console.log(classes, classKey, classValue, questionType, "Classes");               // : Comment in production
    classKey.forEach((v, i) => {
      classes[v] = classValue[i];
    });

    setTimeout(() => {
      var converter = new showdown.Converter();
      this.survey.onTextMarkdown.add(function (survey, options) {
        //convert the markdown text to html

        // console.log(options, options.html);                                            // : Comment in production

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
