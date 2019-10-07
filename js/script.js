import "./byeie"; // loučíme se s IE
import { breaks } from "./breaks";

var host = 'https://data.irozhlas.cz'
if (window.location.hostname == 'localhost') {
    host = 'http://localhost'
}

var map = new mapboxgl.Map({
    container: "map",
    style: "https://data.irozhlas.cz/mapa-domu/map_styl/style.json",
    zoom: 6.85,
    maxZoom: 11,
    attributionControl: false,
    center: [15.3350758, 49.7417517],
});

map.getCanvas().style.cursor = 'default';
map.fitBounds([[12.09,51.06],[18.87,48.55]]);

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.AttributionControl({
    compact: true,
    customAttribution: 'obrazový podkres <a target="_blank" href="https://samizdat.cz">Samizdat</a>, data <a target="_blank" href="http://vdp.cuzk.cz/">ČÚZK</a>, <a target="_blank" href="https://www.czso.cz/">ČSÚ</a>, <a target="_blank" href="https://socialnibydleni.org/">Platforma pro sociální bydlení</a> a <a target="_blank" href="https://socialnibydleni.org/">Lumos</a>',
}));

map.scrollZoom.disable(); // zoom myší teprve až po interakci s mapou
map.on("click", function(e) {
    map.scrollZoom.enable();
});

const cuts = {
    'Rodiny v bytové nouzi': ['nouze_rodiny', 'rodin', 'nouze_deti', 'nouze_osoby'],
    'Rodiny v ubytovnách': ['ubyt_rodiny', 'rodin', 'ubyt_deti', 'ubyt_osoby'],
    'Rodiny v azylových domech': ['azyl_rodiny', 'rodin', 'azyl_deti', 'azyl_osoby'],
    'Osoby bez přístřeší': ['bezdom', 'POCET_OBYV'],
}

const colors = {
    'Rodiny v bytové nouzi': ['#fee5d9','#fcae91','#fb6a4a','#de2d26','#a50f15'],
    'Rodiny v ubytovnách': ['#f2f0f7','#cbc9e2','#9e9ac8','#756bb1','#54278f'],
    'Rodiny v azylových domech': ['#feebe2','#fbb4b9','#f768a1','#c51b8a','#7a0177'],
    'Osoby bez přístřeší': ['#eff3ff','#bdd7e7','#6baed6','#3182bd','#08519c'],
}

const legend_popis = {
  'Rodiny v bytové nouzi': 'Podíl rodin v bytové nouzi',
  'Rodiny v ubytovnách': 'Podíl rodin na ubytovnách',
  'Rodiny v azylových domech': 'Podíl rodin v azylových domech',
  'Osoby bez přístřeší': 'Podíl osob bez přístřeší',
}

let topic = 'Rodiny v bytové nouzi'

map.on('load', function() {
    map.addLayer({
        id: 'data',
        type: 'fill',
        source: {
            type: 'vector',
            tiles: ["https://data.irozhlas.cz/bytova-nouze/tiles/{z}/{x}/{y}.pbf"],
        },
        'source-layer': 'orp_data',
        paint: {
            'fill-color': [
                'case',
                ['has', 'nouze_rodiny'],
                [
                    'interpolate',
                    ['linear'],
                    ['/', ['get', cuts[topic][0]], ['get', cuts[topic][1]]],
                    breaks[topic][0], colors[topic][0],
                    breaks[topic][1], colors[topic][1],
                    breaks[topic][2], colors[topic][3],
                    breaks[topic][3], colors[topic][3],
                    breaks[topic][4], colors[topic][4],
                ],
                'white',
            ],
            "fill-opacity": 0.8,
            "fill-outline-color": "hsla(0, 0%, 52%, 0.4)",
        }
    });
    map.addLayer({
        id: "lbls",
        type: "raster",
        source: {
            tiles: [
                "https://interaktivni.rozhlas.cz/tiles/ton_l2/{z}/{x}/{y}.png",
            ],
            type: "raster",
            tileSize: 256,
        },
    });
    map.on('mousemove', function(e) {
        var d = map.queryRenderedFeatures(e.point, {
            layers: ['data']
        });
        if (d.length > 0) {
            let txt = 'Obec s rozšířenou působností <b>' + d[0].properties.NAZ_ORP + '</b></br>'
                + topic + ': ' + d[0].properties[cuts[topic][0]]
                if (topic != 'Osoby bez přístřeší') {
                    txt += '<br>Celkem: ' + d[0].properties[cuts[topic][3]] + ' osob, z nich ' + d[0].properties[cuts[topic][2]] + ' dětí'
                }
            document.getElementById('legend').innerHTML = txt

        } else {
            document.getElementById('legend').innerHTML = '<b>Vyberte oblast v mapě.</b>'
        }
    });
    document.getElementById('topic_select').addEventListener("change", function(e) {
        var sel_topic = e.target.selectedOptions[0].value;
        topic = sel_topic;
        var stl = [
            'case',
            ['has', cuts[topic][0]],
                [
                    'interpolate',
                    ['linear'],
                    ['/', ['get', cuts[topic][0]], ['get', cuts[topic][1]]],
                    breaks[topic][0], colors[topic][0],
                    breaks[topic][1], colors[topic][1],
                    breaks[topic][2], colors[topic][3],
                    breaks[topic][3], colors[topic][3],
                    breaks[topic][4], colors[topic][4],
                ],
            'white',
        ]
        map.setPaintProperty('data', 'fill-color', stl);
        // legenda
        document.getElementById('clr').style['background-image'] = 'linear-gradient(' + colors[topic][4] +  ', ' + colors[topic][0] + ')'
        document.getElementById('clr_min').innerHTML = Math.round(breaks[topic][0] * 10000) / 100 + ' %<br>' + legend_popis[topic]
        document.getElementById('clr_max').innerHTML = Math.round(breaks[topic][4] * 10000) / 100 + ' %'
    });

    if (window.location.href.includes("latlng")){ //posunuti mapy dle url
        var ll = window.location.href.split("latlng=")[1].split('&')[0];
        map.setCenter([parseFloat(ll.split('|')[1]), parseFloat(ll.split('|')[0])]);
        map.setZoom(parseInt(ll.split('|')[2]));
    };
});

map.on('moveend', function(e) { // poloha do url pro sdileni
  var cen = map.getCenter().wrap();
  window.history.pushState('', '', window.location.pathname + '?latlng=' + cen.lat + '|' + cen.lng + '|' + map.getZoom());
});

$("#inp-geocode").on("focus input", () => $("#inp-geocode").css("border-color", "black"));
  // geocoder
  const form = document.getElementById("frm-geocode");
  form.onsubmit = function submitForm(event) {
    event.preventDefault();
    const text = document.getElementById("inp-geocode").value;
    if (text === "") {
      map.flyTo({
        center: [15.3350758, 49.7417517],
        zoom: 7,
      });
    } else {
      $.get(`https://api.mapy.cz/geocode?query=${text}`, (data) => {
        if (typeof $(data).find("item").attr("x") === "undefined") {
          $("#inp-geocode").css("border-color", "red");
          return;
        }
        const x = parseFloat($(data).find("item").attr("x"));
        const y = parseFloat($(data).find("item").attr("y"));
        if (x < 12 || x > 19 || y < 48 || y > 52) { // omezení geosearche na česko, plus mínus
          $("#inp-geocode").css("border-color", "red");
          return;
        }
        map.flyTo({
          center: [x, y],
          zoom: 14,
        });
      }, "xml");
    }
  };

var colorsss = ["#1d8f64", "#ce4a08", "#6159a4", "#de0077", "#569918", "#df9c09"];

var colorsagree = ["#de2d26", "#fc9272", "#31a354", "#bdbdbd"];

var tridy = ["Zajištěná střední třída", "Nastupující kosmopolitní třída", "Tradiční pracující třída", "Třída místních vazeb", "Ohrožená třída", "Strádající třída"];

var dataexekuce = [
  [8.1,10.0,7.0,7.6,13.3,15.3],
  [2.8,2.5,4.6,3.2,8.1,10.7],
  [88.3,86.7,87.1,87.4,76.8,72.2],
  [0.8,0.8,1.2,1.9,1.8,1.8]
];

var datanezamestnanost = [
  [15.7,14.2,19.0,18.5,22.2,21.3],
  [2.4,4.6,7.2,6.9,12.4,12.0],
  [81.2,80.2,72.9,73.3,64.0,65.2],
  [0.8,1.0,0.9,1.3,1.4,1.5]
];

var databezdomova = [
  [5.4,7.5,7.9,5.7,10.7,13.6],
  [0.7,0.8,2.2,1.3,5.2,6.0],
  [93.6,90.2,89.2,92.4,82.6,78.8],
  [0.3,1.5,0.7,0.6,1.4,1.5]
];

var datademokracienez = [
  [57.6,66.8,47.3,48.6,45.1,38.5],
  [28.4,22.3,23.0,18.8,21.8,20.5],
  [13.9,11.0,29.7,32.6,33.1,41.0]
];

var datademokraciezaz = [
  [59.6,48.4,35.2,39.3,34.7,26.2],
  [28.3,31.7,26.0,21.3,21.7,17.1],
  [12.2,19.8,38.8,39.3,43.6,56.7]
];

var datamobilita = [
  [54.0,63.1,35.0,32.4,28.9,22.40],
  [29.5,21.9,41.8,45.4,44.3,51.40],
  [16.5,15.0,23.2,22.2,26.8,26.20]
];

var datavzdelaniasp = [
  [7,6,19,10,13,24],
  [14,12,25,27,34,41],
  [79,82,56,63,53,35]
];

var datavzdelanireal = [
  [15.4,10.4,32.0,24.4,31.8,45.2],
  [40.5,27.3,35.7,43.0,35.8,36.1],
  [44.1,62.3,32.3,32.6,32.4,18.7]
];

/*var datavzdelanireal = [
  [0.6,1.3,2.0,3.3,2.4,6.1],
  [14.8,9.1,30.0,21.1,29.4,39.1],
  [40.5,27.3,35.7,43.0,35.8,36.1],
  [44.1,62.3,32.3,32.6,32.4,18.7]
];*/

//var colors = ['#ECA038', '#A38456', '#EA614A', '#008836', '#20649B', '#6B96CA', '#A87A93', '#D19C95'];

$(function () {

    Highcharts.setOptions({
            lang: {
                months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                weekdays: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
                shortMonths: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                thousandsSep: '',
                decimalPoint:',',
                rangeSelectorZoom: 'Zobrazit'
            }
        });



Highcharts.chart('exekuce', {

    chart: {
        type: 'bar'
    },

    title: {
        text: 'Exekuce'
    },

    xAxis: {
        title: '',
        categories: tridy
    },

    yAxis: {
        title: '',
        reversedStacks: false,
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
    	layout: 'vertical'
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Ano, opakovaně',
        data: dataexekuce[1],
        color: colorsagree[0]
    }, {
        name: 'Ano, jednou',
        data: dataexekuce[0],
        color: colorsagree[1]
    }, {
        name: 'Ne',
        data: dataexekuce[2],
        color: colorsagree[2]
    }, {
        name: 'Nevím/nechci uvést',
        data: dataexekuce[3],
        color: colorsagree[3]
    }]
});

Highcharts.chart('nezamestnanost', {

    chart: {
        type: 'bar'
    },

    title: {
        text: 'Nezaměstnanost'
    },

    xAxis: {
        title: '',
        categories: tridy,
        labels: {
            enabled: false
        }
    },

    yAxis: {
        title: '',
        reversedStacks: false,
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Ano, opakovaně',
        data: datanezamestnanost[1],
        color: colorsagree[0]
    }, {
        name: 'Ano, jednou',
        data: datanezamestnanost[0],
        color: colorsagree[1]
    }, {
        name: 'Ne',
        data: datanezamestnanost[2],
        color: colorsagree[2]
    }, {
        name: 'Nevím/nechci uvést',
        data: datanezamestnanost[3],
        color: colorsagree[3]
    }]
});

Highcharts.chart('bezdomova', {

    chart: {
        type: 'bar'
    },

    title: {
        text: 'Ztráta bydlení'
    },

    xAxis: {
        title: '',
        categories: tridy,
        labels: {
            enabled: false
        }
    },

    yAxis: {
        title: '',
        reversedStacks: false,
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Ano, opakovaně',
        data: databezdomova[1],
        color: colorsagree[0]
    }, {
        name: 'Ano, jednou',
        data: databezdomova[0],
        color: colorsagree[1]
    }, {
        name: 'Ne',
        data: databezdomova[2],
        color: colorsagree[2]
    }, {
        name: 'Nevím/nechci uvést',
        data: databezdomova[3],
        color: colorsagree[3]
    }]
});

Highcharts.chart('demokracie1', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Zajištěná stř. třída'
    },

    xAxis: {
        title: '',
        categories: ['nezažil', 'zažil']
    },

    yAxis: {
        title: '',
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            stacking: undefined
        }
    },

    series: [{
        name: 'Demokracie je nejlepší',
        data: [datademokracienez[0][0], datademokraciezaz[0][0]],
        color: colorsagree[2]
    }, {
        name: 'Autoritářství může být lepší',
        data: [datademokracienez[1][0], datademokraciezaz[1][0]],
        color: colorsagree[1]
    }, {
        name: 'Je to jedno/nevím',
        data: [datademokracienez[2][0], datademokraciezaz[2][0]],
        color: colorsagree[0]
    }]
});

Highcharts.chart('demokracie2', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Nast. kosmo. třída'
    },

    xAxis: {
        title: '',
        categories: ['nezažil', 'zažil']
    },

    yAxis: {
        title: '',
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            stacking: undefined
        }
    },

    series: [{
        name: 'Demokracie je nejlepší',
        data: [datademokracienez[0][1], datademokraciezaz[0][1]],
        color: colorsagree[2]
    }, {
        name: 'Autoritářství může být lepší',
        data: [datademokracienez[1][1], datademokraciezaz[1][1]],
        color: colorsagree[1]
    }, {
        name: 'Je to jedno/nevím',
        data: [datademokracienez[2][1], datademokraciezaz[2][1]],
        color: colorsagree[0]
    }]
});

Highcharts.chart('demokracie3', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Trad. pracující třída'
    },

    xAxis: {
        title: '',
        categories: ['nezažil', 'zažil']
    },

    yAxis: {
        title: '',
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            stacking: undefined
        }
    },

    series: [{
        name: 'Demokracie je nejlepší',
        data: [datademokracienez[0][2], datademokraciezaz[0][2]],
        color: colorsagree[2]
    }, {
        name: 'Autoritářství může být lepší',
        data: [datademokracienez[1][2], datademokraciezaz[1][2]],
        color: colorsagree[1]
    }, {
        name: 'Je to jedno/nevím',
        data: [datademokracienez[2][2], datademokraciezaz[2][2]],
        color: colorsagree[0]
    }]
});

Highcharts.chart('demokracie4', {

    chart: {
        type: 'column'
    },

    title: {
        text: tridy[3]
    },

    xAxis: {
        title: '',
        categories: ['nezažil', 'zažil']
    },

    yAxis: {
        title: '',
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            stacking: undefined
        }
    },

    series: [{
        name: 'Demokracie je nejlepší',
        data: [datademokracienez[0][3], datademokraciezaz[0][3]],
        color: colorsagree[2]
    }, {
        name: 'Autoritářství může být lepší',
        data: [datademokracienez[1][3], datademokraciezaz[1][3]],
        color: colorsagree[1]
    }, {
        name: 'Je to jedno/nevím',
        data: [datademokracienez[2][3], datademokraciezaz[2][3]],
        color: colorsagree[0]
    }]
});

Highcharts.chart('demokracie5', {

    chart: {
        type: 'column'
    },

    title: {
        text: tridy[4]
    },

    xAxis: {
        title: '',
        categories: ['nezažil', 'zažil']
    },

    yAxis: {
        title: '',
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            stacking: undefined
        }
    },

    series: [{
        name: 'Demokracie je nejlepší',
        data: [datademokracienez[0][4], datademokraciezaz[0][4]],
        color: colorsagree[2]
    }, {
        name: 'Autoritářství může být lepší',
        data: [datademokracienez[1][4], datademokraciezaz[1][4]],
        color: colorsagree[1]
    }, {
        name: 'Je to jedno/nevím',
        data: [datademokracienez[2][4], datademokraciezaz[2][4]],
        color: colorsagree[0]
    }]
});

Highcharts.chart('demokracie6', {

    chart: {
        type: 'column'
    },

    title: {
        text: tridy[5]
    },

    xAxis: {
        title: '',
        categories: ['nezažil', 'zažil']
    },

    yAxis: {
        title: '',
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            stacking: undefined
        }
    },

    series: [{
        name: 'Demokracie je nejlepší',
        data: [datademokracienez[0][5], datademokraciezaz[0][5]],
        color: colorsagree[2]
    }, {
        name: 'Autoritářství může být lepší',
        data: [datademokracienez[1][5], datademokraciezaz[1][5]],
        color: colorsagree[1]
    }, {
        name: 'Je to jedno/nevím',
        data: [datademokracienez[2][5], datademokraciezaz[2][5]],
        color: colorsagree[0]
    }]
});

Highcharts.chart('mobilita', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Ukončené vzdělání dětí oproti rodičům'
    },

    xAxis: {
        title: '',
        categories: tridy
    },

    yAxis: {
        title: ''
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            stacking: undefined
        }
    },

    series: [{
        name: 'Vyšší vzdělání dětí',
        data: datamobilita[0],
        color: colorsagree[2]
    }, {
        name: 'Shodné vzdělání',
        data: datamobilita[1],
        color: colorsagree[1]
    }, {
        name: 'Nižší vzdělání dětí',
        data: datamobilita[2],
        color: colorsagree[0]
    }]
});



Highcharts.chart('vzdelani1', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Zajištěná stř. třída'
    },

    xAxis: {
        title: '',
        categories: ['ambice', 'skutečnost']
    },

    yAxis: {
        title: '',
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
    	layout: 'vertical'
    },

    plotOptions: {
        series: {
            stacking: undefined
        }
    },

    series: [{
        name: 'Bez maturity',
        data: [datavzdelaniasp[0][0], datavzdelanireal[0][0]],
        color: colorsagree[0]
    }, {
        name: 'S maturitou',
        data: [datavzdelaniasp[1][0], datavzdelanireal[1][0]],
        color: colorsagree[1]
    }, {
        name: 'Vysoká škola',
        data: [datavzdelaniasp[2][0], datavzdelanireal[2][0]],
        color: colorsagree[2]
    }]
});

Highcharts.chart('vzdelani2', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Nast. kosmo. třída'
    },

    xAxis: {
        title: '',
        categories: ['ambice', 'skutečnost']
    },

    yAxis: {
        title: '',
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
    	layout: 'vertical'
    },

    plotOptions: {
        series: {
            stacking: undefined
        }
    },

    series: [{
        name: 'Bez maturity',
        data: [datavzdelaniasp[0][1], datavzdelanireal[0][1]],
        color: colorsagree[0]
    }, {
        name: 'S maturitou',
        data: [datavzdelaniasp[1][1], datavzdelanireal[1][1]],
        color: colorsagree[1]
    }, {
        name: 'Vysoká škola',
        data: [datavzdelaniasp[2][1], datavzdelanireal[2][1]],
        color: colorsagree[2]
    }]
});

Highcharts.chart('vzdelani3', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Trad. pracující třída'
    },

    xAxis: {
        title: '',
        categories: ['ambice', 'skutečnost']
    },

    yAxis: {
        title: '',
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
    	layout: 'vertical'
    },

    plotOptions: {
        series: {
            stacking: undefined
        }
    },

    series: [{
        name: 'Bez maturity',
        data: [datavzdelaniasp[0][2], datavzdelanireal[0][2]],
        color: colorsagree[0]
    }, {
        name: 'S maturitou',
        data: [datavzdelaniasp[1][2], datavzdelanireal[1][2]],
        color: colorsagree[1]
    }, {
        name: 'Vysoká škola',
        data: [datavzdelaniasp[2][2], datavzdelanireal[2][2]],
        color: colorsagree[2]
    }]
});

Highcharts.chart('vzdelani4', {

    chart: {
        type: 'column'
    },

    title: {
        text: tridy[3]
    },

    xAxis: {
        title: '',
        categories: ['ambice', 'skutečnost']
    },

    yAxis: {
        title: '',
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
    	layout: 'vertical'
    },

    plotOptions: {
        series: {
            stacking: undefined
        }
    },

    series: [{
        name: 'Bez maturity',
        data: [datavzdelaniasp[0][3], datavzdelanireal[0][3]],
        color: colorsagree[0]
    }, {
        name: 'S maturitou',
        data: [datavzdelaniasp[1][3], datavzdelanireal[1][3]],
        color: colorsagree[1]
    }, {
        name: 'Vysoká škola',
        data: [datavzdelaniasp[2][3], datavzdelanireal[2][3]],
        color: colorsagree[2]
    }]
});

Highcharts.chart('vzdelani5', {

    chart: {
        type: 'column'
    },

    title: {
        text: tridy[4]
    },

    xAxis: {
        title: '',
        categories: ['ambice', 'skutečnost']
    },

    yAxis: {
        title: '',
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
    	layout: 'vertical'
    },

    plotOptions: {
        series: {
            stacking: undefined
        }
    },

    series: [{
        name: 'Bez maturity',
        data: [datavzdelaniasp[0][4], datavzdelanireal[0][4]],
        color: colorsagree[0]
    }, {
        name: 'S maturitou',
        data: [datavzdelaniasp[1][4], datavzdelanireal[1][4]],
        color: colorsagree[1]
    }, {
        name: 'Vysoká škola',
        data: [datavzdelaniasp[2][4], datavzdelanireal[2][4]],
        color: colorsagree[2]
    }]
});

Highcharts.chart('vzdelani6', {

    chart: {
        type: 'column'
    },

    title: {
        text: tridy[5]
    },

    xAxis: {
        title: '',
        categories: ['ambice', 'skutečnost']
    },

    yAxis: {
        title: '',
        max: 100
    },

    tooltip: {
        shared: true,
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
    	layout: 'vertical'
    },

    plotOptions: {
        series: {
            stacking: undefined
        }
    },

    series: [{
        name: 'Bez maturity',
        data: [datavzdelaniasp[0][5], datavzdelanireal[0][5]],
        color: colorsagree[0]
    }, {
        name: 'S maturitou',
        data: [datavzdelaniasp[1][5], datavzdelanireal[1][5]],
        color: colorsagree[1]
    }, {
        name: 'Vysoká škola',
        data: [datavzdelaniasp[2][5], datavzdelanireal[2][5]],
        color: colorsagree[2]
    }]
});

});