# ej2-locale

Locale translations for Essential JS 2 components in multiple languages.

## Currently supported localization languages

| Culture-Code | Language                       |
| ------------ | ------------------------------ |
| ar-AE        | Arabic - United Arab Emirates  |
|ar            | Arabic - Arabia               |
| cs        | Czech - Czech Republic         |
| da      | Danish - Denmark               |
| de       | German - Germany               |
| en-GB     | English - United Kingdom      |
| en-US        | English - United States        |
| es      | Spanish - Spain                |
| fa      | Farsi - Iran                   |
| fi       | Finnish - Finland              |
| fr        | French - France                |
| he       | Hebrew - Israel                |
| hr      | Croatian - Croatia             |
| hu     | Hungarian - Hungary    
| id           | Indonesian
| is     |Icelandic - Iceland             |
| it     | Italian - Italy                |
| ja     | Japanese - Japan               |
| ko     | Korean - Korea                 |
| ms      | Malay - Malaysia               |
| nb      | Norwegian (Bokmål) - Norway    |
| ne-NP   | Nepali - Nepal               |
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

## How to load locale text for Essential JS 2 components

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

### How to load locale globally in typescript

Importing from json files with typescript you first need to enable the `resolveJsonModule` flag. Either by adding it to your tsconfig.json or directly as argument to the compiler.  
It is important to use a plain object! Passing EJ2_LOCALE directly will not work for the `L10n.load()` method.

```typescript
import * as EJ2_LOCALE from "../../node_modules/@syncfusion/ej2-locale/src/de.json";
L10n.load({ de: EJ2_LOCALE.de });
setCulture("de");
```
