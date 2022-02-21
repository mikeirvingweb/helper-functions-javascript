/* Round Time String to Nearest Hour. e.g. RoundToHour("14:23:17"); returns '14:00:00' */
function RoundToHour(inTime) { // HH:MM:SS
	var splitTime = inTime.split(':');
	
	var nHour = parseInt(splitTime[0]), nMinutes = parseInt(splitTime[1]), nSeconds = 0;
	
	if (nMinutes <= 30) {
		nMinutes = 0;
	} else {
		nMinutes = 0; //nHour++;
		
		if (nHour == 24) // don't let go over day
			nHour = 23;
	}
	
	return IntToTwoDigitString(nHour) + ":" + IntToTwoDigitString(nMinutes) + ":" + IntToTwoDigitString(nSeconds);
}

/* Round Time String to Nearest Half Hour. e.g. RoundToHour("14:23:17"); returns '14:30:00' */
function RoundToHalfHour(inTime) { // HH:MM:SS
	var splitTime = inTime.split(':');
	
	var nHour = parseInt(splitTime[0]), nMinutes = parseInt(splitTime[1]), nSeconds = 0;
	
	if(nMinutes <= 15) {
		nMinutes = 0;
	} else if(nMinutes >= 45) {
		nMinutes = 0; nHour++;
		
		if (nHour == 24) // don't let go over day
			nHour = 23;
	} else {
		nMinutes = 30;
	}
		
	return IntToTwoDigitString(nHour) + ":" + IntToTwoDigitString(nMinutes) + ":" + IntToTwoDigitString(nSeconds);
}

/* Round Time String to Nearest Quarter Hour. e.g. RoundToQuarterHour("14:18:49"); returns '14:15:00' */
function RoundToQuarterHour(inTime) { // HH:MM:SS
	var splitTime = inTime.split(':');
	
	var nHour = parseInt(splitTime[0]), nMinutes = parseInt(splitTime[1]), nSeconds = 0;
	
	if(nMinutes < 8) {
		nMinutes = 0;
	} else if( (nMinutes > 7) && (nMinutes < 23) ) {
		nMinutes = 15;
	} else if( (nMinutes > 22) && (nMinutes < 38) ) {
		nMinutes = 30;
	} else if( (nMinutes > 37) && (nMinutes < 53) ) {
		nMinutes = 45;
	} else {
		nMinutes = 0; nHour++;
		
		if (nHour == 24) // don't let go over day
			nHour = 23;
	}
		
	return IntToTwoDigitString(nHour) + ":" + IntToTwoDigitString(nMinutes) + ":" + IntToTwoDigitString(nSeconds);
}