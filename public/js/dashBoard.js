
//드롭다운
$('.dropdown-trigger').dropdown();

//정렬
$('.compact-trigger').click(function() {
    grid.compact();
});

$('#themeSwitch').change(function (e) {
    if($(e.target).prop('checked')) {
        //다크
        $('html').attr('thema','')
        $('.dashboard-header').attr('thema','')
        $('.dashboard-body').attr('thema','')
        $('.item-content').attr('thema','')
        $('.item-contents-header').attr('thema','')
        $('.item-contents-edit').attr('thema','')
        $('.header-btn').attr('thema','')
        $('.widget-dropdown-btn').attr('thema','')
        $('.dashboard-sidebar-logo').attr('thema','')
        $('.dashboard-sidebar-header').attr('thema','')
        $('.dashboard-sidebar-footer').attr('thema','')
        
    } else {
        //화이트
        $('html').attr('thema','white')
        $('.dashboard-header').attr('thema','white')
        $('.dashboard-body').attr('thema','white')
        $('.item-content').attr('thema','white')
        $('.item-contents-header').attr('thema','white')
        $('.item-contents-edit').attr('thema','white')
        $('.header-btn').attr('thema','white')
        $('.widget-dropdown-btn').attr('thema','white')
        $('.dashboard-sidebar-logo').attr('thema','white')
        $('.dashboard-sidebar-header').attr('thema','white')
        $('.dashboard-sidebar-footer').attr('thema','white')
    }
})


function redraw (grid) {

    //현재 대시보드 검증 후, widget 그려야한다.
    for (widgetKey in testData.widgetList) {
        var widget = testData.widgetList[widgetKey];
        var widgetEl = getTamplete(testData.dashBoardSeq, widget);
        
        //addWidget = //(x, y, w, h, boolean, minW. maxW, minH, MaxW)
        grid.addWidget(widgetEl, widget.coord.x, widget.coord.y, widget.coord.w, widget.coord.h);
        console.log(widget)
        switch (widget.type) {
            case 'map' :
                var targetElId= 'ol-'+testData.dashBoardSeq+'_'+widget.widgetSeq;
                console.log(targetElId)
                var map = new ol.Map({
                    layers: [
                        new ol.layer.Tile({
                        source: new ol.source.OSM()
                        })
                    ],
                    target: targetElId,
                    view: new ol.View({
                        center: [14125911.571042122, 4506383.221066708],
                        zoom: 14
                    })
                });
                $('#'+targetElId).data('map', map);
                break;
            case 'chart' :
                break;
            case 'stat' :
                break;
            case 'list' :
                break;
            case 'text' :
                break;
            default :
                
                break;
        }
    }
}
