/* simply get the name, or short name, of the month, by JavaScript month number. e.g. monthNames[0] returns 'January' but monthNamesShort[3]; returns 'Apr' */
var monthNames 		= [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
	monthNamesShort	= [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

/* get the st / nd / rd / th of a date, by Date Number. . e.g. GetDateExtension(23); returns 'rd' */
function GetDateExtension(inDateNumber) {
	if(inDateNumber == 1 || inDateNumber == 21 || inDateNumber == 31)
		return "st";
	else if(inDateNumber == 2 || inDateNumber == 22)
		return "nd";
	else if(inDateNumber == 3 || inDateNumber == 23)
		return "rd";
	else
		return "th";
}

/* get the Date Number with st / nd / rd / th appended, by Date Number. e.g. GetDateExtension(23); returns '23rd' */
function AppendDateExtension (inDateNumber) {
	return inDateNumber + GetDateExtension(inDateNumber)
}

/* check a Date is Today, ignoring any time data. e.g. DateIsToday(new Date("2000-01-01")); returns false */
function DateIsToday(inDate) {
	var nowDate = new Date();
	return inDate.getDate() == nowDate.getDate() && inDate.getMonth() == nowDate.getMonth() && inDate.getFullYear() == nowDate.getFullYear();
}

/* Day Name, optionally rounded to a given number of characters. e.g. DayName(new Date("2022-02-21")); returns 'Monday' and DayName(new Date("2022-02-21"), 3); returns 'Mon' */
function DayName(inDate, characters) {
	var outDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][inDate.getDay()];
	
	if(characters != null && !(isNaN(parseInt(characters))) )
		outDay = outDay.substring(0, parseInt(characters));
	
	return outDay;
}