layui.use( 'jquery', () => {
    // let element = layui.element;
    let $=layui.jquery;
    // let layer=layui.layer;
    $(function () {
        if (returnCitySN) {
            // var privence = returnCitySN['cname'].substr(0, 3);
            console.log(returnCitySN);
            $(".logoWord").empty()
            $(".logoWord").prepend(`<i class="layui-icon layui-icon-location">${returnCitySN.cname}</i>`)
        } else {
            $(".logoWord").text('welcome to Polynk!')
        }
        // 媒体查询
        $('.head-top').on('click','.menu', function () {
            $('.content-nav .navUl').slideToggle();
        });
        let index = window.location.hash.substring(1);
        $('.content-nav>.navUl>.li_son1').eq(index).addClass("li_none").siblings(".navUl .li_son1").removeClass("li_none");
        // $('.content-nav .navUl .li_son1').each(function(){
        //     if($($(this))[0].window.open('','_self')==String(window.location))
        //         $(this).addClass('li_none').siblings('.li_none').removeClass('li_none');
        // });


        $('.head-top .logo').on('click',function () {
            // $(this).addClass('flip');
            setTimeout(function () {
                window.open('index.html#0','_self')
            },800)
        })
    })

});