!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=21)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.pluginName="vue-i18n-manager",a=t.warn=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&console.warn("["+r+"] "+e)};t.error=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&console.error("["+r+"] "+e)},t.getNamespace=function(e){return r+"/"+e},t.mapGetters=function(e){var t={};return e.forEach(function(e){t[e]=function(){return"undefined"==typeof this.$store.getters[e]&&a('Unknown getter: "'+e+'"'),this.$store.getters[e]}}),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default={REMOVE_LANGUAGE_PERSISTENCY:(0,r.getNamespace)("REMOVE_LANGUAGE_PERSISTENCY"),UPDATE_CONFIGURATION:(0,r.getNamespace)("UPDATE_CONFIGURATION"),SET_LANGUAGE:(0,r.getNamespace)("SET_LANGUAGE"),SET_TRANSLATION:(0,r.getNamespace)("SET_TRANSLATION"),SET_FORCE_TRANSLATION:(0,r.getNamespace)("SET_FORCE_TRANSLATION"),ADD_LANGUAGE:(0,r.getNamespace)("ADD_LANGUAGE"),ADD_TRANSLATION:(0,r.getNamespace)("ADD_TRANSLATION"),FILTER_LANGUAGES:(0,r.getNamespace)("FILTER_LANGUAGES")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defineKeys=t.defineLanguages=t.defineLanguage=t.defineUniqueLanguage=void 0;var r=n(0),a=function(e,t){return e.filter(function(e){return t.indexOf(e)<0})},u=(t.defineUniqueLanguage=function(e,t){var n=e.find(function(e){return e.code===t.code});return!n||((0,r.warn)('"'+t.code+'" already exists in the list of languages'),!1)},t.defineLanguage=function(e){var t=["code","translationKey","urlPrefix"],n=Object.keys(e),u=a(t,n);return!u.length||((0,r.warn)('Invalid definition. Property "'+u.join(", ")+'" missing in "'+e.code+'".'),!1)});t.defineLanguages=function(e,t){var n=void 0;return e.forEach(function(e){u(e),e.code===t&&(n=e)}),!!n||((0,r.warn)("The default code must matches at least one language in the provided list"),!1)},t.defineKeys=function(e,t,n){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=a(e,t);return!o.length||(o.forEach(function(e){var t=u.find(function(t){return t.old===e});return t?void(0,r.warn)('"'+e+'" is a deprecated parameter. Please use "'+t.new+'"'):void(0,r.warn)('"'+e+'" is not a valid parameter to pass to '+n)}),!1)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={getTranslation:null};t.assignProxy=function(e,t){r[e]=t};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.routeParser=t.registerRouter=t.updateURLPrefix=t.localize=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t,n){e.prototype.$localize=function(e){return f(e,n.getters.currentLanguage.urlPrefix)}};var o=n(1),i=r(o),f=t.localize=function(e,t){var n=e.params||{},r=u({},e),a=r.path;return delete r.path,Object.assign({},r,{path:a,params:u({},n,{lang:t})})},l=t.updateURLPrefix=function(e,t){var n=e.currentRoute;e&&n&&e.replace(f(n,t))},c=function(e,t){return t.find(function(t){return t.urlPrefix===e})};t.registerRouter=function(e,t){if(e){var n=t.getters.currentLanguage.urlPrefix,r=e.currentRoute.params.lang,a=c(r,t.getters.languages);a&&t.getters.trustURL&&(n=a.urlPrefix,t.dispatch(i.default.SET_LANGUAGE,n)),l(e,n),e.beforeEach(function(e,n,r){var a=t.getters,u=a.availableLanguages,o=a.currentLanguage,l=a.forceTranslation,c=a.languages,s=e.params.lang,d=l?c:u,g=d.find(function(e){return e.urlPrefix===s});if(!g||!n.name)return r(f(e,o.urlPrefix));var v=g&&g.urlPrefix!==o.urlPrefix;return v?t.dispatch(i.default.SET_LANGUAGE,g.code).then(function(){return r()}):void r()})}},t.routeParser=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";return e.forEach(function(e){var t=e.path;e.path="/:lang"+t}),[].concat(a(e),[{path:"/*",name:"redirect",redirect:{path:"/"+t}}])}},,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.router,r=t.store;if((0,f.default)(r),(0,c.default)(e,n,r),(0,d.default)(e,n,r),t.proxy){var a=Object.keys(t.proxy);a.forEach(function(e){return(0,g.assignProxy)(e,t.proxy[e])})}e.initI18nManager=v(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.events=t.routeParser=void 0,t.default=a;var u=n(1),o=r(u),i=n(9),f=r(i),l=n(8),c=r(l),s=n(4),d=r(s),g=n(3),v=function(e,t){var n=t.store,r=t.router,a=t.config;return function(){return Promise.all([n.dispatch(o.default.UPDATE_CONFIGURATION,a),n.dispatch(o.default.SET_LANGUAGE,n.getters.defaultCode)]).then(function(){(0,s.registerRouter)(r,n)})}};t.routeParser=s.routeParser,t.events=o.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.translate=void 0,t.default=function(e,t,n){e.prototype.$setLanguage=c(t,n),e.prototype.$t=s(n)};var a=n(1),u=r(a),o=n(4),i=n(0),f=function(e,t){e.length>0&&(e=e.map(function(e){return'"'+e+'"'}),(0,i.warn)("No match found for "+e.join(", ")+' in "'+t+'"'))},l=function(e,t){if(!t)return e;var n=e,r=[],a=new RegExp(/\{.*?}s?/g),u=e.match(a),o=Object.keys(t);return u?(u.forEach(function(n,a){var u=n.slice(1,-1),i=t[u],f=o[a];return!i&&f?void r.push(f):void(e=e.replace(n,i))}),f(r,n),e):void 0},c=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.getters.defaultCode,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.dispatch(u.default.SET_LANGUAGE,n).then(function(){r&&e&&(0,o.updateURLPrefix)(e,t.getters.currentLanguage.urlPrefix)})}},s=t.translate=function(e){return function(t,n){for(var r=e.getters,a=r.translation,u=r.currentLanguage,o=u.translationKey,f=t.split("."),c=a;f.length;){var s=f.shift();c[s]||(0,i.warn)('The "'+s+'" key doesn\'t exist in "'+o+'" translation object'),c=c[s]}return"string"!=typeof c&&(c=null),a&&c?l(c,n):t}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e?void e.registerModule(o.pluginName,u.default):void(0,o.warn)("You need to add the VuexStore instance in the plugin options")};var a=n(12),u=r(a),o=n(0)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var u,o=n(0),i=n(3),f=r(i),l=n(2),c=n(1),s=r(c);t.default=(u={},a(u,s.default.REMOVE_LANGUAGE_PERSISTENCY,function(e){var t=e.commit;t(s.default.REMOVE_LANGUAGE_PERSISTENCY)}),a(u,s.default.SET_FORCE_TRANSLATION,function(e,t){var n=e.commit;n(s.default.SET_FORCE_TRANSLATION,t)}),a(u,s.default.UPDATE_CONFIGURATION,function(e){var t=e.commit,n=(e.state,e.getters),r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"function"==typeof r?void(0,o.warn)("Configuration must be an object or a promise. Check documentation"):r&&r.then?r.then(function(e){t(s.default.UPDATE_CONFIGURATION,e),t(s.default.SET_LANGUAGE,n.defaultCode)}):void t(s.default.UPDATE_CONFIGURATION,r)}),a(u,s.default.SET_TRANSLATION,function(e,t){var n=e.commit;n(s.default.SET_TRANSLATION,t)}),a(u,s.default.ADD_TRANSLATION,function(e,t){var n=e.commit;n(s.default.ADD_TRANSLATION,t)}),a(u,s.default.ADD_LANGUAGE,function(e,t){var n=(e.dispatch,e.commit);(0,l.defineLanguage)(t)&&n(s.default.ADD_LANGUAGE,t)}),a(u,s.default.SET_LANGUAGE,function(e,t){var n=e.dispatch,r=e.commit,a=e.state,u=a.languages.find(function(e){return e.code===t}),i=u?t:a.defaultCode;if(a.currentLanguage.code!==t&&(r(s.default.SET_LANGUAGE,i),!a.translations[a.currentLanguage.translationKey]))return f.default.getTranslation?void f.default.getTranslation(a.currentLanguage).then(function(e){n(s.default.SET_TRANSLATION,{translation:e,code:i})}):void(0,o.warn)("Translation is missing. Please read the documentation")}),u)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={availableLanguages:function(e){return e.availableLanguages},trustURL:function(e){return e.trustURL},languages:function(e){return e.languages},currentLanguage:function(e){return e.currentLanguage},urlPrefix:function(e){return e.currentLanguage.urlPrefix},languageFilter:function(e){return e.languageFilter},translation:function e(t){var e=t.translation,n=t.translations,r=t.currentLanguage;if(!r)return{};var a=n[r.translationKey];return a?a:e},forceTranslation:function(e){return e.forceTranslation},defaultCode:function e(t){var n=t.persistent,e=t.defaultCode,r=(t.storageKey,t.forceTranslation),a=t.availableLanguages,u=t.languages,o=null;if(n&&o){var i=r?u:a,f=i.find(function(e){return e.code===o});if(f)return o}return e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),u=r(a),o=n(14),i=r(o),f=n(11),l=r(f),c=n(10),s=r(c);t.default={state:i.default,mutations:u.default,getters:l.default,actions:s.default}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var u,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),f=n(1),l=r(f),c=(u={},a(u,l.default.REMOVE_LANGUAGE_PERSISTENCY,function(e){e.persistent=!1}),a(u,l.default.SET_FORCE_TRANSLATION,function(e,t){e.forceTranslation=t}),a(u,l.default.SET_TRANSLATION,function(e,t){var n=t.translation,r=t.code,u=e.languages,i=e.currentLanguage.translationKey,f=u.find(function(e){return e.code===r}),l=f&&f.translationKey||i;e.translations=o({},e.translations,a({},l,n)),e.translation=n}),a(u,l.default.ADD_TRANSLATION,function(e,t){var n=t.translation,r=t.code,u=e.languages,i=u.find(function(e){return e.code===r});i&&(e.translations=o({},e.translations,a({},i.translationKey,n)))}),a(u,l.default.UPDATE_CONFIGURATION,function(e,t){var n=Object.keys(t),r=Object.keys(e),a={};r.forEach(function(e){"undefined"!=typeof t[e]&&(a[e]=t[e])}),e=Object.assign(e,a),e.availableLanguages=e.languages,e.languageFilter.length>0&&e.availableLanguages.length>1&&(e.availableLanguages=e.availableLanguages.filter(function(t){return e.languageFilter.indexOf(t.code)!==-1})),(0,i.defineKeys)(n,r,"config"),(0,i.defineLanguages)(e.availableLanguages,e.defaultCode)}),a(u,l.default.ADD_LANGUAGE,function(e,t){(0,i.defineUniqueLanguage)(e.languages,t)&&e.languages.push(t)}),a(u,l.default.SET_LANGUAGE,function(e,t){var n=(e.persistent,e.storageKey,e.forceTranslation),r=e.languages,a=e.availableLanguages,u=n?r:a,o=u.find(function(e){return e.code===t});o&&(e.currentLanguage=o)}),u);t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"English",code:"en_GB",urlPrefix:"en",translationKey:"en"},a={currentLanguage:r,translation:{},translations:{},forceTranslation:!1,persistent:!0,storageKey:"language_key",path:"static/i18n",defaultCode:r.code,availableLanguages:[r],languages:[r],languageFilter:[],trustURL:!1};t.default=a},,,,,,,function(e,t,n){e.exports=n(7)}])});