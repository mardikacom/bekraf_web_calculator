(function(){
	'use strict';

	$(document).ready(function(){

		var keys = document.querySelectorAll('#keys button');

		for(var i = 0; i < keys.length; i++){
			
			keys[i].onclick = function(){
				onKeyClick.call(this, this);	
			}
			
		}

	});

	function onKeyClick(key){

		if(key.innerHTML == 'C'){

			$('#detail').html('');
			$('#resultValue').html('0');

		}else if(key.innerHTML == '='){

			var result = eval($('#detail').html());
			$('#detail').html(result);

		}else{

			$('#detail').html($('#detail').html() + key.innerHTML);	
			
		}

	}

})();

