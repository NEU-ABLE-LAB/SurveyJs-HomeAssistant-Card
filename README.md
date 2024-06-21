# SurveyJs Form Card
The SurveyJS Form Card is a custom integration for [Home Assistant][home-assistant] that allows you to embed dynamic and interactive surveys or forms within Home Assistant cards. This integration leverages the powerful SurveyJS library to create, manage, and display forms, enabling users to collect and process data directly from their Home Assistant dashboards.
***

* @published: May 2023
* @author: Manikanta Reddy Thikkavarapu
* @workspace: `config/www`

[![hacs][hacs-badge]][hacs-url]
[![release][release-badge]][release-url]
![downloads][downloads-badge]

## Prerequisites

* [Development Environment](https://github.com/home-assistant-tutorials/01.development-environment)
* basic skills of Javascript, Jquery, Web Components, Lit Library, Webpack
* a workspace `config/www`

## Installation

### HACS

SurveyJs Form Card is available in [HACS][hacs] (Home Assistant Community Store).

1. Install HACS if you don't have it already
2. Open HACS in Home Assistant
3. Go to "Frontend" section
4. Search for "SurveyJs Form Card" and download the card

### Manual

1. Download `dist/survey-js-form-card.js` file from the [latest release][release-url].
2. Put `survey-js-form-card.js` file into your `config/www` folder.

### Adding the Resource

Open your admin account of the development environment in the web browser. Did
you already unlock **Advanced Mode**?

![unlock advanced mode](img/advanced-mode.png)

Go to ***Settings*** > ***Dashboard***. Click the three dots in the upper right
hand corner to open ***Resources***. Click ***ADD RESOURCE*** in the lower right
hand corner.

##### HACS
As the URL enter `/hacsfiles/SurveyJs-HomeAssistant-Card/survey-js-form-card.js?hacstag=66035578447`. Choose ***JavaScript Module*** and submit.

![adding as resource](img/adding-as-resource_prod.png)

##### Manual
As the URL enter `/local/survey-js-form-card.js`. Choose ***JavaScript Module*** and submit.

![adding as resource](img/adding-as-resource_dev.png)

### Using the Card

Go to a dashboard. Use the three dots in the upper right hand corner to edit the
dashboard. Take control if required. Click ***+ ADD CARD***. At the bottom
select ***Manual*** to add a custom card.

![card configuration](img/card-config-1.png)

In the card configuration enter:

```yaml
type: custom:survey-card
entity: sensor.survey_js_entity
surveyjs_json: {
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "checkbox",
     "name": "car",
     "width": "1000px",
     "minWidth": "1000px",
     "maxWidth": "1000px",
     "title": "Which is the brand of your car?",
     "description": "If you own cars from multiple brands, please select all of them.",
     "isRequired": true,
     "choices": [
      "Ford",
      "Vauxhall",
      "Volkswagen"
     ],
     "separateSpecialChoices": true,
     "showOtherItem": true,
     "showNoneItem": true,
     "colCount": 2,
     "showSelectAllItem": true
    }
   ]
  }
 ],
 "showQuestionNumbers": "off"
}
```

1. type: custom:survey-card (Don't forget the `custom` prefix to custom element card & `custom:survey-card` name should match with whatever name we give below) -> 
```js
customElements.define("survey-card", SurveyCard);
```
2. entity: sensor.survey_js_entity (Here you need to mention whatever entity you are using)
3. surveyjs_json: Copy paste the survey json

```json
{
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "checkbox",
     "name": "car",
     "width": "1000px",
     "minWidth": "1000px",
     "maxWidth": "1000px",
     "title": "Which is the brand of your car?",
     "description": "If you own cars from multiple brands, please select all of them.",
     "isRequired": true,
     "choices": [
      "Ford",
      "Vauxhall",
      "Volkswagen"
     ],
     "separateSpecialChoices": true,
     "showOtherItem": true,
     "showNoneItem": true,
     "colCount": 2,
     "showSelectAllItem": true
    }
   ]
  }
 ],
 "showQuestionNumbers": "off"
}
```
4. Save the changes

Note:
How to create the json ?
Answer: Use surveyjs survey creation link -> [`Survey Creator`](https://surveyjs.io/create-free-survey)

If everything went well so far, congratulations! You should now see the output of the first card you created yourself. Try different entities.

![success](img/success.png)

### Entities & Helpers

SurveyJs card totally depends on 1 entity and 3 helpers:

1) Sensor: [`Documentation 1`](https://www.home-assistant.io/integrations/sensor/) & [`Documentation 2`](https://developers.home-assistant.io/docs/core/entity/sensor/)
    * Sensor entity is used to store floor plan location
2) input_select: [`Documentation`](https://www.home-assistant.io/integrations/input_select/)
    * Input select helper is used to monitor surveyjs lifecycle state changes; anytime the state of the Input select entity changes, the same state change is triggered in the surveyjs sensor entity.
3) input_text: [`Documentation`](https://www.home-assistant.io/integrations/input_text/)
    * Input text helper is used to store surveyjs form response.
4) timer: [`Documentation`](https://www.home-assistant.io/integrations/timer/)
    * Timer helper is used for two purposes in our project, one is for countdown timer for surveyjs form submission and another one is for notification timer

Note: The reason for using helper functions instead of sensor entities for all purposes is that state changes with sensor entities are not permanent and data is not saved in the homeassistant database.

Declare entities and helpers in the homeassistant card configuration editor like in the below image:

![CustomCssConfig](img/card-config-2.png)

## Help

Feel free to open an issue if something is not working as expected. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github)](https://github.com/NEU-ABLE-LAB/SurveyJs-HomeAssistant-Card/issues)

Got questions or thoughts about SurveyJs Form Card? Want to share your dashboards or discoveries? You can go on the GitHub Discussions section.

[![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github)](https://github.com/NEU-ABLE-LAB/SurveyJs-HomeAssistant-Card/discussions)


##  For further deep-dive into the code go to code-explainer.md


<!-- Badges -->

[hacs-url]: https://github.com/hacs/integration
[hacs-badge]: https://img.shields.io/badge/hacs-default-orange.svg?style=flat-square
[release-badge]: https://img.shields.io/github/v/release/NEU-ABLE-LAB/SurveyJs-HomeAssistant-Card?style=flat-square
[downloads-badge]: https://img.shields.io/github/downloads/NEU-ABLE-LAB/SurveyJs-HomeAssistant-Card/total?style=flat-square

<!-- References -->

[home-assistant]: https://www.home-assistant.io/
[hacs]: https://hacs.xyz
[release-url]: https://github.com/NEU-ABLE-LAB/SurveyJs-HomeAssistant-Card/releases