
//드롭다운
$('.dropdown-trigger').dropdown();

//정렬
$('.compact-trigger').click(function() {
    grid.compact();
});

//저장
$('.save-trigger').click(function () {
    var result = confirm('저장하시겠습니까?');
    if (result) {

        for (var keyIdx = 0; keyIdx < $('.grid-stack-item').length; keyIdx ++) {
            var targetId = $('.grid-stack-item')[keyIdx].id;

            refreshCoordinate(targetId)
        }
        //변경된 properties확인, properties 는 실시간으로 반영예정

        //DB에 testData 저장
    }
});
function refreshCoordinate(id) {
    var coordinate = {
        x: $('#'+id).attr('data-gs-x'),
        y: $('#'+id).attr('data-gs-y'),
        w: $('#'+id).attr('data-gs-width'),
        h: $('#'+id).attr('data-gs-height')
    }
    var boardSeqAndWidgetSeqStr = id.replace("widget-","")
    var boardSeqAndWidgetSeq = boardSeqAndWidgetSeqStr.split("_")
    var boardSeq = Number(boardSeqAndWidgetSeq[0]);
    var widgetSeq = Number(boardSeqAndWidgetSeq[1]);

    if (testData.dashBoardSeq === boardSeq) {
        //얕은복사로 coodinate 수정
        var targetWidget= testData.widgetList.find(function (item, idx) {
            if (item.widgetSeq === widgetSeq) {
                item.coord = coordinate
            }
        }); 
    }

}

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

//위젯 추가
$('#widget-dropdown a').on('click', function (e) {
    
    var widget = {
        widgetSeq : testData.widgetCurrentSeq+1,
        widgetName : '예시' + (testData.widgetCurrentSeq+1),
        widgetId: 'widget-'+testData.dashBoardSeq+'_'+(testData.widgetCurrentSeq+1),
        type : $(e.target).attr('widget_type'),
        coord : {
            x:0,
            y:0,
            w:3,
            h:5
        },
        properties : {

        }
    }
    testData.widgetList.push(widget);
    testData.widgetCurrentSeq += 1;
    widgetAdd(grid, widget);
    //redraw (grid);
})


//리사이즈
$(document).on('gsresizestop', function(event, e) {
    var contentsType = $(e).children(0).children('#contents').attr('widget_type');
    
    //내용물 업데이트
    switch (contentsType) {
        case 'map' :
            var map = $(e).children(0).children('#contents').children(0).data('map');
            map.updateSize();
            break;
        case 'chart' :
            var chart = $(e).children(0).children('#contents').children(0).data('chart');
            chart.resize({height: parseInt($(e).children(0).children('#contents').height()/25)*25})
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
    //refreshCoordinate($(e)[0].id);  저장할때 coordinate 반영 예정
});


function redraw (grid) {
    grid.removeAll();
    //현재 대시보드 검증 후, widget 그려야한다.
    for (widgetKey in testData.widgetList) {
        var widget = testData.widgetList[widgetKey];
        var widgetEl = getTamplete(testData.dashBoardSeq, widget);
        

        //addWidget = //(x, y, w, h, boolean, minW. maxW, minH, MaxW)
        grid.addWidget(widgetEl, widget.coord.x, widget.coord.y, widget.coord.w, widget.coord.h, false);
        
        switch (widget.type) {
            case 'map' :
                var targetElId= 'ol-'+testData.dashBoardSeq+'_'+widget.widgetSeq;
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
                var targetElId= 'chart-'+testData.dashBoardSeq+'_'+widget.widgetSeq;
                var chart = bb.generate({
                    data: {
                      columns: [
                      ["data1", 30, 200, 100, 400, 150, 250],
                      ["data2", 130, 100, 140, 200, 150, 50]
                      ],
                      type: "spline"
                    },
                    bindto: "#"+targetElId
                  });
                  $('#'+targetElId).data('chart', chart);
                  chart.resize({});
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

    //위젯 삭제
    $('.widgetCancel').on('click', function (e) {
        $(e.target).parents('.grid-stack-item')[0].remove();
    })
}

function widgetAdd(grid, widget) {
    var widgetEl = getTamplete(testData.dashBoardSeq, widget);
    grid.addWidget(widgetEl, widget.coord.x, widget.coord.y, widget.coord.w, widget.coord.h, false);
    switch (widget.type) {
        case 'map' :
            var targetElId= 'ol-'+testData.dashBoardSeq+'_'+widget.widgetSeq;
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
            var targetElId= 'chart-'+testData.dashBoardSeq+'_'+widget.widgetSeq;
            var chart = bb.generate({
                data: {
                columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 130, 100, 140, 200, 150, 50]
                ],
                type: "spline"
                },
                bindto: "#"+targetElId
            });
            $('#'+targetElId).data('chart', chart);
            chart.resize({});
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
