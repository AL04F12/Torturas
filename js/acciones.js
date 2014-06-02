// JavaScript Document
	var panel='<div data-role="panel" id="mipanel" data-theme="a" data-display="push"><div class="panel-content" align="center"> <h3>Menu</h3> <div data-role="controlgroup"> <a data-role="button" href="#page">Principal</a> <a data-role="button" href="#page2">Historia</a>  <a data-role="button" href="#page3">Artefactos</a> <a data-role="button" href="#page4">Acerca De...</a> </div> </div> </div>';
		
		$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
});



$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#B_Vibrar').tap(function(){
    navigator.notification.vibrate(500);
  });
 },false); //deviceready
}); //document ready

$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#B_beep').tap(function(){
    navigator.notification.beep(1);
  });
 },false); //deviceready
}); //document ready