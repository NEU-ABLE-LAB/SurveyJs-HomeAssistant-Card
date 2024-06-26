## The Card Code

Find the code in the file named `survey-js-form-card.ts` alongside with this README.

### A custom element

The card has to be a [***custom
element***](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).
The class inherits from [`LitElement`](https://lit.dev).

```js
class SurveyCard extends LitElement {
```

### Visit the Official Documentation
You should know [the official
documentation](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card),
too. This tutorial is based upon it.

### Custom css and icon

Custom css file content: 

![CustomCss](src/img/custom-styles.png)

Need to declare a property name called customCssClassDetails at every question level in the configurations. 
 
Follow the below syntax:

```yaml
        elements:
          - type: nouislider
            customCssClassDetails:
              nouislider:
                item: column
                withFrame: element-with-frame
            title: Right now, you would prefer to be...
            defaultValueExpression: '0'
            hideNumber: true
            name: p
            step: '1'
            inputTYpe: range
            rangeMin: '-4'
            rangeMax: '4'
            pipsMode: values
            pipsValues:
              - -4
              - -3
              - -2
              - -1
              - 0
              - 1
              - 2
              - 3
              - 4
            pipsText:
              - value: -4
                text: Much <br> Cooler
              - value: 0
                text: No <br> Change
              - value: 4
                text: Much <br> Warmer
            tooltips: false
```

In the above code structure, syntax for the customCssClassDetails is as follows:

YAML Format 

    customCssClassDetails:
      nouislider:
        withFrame: element-with-frame

Or

JSON Format 

customCssClassDetails { 
    nouislider: { 
      withFrame: element-with-frame
    } 
} 

Explanation: 
 
nouislider: {  -->  Question type 

} 

withFrame: element-with-frame --> class key : new css class name  
 
To use the original css class name just replace the new one with the original css class name. 
 

customCssClassDetails { 
      nouislider: { 
      withFrame: sd-element--with-frame  
    } 
}

Global Css Usage:

![CssFolder](src/img//css-folder.png)

As in the above screenshot, you can declare the global and module level css javascript files in the css folder.

**Note**: To use the CSS files from **node_modules**, we need the **global.d.ts** file, which provides TypeScript declarations for CSS module imports

###  Mark Down Images

Apply markdown image path beside any text like below

title: ![A dog](/local/src/img//thermometer-svgrepo-com.svg =18x18) What room are you in?

### Typescript

We are using TypeScript in our codebase, and the TypeScript compiler options are declared in the **tsconfig.json** file

### Code Bundle

We are using **Webpack** to bundle all files into a single JavaScript file by making use of the **webpack.config.js** file 

Output:
![Markdown](src/img//markdown.png)

 ### Homeassistant DB:

 To check the stored data we can also check it in the SQL IDE's by importing the home-assistant_v2.db file

 Query 1: 

 SELECT *  FROM states LEFT JOIN states_meta ON (states.metadata_id=states_meta.metadata_id);

 ![Query 1](src/img//query_1.png)

 Query 2:  
 
SELECT *  FROM states LEFT JOIN states_meta ON (states.metadata_id=states_meta.metadata_id) WHERE states_meta.entity_id = 'input_text.surveyjsresponse_u1';

 ![Query 2](src/img//query_2.png)