/* js extend */
(function($){
/*	var defaults = {
		color:'red',
		background:'yellow',
	};
	$.fn.extend({
		"highLight":function(options){
			var opts = $.extend({},defaults,options);
			return this.each(function(){
				var _this =$(this);
				_this.css({
					background:opts.background,
					color:opts.color
				});
				var markup = _this.html();
				markup = $.fn.highLight.format(markup);
			});
		}
	});
	$.fn.highLight.format = function(str){
		return '<strong>'+str+'</strong>';
	}
	function isValid(options){
		return !options ||(options && typeof options ==='object') ? true :false;
	}
*/
	$.fn.highLight=function(options){
		var defaults={
			box:null,
			color:'red',
			background:'yellow'
		}
		var opts =$.fn.extend(defaults,options);
		var eles=$(opts.box);
		return eles.css({
			background:opts.background,
			color:opts.color
		});
/*		eles.each(function(){
			
			//var _this=$(this);
			alert(this);
			_this.css({
				background:opts.background,
				color:opts.color
			}); 
		});*/
	}
})(jQuery);