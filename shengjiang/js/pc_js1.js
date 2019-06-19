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


	// $(function(){
 //        //需要固定的元素
 //        var title_section = $('.nav');
 //        //需要固定的元素距离顶部的大小
 //        var title_top = title_section.offset().top;
 //        $(window).scroll(function(){
 //            //如果滚动的距离大于 title_top ，则固定布局，否则取消固定
 //            if( $(window).scrollTop() > title_top ){
 //                title_section.addClass('fixed_top');
 //            }else{
 //                title_section.removeClass('fixed_top');
 //            }
 //        })
 //    })
















	
})

