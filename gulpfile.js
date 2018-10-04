var gulp = require('gulp');
var fs = require('fs');
var glob = require('glob');
var configPackage = JSON.parse(fs.readFileSync('./locale.json', 'utf8'));
var arr, langName, localeArray = [], obj = {}, variable;
var dir = './converted_language';
var simpleGit = require('simple-git');
var shelljs = require('shelljs');
var folder = glob.sync('./language_convert/*');
gulp.task('build', function () {
    for (var i = 0; i < folder.length; i++) {
        langName = folder[i].replace(/(.\/language_convert\/|.txt)/g, '');
        obj = {};
        var cultureFile = fs.readFileSync(folder[i], 'utf8');
        arr = cultureFile.match(/(.*)[^\n\r]+/g);
        var j = 0;
        if (j < arr.length) {
            for (variable in configPackage) {
                Object.keys(configPackage[variable]).forEach(function (keys) {
                    configPackage[variable][keys] = arr[j];
                    j++
                });

            }
        }
        obj[langName] = configPackage;

         if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        fs.writeFileSync(`${dir}/ ${folder[i].replace(/(.\/language_convert\/|.txt)/g, '')}.json`, JSON.stringify(obj, null, 4));


    }
   
});


