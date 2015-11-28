/* js extend */
(function($){
	$.highLight=function(options){
		var defaults={
			box:null,
			color:'red',
			background:'yellow'
		}
		var opts=$.fn.extend(defaults,options);
		var eles=$(opts.box);
		if(!eles){alert('请输入必要信息');return;}
		return eles.css({
			background:opts.background,
			color:opts.color
		});
	}
	function gulpss(){
		console.log('a');
	}
})(jQuery);