layui.use(['element', 'layer', 'jquery'], () => {
    let $=layui.jquery;
    $(function () {
        $('#toubuHead').load('head.html',function () {
            let sc =  document.createElement("script");
            sc.src= "./js/head.js";
            $("body").append(sc);
        });
        $('#wenzi_bottom').load('foot.html',function () {
            let sc1 =  document.createElement("script");
            sc1.src= "./js/foot.js";
            $("body").append(sc1);
        });
    })

})