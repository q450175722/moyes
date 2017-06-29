$(function(){
	//header
	$(".tu2").parent().mouseenter(function(){
		$(".tu2").parent().siblings().css("display","block")
	})
	$(".tu2").parent().siblings().mouseenter(function(){
		$(".tu2").parent().siblings().css("display","block")
	})
	$(".tu2").parent().mouseleave(function(){
		$(".tu2").parent().siblings().css("display","none")
	})
	$(".tu2").parent().siblings().mouseleave(function(){
		$(".tu2").parent().siblings().css("display","none")
	})
	$(".tu4").parent().mouseenter(function(){
		console.log(1)
		$(".tu4").parent().siblings().css("display","block")
	})
	$(".tu4").parent().siblings().mouseenter(function(){
		$(".tu4").parent().siblings().css("display","block")
	})
	$(".tu4").parent().mouseleave(function(){
		$(".tu4").parent().siblings().css("display","none")
	})
	$(".tu4").parent().siblings().mouseleave(function(){
		$(".tu4").parent().siblings().css("display","none")
	})
	//nav
		$.get("json/nav.json",function(d){
			var sxsg=d.sxsg;
			var dnss=d.dnss;
			var xxls=d.xxls; 
			var lyzh=d.lyzh;
			var jsyp=d.jsyp; 

			
			for(var i=0;i<5;i++){
				$("<div></div>").appendTo(".sort2")
			}
			//生鲜水果
			for(var i=0;i<sxsg.length;i++){  
				var index=i
				$("<dl><dt>"+sxsg[index].dt+"</dt><dd></dd></dl>").appendTo($(".sort2 div").eq(0))
			}
			
			for(var i=0;i<sxsg.length;i++){
				var index1=i
				var SGarr=d.sxsg[i].dd.split(" ")
				for(var j=0;j<SGarr.length;j++){
					$("<a href=''>"+SGarr[j]+"</a>").appendTo($(".sort2 div dl dd").eq(index1))
				}
			}
			//蛋奶速食
			for(var i=0;i<dnss.length;i++){  
				var index=i
				$("<dl><dt>"+dnss[index].dt+"</dt><dd></dd></dl>").appendTo($(".sort2 div").eq(1))
			}
			for(var i=0;i<dnss.length;i++){
				var index1=i
				var DNarr=d.dnss[i].dd.split(" ")
				for(var j=0;j<DNarr.length;j++){

					$("<a href=''>"+DNarr[j]+"</a>").appendTo($(".sort2 div").eq(1).children("dl").eq(i).children("dd"))
				}
			}
			//休闲零食
			for(var i=0;i<lyzh.length;i++){  
				var index=i
				$("<dl><dt>"+lyzh[index].dt+"</dt><dd></dd></dl>").appendTo($(".sort2 div").eq(2))
			}
			for(var i=0;i<lyzh.length;i++){
				var index1=i
				var LYarr=d.lyzh[i].dd.split(" ")
				for(var j=0;j<LYarr.length;j++){
					$("<a href=''>"+LYarr[j]+"</a>").appendTo($(".sort2 div").eq(2).children("dl").eq(i).children("dd"))
				}
			}
			//粮油杂货
			for(var i=0;i<xxls.length;i++){  
				var index=i
				$("<dl><dt>"+xxls[index].dt+"</dt><dd></dd></dl>").appendTo($(".sort2 div").eq(3))
			}
			for(var i=0;i<xxls.length;i++){
				var index1=i
				var XXarr=d.xxls[i].dd.split(" ")
				for(var j=0;j<XXarr.length;j++){
					$("<a href=''>"+XXarr[j]+"</a>").appendTo($(".sort2 div").eq(3).children("dl").eq(i).children("dd"))
				}
			}
			//酒水饮品
		for(var i=0;i<jsyp.length;i++){  
				var index=i
				$("<dl><dt>"+jsyp[index].dt+"</dt><dd></dd></dl>").appendTo($(".sort2 div").eq(4))
			}
			for(var i=0;i<jsyp.length;i++){
				var index1=i
				var JSarr=d.jsyp[i].dd.split(" ")
				for(var j=0;j<JSarr.length;j++){
					$("<a href=''>"+JSarr[j]+"</a>").appendTo($(".sort2 div").eq(4).children("dl").eq(i).children("dd"))
				}
			}
		nav()
		})
		
		
		function nav(){
			for(var i=0;i<$(".sort1 li").length;i++){
			var index=i
			$(".sort1 li").eq(index).on("mouseenter",function(){
				$(".sort2").show()
				$(".sort2 div").eq($(this).index()).show().siblings().hide()
			})
			$(".sort1 li").eq(index).on("mouseleave",function(){
				$(".sort2").hide()
				$(".sort2 div").hide()
			})
			$(".sort2 div").eq(index).on("mouseenter",function(){
				$(".sort2").show()
				$(".sort2 div").eq($(this).index()).show().siblings().hide()
			})
			$(".sort2").on("mouseleave",function(){
				$(".sort2").hide()
				$(".sort2 div").hide()
			})
		}}
	
	
	
	
	
	//轮播图
	$.get("json/lunbo.json",function(d){
		var arr=d;
		for(var i=0;i<arr.length;i++){
			$("<li><img src="+arr[i].img+"/></li>").appendTo(".list1")
			$("<li><a >1</a></li>").appendTo(".list2")
			$(".list2 li").children().addClass("active1")
			}
		lunbotu()
	})
	function lunbotu(){ 
		var i=0
		
	timer=setInterval(function(){
		$(".list1 li").eq(i).animate({opacity:"show"},1000).siblings().animate({opacity:"hide"},1000)
		$(".list2 li a").removeClass("active").addClass("active1")
		$(".list2 li").eq(i).children().addClass("active").removeClass("active1")
		i++
		if(i>$(".list1 li").length-1){
			i=0
		}
	},3000)
	 $("#banner-w").on("mouseenter",function(){
	 	$(".prev").css("display","block")
	 	$(".next").css("display","block")
	 })
	 $("#banner-w").on("mouseleave",function(){
	 	$(".prev").css("display","none")
	 	$(".next").css("display","none")
	 })
	$(".prev").on("click",function(){
		i--;
		if(i>-1){
			console.log(1)
		$(".list1 li").eq(i).animate({opacity:"show"},500).siblings().animate({opacity:"hide"},1000)
		$(".list2 li a").removeClass("active").addClass("active1")
		$(".list2 li").eq(i).children().addClass("active").removeClass("active1")

		}else{
			i=3
		$(".list1 li").eq(i).animate({opacity:"show"},500).siblings().animate({opacity:"hide"},1000)
		$(".list2 li a").removeClass("active").addClass("active1")
		$(".list2 li").eq(i).children().addClass("active").removeClass("active1")

		}
	})
	$(".next").on("click",function(){
		
		i++;
		if(i<$(".list1 li").length){
		$(".list1 li").eq(i).animate({opacity:"show"},500).siblings().animate({opacity:"hide"},1000)
		$(".list2 li a").removeClass("active").addClass("active1")
		$(".list2 li").eq(i).children().addClass("active").removeClass("active1")

		}else{
			i=0
		$(".list1 li").eq(i).animate({opacity:"show"},500).siblings().animate({opacity:"hide"},1000)
		$(".list2 li a").removeClass("active").addClass("active1")
		$(".list2 li").eq(i).children().addClass("active").removeClass("active1")

		}
		})
	$(".prev,.next,.list2").on("mouseenter",function(){
		clearInterval(timer)
	})
	$(".prev,.next,.list2").on("mouseleave",function(){
		timer=setInterval(function(){
		
		$(".list1 li").eq(i).animate({opacity:"show"},1000).siblings().animate({opacity:"hide"},1000)
		$(".list2 li a").removeClass("active").addClass("active1")
		$(".list2 li").eq(i).children().addClass("active").removeClass("active1")
		i++
		if(i>$(".list1 li").length-1){
			i=0
		}
	},3000)
	})
	$(".list2").on("click","li",function(){
		console.log($(this).index())
		$(".list1 li").eq($(this).index()).animate({opacity:"show"},500).siblings().animate({opacity:"hide"},1000)
		$(".list2 li a").removeClass("active").addClass("active1")
		$(".list2 li").eq($(this).index()).children().addClass("active").removeClass("active1")
	})
	}


	//main
	$.get("json/main.json",function(d){
		//main1
		var main1=d.main1;
		for(var i=0;i<main1.length;i++){
			var index=i
			if(main1[index].name=="main1-left"){
				$("<div><img src="+ main1[index].img +" ></div>").appendTo(".main1-left")
			}else if(main1[index].name=="main1-center"){
				$("<div><img src="+ main1[index].img +" ></div>").appendTo(".main1-center")
			}else if(main1[index].name=="main1-right"){
				$("<div><img src="+ main1[index].img +" ></div>").appendTo(".main1-right")
			}
		}
		//main2
		var main2=d.main2;
		
		for(var i=0;i<main2.length;i++){
			var index2=i
			$("<img src="+main2[index2].img+">").appendTo(".main2")
		}
		//main3
		var main3=d.main3;
		
		for(var i=0;i<main3.length;i++){
			var index3=i
			$("<img src="+main3[index3].img+">").appendTo(".main3")
		}
		//main4
		var main4=d.main4;

		for(var i=0;i<main4.length;i++){
			var index4=i;
			if(main4[index4].name=="main4-top"){
 				$("<a href=''><img src="+main4[index4].img+"/>粮油杂货</a>").appendTo(".main4-top")
			}else if(main4[index4].name=="main4-bottom-left"){
				$("<img src="+main4[index4].img+"/>").appendTo(".main4b-left")
			}else if(main4[index4].name=="main4-bottom-right"){
				if(index4==4){
				var index43=$("<div><img src="+main4[index4].img+"/></div>").appendTo(".main4-bottom ul");
				}else{
				$("<li><div><img src="+main4[index4].img+"></div><br><a href=''>"+main4[index4].commodity+"</a><em>"+main4[index4].price+"</em><span>"+main4[index4].originalcost+"</span></li>").appendTo(".main4-bottom ul")
				}
			}
		}
	 //main5
		var main5=d.main5;

		for(var i=0;i<main5.length;i++){
			var index5=i;
			if(main5[index5].name=="main5-top"){
				$("<a href=''><img src="+main5[index5].img+"/>粮油杂货</a>").appendTo(".main5-top")
			}else if(main5[index5].name=="main5-bottom-left"){
				$("<img src="+main5[index5].img+"/>").appendTo(".main5b-left")
			}else if(main5[index5].name=="main5-bottom-right"){
				if(index5==4){
				var index53=$("<div><img src="+main5[index5].img+"/></div>").appendTo(".main5-bottom ul");
				}else{
				$("<li><div><img src="+main5[index5].img+"></div><br><a href=''>"+main5[index5].commodity+"</a><em>"+main5[index5].price+"</em><span>"+main5[index5].originalcost+"</span></li>").appendTo(".main5-bottom ul")
				}
			}
		}
		
		//main6
		var main6=d.main6;

		for(var i=0;i<main6.length;i++){
			var index6=i;
			if(main6[index6].name=="main6-top"){

				
				$("<a href=''><img src="+main6[index6].img+"/>粮油杂货</a>").appendTo(".main6-top")
			}else if(main6[index6].name=="main6-bottom-left"){
				$("<img src="+main6[index6].img+"/>").appendTo(".main6b-left")
			}else if(main6[index6].name=="main6-bottom-right"){
				if(index6==4){
				var index63=$("<div><img src="+main6[index6].img+"/></div>").appendTo(".main6-bottom ul");
				}else{
				$("<li><div><img src="+main6[index6].img+"></div><br><a href=''>"+main6[index6].commodity+"</a><em>"+main6[index6].price+"</em><span>"+main6[index6].originalcost+"</span></li>").appendTo(".main6-bottom ul")
				}
			}
		}
		//main7
		var main7=d.main7;

		for(var i=0;i<main7.length;i++){
			var index7=i;
			if(main7[index7].name=="main7-top"){
				$("<a href=''><img src="+main7[index7].img+"/>粮油杂货</a>").appendTo(".main7-top")
			}else if(main7[index7].name=="main7-bottom-left"){
				$("<img src="+main7[index7].img+"/>").appendTo(".main7b-left")
			}else if(main7[index7].name=="main7-bottom-right"){
				if(index7==4){
				var index73=$("<div><img src="+main7[index7].img+"/></div>").appendTo(".main7-bottom ul");
				}else{
				$("<li><div><img src="+main7[index7].img+"></div><br><a href=''>"+main7[index7].commodity+"</a><em>"+main7[index7].price+"</em><span>"+main7[index7].originalcost+"</span></li>").appendTo(".main7-bottom ul")
				}
			}
		}
		//main8
		var main8=d.main8;

		for(var i=0;i<main8.length;i++){
			var index8=i;
			if(main8[index8].name=="main8-top"){
				$("<a href=''><img src="+main8[index8].img+"/>粮油杂货</a>").appendTo(".main8-top")
			}else if(main8[index8].name=="main8-bottom-left"){
				$("<img src="+main8[index8].img+"/>").appendTo(".main8b-left")
			}else if(main8[index8].name=="main8-bottom-right"){
				if(index8==4){
				var index83=$("<div><img src="+main8[index8].img+"/></div>").appendTo(".main8-bottom ul");
				}else{
				$("<li><div><img src="+main8[index8].img+"></div><br><a href=''>"+main8[index8].commodity+"</a><em>"+main8[index8].price+"</em><span>"+main8[index8].originalcost+"</span></li>").appendTo(".main8-bottom ul")
				}
			}
		}
	})
	//左侧任务栏
	
	
	
	




})

