
$(document).ready(function(){
	if ($.cookie('cookies_enable')) {
		$("#message").css("display:","none");
    } else {
		$('#message').delay(1000).slideDown(500);
		}
});

// To hide the message but show it again on page reload
function hideMessage(){
  $('#message').delay().slideUp(500);
}

// To hide the hide the message and set the cookie so when the page is reloaded the message does not appear
function hideForever(){
  $('#message').delay().slideUp(500);
  $.cookie('cookies_enable', 'foo', { expires: 180 });
}

// Optional function to show message manually on the demo page
function showMessage(){
  $('#message').delay().slideDown(500);
}

// Delete cookie
function deleteCookie() {
  $.removeCookie('cookies_enable');
}