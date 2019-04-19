//请求URL，配合 lay-api 使用
layui.define([],function(exports){
    exports('api',{
        login:'json/login.js',
        getMenu:'json/menu.js',
        getGoods:'json/goods.js'
    });
})