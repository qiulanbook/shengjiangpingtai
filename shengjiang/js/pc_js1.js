/* 
* @Author: Administrator
* @Date:   2019-06-17 15:18:11
* @Last Modified by:   Administrator
* @Last Modified time: 2019-06-19 15:33:43
*/

'use strict';

$(function(){
	// 新闻动态
	$('.li1').mouseover(function(){
		$('.car3>div').hide();
		$('.in1').show();
	})
	$('.li2').mouseover(function(){
		$('.car3>div').hide();
		$('.in2').show();
	})
	$('.li3').mouseover(function(){
		$('.car3>div').hide();
		$('.in3').show();
	})
	$('.li4').mouseover(function(){
		$('.car3>div').hide();
		$('.in4').show();
	})
	// 新闻动态结束
	// 风采图集
	$('.zhh').click(function(){
		$('.zhh').removeClass('active');
		$(this).addClass('active');
		$('.btm ul').hide();
		$('.btm ul').eq($(this).index()).show();

	})














	
})

