jQuery(function($){

    //分类信息字段筛选扩展
    var  $filter_label = $("#w-filter .w-filter-font .item .label")
    var  $filter_value = $("#w-filter .w-filter-font .item .value")

    $filter_label.each(function(){
        $(this).on('click',function(){
            var $label = $(this)
            var $value = $(this).next('.value')

            //避免同时展开
            $filter_label.not($label).removeClass('on')
            $filter_value.not($value).hide()

            $label.toggleClass('on');
            $value.slideToggle()
        })
    })

    $("#w-custom-zoom").on('click',function(){
        alert('按住【ctrl】，滚动鼠标【滚轮】即可缩放界面');
    })

    //筛选模块
    if(isMobile){

        var $mask = $("#u-mask")
        var $filter_box = $(".w-listmode")
        var $filter_title = $(".w-listfilter-title")
        var $filter_list = $(".w-listfilter-list")

        $filter_box.on('click',function(){
            showMask()
            $(this).addClass('isfocus')
        })

        $filter_title.each(function(){
            $(this).on('click',function(){
                //避免同时展开
                $(".w-listfilter-title").not($(this)).removeClass('on')
                $(".w-listfilter-list").not($(this).next(".w-listfilter-list")).hide()

                $(this).toggleClass('on');
                $(this).next(".w-listfilter-list").slideToggle();
            })
        })

        $mask.on('click',function(){
            hideMask()
            $filter_title.removeClass('on')
            $filter_list.hide()
            $filter_box.removeClass('isfocus')
        })
    }

    //侧边栏展开与关闭
    if(isMobile){
       
        $("#i-header-sidebar-tg").on('click',function(){
            $(".i-header").toggleClass('showSidebar')
            $(".default-sidebar").slideToggle()
            toggleMask();
        })
        $("#u-mask").on('click',function(){
            $(".default-sidebar").slideUp()
            $(".i-header").removeClass('showSidebar')
        })
        $(".default-sidebar-title").on('click',function(){
            $(this).next('.default-sidebar-content').fadeIn()
        })
        $(".default-sidebar-content").on('click',function(){
            $(this).fadeOut()
        })

        //搜索禁止冒泡
        $(".default-sidebar-search form").on('click',function(e){
            e.stopPropagation()
        })
    }


})