/**
 * Created by maffee on 16/10/9.
 */

// var cookieLocale = document.cookie.replace(/(?:(?:^|.*;\s*)taUserLocale\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var i18nStructure = {}
var polyglot = new Polyglot()
var userLang;

var setTitle = function(title) {
    document.title = title + " - TerrAvion";
};


i18nStructure.setup = function(){
    var cookieLocale = cookieParserUtil.readCookie("taUserLocale")
    userLang = cookieLocale || navigator.language || navigator.userLanguage;
    userLang = userLang.toLowerCase()
    var userLangCode = userLang.substr(0, 2)
    var file
    if (userLangCode === "es"){
        file = 'es.js';
    } else {
        file = 'en-US.js'
    }

    var loadLanguagePath = 'talib/l10n/' + file

    $.ajax({
        url: loadLanguagePath,
        dataType: "script",
        async: false
    })

    setTitle(polyglot.t("order.title"))
}

i18nStructure.setup()
