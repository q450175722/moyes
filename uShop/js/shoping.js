/**
 * Created by Administrator on 2017/6/28.
 */


//放大镜

$(function(){

    //等比公式
    //小图width/大图width == 小区域width/大区域width
    $(".smallArea").width( $(".smallImg").width() * $(".bigArea").width() / $(".bigImg").width() );
    $(".smallArea").height( $(".smallImg").height() * $(".bigArea").height() / $(".bigImg").height() );

    //放大系数
    var scale = $(".bigImg").width() / $(".smallImg").width();

    //在小图中移动
    $(".smallImg").mousemove(function(e){
        $(".smallArea").show(); //显示小区域
        $(".bigArea").show(); //显示大区域


        var x = e.pageX - $(".smallImg").offset().left - $(".smallArea").width()/2;
        var y = e.pageY - $(".smallImg").offset().top - $(".smallArea").height()/2;

        //控制不超出左右边界
        if (x < 0){
            x = 0;
        }
        else if (x > $(".smallImg").width()-$(".smallArea").width()){
            x = $(".smallImg").width()-$(".smallArea").width();
        }
        //控制不超出上下边界
        if (y < 0){
            y = 0
        }
        else if (y > $(".smallImg").height()-$(".smallArea").height()) {
            y = $(".smallImg").height()-$(".smallArea").height();
        }

        //小区域移动
        $(".smallArea").css({left:x, top:y});

        //大图移动
        $(".bigImg").css({left: -scale*x,top: -scale*y});
    })

    //移除小图
    $(".smallImg").mouseleave(function(){
        $(".smallArea").hide(); //隐藏小区域
        $(".bigArea").hide(); //隐藏大区域
    })
})



// 轮播图
$(function(){

    //通过Ajax获取数据
/*    $.get("json/lunbo.json", function(data){
        console.log(data);
        var arr = data;

        //遍历数组arr
        for(var i = 0; i < arr.length; i++){
            var obj = arr[i]; //每个图片的数据

            //创建li节点
            $("<li><img src=" + obj.img + " /></li>").appendTo(".spec02_list");
        }

    })*/

    //jq轮播图
    var spec_lb = $(".spec02_list");

    var spec_lbli = $(".spec02_list li");

    var oSize = spec_lbli.length;
    console.log(oSize);
    spec_lb.width(77 * (oSize + 1));

    //上一页
    var i = 1;
    $("#spec02_prev").click(function(){
        i--;
        $(".spec02_list").stop().animate({left : -i * 77}, 500, "linear");
        if(i < 1){
            i = 1;
        }
    })

    //下一页
    $("#spec02_next").click(function(){
        i++;
        $(".spec02_list").stop().animate({left : -i * 77}, 500, "linear");
        if(i > oSize){
            i = oSize;
        }
    })

    spec_lbli.mouseenter(function(){
        var j = $(this).index()+1;

        $(this).eq(i).addClass("active").siblings().removeClass("active");

        $("#spec01").find(".smallImg").find("img").attr("src","images/shoping/dior_l"+ j +".jpg")
    });
})

