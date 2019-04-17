layui.extend({admin:'lay/modules/admin'})  // 重命名 admin 模块
.define(['admin','conf'],function(exports){  // 该扩展模块依赖 admin conf 模块
    //解决 IE8 不支持console
    window.console = window.console || (function () {
        var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile
        = c.clear = c.exception = c.trace = c.assert = function () { };
        return c;
    })();
    layui.admin.initPage();
    exports('index',{}); // 输出接口 index
});  