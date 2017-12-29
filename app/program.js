var OSInfo = require("../modules/OSInfo");
var TimeConverter = require("../modules/getTimeConverter");

process.stdin.setEncoding("utf-8");
process.stdin.on("readable", function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.trim();
		switch (instruction) {
			case "/exit":
				process.stdout.write("Quitting app!\n");
				process.exit();
				break;
			case "/say hello":
				process.stdout.write("hello!\n");
				break;
			case "/getOSinfo":
				OSInfo.print();
				break;
			case "/convertSeconds":
				getTimeConverter.print();
				break;
			default:
				process.stderr.write("Wrong instruction!\n");
		}
	}
});
