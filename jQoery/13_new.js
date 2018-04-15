// $(document).ready(function(){
	/* var size = parseInt($('#names'li).css('fontSize')); */
	
	/* $('#smallButton').click(function(){});
	$('#bigButton').click(function(){}); */
	
	$('#smallButton').click(function(){
		changeSize('small');
		
	});
	$('#bigButton').click(function(){
		changeSize('big');
		
	});
	function changeSize(size){
		var currentSize = parseInt($('#names li').css('fontSize'));
		
		if(size == 'small'){
		  var newSize = currentSize - 1;	
		}else if(size == 'big'){
			var newSize = currentSize + 1;	
		}
		$('#names li').css('fontSize',newSize+'px');
		
	}
//}) 