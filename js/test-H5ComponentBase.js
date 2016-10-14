// 基本图文组件对象
var H5ComponentBase = function(cfg) {
    var cfg = cfg || {};
    var id = ('h5_c_' + Math.random()).replace('.', '_');

    // 把当前的组件类型添加到样式中进行标记
    var cls = 'h5_component_' + cfg.type;
    var component = $('<div class="h5_component ' + cls + '" id="' + id + '"></div>');
    cfg.text && component.text(cfg.text);
    return component
}
