// File Path : /app/assets/javascripts/polyglot/polyglot.js
// Changed by Ma Xiaohang(maffee)
// Font End UI
// Created by maffee on 16/10/9.
//     (c) 2012 Airbnb, Inc.
//
//     polyglot.js may be freely distributed under the terms of the BSD
//     license. For all licensing information, details, and documention:
//     http://airbnb.github.com/polyglot.js
//
//
// Polyglot.js is an I18n helper library written in JavaScript, made to
// work both in the browser and in Node. It provides a simple solution for
// interpolation and pluralization, based off of Airbnb's
// experience adding I18n functionality to its Backbone.js and Node apps.
//
// Polylglot is agnostic to your translation backend. It doesn't perform any
// translation; it simply gives you a way to manage translated phrases from
// your client- or server-side JavaScript application.
//
!function(e){"use strict";function t(e){e=e||{},this.phrases={},this.extend(e.phrases||{}),this.currentLocale=e.locale||"en",this.allowMissing=!!e.allowMissing,this.warn=e.warn||c}function s(e){var t,n,r,i={};for(t in e)if(e.hasOwnProperty(t)){n=e[t];for(r in n)i[n[r]]=t}return i}function o(e){var t=/^\s+|\s+$/g;return e.replace(t,"")}function u(e,t,r){var i,s,u;return r!=null&&e?(s=e.split(n),u=s[f(t,r)]||s[0],i=o(u)):i=e,i}function a(e){var t=s(i);return t[e]||t.en}function f(e,t){return r[a(e)](t)}function l(e,t){for(var n in t)n!=="_"&&t.hasOwnProperty(n)&&(e=e.replace(new RegExp("%\\{"+n+"\\}","g"),t[n]));return e}function c(t){e.console&&e.console.warn&&e.console.warn("WARNING: "+t)}function h(e){var t={};for(var n in e)t[n]=e[n];return t}t.VERSION="0.4.1",t.prototype.locale=function(e){return e&&(this.currentLocale=e),this.currentLocale},t.prototype.extend=function(e,t){var n;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],t&&(r=t+"."+r),typeof n=="object"?this.extend(n,r):this.phrases[r]=n)},t.prototype.clear=function(){this.phrases={}},t.prototype.replace=function(e){this.clear(),this.extend(e)},t.prototype.t=function(e,t){var n;t=t==null?{}:t,typeof t=="number"&&(t={smart_count:t});var r=this.phrases[e]||t._||(this.allowMissing?e:"");return r===""?(this.warn('Missing translation for key: "'+e+'"'),n=e):(t=h(t),n=u(r,this.currentLocale,t.smart_count),n=l(n,t)),n};var n="||||",r={chinese:function(e){return 0},german:function(e){return e!==1?1:0},french:function(e){return e>1?1:0},russian:function(e){return e%10===1&&e%100!==11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},czech:function(e){return e===1?0:e>=2&&e<=4?1:2},polish:function(e){return e===1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},icelandic:function(e){return e%10!==1||e%100===11?1:0}},i={chinese:["fa","id","ja","ko","lo","ms","th","tr","zh"],german:["da","de","en","es","fi","el","he","hu","it","nl","no","pt","sv"],french:["fr","tl","pt-br"],russian:["hr","ru"],czech:["cs"],polish:["pl"],icelandic:["is"]};typeof module!="undefined"&&module.exports?module.exports=t:e.Polyglot=t}(this);