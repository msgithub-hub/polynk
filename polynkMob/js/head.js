layui.use( 'jquery', () => {
    // let element = layui.element;
    let $=layui.jquery;
    // let layer=layui.layer;
    $(function () {
        // 媒体查询
        $('.head-top').on('click','.menu', function () {
            $('.content-nav .navUl').slideToggle();
        });
        let index = window.location.hash.substring(1);
        $('.content-nav>.navUl>.li_son1').eq(index).addClass("li_none").siblings(".navUl .li_son1").removeClass("li_none");
        $('.head-top .logo').on('click',function () {
            // $(this).addClass('flip');
            setTimeout(function () {
                window.open('index.html#0','_self')
            },800)
        })
    })

});