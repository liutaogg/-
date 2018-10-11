//实现goods数据输入
define(["jquery"], function($){
	function goods(){
		$(function(){
			$.ajax({
				url: 'data/goods.json',
				type: "GET",
				success: function(res){
					alert(res);
					var html = '';
					for(var i = 0;i < res.length;i++){
						html += `<img src="${res[i].images}" alt="" />`;
					}
					$(".goods_left .goods_left_top").html(html);
				},
				error: function(msg){
					alert(msg);
				}

			})
		})
	}
	return{
		goods: goods
	}
})