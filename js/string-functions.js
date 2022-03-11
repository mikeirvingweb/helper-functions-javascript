/* Check an Email Address string looks to be in the correct format. Usage ValidateEmail("user@domain.com"); returns boolean */
function ValidateEmail(email) {
	var patEmail = /^[-._&0-9a-zA-Z]+[@][-._&0-9a-zA-Z]+[.][._0-9a-zA-Z]+[a-zA-Z]$/;
	return patEmail.exec(email) != null;
}

/* Return a HTML Encoded String. e.g. HTMLEncode("1 & 2"); returns '1 &amp; 2' */
function HTMLEncode(inString) {
	return $('<div/>').text(inString).html();
}

/* Decode a HTML Encoded String. e.g. HTMLDecode("1 &amp; 2"); returns '1 & 2' */
function HTMLDecode(inString) {
  return $("<textarea/>").html(inString).text();
}

/* Is a String Null or Empty? Similar to C# IsNullOrEmpty. e.g. IsNullOrEmpty(""); returns true, IsNullOrEmpty("test"); returns false */
function IsNullOrEmpty(inString) {
	return (inString == null || inString == "");
}

/* helper function used in other files. e.g. IntToTwoDigitString(1); returns '01' */
function IntToTwoDigitString(inInt) {
	var outString = inInt.toString();
	
	if(outString.length == 1)
		outString = "0" + outString;
	
	return outString;
}

/* Check if URL has the https:// or http:// prefix. If not, add the http:// prefix. Returns string. Usage MakeFullyFormedURL("github.com"); returns "http://github.com" */
function MakeFullyFormedURL(url) {
	if( !( (url.indexOf("http://") == 0) || (url.indexOf("https://") == 0) ) )
		url = "http://" + url;
		
	return url;
}
