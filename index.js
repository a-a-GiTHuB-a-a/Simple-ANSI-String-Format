const reset = "\x1b[0m";

const red = "\x1b[31m";
const yellow = "\x1b[33m";
const green = "\x1b[32m";
const cyan = "\x1b[36m";
const blue = "\x1b[34m";
const magenta = "\x1b[35m";
const white = "\x1b[37m";
const black = "\x1b[30m";

const bgred = "\x1b[41m";
const bgyellow = "\x1b[43m";
const bggreen = "\x1b[42m";
const bgcyan = "\x1b[46m";
const bgblue = "\x1b[44m";
const bgmagenta = "\x1b[45m";
const bgwhite = "\x1b[47m";
const bgblack = "\x1b[40m";

const bold = "\x1b[1m";
const italic = "\x1b[3m";
const underline = "\x1b[4m";
const strikethrough = "\x1b[9m";

const blink = "\x1b[5m";
const inverse = "\x1b[7m";
const hidden = "\x1b[8m";

class Format {
	static reset = reset;

	static red = red;
	static yellow = yellow;
	static green = green;
	static cyan = cyan;
	static blue = blue;
	static magenta = magenta;
	static white = white;
	static black = black;

	static bgred = bgred;
	static bgyellow = bgyellow;
	static bggreen = bggreen;
	static bgcyan = bgcyan;
	static bgblue = bgblue;
	static bgmagenta = bgmagenta;
	static bgwhite = bgwhite;
	static bgblack = bgblack;

	static bold = bold;
	static italic = italic;
	static underline = underline;
	static strikethrough = strikethrough;

	static blink = blink;
	static inverse = inverse;
	static hidden = hidden;

	constructor(value) {
		this.value = value;
	}

	get Red() {
		this.value = `${red}${this.value}${reset}`;
		return this;
	}
	get Yellow() {
		this.value = `${yellow}${this.value}${reset}`;
		return this;
	}
	get Green() {
		this.value = `${green}${this.value}${reset}`;
		return this;
	}
	get Cyan() {
		this.value = `${cyan}${this.value}${reset}`;
		return this;
	}
	get Blue() {
		this.value = `${blue}${this.value}${reset}`;
		return this;
	}
	get Magenta() {
		this.value = `${magenta}${this.value}${reset}`;
		return this;
	}
	get White() {
		this.value = `${white}${this.value}${reset}`;
		return this;
	}
	get Black() {
		this.value = `${black}${this.value}${reset}`;
		return this;
	}

	get bgRed() {
		this.value = `${bgred}${this.value}${reset}`;
		return this;
	}
	get bgYellow() {
		this.value = `${bgyellow}${this.value}${reset}`;
		return this;
	}
	get bgGreen() {
		this.value = `${bggreen}${this.value}${reset}`;
		return this;
	}
	get bgCyan() {
		this.value = `${bgcyan}${this.value}${reset}`;
		return this;
	}
	get bgBlue() {
		this.value = `${bgblue}${this.value}${reset}`;
		return this;
	}
	get bgMagenta() {
		this.value = `${bgmagenta}${this.value}${reset}`;
		return this;
	}
	get bgWhite() {
		this.value = `${bgwhite}${this.value}${reset}`;
		return this;
	}
	get bgBlack() {
		this.value = `${bgblack}${this.value}${reset}`;
		return this;
	}

	get Bold() {
		this.value = `${bold}${this.value}${reset}`;
		return this;
	}
	get Italic() {
		this.value = `${italic}${this.value}${reset}`;
		return this;
	}
	get Underline() {
		this.value = `${underline}${this.value}${reset}`;
		return this;
	}
	get Strikethrough() {
		this.value = `${strikethrough}${this.value}${reset}`;
		return this;
	}

	get Blink() {
		this.value = `${blink}${this.value}${reset}`;
		return this;
	}
	get Inverse() {
		this.value = `${inverse}${this.value}${reset}`;
		return this;
	}
	get Hidden() {
		this.value = `${hidden}${this.value}${reset}`;
		return this;
	}

	toString() {
		return this.value;
	}
}

module.exports = Format;
module.exports.default = Format;