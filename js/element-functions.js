/* Programatically Blur the active browser element. Usage BlurActiveElement(); */
function BlurActiveElement() {
	$(document.activeElement).blur();
}

/* is the active element a <select>. Usage IsASelectActive(); returns boolean */
function IsASelectActive() {
	return ($(document.activeElement).length > 0 && $(document.activeElement)[0].tagName.toUpperCase() == "SELECT");
}

/* Stop the mouse wheel from being used to roll numbers up and down in <input type="number"> fields. Usage DisableMouseWheelOnNumberFields(); */
function DisableMouseWheelOnNumberFields() {
	$('body').on('focus', 'input[type=number]', function (e) {
		$(this).on('wheel.disableScroll', function (e) {
			e.preventDefault()
		})
	});
}

/* Find out if a page has changed due to user input. Usage set pageHasChanged = false; then call TrackPageChanges(); on page load */
var pageHasChanged = false;

function TrackPageChanges() {
	$('.track-changes-within :input').change(function() { 
        pageHasChanged = true; 
   }); 
}
