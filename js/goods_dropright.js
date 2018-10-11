//鼠标滑过商品在右侧显示
define(['jquery'],function($){
	function goods_dropright(node1,node2){
		$(function(){
			//鼠标经过下拉菜单
			$(node1).hover(function(){
				$(node2).css('display','block')
			},function(){
				$(node2).css('display','none')
			});

			//鼠标经过右侧滑出菜单
			$(node2).hover(function(){
				$(node2).css('display','block')
			},function(){
				$(node2).css('display','none')
			});
		})

	}
	return{
		goods_dropright: goods_dropright
	}

})