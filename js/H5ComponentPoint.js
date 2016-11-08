// 散点图表组件对象
var H5ComponentPoint = function(name, cfg) {
    var component = new H5ComponentBase(name, cfg);
    var base = cfg.data[0][1]; //0.4,以第一个数据的 比例为大小的 100%

    // 输出每个point
    $.each(cfg.data, function(index, item) {
        var point = $('<div class="point point_' + index + '">');

        var name = $('<div class="name">' + item[0] + '</div>')
        var rate = $('<div class="per">' + (item[1] * 100) + '%</div>');


        name.append(rate);
        point.append(name);

        var per = (item[1] / base * 100) + '%';
        var perx = item[1] / base;
        // console.log(perx);

        point.width(per).height(per);

        if (item[2]) {
            // point.css('background-color', item[2]);
            point.css({
                'background-color': item[2],
                'font-size': perx * 22 + 'px' //确保每个point中的文字大小随图形改变而改变
            })
        }
        if (item[3] !== undefined && item[4] !== undefined) {
            point.css({
                'left': item[3],
                'top': item[4]
            })
        }
        point.css({
            '-webkit-transition': 'all 1s ' + index * .5 + 's'
        });
        component.append(point);

    });
    return component;
}
