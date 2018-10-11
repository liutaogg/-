//mouseover-1.js 鼠标滑过客户服务

define(['jquery'],function($){
	function mouseover-1(){
		$(function(){
			$('.top .a5').hover(function(){
				$(".top .a5-dropdown").style.display = 'block';
			},function(){
				$(".top .a5-dropdown").style.display = 'none';
			})
		})


	}
	return{
		mouseover-1: mouseover-1
	}
})
