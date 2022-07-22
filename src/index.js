module.exports = function toReadable(number) {
	const world = {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
	}
	let ten = '';
	let hundred = '';
	if (number == 0) {
		return 'zero';
	}
	if (number > 99) {
		hundred = `${world[(Math.floor(number / 100))]} hundred`;
		number = number % 100;
	}
	if (number < 20) {
		ten = world[number];
	}
	if (number > 20) {
		ten = `${world[(Math.floor(number / 10)) * 10]} ${world[number % 10]}`;
	}
	if (number == 20 || number == 30 || number == 40 || number == 50 || number == 60 || number == 70 || number == 80 || number == 90) {
		ten = world[number];
	}

	if (hundred) {
		if (ten) {
			return `${hundred} ${ten}`;
		} else {
			return hundred;
		}
	} else {
		return ten;
	}
}
