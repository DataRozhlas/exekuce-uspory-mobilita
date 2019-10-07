/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/breaks.js":
/*!**********************!*\
  !*** ./js/breaks.js ***!
  \**********************/
/*! exports provided: breaks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breaks\", function() { return breaks; });\nvar breaks = {\n  \"Rodiny v bytové nouzi\": [0.003, 0.0058, 0.0097, 0.0152, 0.0225],\n  \"Rodiny v ubytovnách\": [0.0006, 0.0021, 0.0041, 0.0062, 0.0109],\n  \"Rodiny v azylových domech\": [0.0002, 0.0009, 0.0016, 0.0028, 0.0041],\n  \"Osoby bez přístřeší\": [0.0006, 0.0011, 0.0017, 0.003, 0.0047]\n};\n\n//# sourceURL=webpack:///./js/breaks.js?");

/***/ }),

/***/ "./js/byeie.js":
/*!*********************!*\
  !*** ./js/byeie.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (navigator.appName === \"Microsoft Internet Explorer\" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {\n  var warn = document.createElement(\"div\");\n  warn.innerHTML = \"Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx\\\">není bezpečné</a>, zvažte přechod na <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.mozilla.org/cs/firefox/new/\\\">jiný prohlížeč</a>.\";\n  warn.style.cssText = \"text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;\";\n  document.body.appendChild(warn);\n}\n\n//# sourceURL=webpack:///./js/byeie.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byeie */ \"./js/byeie.js\");\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_byeie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _breaks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breaks */ \"./js/breaks.js\");\n // loučíme se s IE\n\n\nvar host = 'https://data.irozhlas.cz';\n\nif (window.location.hostname == 'localhost') {\n  host = 'http://localhost';\n}\n\nvar map = new mapboxgl.Map({\n  container: \"map\",\n  style: \"https://data.irozhlas.cz/mapa-domu/map_styl/style.json\",\n  zoom: 6.85,\n  maxZoom: 11,\n  attributionControl: false,\n  center: [15.3350758, 49.7417517]\n});\nmap.getCanvas().style.cursor = 'default';\nmap.fitBounds([[12.09, 51.06], [18.87, 48.55]]);\nmap.addControl(new mapboxgl.NavigationControl());\nmap.addControl(new mapboxgl.AttributionControl({\n  compact: true,\n  customAttribution: 'obrazový podkres <a target=\"_blank\" href=\"https://samizdat.cz\">Samizdat</a>, data <a target=\"_blank\" href=\"http://vdp.cuzk.cz/\">ČÚZK</a>, <a target=\"_blank\" href=\"https://www.czso.cz/\">ČSÚ</a>, <a target=\"_blank\" href=\"https://socialnibydleni.org/\">Platforma pro sociální bydlení</a> a <a target=\"_blank\" href=\"https://socialnibydleni.org/\">Lumos</a>'\n}));\nmap.scrollZoom.disable(); // zoom myší teprve až po interakci s mapou\n\nmap.on(\"click\", function (e) {\n  map.scrollZoom.enable();\n});\nvar cuts = {\n  'Rodiny v bytové nouzi': ['nouze_rodiny', 'rodin', 'nouze_deti', 'nouze_osoby'],\n  'Rodiny v ubytovnách': ['ubyt_rodiny', 'rodin', 'ubyt_deti', 'ubyt_osoby'],\n  'Rodiny v azylových domech': ['azyl_rodiny', 'rodin', 'azyl_deti', 'azyl_osoby'],\n  'Osoby bez přístřeší': ['bezdom', 'POCET_OBYV']\n};\nvar colors = {\n  'Rodiny v bytové nouzi': ['#fee5d9', '#fcae91', '#fb6a4a', '#de2d26', '#a50f15'],\n  'Rodiny v ubytovnách': ['#f2f0f7', '#cbc9e2', '#9e9ac8', '#756bb1', '#54278f'],\n  'Rodiny v azylových domech': ['#feebe2', '#fbb4b9', '#f768a1', '#c51b8a', '#7a0177'],\n  'Osoby bez přístřeší': ['#eff3ff', '#bdd7e7', '#6baed6', '#3182bd', '#08519c']\n};\nvar legend_popis = {\n  'Rodiny v bytové nouzi': 'Podíl rodin v bytové nouzi',\n  'Rodiny v ubytovnách': 'Podíl rodin na ubytovnách',\n  'Rodiny v azylových domech': 'Podíl rodin v azylových domech',\n  'Osoby bez přístřeší': 'Podíl osob bez přístřeší'\n};\nvar topic = 'Rodiny v bytové nouzi';\nmap.on('load', function () {\n  map.addLayer({\n    id: 'data',\n    type: 'fill',\n    source: {\n      type: 'vector',\n      tiles: [\"https://data.irozhlas.cz/bytova-nouze/tiles/{z}/{x}/{y}.pbf\"]\n    },\n    'source-layer': 'orp_data',\n    paint: {\n      'fill-color': ['case', ['has', 'nouze_rodiny'], ['interpolate', ['linear'], ['/', ['get', cuts[topic][0]], ['get', cuts[topic][1]]], _breaks__WEBPACK_IMPORTED_MODULE_1__[\"breaks\"][topic][0], colors[topic][0], _breaks__WEBPACK_IMPORTED_MODULE_1__[\"breaks\"][topic][1], colors[topic][1], _breaks__WEBPACK_IMPORTED_MODULE_1__[\"breaks\"][topic][2], colors[topic][3], _breaks__WEBPACK_IMPORTED_MODULE_1__[\"breaks\"][topic][3], colors[topic][3], _breaks__WEBPACK_IMPORTED_MODULE_1__[\"breaks\"][topic][4], colors[topic][4]], 'white'],\n      \"fill-opacity\": 0.8,\n      \"fill-outline-color\": \"hsla(0, 0%, 52%, 0.4)\"\n    }\n  });\n  map.addLayer({\n    id: \"lbls\",\n    type: \"raster\",\n    source: {\n      tiles: [\"https://interaktivni.rozhlas.cz/tiles/ton_l2/{z}/{x}/{y}.png\"],\n      type: \"raster\",\n      tileSize: 256\n    }\n  });\n  map.on('mousemove', function (e) {\n    var d = map.queryRenderedFeatures(e.point, {\n      layers: ['data']\n    });\n\n    if (d.length > 0) {\n      var txt = 'Obec s rozšířenou působností <b>' + d[0].properties.NAZ_ORP + '</b></br>' + topic + ': ' + d[0].properties[cuts[topic][0]];\n\n      if (topic != 'Osoby bez přístřeší') {\n        txt += '<br>Celkem: ' + d[0].properties[cuts[topic][3]] + ' osob, z nich ' + d[0].properties[cuts[topic][2]] + ' dětí';\n      }\n\n      document.getElementById('legend').innerHTML = txt;\n    } else {\n      document.getElementById('legend').innerHTML = '<b>Vyberte oblast v mapě.</b>';\n    }\n  });\n  document.getElementById('topic_select').addEventListener(\"change\", function (e) {\n    var sel_topic = e.target.selectedOptions[0].value;\n    topic = sel_topic;\n    var stl = ['case', ['has', cuts[topic][0]], ['interpolate', ['linear'], ['/', ['get', cuts[topic][0]], ['get', cuts[topic][1]]], _breaks__WEBPACK_IMPORTED_MODULE_1__[\"breaks\"][topic][0], colors[topic][0], _breaks__WEBPACK_IMPORTED_MODULE_1__[\"breaks\"][topic][1], colors[topic][1], _breaks__WEBPACK_IMPORTED_MODULE_1__[\"breaks\"][topic][2], colors[topic][3], _breaks__WEBPACK_IMPORTED_MODULE_1__[\"breaks\"][topic][3], colors[topic][3], _breaks__WEBPACK_IMPORTED_MODULE_1__[\"breaks\"][topic][4], colors[topic][4]], 'white'];\n    map.setPaintProperty('data', 'fill-color', stl); // legenda\n\n    document.getElementById('clr').style['background-image'] = 'linear-gradient(' + colors[topic][4] + ', ' + colors[topic][0] + ')';\n    document.getElementById('clr_min').innerHTML = Math.round(_breaks__WEBPACK_IMPORTED_MODULE_1__[\"breaks\"][topic][0] * 10000) / 100 + ' %<br>' + legend_popis[topic];\n    document.getElementById('clr_max').innerHTML = Math.round(_breaks__WEBPACK_IMPORTED_MODULE_1__[\"breaks\"][topic][4] * 10000) / 100 + ' %';\n  });\n\n  if (window.location.href.includes(\"latlng\")) {\n    //posunuti mapy dle url\n    var ll = window.location.href.split(\"latlng=\")[1].split('&')[0];\n    map.setCenter([parseFloat(ll.split('|')[1]), parseFloat(ll.split('|')[0])]);\n    map.setZoom(parseInt(ll.split('|')[2]));\n  }\n\n  ;\n});\nmap.on('moveend', function (e) {\n  // poloha do url pro sdileni\n  var cen = map.getCenter().wrap();\n  window.history.pushState('', '', window.location.pathname + '?latlng=' + cen.lat + '|' + cen.lng + '|' + map.getZoom());\n});\n$(\"#inp-geocode\").on(\"focus input\", function () {\n  return $(\"#inp-geocode\").css(\"border-color\", \"black\");\n}); // geocoder\n\nvar form = document.getElementById(\"frm-geocode\");\n\nform.onsubmit = function submitForm(event) {\n  event.preventDefault();\n  var text = document.getElementById(\"inp-geocode\").value;\n\n  if (text === \"\") {\n    map.flyTo({\n      center: [15.3350758, 49.7417517],\n      zoom: 7\n    });\n  } else {\n    $.get(\"https://api.mapy.cz/geocode?query=\".concat(text), function (data) {\n      if (typeof $(data).find(\"item\").attr(\"x\") === \"undefined\") {\n        $(\"#inp-geocode\").css(\"border-color\", \"red\");\n        return;\n      }\n\n      var x = parseFloat($(data).find(\"item\").attr(\"x\"));\n      var y = parseFloat($(data).find(\"item\").attr(\"y\"));\n\n      if (x < 12 || x > 19 || y < 48 || y > 52) {\n        // omezení geosearche na česko, plus mínus\n        $(\"#inp-geocode\").css(\"border-color\", \"red\");\n        return;\n      }\n\n      map.flyTo({\n        center: [x, y],\n        zoom: 14\n      });\n    }, \"xml\");\n  }\n};\n\nvar colorsss = [\"#1d8f64\", \"#ce4a08\", \"#6159a4\", \"#de0077\", \"#569918\", \"#df9c09\"];\nvar colorsagree = [\"#de2d26\", \"#fc9272\", \"#31a354\", \"#bdbdbd\"];\nvar tridy = [\"Zajištěná střední třída\", \"Nastupující kosmopolitní třída\", \"Tradiční pracující třída\", \"Třída místních vazeb\", \"Ohrožená třída\", \"Strádající třída\"];\nvar dataexekuce = [[8.1, 10.0, 7.0, 7.6, 13.3, 15.3], [2.8, 2.5, 4.6, 3.2, 8.1, 10.7], [88.3, 86.7, 87.1, 87.4, 76.8, 72.2], [0.8, 0.8, 1.2, 1.9, 1.8, 1.8]];\nvar datanezamestnanost = [[15.7, 14.2, 19.0, 18.5, 22.2, 21.3], [2.4, 4.6, 7.2, 6.9, 12.4, 12.0], [81.2, 80.2, 72.9, 73.3, 64.0, 65.2], [0.8, 1.0, 0.9, 1.3, 1.4, 1.5]];\nvar databezdomova = [[5.4, 7.5, 7.9, 5.7, 10.7, 13.6], [0.7, 0.8, 2.2, 1.3, 5.2, 6.0], [93.6, 90.2, 89.2, 92.4, 82.6, 78.8], [0.3, 1.5, 0.7, 0.6, 1.4, 1.5]];\nvar datademokracienez = [[57.6, 66.8, 47.3, 48.6, 45.1, 38.5], [28.4, 22.3, 23.0, 18.8, 21.8, 20.5], [13.9, 11.0, 29.7, 32.6, 33.1, 41.0]];\nvar datademokraciezaz = [[59.6, 48.4, 35.2, 39.3, 34.7, 26.2], [28.3, 31.7, 26.0, 21.3, 21.7, 17.1], [12.2, 19.8, 38.8, 39.3, 43.6, 56.7]];\nvar datamobilita = [[54.0, 63.1, 35.0, 32.4, 28.9, 22.40], [29.5, 21.9, 41.8, 45.4, 44.3, 51.40], [16.5, 15.0, 23.2, 22.2, 26.8, 26.20]];\nvar datavzdelaniasp = [[7, 6, 19, 10, 13, 24], [14, 12, 25, 27, 34, 41], [79, 82, 56, 63, 53, 35]];\nvar datavzdelanireal = [[15.4, 10.4, 32.0, 24.4, 31.8, 45.2], [40.5, 27.3, 35.7, 43.0, 35.8, 36.1], [44.1, 62.3, 32.3, 32.6, 32.4, 18.7]];\n/*var datavzdelanireal = [\r\n  [0.6,1.3,2.0,3.3,2.4,6.1],\r\n  [14.8,9.1,30.0,21.1,29.4,39.1],\r\n  [40.5,27.3,35.7,43.0,35.8,36.1],\r\n  [44.1,62.3,32.3,32.6,32.4,18.7]\r\n];*/\n//var colors = ['#ECA038', '#A38456', '#EA614A', '#008836', '#20649B', '#6B96CA', '#A87A93', '#D19C95'];\n\n$(function () {\n  Highcharts.setOptions({\n    lang: {\n      months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],\n      weekdays: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],\n      shortMonths: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],\n      thousandsSep: '',\n      decimalPoint: ',',\n      rangeSelectorZoom: 'Zobrazit'\n    }\n  });\n  Highcharts.chart('exekuce', {\n    chart: {\n      type: 'bar'\n    },\n    title: {\n      text: 'Exekuce'\n    },\n    xAxis: {\n      title: '',\n      categories: tridy\n    },\n    yAxis: {\n      title: '',\n      reversedStacks: false,\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    legend: {\n      layout: 'vertical'\n    },\n    plotOptions: {\n      series: {\n        stacking: 'normal'\n      }\n    },\n    series: [{\n      name: 'Ano, opakovaně',\n      data: dataexekuce[1],\n      color: colorsagree[0]\n    }, {\n      name: 'Ano, jednou',\n      data: dataexekuce[0],\n      color: colorsagree[1]\n    }, {\n      name: 'Ne',\n      data: dataexekuce[2],\n      color: colorsagree[2]\n    }, {\n      name: 'Nevím/nechci uvést',\n      data: dataexekuce[3],\n      color: colorsagree[3]\n    }]\n  });\n  Highcharts.chart('nezamestnanost', {\n    chart: {\n      type: 'bar'\n    },\n    title: {\n      text: 'Nezaměstnanost'\n    },\n    xAxis: {\n      title: '',\n      categories: tridy,\n      labels: {\n        enabled: false\n      }\n    },\n    yAxis: {\n      title: '',\n      reversedStacks: false,\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    plotOptions: {\n      series: {\n        stacking: 'normal'\n      }\n    },\n    series: [{\n      name: 'Ano, opakovaně',\n      data: datanezamestnanost[1],\n      color: colorsagree[0]\n    }, {\n      name: 'Ano, jednou',\n      data: datanezamestnanost[0],\n      color: colorsagree[1]\n    }, {\n      name: 'Ne',\n      data: datanezamestnanost[2],\n      color: colorsagree[2]\n    }, {\n      name: 'Nevím/nechci uvést',\n      data: datanezamestnanost[3],\n      color: colorsagree[3]\n    }]\n  });\n  Highcharts.chart('bezdomova', {\n    chart: {\n      type: 'bar'\n    },\n    title: {\n      text: 'Ztráta bydlení'\n    },\n    xAxis: {\n      title: '',\n      categories: tridy,\n      labels: {\n        enabled: false\n      }\n    },\n    yAxis: {\n      title: '',\n      reversedStacks: false,\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    plotOptions: {\n      series: {\n        stacking: 'normal'\n      }\n    },\n    series: [{\n      name: 'Ano, opakovaně',\n      data: databezdomova[1],\n      color: colorsagree[0]\n    }, {\n      name: 'Ano, jednou',\n      data: databezdomova[0],\n      color: colorsagree[1]\n    }, {\n      name: 'Ne',\n      data: databezdomova[2],\n      color: colorsagree[2]\n    }, {\n      name: 'Nevím/nechci uvést',\n      data: databezdomova[3],\n      color: colorsagree[3]\n    }]\n  });\n  Highcharts.chart('demokracie1', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: 'Zajištěná stř. třída'\n    },\n    xAxis: {\n      title: '',\n      categories: ['nezažil', 'zažil']\n    },\n    yAxis: {\n      title: '',\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    plotOptions: {\n      series: {\n        stacking: undefined\n      }\n    },\n    series: [{\n      name: 'Demokracie je nejlepší',\n      data: [datademokracienez[0][0], datademokraciezaz[0][0]],\n      color: colorsagree[2]\n    }, {\n      name: 'Autoritářství může být lepší',\n      data: [datademokracienez[1][0], datademokraciezaz[1][0]],\n      color: colorsagree[1]\n    }, {\n      name: 'Je to jedno/nevím',\n      data: [datademokracienez[2][0], datademokraciezaz[2][0]],\n      color: colorsagree[0]\n    }]\n  });\n  Highcharts.chart('demokracie2', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: 'Nast. kosmo. třída'\n    },\n    xAxis: {\n      title: '',\n      categories: ['nezažil', 'zažil']\n    },\n    yAxis: {\n      title: '',\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    plotOptions: {\n      series: {\n        stacking: undefined\n      }\n    },\n    series: [{\n      name: 'Demokracie je nejlepší',\n      data: [datademokracienez[0][1], datademokraciezaz[0][1]],\n      color: colorsagree[2]\n    }, {\n      name: 'Autoritářství může být lepší',\n      data: [datademokracienez[1][1], datademokraciezaz[1][1]],\n      color: colorsagree[1]\n    }, {\n      name: 'Je to jedno/nevím',\n      data: [datademokracienez[2][1], datademokraciezaz[2][1]],\n      color: colorsagree[0]\n    }]\n  });\n  Highcharts.chart('demokracie3', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: 'Trad. pracující třída'\n    },\n    xAxis: {\n      title: '',\n      categories: ['nezažil', 'zažil']\n    },\n    yAxis: {\n      title: '',\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    plotOptions: {\n      series: {\n        stacking: undefined\n      }\n    },\n    series: [{\n      name: 'Demokracie je nejlepší',\n      data: [datademokracienez[0][2], datademokraciezaz[0][2]],\n      color: colorsagree[2]\n    }, {\n      name: 'Autoritářství může být lepší',\n      data: [datademokracienez[1][2], datademokraciezaz[1][2]],\n      color: colorsagree[1]\n    }, {\n      name: 'Je to jedno/nevím',\n      data: [datademokracienez[2][2], datademokraciezaz[2][2]],\n      color: colorsagree[0]\n    }]\n  });\n  Highcharts.chart('demokracie4', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: tridy[3]\n    },\n    xAxis: {\n      title: '',\n      categories: ['nezažil', 'zažil']\n    },\n    yAxis: {\n      title: '',\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    plotOptions: {\n      series: {\n        stacking: undefined\n      }\n    },\n    series: [{\n      name: 'Demokracie je nejlepší',\n      data: [datademokracienez[0][3], datademokraciezaz[0][3]],\n      color: colorsagree[2]\n    }, {\n      name: 'Autoritářství může být lepší',\n      data: [datademokracienez[1][3], datademokraciezaz[1][3]],\n      color: colorsagree[1]\n    }, {\n      name: 'Je to jedno/nevím',\n      data: [datademokracienez[2][3], datademokraciezaz[2][3]],\n      color: colorsagree[0]\n    }]\n  });\n  Highcharts.chart('demokracie5', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: tridy[4]\n    },\n    xAxis: {\n      title: '',\n      categories: ['nezažil', 'zažil']\n    },\n    yAxis: {\n      title: '',\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    plotOptions: {\n      series: {\n        stacking: undefined\n      }\n    },\n    series: [{\n      name: 'Demokracie je nejlepší',\n      data: [datademokracienez[0][4], datademokraciezaz[0][4]],\n      color: colorsagree[2]\n    }, {\n      name: 'Autoritářství může být lepší',\n      data: [datademokracienez[1][4], datademokraciezaz[1][4]],\n      color: colorsagree[1]\n    }, {\n      name: 'Je to jedno/nevím',\n      data: [datademokracienez[2][4], datademokraciezaz[2][4]],\n      color: colorsagree[0]\n    }]\n  });\n  Highcharts.chart('demokracie6', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: tridy[5]\n    },\n    xAxis: {\n      title: '',\n      categories: ['nezažil', 'zažil']\n    },\n    yAxis: {\n      title: '',\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    plotOptions: {\n      series: {\n        stacking: undefined\n      }\n    },\n    series: [{\n      name: 'Demokracie je nejlepší',\n      data: [datademokracienez[0][5], datademokraciezaz[0][5]],\n      color: colorsagree[2]\n    }, {\n      name: 'Autoritářství může být lepší',\n      data: [datademokracienez[1][5], datademokraciezaz[1][5]],\n      color: colorsagree[1]\n    }, {\n      name: 'Je to jedno/nevím',\n      data: [datademokracienez[2][5], datademokraciezaz[2][5]],\n      color: colorsagree[0]\n    }]\n  });\n  Highcharts.chart('mobilita', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: 'Ukončené vzdělání dětí oproti rodičům'\n    },\n    xAxis: {\n      title: '',\n      categories: tridy\n    },\n    yAxis: {\n      title: ''\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    plotOptions: {\n      series: {\n        stacking: undefined\n      }\n    },\n    series: [{\n      name: 'Vyšší vzdělání dětí',\n      data: datamobilita[0],\n      color: colorsagree[2]\n    }, {\n      name: 'Shodné vzdělání',\n      data: datamobilita[1],\n      color: colorsagree[1]\n    }, {\n      name: 'Nižší vzdělání dětí',\n      data: datamobilita[2],\n      color: colorsagree[0]\n    }]\n  });\n  Highcharts.chart('vzdelani1', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: 'Zajištěná stř. třída'\n    },\n    xAxis: {\n      title: '',\n      categories: ['ambice', 'skutečnost']\n    },\n    yAxis: {\n      title: '',\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    legend: {\n      layout: 'vertical'\n    },\n    plotOptions: {\n      series: {\n        stacking: undefined\n      }\n    },\n    series: [{\n      name: 'Bez maturity',\n      data: [datavzdelaniasp[0][0], datavzdelanireal[0][0]],\n      color: colorsagree[0]\n    }, {\n      name: 'S maturitou',\n      data: [datavzdelaniasp[1][0], datavzdelanireal[1][0]],\n      color: colorsagree[1]\n    }, {\n      name: 'Vysoká škola',\n      data: [datavzdelaniasp[2][0], datavzdelanireal[2][0]],\n      color: colorsagree[2]\n    }]\n  });\n  Highcharts.chart('vzdelani2', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: 'Nast. kosmo. třída'\n    },\n    xAxis: {\n      title: '',\n      categories: ['ambice', 'skutečnost']\n    },\n    yAxis: {\n      title: '',\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    legend: {\n      layout: 'vertical'\n    },\n    plotOptions: {\n      series: {\n        stacking: undefined\n      }\n    },\n    series: [{\n      name: 'Bez maturity',\n      data: [datavzdelaniasp[0][1], datavzdelanireal[0][1]],\n      color: colorsagree[0]\n    }, {\n      name: 'S maturitou',\n      data: [datavzdelaniasp[1][1], datavzdelanireal[1][1]],\n      color: colorsagree[1]\n    }, {\n      name: 'Vysoká škola',\n      data: [datavzdelaniasp[2][1], datavzdelanireal[2][1]],\n      color: colorsagree[2]\n    }]\n  });\n  Highcharts.chart('vzdelani3', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: 'Trad. pracující třída'\n    },\n    xAxis: {\n      title: '',\n      categories: ['ambice', 'skutečnost']\n    },\n    yAxis: {\n      title: '',\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    legend: {\n      layout: 'vertical'\n    },\n    plotOptions: {\n      series: {\n        stacking: undefined\n      }\n    },\n    series: [{\n      name: 'Bez maturity',\n      data: [datavzdelaniasp[0][2], datavzdelanireal[0][2]],\n      color: colorsagree[0]\n    }, {\n      name: 'S maturitou',\n      data: [datavzdelaniasp[1][2], datavzdelanireal[1][2]],\n      color: colorsagree[1]\n    }, {\n      name: 'Vysoká škola',\n      data: [datavzdelaniasp[2][2], datavzdelanireal[2][2]],\n      color: colorsagree[2]\n    }]\n  });\n  Highcharts.chart('vzdelani4', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: tridy[3]\n    },\n    xAxis: {\n      title: '',\n      categories: ['ambice', 'skutečnost']\n    },\n    yAxis: {\n      title: '',\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    legend: {\n      layout: 'vertical'\n    },\n    plotOptions: {\n      series: {\n        stacking: undefined\n      }\n    },\n    series: [{\n      name: 'Bez maturity',\n      data: [datavzdelaniasp[0][3], datavzdelanireal[0][3]],\n      color: colorsagree[0]\n    }, {\n      name: 'S maturitou',\n      data: [datavzdelaniasp[1][3], datavzdelanireal[1][3]],\n      color: colorsagree[1]\n    }, {\n      name: 'Vysoká škola',\n      data: [datavzdelaniasp[2][3], datavzdelanireal[2][3]],\n      color: colorsagree[2]\n    }]\n  });\n  Highcharts.chart('vzdelani5', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: tridy[4]\n    },\n    xAxis: {\n      title: '',\n      categories: ['ambice', 'skutečnost']\n    },\n    yAxis: {\n      title: '',\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    legend: {\n      layout: 'vertical'\n    },\n    plotOptions: {\n      series: {\n        stacking: undefined\n      }\n    },\n    series: [{\n      name: 'Bez maturity',\n      data: [datavzdelaniasp[0][4], datavzdelanireal[0][4]],\n      color: colorsagree[0]\n    }, {\n      name: 'S maturitou',\n      data: [datavzdelaniasp[1][4], datavzdelanireal[1][4]],\n      color: colorsagree[1]\n    }, {\n      name: 'Vysoká škola',\n      data: [datavzdelaniasp[2][4], datavzdelanireal[2][4]],\n      color: colorsagree[2]\n    }]\n  });\n  Highcharts.chart('vzdelani6', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: tridy[5]\n    },\n    xAxis: {\n      title: '',\n      categories: ['ambice', 'skutečnost']\n    },\n    yAxis: {\n      title: '',\n      max: 100\n    },\n    tooltip: {\n      shared: true,\n      valueSuffix: ' %'\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      enabled: false\n    },\n    legend: {\n      layout: 'vertical'\n    },\n    plotOptions: {\n      series: {\n        stacking: undefined\n      }\n    },\n    series: [{\n      name: 'Bez maturity',\n      data: [datavzdelaniasp[0][5], datavzdelanireal[0][5]],\n      color: colorsagree[0]\n    }, {\n      name: 'S maturitou',\n      data: [datavzdelaniasp[1][5], datavzdelanireal[1][5]],\n      color: colorsagree[1]\n    }, {\n      name: 'Vysoká škola',\n      data: [datavzdelaniasp[2][5], datavzdelanireal[2][5]],\n      color: colorsagree[2]\n    }]\n  });\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });