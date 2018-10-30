# ej2-locale

A package of Essential JS 2 component’s locale texts for various language.

## Currently supported localization languages

| Culture-Code | Language                       |
| ------------ | ------------------------------ |
| ar-AE        | Arabic - United Arab Emirates  |
| cs-CZ        | Czech - Czech Republic         |
| da-DK        | Danish - Denmark               |
| de-DE        | German - Germany               |
| en-US        | English - United States        |
| es-ES        | Spanish - Spain                |
| fa-IR        | Farsi - Iran                   |
| fi-FI        | Finnish - Finland              |
| fr-FR        | French - France                |
| he-IL        | Hebrew - Israel                |
| hr-HR        | Croatian - Croatia             |
| hu-HU        | Hungarian - Hungary            |
| it-IT        | Italian - Italy                |
| ja-JP        | Japanese - Japan               |
| ko-KR        | Korean - Korea                 |
| ms-MY        | Malay - Malaysia               |
| nb-NO        | Norwegian (Bokmål) - Norway    |
| nl-NL        | Dutch - The Netherlands        |
| pl-PL        | Polish - Poland                |
| pt-PT        | Portuguese - Portugal          |
| ro-RO        | Romanian - Romania             |
| ru-RU        | Russian - Russia               |
| sk-SK        | Slovak - Slovakia              |
| sv-SE        | Swedish - Sweden               |
| tr-TR        | Turkish - Turkey               |
| vi-VN        | Vietnamese - Vietnam           |
| zh-CN        | Chinese - China                |

## How To load locale text for Essential JS 2 components

To load translation object in Essential JS 2 components, you can load locale object in L10.load function from ej.base. For example, In the below code snippet we have loaded the locale file for Arabic culture.

```typescript
ej.base.setCulture('ar-AE');
var val, ajax;
var ajax = new ej.base.Ajax('/src/ar-AE.json', 'GET', true);
ajax.onSuccess = function (value) {
        //Assigning locale text value for Essential JS 2 components
        ej.base.L10n.load(value);
    };
ajax.send();

```