const fs=require('fs');
const https = require('https')
const gulp = require('gulp')
gulp.task('Localization-Translator', async function (done) {
  const list = ['ar-AE', 'ar', 'cs', 'da', 'de', 'es', 'fa', 'fi', 'fr', 'he', 'hr', 'hu', 'id', 'is', 'it', 'ja', 'ko', 'ms', 'nb', 'nl', 'pl', 'pt-BR', 'pt', 'ro', 'ru', 'sk', 'sv', 'th', 'tr', 'vi', 'zh']
  const English = require(process.cwd() + '/src/en-US.json');
  var componetslist= English['en-US'];
  const array=Object.keys(componetslist);
  for (let i = 0; i < list.length; i++) {
    const OtherLang = require(process.cwd()+ '/src/' + list[i] + '.json');
    for (let j = 0; j < array.length; j++) {
      var jsonValues1 = English['en-US'][array[j]];
      var jsonValues2 = OtherLang[list[i]][array[j]];
      const keys1 = Object.keys(jsonValues1);
      for (const key of keys1) {
        if (jsonValues1[key] === jsonValues2[key]) {
          var textToTranslate = jsonValues2[key];
          var targetLanguage = list[i];
          let translatedText = await translateText(textToTranslate, targetLanguage);
          if (translatedText != textToTranslate) {
            jsonValues2[key] = translatedText;
          }
        }
      }
    }
    const filePath =process.cwd()+ '/src/' + list[i] + '.json';
    const jsonString = JSON.stringify(OtherLang, null, 2);
    fs.writeFile(filePath, jsonString, (err) => {
      if (err) {
        console.error(list[i] + ":" + ' Error writing to JSON file:', err);
        return;
      }
      console.log(list[i] + ":" + ' JSON object translated written to file successfully!');
    });
  }
  done();
})
async function translateText(text, targetLanguage) {
  const sourceLanguage = 'auto';
  const url = `https://translate.google.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`;
  return new Promise((resolve, reject) => {
    const req = https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          const translatedText = parsedData[0][0][0];
          resolve(translatedText);
        } catch (error) {
          reject(error);
        }
      });
    });
    req.on('error', (error) => {
      reject(error);
    });
  });
}