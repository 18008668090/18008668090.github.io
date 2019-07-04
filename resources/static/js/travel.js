var _mymap;
$(document).ready(function () {

    PanelResize();
    //*******生成底图*********

    var normalm = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
        maxZoom: 18,
        minZoom: 5
    });
    //var imgm = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
    //    maxZoom: 18,
    //    minZoom: 5
    //});
    //var imga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
    //    maxZoom: 18,
    //    minZoom: 5
    //});

    imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
        maxZoom: 18,
        minZoom: 5
    }),
        imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
            maxZoom: 18,
            minZoom: 5
        });

    var normal = L.layerGroup([normalm]),
        image = L.layerGroup([imgm, imga]);

    _mymap = L.map("mapid", {
        //center: [29.69448, 113.89124],
        center: [30.484036, 113.980408],
        zoom: 1,
        layers: [normal],
    });
    L.marker([50.5, 30.5]).addTo(_mymap);

    //比例尺
    L.control.scale({ "imperial": false }).addTo(_mymap);

    var lines=[];
    lines.push("30.447951 114.360457");
    lines.push("39.849574 116.407665");
    lines.push("19.600291 110.228352");
    lines.push("30.561921 111.275854");
    lines.push("38.924682 117.130589");
    lines.push("28.998176 110.309634");
    lines.push("28.929823 111.660139");
    var tips = "这我去过";
    for (var i = 0; i < lines.length; i++) {
        var latlng0 = lines[i].split(" ");
        if (latlng0.length > 1) {//一行两个数字
            var marker = new L.marker([latlng0[0], latlng0[1]], {  })
                .addTo(_mymap)
                .bindPopup(tips);
        }
    }
//点击位置
//     var popup = L.popup();
//     function onMapClick(e) {
//        popup
//            .setLatLng(e.latlng)
//            .setContent("You clicked the map at " + e.latlng.toString())
//            .openOn(_mymap);
//     }
//     _mymap.on('click', onMapClick);
});
//控制容器大小
function PanelResize() {
    var WindowHeight = $(window).height();
    $("#mapid").height(WindowHeight-16);
}
