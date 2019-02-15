$(function(){
					
			
			var SlideVerifyPlug = window.slideVerifyPlug;
			var slideVerify2 = new SlideVerifyPlug('#verify-wrap2',{
				wrapWidth:'238',
	            initText:'请按住滑块',
	            sucessText:'验证通过',
	          
			});
			 	
		})
/*登陆隐藏显示*/
$(".bun .tu .btn").click(function(){
	$(".bun").css("display","none")
	$(".weima").css("display","block")
})
$(".weima .tu .btn1").click(function(){
	$(".weima").css("display","none")
	$(".bun").css("display","block")
})