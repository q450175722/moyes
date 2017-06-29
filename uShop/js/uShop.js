/**
 * Created by Administrator on 2017/6/20.
 */

// 导航栏
$(function (){
    //点击跳转
    $("#login").click(function (){
        location.href = ""
    })
    $("#registre").click(function (){
        location.href = "registre.html"
    })

    //我的美购
    $(".mg01").find("li:eq(0)").on("mouseenter",function (){
        $(".myMg").css("display","block")
    })
    $(".mg01").find("li:eq(0)").on("mouseleave",function (){
        $(".myMg").css("display","none")
    })
    $(".myMg li").hover(function (){
        $(this).css({"background":"orange","color":"#fff"})
    },function (){
        $(this).css({"background":"","color":""})
    })

    //购物车
    $("#shopCart").on("mouseenter",function (){
        $("#shoping").css("display","block")
    })
    $("#shopCart").on("mouseleave",function (){
        $("#shoping").css("display","none")
    })

    // nav 导航栏
    $("#nav_a").mouseenter(function (){
        $("#nav_abg").css("display","block");
        $("#nav_abg").mouseleave(function (){
            $("#nav_abg").css("display","none")
        })
    })

})

//楼梯
$(function (){
    var flag = true; //控制 当点击楼层号时，禁止滚动条的代码执行   值为true时，可以执行滚动条代码
    //  根据楼层号 控制滚走的距离
    // 1、除了top的楼梯号，为每一个楼梯号添加一个click，控制楼梯滚走的距离（距离：当前楼层的offset().top ）
    /*    $("#menu li:not(:last)").click(function (){
     flag = false ;
     $("")
     })*/


    $("#menu li:not(:last)").click(function() {
        flag = false;
        //当前点击的楼号红色的 其余黑色的
        $(this).find("span").addClass("active").end().siblings().find("span").removeClass("active");
        //获取当前楼号对应楼层的 top值
        var sTop = $(".Louti").eq($(this).index()).offset().top;

        //将页面滚走的距离设置为  sTop
        $("body,html").animate({
            "scrollTop": sTop
        }, 1000, function() {
            flag = true;
        });
    })
    //2、点击top   回到顶部
    $("#menu li:last").click(function() {
        $("body,html").stop(true).animate({
            "scrollTop": 0
        }, 1000);
        $("#menu li span").removeClass("active");
    })

    //3、 滚动条滚动 --  找到当前楼层的索引    控制楼层号
    $(window).scroll(function() {
        //如果flag  为true   可以执行滚动条的代码
        if (flag) {

            //获取页面滚走的距离
            var sTop = $(document).scrollTop();
            //filter  返回满足条件的那个对象
            //找到满足某个条件的楼层对象
            var $floor = $(".Louti").filter(function(index, ele) {
                return Math.abs($(this).offset().top - sTop) < $(this).height() / 2;
            })

            //根据楼层的索引 设置楼梯号的 样式
            $("#menu li").eq($floor.index())
                .find("span")
                .addClass("active")
                .end()
                .siblings()
                .find("span")
                .removeClass("active");
        }
    })

})

// 轮播图
$(function(){

    //通过Ajax获取数据
    $.get("json/lunbo.json", function(data){
        console.log(data);
        var arr = data;

        //遍历数组arr
        for (var i=0; i<arr.length; i++) {
            var obj = arr[i]; //每个图片的数据

            //创建li节点
            $("<li><img src="+ obj.img +" /></li>").appendTo("#banner");
            $("<a href = 'javascript:;'></a>").appendTo("#banner");
            if (i == 0){
                $("<li class='active'>" + "</li>").appendTo(".jdian");
            }
            else {
                $("<li>"+ "</li>").appendTo(".jdian");
            }
        }

        //lunbo
        lunbo();

    })

    //jq轮播图
    function lunbo(){
        var banner = $("#banner");
        var jdian = $(".jdian");
        var bannerli = $("#banner li");
        var jdli = $(".jdian li");


        //复制第一张图到最后
        bannerli.first().clone(true).appendTo(banner);

        var oSize = bannerli.length;

        console.log(oSize);

        banner.width(1423*(oSize+1));

        //开启定时器
        var i = 0;
        var timer = setInterval(function(){
            i++;
            move();
        }, 2000);


        function move(){

            if (i < 0) {
                banner.css("left", -1423*oSize);
                i = oSize;
            }

            if (i >= oSize+1){
                banner.css("left", 0);
                i = 1;
            }

            banner.stop().animate({left:-i*1423}, 1000,"linear");

            jdli.eq(i).addClass("active").siblings().removeClass("active");
            if (i == oSize) {
                jdli.eq(0).addClass("active").siblings().removeClass("active");
            }
        }

        //上一页
/**        $("#prev").click(function(){
            i--;
            move();
        })

        //下一页
        $("#next").click(function(){
            i++;
            move();
        })*/

        jdli.mouseenter(function(){
            clearInterval(timer);
            i = $(this).index();
            move();
        });
        jdli.mouseleave(function (){
            timer = setInterval(function(){
                i++;
                move();
            }, 2000);
        });
        $("#banner").hover(function(){
                clearInterval(timer);
            },
            function(){
                timer = setInterval(function(){
                    i++;
                    move();
                }, 2000);
            })

    }

})

//主题内容
$(function (){
    $.get("json/shop_01.json",function (d){
        //团购秒杀
        var main1 = d.main_1;

         for(var i=0; i<main1.length; i++){
            var index1 = i; 
            if(main1[index1].class == "m1_top"){
                $("<h3>"+ main1[index1].h3 +"</h3>").appendTo(".m1_top");
                $(".m1_top h3").css("background","url(images/yb/"+ main1[index1].img +") left -7px  no-repeat");
                $("<strong>&nbsp;"+ main1[index1].solo +"</strong>").appendTo(".m1_top");
                $("<span>"+ main1[index1].note +"&nbsp;&nbsp;&nbsp;<a href='javascript:;'>查看更多<em class='iconfont'>&#xe606;</em></a></span>").appendTo(".m1_top");
            }
            else if(main1[index1].class == "m1_Com"){
                $("<li><span><img src='images/"+ main1[index1].img +" '><em>"+ main1[index1].nowPrice +"</em></span><span><a href='javascript:;'>"+ main1[index1].co_name +"</a></span><span><s>"+ main1[index1].oldPrice +"</s><a href='javascript:;' class='tgou'>立即团购</a></span></li>").appendTo(".m1_left");
            }
            else if(main1[index1].class == "m1_Com02")
            {
                $("<li><span><img src='images/"+ main1[index1].img +" '><em>"+ main1[index1].nowPrice +"</em></span><span><a href='javascript:;'>"+ main1[index1].co_name +"</a></span><span><s>"+ main1[index1].oldPrice +"</s><a href='javascript:;' class='tgou'>立即团购</a></span></li>").appendTo(".m1_b_list");
            }
        }

        //（第二专区）精品推荐
        var main2 = d.main_2;

        for(var p=0; p<main2.length; p++){
            var index2 = p;
            if(main2[index2].class == "m2_top"){
                $("<h3>"+ main2[index2].h3 +"</h3>").appendTo(".m2_top");
                $(".m2_top h3").css("background","url(images/yb/"+ main2[index2].img +") left -7px  no-repeat");
                $("<strong>&nbsp;"+ main2[index2].solo +"</strong>").appendTo(".m2_top");
                $("<span>"+ main2[index2].note +"&nbsp;&nbsp;&nbsp;<a href='javascript:;'>查看更多<em class='iconfont'>&#xe606;</em></a></span>").appendTo(".m2_top");
            }
            else if(main2[index2].class == "lbo1")
            {
                $("<li><img src='images/lunbo/"+ main2[index2].img +" '><div class='mation'><a href='javascript:;'>"+ main2[index2].co_name +"</a><br/><span>"+ main2[index2].nowPrice +"</span></div></li>").appendTo(".lbo1");
            }
            else if(main2[index2].class == "lbo2")
            {
                $("<li><img src='images/lunbo/"+ main2[index2].img +" '><div class='mation'><a href='javascript:;'>"+ main2[index2].co_name +"</a><br/><span>"+ main2[index2].nowPrice +"</span></div></li>").appendTo(".lbo2");
            }
            else if(main2[index2].class == "lbo3")
            {
                $("<li><img src='images/lunbo/"+ main2[index2].img +" '><div class='mation'><a href='javascript:;'>"+ main2[index2].co_name +"</a><br/><span>"+ main2[index2].nowPrice +"</span></div></li>").appendTo(".lbo3");
            }
            else if(main2[index2].class == "lbo4")
            {
                $("<li><img src='images/lunbo/"+ main2[index2].img +" '><div class='mation'><a href='javascript:;'>"+ main2[index2].co_name +"</a><br/><span>"+ main2[index2].nowPrice +"</span></div></li>").appendTo(".lbo4");
            }
        }

        //（第三专区）服饰代购
        var main3 = d.main_3;

        for(var j=0; j<main3.length; j++){
            var index3 = j;
            if(main3[index3].class == "m3_top"){
                $("<h3>"+ main3[index3].h3 +"</h3>").appendTo(".m3_top");
                $(".m3_top h3").css("background","url(images/yb/"+ main3[index3].img +") left -7px  no-repeat");
                $("<strong>&nbsp;"+ main3[index3].solo +"</strong>").appendTo(".m3_top");
                $("<span>"+ main3[index3].note +"&nbsp;&nbsp;&nbsp;<a href='javascript:;'>查看更多<em class='iconfont'>&#xe606;</em></a></span>").appendTo(".m3_top");
            }
            else if(main3[index3].class == "m3_ad"){
                $("<a href='javascript:;'><img src='images/"+ main3[index3].img +"' /></a>").appendTo(".m3_left");
        }
            else if(main3[index3].class == "m3_Com")
            {
                $("<li><span><img src='images/"+ main3[index3].img +" '></span><span><a href='javascript:;'>"+ main3[index3].co_name +"</a></span><span><em>"+ main3[index3].nowPrice +"</em><s>"+ main3[index3].oldPrice +"</s><a href='javascript:;' class='tgou01'>立即团购</a></span></li>").appendTo(".m3_right");
            }
        }

        // （第四专区）箱包配饰
        var main4 = d.main_4;

        for(var n=0; n<main4.length; n++){
            var index4 = n;
            if(main4[index4].class == "m4_top"){
                $("<h3>"+ main4[index4].h3 +"</h3>").appendTo(".m4_top");
                $(".m4_top h3").css("background","url(images/yb/"+ main4[index4].img +") left -7px  no-repeat");
                $("<strong>&nbsp;"+ main4[index4].solo +"</strong>").appendTo(".m4_top");
                $("<span>"+ main4[index4].note +"&nbsp;&nbsp;&nbsp;<a href='javascript:;'>查看更多<em class='iconfont'>&#xe606;</em></a></span>").appendTo(".m4_top");
            }
            else if(main4[index4].class == "m4_ad"){
                $("<a href='javascript:;'><img src='images/"+ main4[index4].img +"' /></a>").appendTo(".m4_right");
            }
            else if(main4[index4].class == "m4_Com")
            {
                $("<li><span><img src='images/"+ main4[index4].img +" '></span><span><a href='javascript:;'>"+ main4[index4].co_name +"</a></span><span><em>"+ main4[index4].nowPrice +"</em><s>"+ main4[index4].oldPrice +"</s><a href='javascript:;' class='tgou01'>立即团购</a></span></li>").appendTo(".m4_left");
            }
        }

        // （第五专区）化妆品专区
        var main5 = d.main_5;

        for(var m=0; m<main5.length; m++){
            var index5 = m;
            if(main5[index5].class == "m5_top"){
                $("<h3>"+ main5[index5].h3 +"</h3>").appendTo(".m5_top");
                $(".m5_top h3").css("background","url(images/yb/"+ main5[index5].img +") left -7px  no-repeat");
                $("<strong>&nbsp;"+ main5[index5].solo +"</strong>").appendTo(".m5_top");
                $("<span><a href='javascript:;' style='float:right'>查看更多<em class='iconfont'>&#xe606;</em></a>"+ main5[index5].note +"&nbsp;&nbsp;&nbsp;</span>").appendTo(".m5_top");
            }
            else if(main5[index5].class == "m5_ad"){
                $("<a href='javascript:;'><img src='images/"+ main5[index5].img +"' /></a>").appendTo(".m5_left");
            }
            else if(main5[index5].class == "m5_Com")
            {
                $("<li><span><img src='images/"+ main5[index5].img +" '></span><span><a href='javascript:;'>"+ main5[index5].co_name +"</a></span><span><em>"+ main5[index5].nowPrice +"</em><s>"+ main5[index5].oldPrice +"</s><a href='javascript:;' class='tgou01'>立即团购</a></span></li>").appendTo(".m5_right");
            }
        }

        // （第六专区）营养保健品
        var main6 = d.main_6;

        for(var o=0; o<main6.length; o++){
            var index6 = o;
            if(main6[index6].class == "m6_top"){
                $("<h3>"+ main6[index6].h3 +"</h3>").appendTo(".m6_top");
                $(".m6_top h3").css("background","url(images/yb/"+ main6[index6].img +") left -7px  no-repeat");
                $("<strong>&nbsp;"+ main6[index6].solo +"</strong>").appendTo(".m6_top");
                $("<span>"+ main6[index6].note +"&nbsp;&nbsp;&nbsp;<a href='javascript:;'>查看更多<em class='iconfont'>&#xe606;</em></a></span>").appendTo(".m6_top");
            }
            else if(main6[index6].class == "m6_ad"){
                $("<a href='javascript:;'><img src='images/"+ main6[index6].img +"' /></a>").appendTo(".m6_right");
            }
            else if(main6[index6].class == "m6_Com")
            {
                $("<li><span><img src='images/"+ main6[index6].img +" '></span><span><a href='javascript:;'>"+ main6[index6].co_name +"</a></span><span><em>"+ main6[index6].nowPrice +"</em><s>"+ main6[index6].oldPrice +"</s><a href='javascript:;' class='tgou01'>立即团购</a></span></li>").appendTo(".m6_left");
            }
        }

        // （第七专区）热门代购品牌
        var main7 = d.main_7;

        for(var c=0; c<main7.length; c++){
            var index7 = c;
            if(main7[index7].class == "m7_top"){
                $("<h3>"+ main7[index7].h3 +"</h3>").appendTo(".m7_top");
                $(".m7_top h3").css("background","url(images/yb/"+ main7[index7].img +") left -7px  no-repeat");
                $("<strong>&nbsp;"+ main7[index7].solo +"</strong>").appendTo(".m7_top");
                $("<span>"+ main7[index7].note +"&nbsp;&nbsp;&nbsp;<a href='javascript:;'>查看更多<em class='iconfont'>&#xe606;</em></a></span>").appendTo(".m7_top");
            }
            else if(main7[index7].class == "brand")
            {
                $("<li><img src='images/brand/"+ main7[index7].img +" '></li>").appendTo(".m7_content");
            }
        }


        // 第二专区，鼠标滑过事件
        $(".lbo ul li").hover(function (){
            $(this).children(".mation").stop().animate({bottom:'0px'});
        },
            function (){
            $(this).children(".mation").stop().animate({bottom:'-65px'});
        })


    })
})

// main 第二专区 轮播图
$(function(){
  
        var arr = $(".lbo ul");

        //遍历数组arr
        for (var i=0; i<arr.length; i++) {
            var obj = arr[i]; //每个图片的数据

            //创建li节点
            if (i == 0){
                $("<li class='active'>" + "</li>").appendTo(".m2_jd");
            }
            else {
                $("<li>"+ "</li>").appendTo(".m2_jd");
            }
        }
        
       //轮播
        lbo();

    //jq轮播图
    function lbo(){
        
        var lbo = $(".lbo");
        var jdian = $(".m2_jd");
        var lboul = $(".lbo ul");
        var jdli = $(".m2_jd li");

        //复制第一张图到最后
        lboul.first().clone(true).appendTo(lbo);

        var oSize = lboul.length;

        console.log(oSize);

        lbo.width(1190*(oSize+1));

        //开启定时器
        var i = 0;
        var timer = setInterval(function(){
            i++;
            move();
        }, 2000);


        function move(){

            if (i < 0) {
                lbo.css("left", -1190*oSize);
                i = oSize;
            }

            if (i >= oSize+1){
                lbo.css("left", 0);
                i = 1;
            }

            lbo.stop().animate({left:-i*1190}, 1000,"linear");

            jdli.eq(i).addClass("active").siblings().removeClass("active");
            if (i == oSize) {
                jdli.eq(0).addClass("active").siblings().removeClass("active");
            }
        }


        jdli.mouseenter(function(){
            clearInterval(timer);
            i = $(this).index();
            move();
        });
        jdli.mouseleave(function (){
            timer = setInterval(function(){
                i++;
                move();
            }, 2000);
        });
        $(".lbo").hover(function(){
                clearInterval(timer);
            },
            function(){
                timer = setInterval(function(){
                    i++;
                    move();
                }, 2000);
            })

    }





    /* $(".lbo ul li").on("mouseleave",function (){
        $(this).children(".mation").stop().animate({bottom:'-65px'});
     })*/



})



