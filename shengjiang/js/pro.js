/* 
* @Author: Administrator
* @Date:   2019-06-15 14:53:59
* @Last Modified by:   Administrator
* @Last Modified time: 2019-06-15 16:30:26
*/

'use strict';
$(function(){
	$('.con_b_l li').click(function() {
		$('.con_b_l li').removeClass('active');
		$(this).addClass('active');
		 $('.con_b_r>li').hide();
        $('.con_b_r>li').eq($(this).index()).show()
	})
})