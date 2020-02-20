
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
        var widgetEl = getTamplete(widget);
        
        //addWidget = //(x, y, w, h, boolean, minW. maxW, minH, MaxW)
        grid.addWidget(widgetEl, widget.coord.x, widget.coord.y, widget.coord.w, widget.coord.h);
    }
}
