# ej2-locale

Locale translations for Essential JS 2 components in multiple languages.

## Currently supported localization languages

| Culture-Code | Language                       |
| ------------ | ------------------------------ |
| ar-AE        | Arabic - United Arab Emirates  |
| cs        | Czech - Czech Republic         |
| da      | Danish - Denmark               |
| de       | German - Germany               |
| en-US        | English - United States        |
| es      | Spanish - Spain                |
| fa      | Farsi - Iran                   |
| fi       | Finnish - Finland              |
| fr        | French - France                |
| he       | Hebrew - Israel                |
| hr      | Croatian - Croatia             |
| hu     | Hungarian - Hungary    
| id           | Indonesian
| it     | Italian - Italy                |
| ja     | Japanese - Japan               |
| ko     | Korean - Korea                 |
| ms      | Malay - Malaysia               |
| nb      | Norwegian (Bokmål) - Norway    |
| nl      | Dutch - The Netherlands        |
| pl      | Polish - Poland                |
| pt      | Portuguese - Portugal          |
| ro      | Romanian - Romania             |
| ru     | Russian - Russia               |
| sk     | Slovak - Slovakia              |
| sv      | Swedish - Sweden               |
| th     | Thai - Thailand                 |
| tr    | Turkish - Turkey               |
| vi     | Vietnamese - Vietnam           |
| zh       | Chinese - China                |

## How To load locale text for Essential JS 2 components

To load translation object in Essential JS 2 components, you can load locale object in L10.load function from ej.base. For example, In the below code snippet we have loaded the locale file for Arabic culture.

```typescript
ej.base.setCulture('ar-AE');
var ajax = new ej.base.Ajax('/src/ar-AE.json', 'GET', true);
ajax.onSuccess = function (value) {
        //Assigning locale text value for Essential JS 2 components
        ej.base.L10n.load(value);
    };
ajax.send();

```
