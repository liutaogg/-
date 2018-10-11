//mouseover-top.js 鼠标滑过客户服务

define(['jquery'],function($){
	function mouseover_top(){
		$(function(){
			$('.top .a5').hover(function(){
				$(".top .a5-dropdown").css('display','block')
			},function(){
				$(".top .a5-dropdown").css('display','none')
			});

			$('.top .a5-dropdown').hover(function(){
				$(".top .a5-dropdown").css('display','block')
			},function(){
				$(".top .a5-dropdown").css('display','none')
			});
			

		})


	}
	return{
		mouseover_top: mouseover_top
	}
})
