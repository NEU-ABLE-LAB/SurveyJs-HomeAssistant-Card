## Current constraints: 
- HA doesn't support non-admin users to call apis 
so traditional way of hass.callApi() is not possible. [code-source:](https://github.com/home-assistant/core/blob/f422dd418b95ce5ad1459d5296bf43b67d09dfa0/homeassistant/components/api/__init__.py#L292) 
    - HA doesn't support non-admin users to make websocket connection either
    - HA doesn't support non-admin users to make http request to HA server either
## Possible solutions:
- Only way forward is to use HA service calls to store the JSON format surveyjs data in a HA file. [code-source:](https://github.com/home-assistant/core/blob/f422dd418b95ce5ad1459d5296bf43b67d09dfa0/homeassistant/components/api/__init__.py#L323C1-L332C35 )

    - Then use HA service calls to read the JSON format surveyjs lifecycle_state and attr data from this file and convert it to a sensor entity with lifecycle as state and response and metadata as attributes.
    - the file sensor entity can be used to display the surveyjs data in HA frontend. the file sensor reads the last line of the file and converts it to a necessary format for HA frontend to display.


Interesting Solutions/ideas on community:
- [python_scripts](https://www.home-assistant.io/integrations/python_script/#calling-services)
- [community ideas 1](https://community.home-assistant.io/t/reading-multiple-rows-from-csv/326335/12)
- [community ideas 2](https://community.home-assistant.io/t/multiple-line-text-file-to-template-sensor-attributes/335904)
- [community ideas 3](https://community.home-assistant.io/t/read-json-file-into-sensor/108104/6) [.sh file Github](https://github.com/DavidFW1960/ABB-Home-Assistant-Usage)

## Proposed solution:
### Explanation:
- python script to read the text file and take last line which is a JSON string - store it in a .json file.  
- use HA REST/command line sensor to read the .json file and convert it to a sensor entity with lifecycle as state and response and metadata as attributes.
- reasons for not using file sensor - file sensor doesn't support attributes.
### Implementation:
> So custom card will have to make few callService to store the surveyjs intermittent states and in the end response data in a file 
```
    - to do this we can use the notify service for a file sensor entity. This will append a line at the end of the file. 
    | Done implementation in the custom card by Mani

    - callservice to run the python_scripts to read the last line of the .txt file and save it to the designated .json file.
    | TODO write python_script, create a service call to run the python_script, call the service from the custom card. Pending implementation by Maharshi
    - call homeassistant.update_entity service to update the RESTful sensor entity with the new state and attributes.

```
    