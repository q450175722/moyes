/**
 * Created by Administrator on 2017/6/24.
 */


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
    $("#lbo").hover(function(){
            clearInterval(timer);
        },
        function(){
            timer = setInterval(function(){
                i++;
                move();
            }, 2000);
        })

}