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

});
//控制容器大小
function PanelResize() {
    var WindowHeight = $(window).height();
    $("#mapid").height(WindowHeight-16);
}