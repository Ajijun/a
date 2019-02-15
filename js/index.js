 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
     delay: 2000,//1秒切换一次
    },
    // 如果需要分页器
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    
   
    lazy: {
	    loadPrevNext: true,
	},
	effect : 'fade',
	  fadeEffect: {
	  crossFade: true,
	}
    
  }) 
  mySwiper.el.onmouseover = function(){
  mySwiper.autoplay.stop();
  }
  mySwiper.el.onmouseout = function(){
  mySwiper.autoplay.start();
  }
  for(i=0;i<mySwiper.pagination.bullets.length;i++){
  mySwiper.pagination.bullets[i].index=i
  mySwiper.pagination.bullets[i].onmouseover=function(){
    mySwiper.slideTo(this.index);
  };
}
  /*文字无缝轮播*/
 	$(function(){ 
var $this = $(".renav"); 
var scrollTimer; 
$this.hover(function(){ 
clearInterval(scrollTimer); 
},function(){ 
scrollTimer = setInterval(function(){ 
scrollNews( $this ); 
}, 3000 ); 
}).trigger("mouseout"); 
}); 
function scrollNews(obj){ 
var $self = obj.find("ul:first"); 
var lineHeight = $self.find("li:first").height(); 
$self.animate({ "margin-top" : -lineHeight +"px" },600 , function(){ 
$self.css({"margin-top":"0px"}).find("li:first").appendTo($self); 
}) 
} 
/*xiding*/
var xid=document.getElementById("xiding")

window.onscroll = function(){//滚动条滚动事件     每滚动一下滚动条都会触发
		var sTop = document.body.scrollTop || document.documentElement.scrollTop;
		
		
		if(sTop > 600){//滚动条滚出去的高度 》 200
			xid.style.position = "fixed";
			xid.style.top =0;
			xid.style.opacity=1;
			xid.style.zIndex=9;
			
		}else{
//			nav.style.position = "static";
			xid.style.opacity=0;
		}
		
	}
/*侧边栏*/
var w=window.innerWidth;
var h=window.innerHeight;
$("#ce").css({"height":h,"left":w-50});
/*签到送好礼隐藏显示*/
$("#qian").hover(function(){
	$(".li").toggle(100);
})
$(".ce ul li").eq(1).hover(function(){
	$(".celan p").eq(0).toggle(100);
})
$(".ce ul li").eq(2).hover(function(){
	$(".celan p").eq(1).toggle(100);
})
$(".ce ul li").eq(3).hover(function(){
	$(".celan p").eq(2).toggle(100);
})
$(".ce ul li").eq(4).hover(function(){
	$(".celan p").eq(3).toggle(100);
})
$(".ce ul li").eq(6).hover(function(){
	$(".celan p").eq(4).toggle(100);
})
$(".ce ul li").eq(7).hover(function(){
	$(".celan p").eq(5).toggle(100);
})
$(".ce ul li").eq(8).hover(function(){
	$(".celan p").eq(6).toggle(100);
})
$(".ce ul li").eq(9).hover(function(){
	$(".celan p").eq(7).toggle(100);
})
$(".ce ul li").eq(10).hover(function(){
	$(".celan p").eq(8).toggle(100);
})


