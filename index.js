const reset = "\033[0m";

const red = "\033[31m";
const yellow = "\033[33m";
const green = "\033[32m";
const cyan = "\033[36m";
const blue = "\033[34m";
const magenta = "\033[35m";
const white = "\033[37m";
const black = "\033[30m";

const bgred = "\033[41m";
const bgyellow = "\033[43m";
const bggreen = "\033[42m";
const bgcyan = "\033[46m";
const bgblue = "\033[44m";
const bgmagenta = "\033[45m";
const bgwhite = "\033[47m";
const bgblack = "\033[40m";

const bold = "\033[1m";
const italic = "\033[3m";
const underline = "\033[4m";
const strikethrough = "\033[9m";

const blink = "\033[5m";
const inverse = "\033[7m";
const hidden = "\033[8m";

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