/* Detect if the browser supports touch. e.g. DeviceSupportsTouch(); returns tru / false */
function DeviceSupportsTouch() {
	var touchScreen = ('ontouchstart' in window || navigator.msMaxTouchPoints);
	
	return !(touchScreen == undefined || touchScreen == false);
}

/* Get the Vertical Scroll Position of the browser. e.g. GetBrowserScrollTop() returns int */
function GetBrowserScrollTop() {
	return parseInt((document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop);
}

/* Is the Browser Internet Explorer? e.g. IsTheBrowserIE(); returns boolean */
function IsTheBrowserInternetExplorer() {
	return ( (navigator.appVersion.toUpperCase().indexOf("MSIE") > -1) || (navigator.appVersion.toUpperCase().indexOf("TRIDENT") > -1) );
}

/* Find out if the browser is Firefox. Usage IsBrowserFirefox(); returns boolean */
function IsBrowserFirefox() {
	return (navigator.userAgent.toLowerCase().indexOf('firefox') > -1);
}

/* Find out if the browser is the 'classic' version of Edge, e.g. from before the change to Chromium. Usage IsBrowserEdgeClassic(); returns boolean */
function IsBrowserEdgeClassic() {
	return (navigator.userAgent.indexOf("Edge") > -1);
}

/* Find out if the browser is Safari. Usage IsBrowserSafari(); returns boolean */
function IsBrowserSafari() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

/* Find out if the system is macOS. Usage IsMacOS(); returns boolean */
function IsMacOS() {
	return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
}
