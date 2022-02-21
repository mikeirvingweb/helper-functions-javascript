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