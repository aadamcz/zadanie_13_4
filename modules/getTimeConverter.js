function getTimeConverter() {
	var timeSeconds = require("os").uptime();

	var hours = Math.floor(timeSeconds / 3600);
	var minutes = Math.floor((timeSeconds % 3600) / 60);
	var seconds = Math.floor((timeSeconds % 3600) % 60);

	//Convert seconds to minutes:seconds

	var timeMinutes =
		"Minutes: " +
		Math.floor(timeSeconds / 60) +
		" Seconds: " +
		timeSeconds % 60;

	//Convert seconds to hours:minutes:seconds

	var timeHours =
		"Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds;

	if (timeSeconds < 3600) {
		console.log(timeMinutes);
	} else {
		console.log(timeHours);
	}
}

//getTimeConverter();

exports.print = getTimeConverter;
