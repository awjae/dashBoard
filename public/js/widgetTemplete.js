


var el = `<div style="overflow:hidden;" class="grid-stack-item"  data-gs-width="5" data-gs-height="5" data-gs-x="6" data-gs-y="3" data-gs-min-width="2" data-gs-min-height="3">
        <div class="item-content grid-stack-item-content" style="overflow-y: hidden;">
            <header class="item-contents-header">{inputData.title}
                <div class="item-contents-edit">
                    <i class="material-icons" style="font-size: 1.2em; position: relative;">build</i> 
                    <i class="material-icons">cancel</i>
                </div>
            </header>
            <div id="dialog_4563" class="editDialog" style="display:none;">
                <div class="editDialog_detail">
                    3456
                    <button onclick="editContents()">적용</button>
                </div>
            </div>
            <div id='contents' style="height: 93%;">
            </div> 
        </div>
    </div>`



var mapTemplete = `<div style="overflow:hidden;" class="grid-stack-item"  data-gs-width="5" data-gs-height="5" data-gs-x="6" data-gs-y="3" data-gs-min-width="2" data-gs-min-height="3">
        <div class="item-content grid-stack-item-content" style="overflow-y: hidden;">
            <header class="item-contents-header">{inputData.title}
                <div class="item-contents-edit">
                    <i class="material-icons" style="font-size: 1.2em; position: relative;">build</i> 
                    <i class="material-icons">cancel</i>
                </div>
            </header>
            <div id="dialog_4563" class="editDialog" style="display:none;">
                <div class="editDialog_detail">
                    3456
                    <button onclick="editContents()">적용</button>
                </div>
            </div>
            <div id='contents' style="height: 93%;">
                <div class="ol">
                    <div="olSub1">
                    </div="olSub1">
                </div>
            </div> 
        </div>
    </div>`



/*매개변수의 형태
*{
    widgetSeq : 1,
    widgetName : '예시1',
    type : 'default',
    coord : {
        x:0,
        y:0,
        w:2,
        h:3
    },
    properties : {

    }
}
*/    
var getTamplete = function (dashBoardSeq, widget) {
    var templete; 

    switch (widget.type) {
        case 'map' :
            templete = `<div id="widget-${dashBoardSeq}_${widget.widgetSeq}" style="overflow:hidden;" class="grid-stack-item"  data-gs-width="5" data-gs-height="5" data-gs-x="6" data-gs-y="3" data-gs-min-width="2" data-gs-min-height="3">
                            <div class="item-content grid-stack-item-content" style="overflow-y: hidden;">
                                <header class="item-contents-header">${widget.widgetName}
                                    <div class="item-contents-edit">
                                        <i class="material-icons" style="font-size: 1.2em; position: relative;">build</i> 
                                        <span class="widgetCancel"><i class="material-icons">cancel</i></span>
                                    </div>
                                </header>
                                <div id="dialog_4563" class="editDialog" style="display:none;">
                                    <div class="editDialog_detail">
                                        <button onclick="editContents()">적용</button>
                                    </div>
                                </div>
                                <div id='contents' style="height: 93%;" widget_type="${widget.type}">
                                    <div id="ol-${dashBoardSeq}_${widget.widgetSeq}">
                                        <div id="olSub-${dashBoardSeq}_${widget.widgetSeq}">
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>`
            break;
        case 'chart' :
            break;
        case 'stat' :
            templete = `<div id="widget-${dashBoardSeq}_${widget.widgetSeq}" style="overflow:hidden;" class="grid-stack-item"  data-gs-width="5" data-gs-height="5" data-gs-x="6" data-gs-y="3" data-gs-min-width="3" data-gs-min-height="3">
                            <div class="item-content grid-stack-item-content" style="overflow-y: hidden;">
                                <header class="item-contents-header">${widget.widgetName}
                                    <div class="item-contents-edit">
                                        <i class="material-icons" style="font-size: 1.2em; position: relative;">build</i> 
                                        <span class="widgetCancel"><i class="material-icons">cancel</i></span>
                                    </div>
                                </header>
                                <div id="dialog_4563" class="editDialog" style="display:none;">
                                    <div class="editDialog_detail">
                                        <button onclick="editContents()">적용</button>
                                    </div>
                                </div>
                                <div id='contents' style="height: 93%;" widget_type="${widget.type}">
                                    
                                </div> 
                            </div>
                        </div>`
            break;
        case 'list' :
            templete = `<div id="widget-${dashBoardSeq}_${widget.widgetSeq}" style="overflow:hidden;" class="grid-stack-item"  data-gs-width="5" data-gs-height="5" data-gs-x="6" data-gs-y="3" data-gs-min-width="3" data-gs-min-height="3">
                            <div class="item-content grid-stack-item-content" style="overflow-y: hidden;">
                                <header class="item-contents-header">${widget.widgetName}
                                    <div class="item-contents-edit">
                                        <i class="material-icons" style="font-size: 1.2em; position: relative;">build</i> 
                                        <span class="widgetCancel"><i class="material-icons">cancel</i></span>
                                    </div>
                                </header>
                                <div id="dialog_4563" class="editDialog" style="display:none;">
                                    <div class="editDialog_detail">
                                        <button onclick="editContents()">적용</button>
                                    </div>
                                </div>
                                <div id='contents' style="height: 93%;" widget_type="${widget.type}">
                                    <table class="highlight">
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Item Name</th>
                                            <th>Item Price</th>
                                        </tr>
                                        </thead>
                                
                                        <tbody>
                                        <tr>
                                            <td>Alvin</td>
                                            <td>Eclair</td>
                                            <td>$0.87</td>
                                        </tr>
                                        <tr>
                                            <td>Alan</td>
                                            <td>Jellybean</td>
                                            <td>$3.76</td>
                                        </tr>
                                        <tr>
                                            <td>Jonathan</td>
                                            <td>Lollipop</td>
                                            <td>$7.00</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </div>
                        </div>`
            break;
        case 'text' :
            break;
        default :
            templete = `<div id="widget-${dashBoardSeq}_${widget.widgetSeq}" style="overflow:hidden;" class="grid-stack-item"  data-gs-width="5" data-gs-height="5" data-gs-x="6" data-gs-y="3" data-gs-min-width="2" data-gs-min-height="3">
                            <div class="item-content grid-stack-item-content" style="overflow-y: hidden;">
                                <header class="item-contents-header">${widget.widgetName}
                                    <div class="item-contents-edit">
                                        <i class="material-icons" style="font-size: 1.2em; position: relative;">build</i> 
                                        <span class="widgetCancel"><i class="material-icons">cancel</i></span>
                                    </div>
                                </header>
                                <div id="dialog_4563" class="editDialog" style="display:none;">
                                    <div class="editDialog_detail">
                                        <button onclick="editContents()">적용</button>
                                    </div>
                                </div>
                                <div id='contents' style="height: 93%;">
                                </div> 
                            </div>
                        </div>`
            break;
    }

    return templete;
}