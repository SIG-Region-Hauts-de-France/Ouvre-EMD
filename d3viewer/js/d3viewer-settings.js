
D3Viewer.settings = {
    proxy: "proxy.php?url=",
    useProxy: true,
    datasetListUrl: "http://ks29236.kimsufi.com:8080/tjs/?request=describedatasets&service=tjs&output=json",
    zonesUrl: "http://ks29236.kimsufi.com:8080/tjs/?request=getframework&service=tjs&frameworkuri=zones",
    de10Url: "http://ks29236.kimsufi.com:8080/tjs/?request=getframework&service=tjs&frameworkuri=de10",
    de30Url: "http://ks29236.kimsufi.com:8080/tjs/?request=getframework&service=tjs&frameworkuri=de30",
    dtirUrl: "http://ks29236.kimsufi.com:8080/tjs/?request=getframework&service=tjs&frameworkuri=dtir",
    neighbourZonesUrl: "http://ks29236.kimsufi.com:8080/tjs/?service=tjs&request=GetFramework&frameworkuri=dep_limitrophes",
    neighbourCountriesUrl: "http://ks29236.kimsufi.com:8080/tjs/?service=tjs&request=GetFramework&frameworkuri=belgique",
    townsUrl: "http://ks29236.kimsufi.com:8080/tjs/?request=getframework&service=tjs&frameworkuri=villes",
    centerX: 2.7,
    centerY: 49.6,
    initScale: 13000,
    initOverviewScale: 4000,
    maxRadius: 20,
    transitionTime: 1000,
    heightChart: 700,
    widthChart: 750,
    marginRightChart: 120,
    marginLeftChart: 50,
    marginBottomChart: 80,
    widthMap: 750,
    heightMap: 580,
    widthBrush: 750,
    heightBrush: 100,
    widthMiniMap: 200,
    heightMiniMap: 180,
    highlightColor: "#ff9955",
    backgroundColor: "#ffffff",
    overviewmap_settings: {"sel_label": "libellecom", "sel_id": "gid"},
    mapZoneDef: ["de10", "de30", "dtir"],
    mapAttributesMatch: {"label":"libellecom", "id":"gid", "dtir":"dtir", "de30": "de30", "de10": "de10", "infos": ["de10", "de30", "insee", "dtir"]},
    exclude_value: "ENSEMBLE"
}

var fr_FR = {
    "decimal": ",",
        "thousands": "\xa0",
        "grouping": [3],
        "currency": ["€", ""],
        "dateTime": "%a, %b %e %X %Y",
        "date": "%d/%m/%Y",
        "time": "%H:%M:%S",
        "periods": ["AM", "PM"],
        "days": ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
        "shortDays": ["lu", "ma", "me", "je", "ve", "sa", "di"],
        "months": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        "shortMonths": ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"]
}

var FR = d3.locale(fr_FR);