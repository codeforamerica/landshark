$(function() {
	$('[class^=info]').hover(
		function() {
			$(this).append( $('<span class="typcn typcn-pencil">') );
		}, function() {
			$(this).find('span:last').remove();
		}
	);
});