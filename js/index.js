// 控制台输出
console.log('加载完成index');
// 配置路径
require.config({
	path:{
		"broadcast":"broadcast",
		"jquery": "jquery-1.11.3",
		" mouseover_top": " mouseover_top",
		"goods_dropright": "goods_dropright",
		"goods": "goods"
	}
});

require(['broadcast',"mouseover_top",'goods_dropright','goods'],function(broadcast,mouseover_top,goods_dropright,goods){

		//实现轮播
		broadcast.broadcast();

		//实现鼠标滑过客户服务
		mouseover_top.mouseover_top();

		//实现鼠标滑过goods
		goods_dropright.goods_dropright($('#goods_dl1'),$('#goods_dropright1'));
		goods_dropright.goods_dropright($('#goods_dl2'),$('#goods_dropright2'));
		goods_dropright.goods_dropright($('#goods_dl3'),$('#goods_dropright3'));
		goods_dropright.goods_dropright($('#goods_dl4'),$('#goods_dropright4'));
		goods_dropright.goods_dropright($('#goods_dl5'),$('#goods_dropright5'));
		goods_dropright.goods_dropright($('#goods_dl6'),$('#goods_dropright6'));
		goods_dropright.goods_dropright($('#goods_dl7'),$('#goods_dropright7'));
		goods_dropright.goods_dropright($('#goods_dl8'),$('#goods_dropright8'));


		//实现goods数据插入
		goods.goods();
	

})


